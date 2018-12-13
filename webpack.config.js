const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const parts = require("./webpack.parts");

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo",
      }),
    ],
  },
]);

const productionConfig = merge([]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};

// module.exports = {
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "Webpack demo",
//     }),
//   ],
// };

// module.exports = {
//   devServer: {
//     overlay: true,
//         // Parse host and port from env to allow customization.
//       //
//       // If you use Docker, Vagrant or Cloud9, set
//       // host: options.host || "0.0.0.0";
//       //
//       // 0.0.0.0 is available to all network devices
//       // unlike default `localhost`.
//     stats: "errors-only",
//     host: process.env.HOST,
//     port: process.env.PORT,
//     open: true, // open the page in browser
//   },

// }

