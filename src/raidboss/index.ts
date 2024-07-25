import type { RaidbossOptions } from "cactbot/ui/raidboss/raidboss_options";

import triggers from "./data";

declare const Options: RaidbossOptions;

// You can make some changes to the default options here.
// For example, set nicknames for some players.
// Options.PlayerNicks = {
//   'Captain Jimmy': 'Jimmy',
//   'Pipira Pira': 'Fish',
// };
// All types of options are defined in
// https://github.com/OverlayPlugin/cactbot/blob/main/ui/raidboss/raidboss_options.ts
// Or you can check the example config file in
// https://github.com/OverlayPlugin/cactbot/blob/main/user/raidboss-example.js

// Add triggers in `data/` recursively.
// NOTE: You SHOULD NOT change these lines, or it may cause unexpected errors.
Options.Triggers.push(...triggers);

export {};
