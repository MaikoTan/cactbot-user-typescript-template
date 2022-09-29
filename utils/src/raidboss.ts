import ZoneId from 'cactbot/resources/zone_id'
import NetRegexes from 'cactbot/resources/netregexes';

import type { RaidbossData } from 'cactbot/types/data';
import type { TriggerSet } from 'cactbot/types/trigger';

export {
  NetRegexes,
  ZoneId,
}

export function defineTriggerSet<Data extends RaidbossData>(set: TriggerSet<Data>): TriggerSet<Data> {
  return set
}
