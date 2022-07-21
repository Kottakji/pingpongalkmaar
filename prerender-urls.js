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
        edge.body = fs
          .readFileSync(join("content", folder, language, edge.id), "utf-8")
          .replace(/---(.*\n)*---/, "");
        return edge;
      });
  } catch (e) {
    return [];
  }
};

module.exports = () => {
  return [
    {
      url: "/",
      language: "nl",
      info: info,
      edges: getEdges(info, "nl", "home"),
      slideshow: getEdges(info, "nl", "slideshow"),
      membership: getEdges(info, "nl", "membership"),
      paytoplay: getEdges(info, "nl", "paytoplay"),
      schedule: getEdges(info, "nl", "schedule"),
      downloads: getEdges(info, "nl", "downloads"),
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
