const { generateFileList } = require("./src/crawler");
const { join } = require("path");
const fs = require("fs");

const info = generateFileList(join(__dirname, "content"));
const getEdges = (info, language, folder) => {
  try {
    return info.nodes
      .find(({ id }) => id === folder)
      .nodes.find(({ id }) => id === language)
      .edges.map((edge) => {
        // Append details from base language (NL)
        const original = info.nodes
          .find(({ id }) => id === folder)
          .nodes.find(({ id }) => id === "nl")
          .edges.find(({ id }) => id === edge.id);
        edge.details = { ...original.details, ...edge.details };

        edge.body = fs
          .readFileSync(join("content", folder, language, edge.id), "utf-8")
          .replace(/---(.*\n)*---/, "");
        return edge;
      });
  } catch (e) {
    return [];
  }
};

const getRoute = (url, language, name) => {
  return {
    url: url,
    language: language,
    info: info,
    edges: getEdges(info, language, name),
    slideshow: getEdges(info, language, "slideshow"),
    membership: getEdges(info, language, "membership"),
    paytoplay: getEdges(info, language, "paytoplay"),
    schedule: getEdges(info, language, "schedule"),
    downloads: getEdges(info, language, "downloads"),
  };
};

module.exports = () => {
  let routes = [];
  routes.push(getRoute("/", "nl", "home"));

  ["nl", "en"].map((language) => {
    routes.push(getRoute(`/${language}`, language, "home"));
    routes.push(getRoute(`/${language}/lets-play`, language, "lets_play"));
    routes.push(
      getRoute(`/${language}/help-us-grow`, language, "help_us_grow")
    );
    routes.push(getRoute(`/${language}/schools`, language, "schools"));
    routes.push(getRoute(`/${language}/about-us`, language, "about_us"));
  });

  return routes;
};
