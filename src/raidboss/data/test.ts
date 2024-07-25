import ZoneId from "cactbot/resources/zone_id";

import type { RaidbossData } from "cactbot/types/data";
import type { TriggerSet } from "cactbot/types/trigger";

import timeline from "./test.txt";

const triggerSet: TriggerSet<RaidbossData> = {
  id: "test",
  zoneId: ZoneId.MiddleLaNoscea,
  timelineFile: timeline,
  overrideTimelineFile: true,
  triggers: [
    {
      id: "User Custom Test",
      type: "GameLog",
      netRegex: { line: "test user", capture: false },
      infoText: {
        en: "User Custom Test",
        de: "Benutzerdefinierte Test",
        fr: "Test de l'utilisateur",
        ja: "ユーザー定義テスト",
        cn: "用户自定义测试",
        ko: "사용자 정의 테스트",
      },
    },
  ],
  timelineReplace: [
    {
      locale: "de",
      missingTranslations: true,
      replaceSync: {
        "You bid farewell to the striking dummy":
          "Du winkst der Trainingspuppe zum Abschied zu",
        "You bow courteously to the striking dummy":
          "Du verbeugst dich hochachtungsvoll vor der Trainingspuppe",
      },
      replaceText: {
        "If you see this": "Wenn Sie dies sehen",
        "you have overridden": "Sie haben überschrieben",
        "the test timeline": "die Testzeit",
        "with test.js": "mit test.js",
      },
    },
    {
      locale: "fr",
      missingTranslations: true,
      replaceSync: {
        "You bid farewell to the striking dummy":
          "Vous faites vos adieux au mannequin d'entraînement",
        "You bow courteously to the striking dummy":
          "Vous vous inclinez devant le mannequin d'entraînement",
      },
      replaceText: {
        "If you see this": "Si vous voyez ceci",
        "you have overridden": "Vous avez couvert",
        "the test timeline": "la timeline de test",
        "with test.js": "avec test.js",
      },
    },
    {
      locale: "ja",
      missingTranslations: true,
      replaceSync: {
        "You bid farewell to the striking dummy": ".*は木人に別れの挨拶をした",
        "You bow courteously to the striking dummy": ".*は木人にお辞儀した",
      },
      replaceText: {
        "If you see this": "おめでとう！",
        "you have overridden": "テストタイムラインを",
        "the test timeline": "test.jsで上書きする",
        "with test.js": "ことができました！",
      },
    },
    {
      locale: "cn",
      missingTranslations: true,
      replaceSync: {
        "You bid farewell to the striking dummy": ".*向木人告别",
        "You bow courteously to the striking dummy": ".*恭敬地对木人行礼",
      },
      replaceText: {
        "If you see this": "当你看到此处",
        "you have overridden": "证明你已经成功地",
        "the test timeline": "使用test.js",
        "with test.js": "覆盖了时间轴",
      },
    },
    {
      locale: "ko",
      missingTranslations: true,
      replaceSync: {
        "You bid farewell to the striking dummy":
          ".*나무인형에게 작별 인사를 합니다",
        "You bow courteously to the striking dummy":
          ".*나무인형에게 공손하게 인사합니다",
      },
      replaceText: {
        "If you see this": "이것을 보는 사람은",
        "you have overridden": "시간범위를",
        "the test timeline": "test.js를 사용하여",
        "with test.js": "성공적으로 적용되었습니다",
      },
    },
  ],
};

export default triggerSet;
