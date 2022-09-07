import { GameObject } from "@eva/eva.js";
import { Sprite } from "@eva/plugin-renderer-sprite";
import { Physics, PhysicsType } from "@eva/plugin-matterjs";

import BarMove from "../component/barMove";
import BarNext from "../component/barNext";

import store from "./../store";

const randomNum = (iMin = 0, iMax = 10) => {
  return Math.floor(Math.random() * (iMax - iMin + 1) + iMin);
};

export default () => {
  const gapTop = randomNum(100, 300); // 随机长度
  const gapBottom = randomNum(100, 300);

  const topH = 800 - gapTop;
  const bottomH = 800 - gapBottom;

  const top = createBar("bar_r.png", 815, topH / 4, 130, topH);
  const bottom = createBar("bar.png", 815, 960 - bottomH / 4, 130, bottomH);

  store.game.scene.addChild(top.bar);
  store.game.scene.addChild(bottom.bar);

  return { top, bottom };
};

const createBar = (distance: any, x: any, y: any, cWidth: any, cHeigt: any) => {
  const bar = new GameObject("bar", {
    size: { width: cWidth, height: cHeigt },
    origin: {
      x: 0.5,
      y: 0.5,
    },
    position: {
      x: x,
      y: y,
    },
    scale: {
      x: 0.5,
      y: 0.5,
    },
    anchor: {
      x: 0,
      y: 0,
    },
  });

  bar.addComponent(
    new Sprite({
      resource: "bar",
      spriteName: distance,
    })
  );

  let physics = bar.addComponent(
    new Physics({
      type: PhysicsType.RECTANGLE,
      bodyOptions: {
        isStatic: true,
        restitution: 0,
        frictionAir: 0,
        friction: 0,
        frictionStatic: 0,
        force: {
          x: 0,
          y: 0,
        },
        stopRotation: true,
      },
    })
  );

  bar.addComponent(new BarMove());
  bar.addComponent(new BarNext());

  return { bar, physics };
};
