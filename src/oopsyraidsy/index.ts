declare const Options: typeof OopsyRaidsyOptions;

// A set of triggers to be ignored. The key is the 'id' of the trigger, and
// the value should be true if the trigger is to be ignored, whereas false
// will have no effect.  The trigger ids can be found in the trigger files for
// each fight in the files inside of this directory:
// https://github.com/quisquous/cactbot/tree/main/ui/oopsyraidsy/data/
Options.DisabledTriggers = {
  'General Rabbit Medium': true,
  'General Early Pull': true,
  'Test Bootshine': true,
};

// A set of nicknames to use for players.  By default, first names are used to
// make the mistake lines shorter.  If a player's name appears in this map,
// their nickname will be used instead of their first name.
Options.PlayerNicks = {
  'Darkest Edgelord': 'Mary',
  'Captain Jimmy': 'Jimmy',
  'Pipira Pira': '&#x1F41F;',
};

export {};
