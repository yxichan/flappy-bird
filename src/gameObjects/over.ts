import { GameObject } from "@eva/eva.js";
import { Sprite } from "@eva/plugin-renderer-sprite";
import { Event } from "@eva/plugin-renderer-event";

import store from "./../store";

export default () => {
  const overBox = new GameObject("overBox", {
    size: { width: 320, height: 80 },
    position: {
      x: 128,
      y: 500,
    },
  });

  const overTitle = new GameObject("overTitle", {
    size: { width: 483, height: 101 },
    position: {
      x: 0,
      y: 0,
    },
  });
  overTitle.addComponent(
    new Sprite({
      resource: "over",
      spriteName: "game_over.png",
    })
  );

  const play = new GameObject("gameOverPlay", {
    size: { width: 126, height: 86 },
    position: {
      x: 187,
      y: 188,
    },
  });

  play.addComponent(
    new Sprite({
      resource: "over",
      spriteName: "play.png",
    })
  );

  const evt = play.addComponent(new Event());

  evt.on("tap", () => {
    store.game.emit("ready");
  });

  overBox.addChild(play);
  overBox.addChild(overTitle);

  store.game.scene.addChild(overBox);

  return { overBox };
};
