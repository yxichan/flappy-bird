import { Component, GameObject } from "@eva/eva.js";
import { TilingSprite } from "@eva/plugin-renderer-tiling-sprite";

import store from "./../store";

class BackgroundMove extends Component {
  gameObject: GameObject;
  tilePositionX: number;
  static componentName: "BackgroundMove";
  init(tilePositionX: number) {
    this.tilePositionX = tilePositionX;
  }
  update(): void {
    if (store.status === "playing") {
      this.gameObject.getComponent(TilingSprite).tilePosition.x -=
        this.tilePositionX;
    }
  }
}

export default BackgroundMove;
