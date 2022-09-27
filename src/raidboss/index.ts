declare const Options: typeof RaidbossOptions;

// You can make some changes to the default options here.
// For example, set nicknames for some players.
// Options.PlayerNicks = {
//   'Captain Jimmy': 'Jimmy',
//   'Pipira Pira': 'Fish',
// };
// All types of options are defined in
// https://github.com/quisquous/cactbot/blob/main/ui/raidboss/raidboss_options.ts
// Or you can check the example config file in
// https://github.com/quisquous/cactbot/blob/main/user/raidboss-example.js

// Add triggers in `data/` recursively.
// NOTE: You SHOULD NOT change these lines, or it may cause unexpected errors.
const context = require.context('./data', true, /.*\.(ts|js|tsx)$/);
context.keys().forEach((key) => {
  const triggerFile = context(key);
  Options.Triggers.push(triggerFile.default);
});

export {};
