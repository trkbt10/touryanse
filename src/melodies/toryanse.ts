import type { MelodyDefinition } from "./types.ts";

/**
 * 通りゃんせ（とおりゃんせ）
 *
 * 日本の伝統的な童謡。かつて視覚障害者用信号機で広く使用されていた。
 * 現在は「ピヨ/カッコー」系の鳴き交わし方式への移行が進んでいる。
 */
export const toryanse: MelodyDefinition = {
  id: "toryanse",
  name: "通りゃんせ",
  description: "日本の伝統的な童謡。信号機メロディの定番。",
  beatDuration: 0.3, // 1拍 = 300ms（ゆったり）

  notes: [
    // とおりゃんせ (1)
    { note: "G4", beat: 0, duration: 1 },
    { note: "G4", beat: 1, duration: 1 },
    { note: "A4", beat: 2, duration: 1 },
    { note: "G4", beat: 3, duration: 0.5 },
    { note: "E4", beat: 3.5, duration: 1.5 },
    // とおりゃんせ (2)
    { note: "G4", beat: 5, duration: 1 },
    { note: "G4", beat: 6, duration: 1 },
    { note: "A4", beat: 7, duration: 1 },
    { note: "G4", beat: 8, duration: 0.5 },
    { note: "E4", beat: 8.5, duration: 1.5 },
    // ここはどこの
    { note: "G4", beat: 10, duration: 1 },
    { note: "A4", beat: 11, duration: 1 },
    { note: "B4", beat: 12, duration: 1 },
    { note: "B4", beat: 13, duration: 0.5 },
    { note: "B4", beat: 13.5, duration: 0.5 },
    // ほそみちじゃ
    { note: "A4", beat: 15, duration: 1 },
    { note: "B4", beat: 16, duration: 1 },
    { note: "C5", beat: 17, duration: 0.5 },
    { note: "B4", beat: 17.5, duration: 0.5 },
    { note: "A4", beat: 18, duration: 0.5 },
    { note: "G4", beat: 18.5, duration: 1.5 },
    // てんじんさまの
    { note: "G4", beat: 21, duration: 0.5 },
    { note: "A4", beat: 21.5, duration: 0.5 },
    { note: "B4", beat: 22, duration: 1 },
    { note: "B4", beat: 23, duration: 0.5 },
    { note: "B4", beat: 23.5, duration: 0.5 },
    { note: "B4", beat: 24, duration: 0.5 },
    { note: "B4", beat: 24.5, duration: 0.5 },
    // ほそみちじゃ
    { note: "A4", beat: 27, duration: 1 },
    { note: "B4", beat: 28, duration: 1 },
    { note: "C5", beat: 29, duration: 0.5 },
    { note: "B4", beat: 29.5, duration: 0.5 },
    { note: "A4", beat: 30, duration: 0.5 },
    { note: "G4", beat: 30.5, duration: 1.5 },
    // ちっととおして
    { note: "D5", beat: 33, duration: 1 },
    { note: "D5", beat: 34, duration: 0.5 },
    { note: "B4", beat: 34.5, duration: 0.5 },
    { note: "D5", beat: 35, duration: 1 },
    { note: "D5", beat: 36, duration: 0.5 },
    { note: "B4", beat: 36.5, duration: 0.5 },
    // くだしゃんせ
    { note: "A4", beat: 39, duration: 1 },
    { note: "G4", beat: 40, duration: 1 },
    { note: "A4", beat: 41, duration: 1 },
    { note: "G4", beat: 42, duration: 0.5 },
    { note: "E4", beat: 42.5, duration: 1.5 },
    // ごようのないもの
    { note: "D5", beat: 45, duration: 1 },
    { note: "D5", beat: 46, duration: 0.5 },
    { note: "B4", beat: 46.5, duration: 0.5 },
    { note: "D5", beat: 47, duration: 1 },
    { note: "D5", beat: 48, duration: 0.5 },
    { note: "B4", beat: 48.5, duration: 0.5 },
    // とおしゃせぬ
    { note: "A4", beat: 51, duration: 1 },
    { note: "G4", beat: 52, duration: 1 },
    { note: "A4", beat: 53, duration: 1 },
    { note: "G4", beat: 54, duration: 0.5 },
    { note: "E4", beat: 54.5, duration: 1.5 },
    // このこのななつの
    { note: "E5", beat: 57, duration: 1 },
    { note: "E5", beat: 58, duration: 0.5 },
    { note: "D5", beat: 58.5, duration: 0.5 },
    { note: "E5", beat: 59, duration: 1 },
    { note: "E5", beat: 60, duration: 0.5 },
    { note: "D5", beat: 60.5, duration: 0.5 },
    // おいわいに
    { note: "B4", beat: 63, duration: 1 },
    { note: "D5", beat: 64, duration: 1 },
    { note: "B4", beat: 65, duration: 0.5 },
    { note: "A4", beat: 65.5, duration: 0.5 },
    { note: "G4", beat: 66, duration: 2 },
    // おふだをおさめに
    { note: "E5", beat: 69, duration: 1 },
    { note: "E5", beat: 70, duration: 0.5 },
    { note: "D5", beat: 70.5, duration: 0.5 },
    { note: "E5", beat: 71, duration: 1 },
    { note: "E5", beat: 72, duration: 0.5 },
    { note: "D5", beat: 72.5, duration: 0.5 },
    // まいります
    { note: "B4", beat: 75, duration: 1 },
    { note: "D5", beat: 76, duration: 1 },
    { note: "B4", beat: 77, duration: 0.5 },
    { note: "A4", beat: 77.5, duration: 0.5 },
    { note: "G4", beat: 78, duration: 2 },
    // いきはよいよい
    { note: "G4", beat: 81, duration: 1 },
    { note: "A4", beat: 82, duration: 1 },
    { note: "B4", beat: 83, duration: 1 },
    { note: "D5", beat: 84, duration: 1 },
    { note: "B4", beat: 85, duration: 1 },
    // かえりはこわい
    { note: "A4", beat: 87, duration: 1 },
    { note: "B4", beat: 88, duration: 1 },
    { note: "A4", beat: 89, duration: 1 },
    { note: "G4", beat: 90, duration: 0.5 },
    { note: "E4", beat: 90.5, duration: 1.5 },
    // こわいながらも
    { note: "G4", beat: 93, duration: 1 },
    { note: "A4", beat: 94, duration: 1 },
    { note: "B4", beat: 95, duration: 1 },
    { note: "D5", beat: 96, duration: 1 },
    { note: "B4", beat: 97, duration: 1 },
    // とおりゃんせ (最後1)
    { note: "A4", beat: 99, duration: 1 },
    { note: "G4", beat: 100, duration: 1 },
    { note: "A4", beat: 101, duration: 1 },
    { note: "G4", beat: 102, duration: 0.5 },
    { note: "E4", beat: 102.5, duration: 1.5 },
    // とおりゃんせ (最後2)
    { note: "G4", beat: 104, duration: 1 },
    { note: "G4", beat: 105, duration: 1 },
    { note: "A4", beat: 106, duration: 1 },
    { note: "G4", beat: 107, duration: 0.5 },
    { note: "E4", beat: 107.5, duration: 2.5 },
  ],

  lyrics: [
    { beat: 0, text: "とお りゃん せ" },
    { beat: 5, text: "とお りゃん せ" },
    { beat: 10, text: "ここは どこの" },
    { beat: 15, text: "ほそ みち じゃ" },
    { beat: 21, text: "てん じん さまの" },
    { beat: 27, text: "ほそ みち じゃ" },
    { beat: 33, text: "ちっと とおして" },
    { beat: 39, text: "くだ しゃん せ" },
    { beat: 45, text: "ごようの ないもの" },
    { beat: 51, text: "とお しゃ せぬ" },
    { beat: 57, text: "このこの ななつの" },
    { beat: 63, text: "おいわい に" },
    { beat: 69, text: "おふだを おさめに" },
    { beat: 75, text: "まい ります" },
    { beat: 81, text: "いきは よい よい" },
    { beat: 87, text: "かえりは こわい" },
    { beat: 93, text: "こわい ながらも" },
    { beat: 99, text: "とお りゃん せ" },
    { beat: 104, text: "とお りゃん せ" },
  ],
};
