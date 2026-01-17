/**
 * 信号機スピーカー（RUH-5）の音色を再現するオーディオエンジン
 *
 * RUH-5 の特徴:
 * - 周波数レンジ: 600Hz〜6,000Hz
 * - 基音が聞こえにくく、高次倍音（3/5/7/9倍）が前に出る
 * - 2.3kHz付近にホーンの共鳴がある
 */

let audioContext: AudioContext | null = null;

export function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

export interface ToneOptions {
  /** 音量 (0-1) */
  amplitude?: number;
  /** アタック時間（秒） */
  attack?: number;
  /** リリース時間（秒） */
  release?: number;
}

const DEFAULT_OPTIONS: Required<ToneOptions> = {
  amplitude: 0.15,
  attack: 0.008,
  release: 0.08,
};

/**
 * 信号機スピーカーの音色チェーンを作成
 * - 矩形波で豊富な倍音を生成
 * - 600Hzハイパスで基音を削る
 * - 2300Hz付近をブーストしてホーンの"鳴り"を再現
 * - 6kHzローパスで帯域制限
 */
function createSignalToneChain(ctx: AudioContext) {
  // オシレータ（矩形波）
  const osc = ctx.createOscillator();
  osc.type = "square";

  // ハイパスフィルタ（600Hz）- 基音を削る
  const highpass = ctx.createBiquadFilter();
  highpass.type = "highpass";
  highpass.frequency.value = 600;
  highpass.Q.value = 0.7;

  // ピーキングフィルタ（2300Hz）- ホーンの共鳴を再現
  const peaking = ctx.createBiquadFilter();
  peaking.type = "peaking";
  peaking.frequency.value = 2300;
  peaking.Q.value = 4;
  peaking.gain.value = 10;

  // ローパスフィルタ（6000Hz）- 帯域制限
  const lowpass = ctx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.value = 6000;
  lowpass.Q.value = 0.7;

  // ゲインノード（エンベロープ用）
  const gain = ctx.createGain();
  gain.gain.value = 0;

  // 接続
  osc.connect(highpass);
  highpass.connect(peaking);
  peaking.connect(lowpass);
  lowpass.connect(gain);
  gain.connect(ctx.destination);

  return { osc, gain };
}

/**
 * 「パッ」という短いエンベロープで1音を再生
 */
export function playNote(
  freq: number,
  startTime: number,
  duration: number,
  options: ToneOptions = {}
): void {
  const ctx = getAudioContext();
  const { amplitude, attack, release } = { ...DEFAULT_OPTIONS, ...options };

  const { osc, gain } = createSignalToneChain(ctx);

  osc.frequency.setValueAtTime(freq, startTime);

  // エンベロープ設定
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(amplitude, startTime + attack);
  gain.gain.setValueAtTime(amplitude, startTime + duration - release);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.start(startTime);
  osc.stop(startTime + duration + 0.05);
}

/**
 * AudioContextがsuspended状態なら再開
 */
export async function ensureAudioContextResumed(): Promise<void> {
  const ctx = getAudioContext();
  if (ctx.state === "suspended") {
    await ctx.resume();
  }
}
