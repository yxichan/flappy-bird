import { Game } from "@eva/eva.js";

interface Istore {
  game: Game;
  status: "ready" | "playing" | "over";
  score: number;
}
const store: Istore = {
  game: null, // 游戏
  status: "ready", // 游戏状态
  score: 0, // 成绩
};

export default store;
