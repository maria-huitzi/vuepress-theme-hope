import { path } from "@vuepress/utils";

import type { Plugin } from "@vuepress/core";
import type { AddThisOptions } from "../shared";

export * from "../shared";

const addThisPlugin: Plugin<AddThisOptions> = (options) => {
  if (!options.pubid) {
    console.error("[AddThis]: Please provide a pubid to let plugin work");

    return {
      name: "add-this",
    };
  }

  return {
    name: "add-this",

    define: {
      PUB_ID: options.pubid,
    },

    globalUIComponents: "AddThis",

    clientAppRootComponentFiles: path.resolve(
      __dirname,
      "../client/root-components/AddThis.js"
    ),
  };
};

export default addThisPlugin;
