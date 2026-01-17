/**
 * 音符の周波数定義（Hz）
 * A4 = 440Hz 基準の平均律
 */
export const NOTE = {
  // オクターブ 4
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.0,
  A4: 440.0,
  B4: 493.88,
  // オクターブ 5
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  F5: 698.46,
  G5: 783.99,
  A5: 880.0,
  B5: 987.77,
} as const;

export type NoteName = keyof typeof NOTE;

/**
 * 音名から周波数を取得
 */
export function getFrequency(note: NoteName): number {
  return NOTE[note];
}
