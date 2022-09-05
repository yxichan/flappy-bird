import { GameObject } from "@eva/eva.js";
import { EvaX } from "./../lib";
import { Text } from "@eva/plugin-renderer-text";

import store from "./../store";
import UpdateScore from "./../component/updateScore";

export default () => {
  const score = new GameObject("overScore", {
    size: { width: 179, height: 79 },
    position: { x: 350, y: 1200 },
    anchor: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
  });

  score.addComponent(
    new Text({
      text: "得分: 0",
      style: {
        fontFamily: "Arial",
        fontSize: 46,
        fontStyle: "italic",
        fontWeight: "bold",
        fill: "#fff",
        stroke: "#000",
        strokeThickness: 5,
        dropShadow: true,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 400,
        breakWords: true,
      },
    })
  );

  score.addComponent(new UpdateScore());

  // //注册监听会掉帧
  // 官方版本，会返回完整的store，oldstore为store的深拷贝，当store过于庞大时，深拷贝耗时过长，会出现阻塞，导致掉帧
  score.addComponent(
    new EvaX({
      events: {
        "store.score"(store: number, oldStore: number) {
          console.log("listen", store, oldStore);
          score.getComponent(UpdateScore).updateScore(store);
        },
      },
    })
  );

  store.game.scene.addChild(score);

  return { score };
};
