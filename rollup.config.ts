import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import glob from 'fast-glob'
import { defineConfig } from "rollup";

export default defineConfig({
  input: {
    jobs: "src/jobs/index.ts",
    oopsyraidsy: "src/oopsyraidsy/index.ts",
    radar: "src/radar/index.ts",
    raidboss: "src/raidboss/index.ts",
  },
  output: {
    dir: "dist",
    format: "es",
    sourcemap: true,
  },
  plugins: [typescript(), commonjs(), nodeResolve(), (function () {
    return {
      name: 'raidboss-triggers-resolver',
      resolveId(source, importer) {
        if (source === './data' && importer?.endsWith('raidboss/index.ts')) {
          return '\0virtual:raidboss-triggers';
        }
        return null;
      },
      async load(id) {
        if (id === '\0virtual:raidboss-triggers') {
          const allTriggers = await glob('src/raidboss/data/**/*.{ts,js,tsx,jsx}');
          const imports = allTriggers.map(trigger => `import trigger0 from '${trigger}';`).join('\n');
        }
        return null
    }
  })()],
});
