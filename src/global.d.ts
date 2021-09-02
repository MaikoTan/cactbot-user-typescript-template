import _Conditions from '../../cactbot/resources/conditions';
import _ContentType from '../../cactbot/resources/content_type';
import _NetRegexes from '../../cactbot/resources/netregexes';
import _Regexes from '../../cactbot/resources/regexes';
import { Responses as _Responses } from '../../cactbot/resources/responses';
import _Outputs from '../../cactbot/resources/outputs';
import _Util from '../../cactbot/resources/util';
import _ZoneId from '../../cactbot/resources/zone_id';
import _ZoneInfo from '../../cactbot/resources/zone_info';

import _JobsOptions from '../../cactbot/ui/jobs/jobs_options';
import _OopsyRaidsyOptions from '../../cactbot/ui/oopsyraidsy/oopsy_options';
import _RaidbossOptions from '../../cactbot/ui/raidboss/raidboss_options';
import { BaseOptions } from '../../cactbot/types/data';
import { HuntMap } from '../../cactbot/resources/hunt';

type LocaleTextOrArray = LocaleObject<string | string[]>;

declare global {
  // Global variables
  const Conditions: typeof _Conditions;
  const ContentType: typeof _ContentType;
  const NetRegexes: typeof _NetRegexes;
  const Regexes: typeof _Regexes;
  const Responses: typeof _Responses;
  const Outputs: typeof _Outputs;
  const Util: typeof _Util;
  const ZoneId: typeof _ZoneId;
  const ZoneInfo: typeof _ZoneInfo;
  // options of modules
  const JobsOptions: typeof _JobsOptions;
  const RaidbossOptions: typeof _RaidbossOptions;
  const OopsyRaidsyOptions: typeof _OopsyRaidsyOptions;
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
        Type?: 'mob' | 'any';
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
