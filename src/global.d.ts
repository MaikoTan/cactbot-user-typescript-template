import { HuntMap } from "cactbot/resources/hunt";
import { BaseOptions } from "cactbot/types/data";
import { LocaleObject } from "cactbot/types/trigger";

type LocaleTextOrArray = LocaleObject<string | string[]>;

declare global {
  const Conditions: typeof import("cactbot/resources/conditions").default;
  const ContentType: typeof import("cactbot/resources/content_type").default;
  const NetRegexes: typeof import("cactbot/resources/netregexes").default;
  const Regexes: typeof import("cactbot/resources/regexes").default;
  const Responses: typeof import("cactbot/resources/responses").default;
  const Outputs: typeof import("cactbot/resources/outputs").default;
  const Util: typeof import("cactbot/resources/util").default;
  const ZoneId: typeof import("cactbot/resources/zone_id").default;
  const ZoneInfo: typeof import("cactbot/resources/zone_info").default;
  // TODO: use cactbot built-in types when available
  const RadarOptions: BaseOptions & {
    BRankEnabled: boolean;
    DetectionRange: number;
    TTS: boolean;
    PopSoundAlert: boolean;
    PopVolume: number;
    Puller: boolean;
    Position: boolean;
    PopSound: string;
    RankOptions: {
      [rank: string]: {
        Type?: "mob" | "any";
        Enabled?: boolean;
        DetectionRange?: number;
        TTS?: boolean;
        PopVolume?: number;
        PopSoundAlert?: boolean;
      };
    };
    CustomMonsters: {
      [huntName: string]: {
        id?: string;
        name?: LocaleTextOrArray | string | string[];
        rank?: Rank;
        regex?: RegExp;
        hp?: number;
      };
    };
  };
}
