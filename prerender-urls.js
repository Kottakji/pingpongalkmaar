const { generateFileList } = require("./src/crawler");
const { join } = require("path");
const fs = require("fs");
const parseMD = require("parse-md").default;

const info = generateFileList(join(__dirname, "content"));
const getEdges = (info, language, folder) => {
  return info.nodes
    .find(({ id }) => id === folder)
    .nodes.find(({ id }) => id === language)
    .edges.map((edge) => {
      edge.body = fs
        .readFileSync(join("content", folder, language, edge.id), "utf-8")
        .replace(/---(.*\n)*---/, "");
      return edge;
    });
};

module.exports = () => {
  return [
    {
      url: "/",
      info: info,
      edges: getEdges(info, "nl", "home"),
      slideshow: getEdges(info, "nl", "slideshow"),
    },
    { url: "/contact/" },
    { url: "/contact/success" },
  ];
};

// // adding all blog pages
// pages.push(...blogs.edges.map(blog => {
//   const data = fs.readFileSync(join('content', 'blog', blog.id), 'utf-8').replace(/---(.*\n)*---/, '');
//   return {
//     url: `/blog/${blog.id}`,
//     seo: blog.details,
//     data: {
//       details: blog.details,
//       content: data
//     }
//   };
// }));
