import { GameObject, Component } from "@eva/eva.js";
import { Text } from "@eva/plugin-renderer-text";
// import store from "../store";

class UpdateScore extends Component {
  gameObject: GameObject;
  static componentName: "UpdateScore";
  // 若evax使用官方版本，则用update来更新分数
  // update(frame: UpdateParams): void {
  // this.gameObject.getComponent(Text).text = "得分: " + store.score;
  // }
  updateScore(score: number) {
    this.gameObject.getComponent(Text).text = "得分: " + score;
  }
}

export default UpdateScore;
