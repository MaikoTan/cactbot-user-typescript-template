import { readFile } from "node:fs/promises";

import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import glob from "fast-glob";
import { defineConfig } from "rollup";

const commonSettings = {
  external: ["cactbot", /^cactbot\/.+/],
  plugins: [
    (function () {
      return {
        name: "raidboss-triggers-resolver",
        resolveId(source, importer) {
          if (
            source === "./data" &&
            /raidboss[/\\]index.ts$/.test(importer ?? "")
          ) {
            return "\0virtual:raidboss-triggers";
          }
          return null;
        },
        async load(id) {
          if (id === "\0virtual:raidboss-triggers") {
            const allTriggers = (
              await glob(
                "src/raidboss/data/**/*.{ts,js,tsx,jsx,cjs,mjs,cts,mts}"
              )
            ).filter((trigger) => !/data[/\\]index\.ts$/.test(trigger));
            const imports = allTriggers
              .map((trigger, idx) => `import trigger${idx} from '${trigger}';`)
              .join("\n");
            const triggers = allTriggers
              .map((_, idx) => `trigger${idx}`)
              .join(", ");
            console.log(`${imports}\nexport default [${triggers}];`);
            return `${imports}\nexport default [${triggers}];`;
          } else if (/raidboss[/\\]data[/\\].+\.txt$/.test(id)) {
            const basename = id.split(/[/\\]/).pop();
            this.emitFile({
              type: "asset",
              fileName: `raidboss/${basename}`,
              source: await readFile(id, "utf-8"),
            });
            return `export default "${basename}"`;
          }
          return null;
        },
      };
    })(),
    typescript(),
    commonjs(),
    nodeResolve(),
  ],
};

export default defineConfig([
  {
    ...commonSettings,
    input: "src/jobs/index.ts",
    output: {
      dir: "dist/",
      entryFileNames: "jobs/index.js",
      format: "iife",
      sourcemap: true,
    },
  },
  {
    ...commonSettings,
    input: "src/oopsyraidsy/index.ts",
    output: {
      dir: "dist/",
      entryFileNames: "oopsyraidsy/index.js",
      format: "iife",
      sourcemap: true,
    },
  },
  {
    ...commonSettings,
    input: "src/radar/index.ts",
    output: {
      dir: "dist/",
      entryFileNames: "radar/index.js",
      format: "iife",
      sourcemap: true,
    },
  },
  {
    ...commonSettings,
    input: "src/raidboss/index.ts",
    output: {
      dir: "dist/",
      entryFileNames: "raidboss/index.js",
      format: "iife",
      sourcemap: true,
    },
  },
]);
