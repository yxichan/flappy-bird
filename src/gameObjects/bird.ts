import { GameObject } from "@eva/eva.js";
import { SpriteAnimation } from "@eva/plugin-renderer-sprite-animation";
import store from "./../store";

export default () => {
  const bird = new GameObject("bird", {
    size: { width: 88, height: 66 },
    position: {
      x: 100,
      y: 640,
    },
    anchor: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
  });
  bird.addComponent(
    new SpriteAnimation({
      resource: "bird",
      speed: 100,
    })
  );

  store.game.scene.addChild(bird);

  return { bird };
};
