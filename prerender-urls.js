const { generateFileList } = require("./src/crawler");
const { join } = require("path");
const fs = require("fs");
const parseMD = require("parse-md").default;

const info = generateFileList(join(__dirname, "content"));
module.exports = () => {
  return [
    {
      url: "/",
      info: info,
      edges: info.nodes.find(({ id }) => id === "home").edges,
      slideshow: info.nodes.find(({ id }) => id === "slideshow").edges,
    },
    { url: "/contact/" },
    { url: "/contact/success" },
  ];
};
