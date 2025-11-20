// webpack.dev.mjs
import { merge } from "webpack-merge";
import common from "./webpack.common.mjs";
import path from "path";

export default merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    static: path.resolve("dist"),
    hot: true,
    open: true,
  },
});
