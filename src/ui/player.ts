import { NOTE } from "../audio/notes.ts";
import {
  playNote,
  getAudioContext,
  ensureAudioContextResumed,
} from "../audio/signal-tone.ts";
import type { MelodyDefinition } from "../melodies/types.ts";
import { getMelodyDuration } from "../melodies/types.ts";

export interface PlayerElements {
  playBtn: HTMLButtonElement;
  melodySelect: HTMLSelectElement;
  statusEl: HTMLElement;
  lyricsEl: HTMLElement;
  redLight: HTMLElement;
  greenLight: HTMLElement;
}

export interface PlayerState {
  isPlaying: boolean;
  lyricsInterval: number | null;
}

/**
 * メロディを再生
 */
export function playMelody(melody: MelodyDefinition): {
  startTime: number;
  totalDuration: number;
} {
  const ctx = getAudioContext();
  const startTime = ctx.currentTime + 0.1;

  // 全ての音符をスケジュール
  melody.notes.forEach(({ note, beat, duration }) => {
    const freq = NOTE[note];
    const noteStart = startTime + beat * melody.beatDuration;
    const noteDur = duration * melody.beatDuration * 0.85; // 少し短めにして隙間を作る
    playNote(freq, noteStart, noteDur);
  });

  const totalDuration = getMelodyDuration(melody);

  return { startTime, totalDuration };
}

/**
 * 歌詞表示を更新
 */
export function startLyricsDisplay(
  melody: MelodyDefinition,
  startTime: number,
  lyricsEl: HTMLElement
): number | null {
  if (!melody.lyrics || melody.lyrics.length === 0) {
    return null;
  }

  let lyricIndex = 0;
  const ctx = getAudioContext();

  const intervalId = window.setInterval(() => {
    const elapsed = ctx.currentTime - startTime;
    const currentBeat = elapsed / melody.beatDuration;

    // 現在の歌詞を探す
    while (
      lyricIndex < melody.lyrics!.length - 1 &&
      melody.lyrics![lyricIndex + 1].beat <= currentBeat
    ) {
      lyricIndex++;
    }

    if (lyricIndex < melody.lyrics!.length) {
      lyricsEl.textContent = melody.lyrics![lyricIndex].text;
    }
  }, 50);

  return intervalId;
}

/**
 * プレイヤーを初期化
 */
export function initPlayer(
  elements: PlayerElements,
  melodies: MelodyDefinition[]
): void {
  const state: PlayerState = {
    isPlaying: false,
    lyricsInterval: null,
  };

  // セレクトボックスにメロディを追加
  melodies.forEach((melody) => {
    const option = document.createElement("option");
    option.value = melody.id;
    option.textContent = melody.name;
    elements.melodySelect.appendChild(option);
  });

  // 初期状態：赤信号
  elements.redLight.classList.add("active");

  // 再生ボタンのイベント
  elements.playBtn.addEventListener("click", async () => {
    if (state.isPlaying) return;

    const selectedId = elements.melodySelect.value;
    const melody = melodies.find((m) => m.id === selectedId);
    if (!melody) return;

    state.isPlaying = true;
    elements.playBtn.disabled = true;
    elements.playBtn.textContent = "再生中...";
    elements.statusEl.textContent = "";

    // 信号を青に
    elements.redLight.classList.remove("active");
    elements.greenLight.classList.add("active");

    try {
      await ensureAudioContextResumed();
      const { startTime, totalDuration } = playMelody(melody);

      // 歌詞表示開始
      state.lyricsInterval = startLyricsDisplay(
        melody,
        startTime,
        elements.lyricsEl
      );

      // 再生完了を待つ
      await new Promise((resolve) =>
        setTimeout(resolve, totalDuration * 1000 + 500)
      );
    } catch (err) {
      elements.statusEl.textContent =
        "エラー: " + (err instanceof Error ? err.message : String(err));
      console.error(err);
    }

    // 信号を赤に戻す
    elements.greenLight.classList.remove("active");
    elements.redLight.classList.add("active");

    elements.lyricsEl.textContent = "";
    elements.playBtn.disabled = false;
    elements.playBtn.textContent = "再生";
    state.isPlaying = false;

    if (state.lyricsInterval) {
      clearInterval(state.lyricsInterval);
      state.lyricsInterval = null;
    }
  });
}
