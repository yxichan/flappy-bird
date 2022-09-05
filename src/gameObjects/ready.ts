import { GameObject } from "@eva/eva.js";
import { Sprite } from "@eva/plugin-renderer-sprite";
import { Event } from "@eva/plugin-renderer-event";

import store from "./../store";

export default () => {
  const title = new GameObject("ready-title", {
    size: { width: 512, height: 144 },
    position: {
      x: 360,
      y: 340,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
  });

  title.addComponent(
    new Sprite({
      resource: "ready",
      spriteName: "ready_title.png",
    })
  );
  const tap = new GameObject("ready-taps", {
    size: { width: 294, height: 273 },
    position: {
      x: 360,
      y: 600,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
  });
  tap.addComponent(
    new Sprite({
      resource: "ready",
      spriteName: "ready_tap.png",
    })
  );
  const evt = tap.addComponent(new Event());
  evt.on("tap", () => {
    store.game.emit("start");
  });

  store.game.scene.addChild(title);
  store.game.scene.addChild(tap);

  return { title, tap };
};
