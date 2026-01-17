import type { NoteName } from "../audio/notes.ts";

/**
 * メロディ内の1音を表す
 */
export interface MelodyNote {
  /** 音名 (例: "G4", "A4") */
  note: NoteName;
  /** 開始位置（拍数） */
  beat: number;
  /** 長さ（拍数） */
  duration: number;
}

/**
 * 歌詞の1フレーズを表す
 */
export interface LyricPhrase {
  /** 開始位置（拍数） */
  beat: number;
  /** 歌詞テキスト */
  text: string;
}

/**
 * メロディ定義
 */
export interface MelodyDefinition {
  /** メロディのID */
  id: string;
  /** 表示名 */
  name: string;
  /** 説明 */
  description?: string;
  /** 1拍の長さ（秒） */
  beatDuration: number;
  /** 音符データ */
  notes: MelodyNote[];
  /** 歌詞データ（オプション） */
  lyrics?: LyricPhrase[];
}

/**
 * メロディの総再生時間を計算（秒）
 */
export function getMelodyDuration(melody: MelodyDefinition): number {
  if (melody.notes.length === 0) return 0;
  const lastNote = melody.notes[melody.notes.length - 1];
  return (lastNote.beat + lastNote.duration) * melody.beatDuration;
}
