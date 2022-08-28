const netlifyPlugin = require("preact-cli-plugin-netlify");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");

module.exports = (config, env, helpers) => {
  netlifyPlugin(config);

  const postCssLoaders = helpers.getLoadersByName(config, "postcss-loader");
  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.postcssOptions.plugins;

    // Add tailwind css at the top.
    plugins.unshift(require("tailwindcss"));
  });

  env.production &&
    !env.ssr &&
    config.plugins.push(
      new ImageminPlugin({
        from: "./build/assets/**",
        pngquant: {
          quality: "60",
        },
        plugins: [
          imageminMozjpeg({
            quality: 50,
            progressive: true,
          }),
        ],
      })
    );
  return config;
};
