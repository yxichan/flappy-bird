import { Component } from "@eva/eva.js";
import { Physics } from "@eva/plugin-matterjs";
import Matter from "matter-js";

import store from "./../store";

export default class Move extends Component {
  gameObject: any;
  static componentName = "move";
  constructor() {
    super();
  }
  update() {
    const physics = this.gameObject.getComponent(Physics);
    if (store.game && physics.body) {
      if (store.status === "playing") {
        let pushVec = Matter.Vector.create(-5, 0);
        Matter.Body.translate(physics.body, pushVec);
      }
    }
  }
}
