import { HuntMap } from "cactbot/resources/hunt";
import { BaseOptions } from "cactbot/types/data";
import { LocaleObject } from "cactbot/types/trigger";

type LocaleTextOrArray = LocaleObject<string | string[]>;

declare global {
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
