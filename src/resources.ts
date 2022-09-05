import { RESOURCE_TYPE } from "@eva/eva.js";
export default [
  {
    name: "bg", // 背景
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: "png",
        url: "./static/bg.png",
      },
    },
    preload: true,
  },
  {
    name: "ground", // 草地
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: "png",
        url: "./static/ground.png",
      },
    },
    preload: true,
  },
  {
    name: "ready", // 就绪
    type: RESOURCE_TYPE.SPRITE,
    src: {
      image: {
        type: "png",
        url: "./static/ready/ready.png",
      },
      json: {
        type: "json",
        url: "./static/ready/ready.json",
      },
    },
    preload: true,
  },
  {
    name: "bird", // 小鸟
    type: RESOURCE_TYPE.SPRITE_ANIMATION,
    src: {
      image: {
        type: "png",
        url: "./static/bird/bird.png",
      },
      json: {
        type: "json",
        url: "./static/bird/bird.json",
      },
    },
    preload: true,
  },
  {
    name: "over", // 结束
    type: RESOURCE_TYPE.SPRITE,
    src: {
      image: {
        type: "png",
        url: "./static/over/over.png",
      },
      json: {
        type: "json",
        url: "./static/over/over.json",
      },
    },
    preload: true,
  },
  {
    name: "bar", // 管道
    type: RESOURCE_TYPE.SPRITE,
    src: {
      image: {
        type: "png",
        url: "./static/bar/bar.png",
      },
      json: {
        type: "json",
        url: "./static/bar/bar.json",
      },
    },
    preload: true,
  },
];
