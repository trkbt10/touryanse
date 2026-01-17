import "./style.css";
import { melodies } from "./melodies/index.ts";
import { initPlayer, type PlayerElements } from "./ui/player.ts";

// DOM要素を取得
const elements: PlayerElements = {
  playBtn: document.getElementById("playBtn") as HTMLButtonElement,
  melodySelect: document.getElementById("melodySelect") as HTMLSelectElement,
  statusEl: document.getElementById("status") as HTMLElement,
  lyricsEl: document.getElementById("lyrics") as HTMLElement,
  redLight: document.getElementById("redLight") as HTMLElement,
  greenLight: document.getElementById("greenLight") as HTMLElement,
};

// プレイヤーを初期化
initPlayer(elements, melodies);
