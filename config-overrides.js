module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.module = {
    ...config.module,
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  };
  return config;
};
