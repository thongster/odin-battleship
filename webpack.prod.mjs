// webpack.prod.mjs
import { merge } from "webpack-merge";
import common from "./webpack.common.mjs";
import path from "path";

export default merge(common, {
  mode: "production",

  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve("dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
});
