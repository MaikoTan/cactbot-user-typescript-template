declare const Options: typeof RadarOptions;

// You can add your own monster list here.
Options.CustomMonsters = {
  Any: {
    name: {
      // monster names
      en: 'ya-te-veo',
      cn: '食人花',
      ja: 'ヤテベオ',
    },
    hp: 1000, // minimum hp of the monster
    rank: 'Custom', // rank
  },
};

// You can also add different options to different ranks.
Options.RankOptions = {
  S: {
    DetectionRange: 100,
    TTS: true,
    Type: 'mob', // can be 'mob' or 'any'
    Enabled: true,
  },
  Custom: {
    DetectionRange: 500,
    TTS: false,
    PopSoundAlert: true,
    Type: 'any',
    Enabled: true,
  },
};

export {};
