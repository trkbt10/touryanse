/**
 * メロディレジストリ
 *
 * 新しいメロディを追加するには:
 * 1. src/melodies/ に新しいファイルを作成（例: yuuyake.ts）
 * 2. MelodyDefinition 形式でメロディを定義
 * 3. このファイルで import して melodies 配列に追加
 */

import type { MelodyDefinition } from "./types.ts";
import { toryanse } from "./toryanse.ts";

// 利用可能なすべてのメロディ
export const melodies: MelodyDefinition[] = [toryanse];

/**
 * IDでメロディを取得
 */
export function getMelodyById(id: string): MelodyDefinition | undefined {
  return melodies.find((m) => m.id === id);
}

// 型とユーティリティを再エクスポート
export type { MelodyDefinition, MelodyNote, LyricPhrase } from "./types.ts";
export { getMelodyDuration } from "./types.ts";
