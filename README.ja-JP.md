# Cactbot User Template

[English](README.md) | [简体中文](README.zh-CN.md) | 日本語

当プロジェクトは、Cactbot に自作トリガーやタイムラインを使うや、ユーザー設定をカスタマイズするために使用されるテンプレートです。Cactbot のユーザーディレクトリ機能に基づいて、そのカスタマイズ範囲や可能性を広がれるようにする。

## 使用方法

1. [Node.js](https://nodejs.org/ja/download/) をインストールしてください。推奨版がおすすめです。*インストール済みの場合は無視してください。*
1. [Git](https://git-scm.com/download) をインストールしてください。*インストール済みの場合は無視してください。*
1. `Use This Template` をクリックして、新たなレポジトリを作成してください。
1. `git clone <あなたのGitHubアカウント名>/<レポジトリ名>.git` を実行して、レポジトリの内容をローカルへダウンロードしてください。
1. `cd <レポジトリ名>` を実行して、ローカルのディレクトリを移動してください。
1. yarn がインストールされていなかった場合は、まず `npm install -g yarn` を実行して、yarn をインストールしてください。
1. `yarn install` を実行して、プロジェクトに必要なパッケージをインストールしてください。
1. `yarn run build` を実行して、ビルドしてください。コード全てが `dist` ディレクトリに出力されます。
1. ACT を起動して、`OverlayPlugin > Cactbot > ユーザーディレクトリ` を選択して、そのパスを `dist` ディレクトリに設定してください。
1. プロジェクトが正常にビルドされ、加えて Cactbot に正常にロードされるかどうかを確認してください。
    - サマーフォード庄へテレポートしてください。
    - 木人に**お辞儀する**、またはカウントダウンを実行して、テストタイムラインが正しく表示されるかどうかを確認してください。
    - チャット欄に `/e test user` を入力して、文字やTTSが正しく表示されるかどうかを確認してください。

## Cactbotとの違い

  - モジュールのエントリー全ては `src/<モジュール名>/index.js` となります。

### Raidboss モジュール

  - 全てのトリガーやタイムラインファイルは `data` ディレクトリに格納されます。
  - 全てのトリガーは `export default { ... }`の形でエクスポートされます。
  - カスタムタイムラインをロードするには、`timelineFile` と `overrideTimelineFile` が使えませんので、`timeline: require(タイムラインファイルパス)` でロードしてください。

## TypeScript サポート

本プロジェクトには TypeScript のサポートが組み込まれていますが、Cactbot のソースコードの一部をプロジェクトにインポートする必要があります。

以下のように、`git-submodule` を使用して、Cactbot をプロジェクトにインポートする。

- Cactbot のソースコードを GitHub からをダウンロードする。

  ```bash
  $ git submodule add https://github.com/quisquous/cactbot.git cactbot
  ```

- `webpack.config.js` に Cactbot へのパスを追加する。

  ```js
  externals: {
    "@": path.resolve(__dirname, 'cactbot'),
    "Options": "Options",
  }
  ```
- `tsconfig.json` に Cactbot へのパスを追加する。

  ```jsonc
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@": "./cactbot",
    },
    // ...
  }
  ```

- Cactbot の型定義に楽しめよう！

  ```typescript
  import { Job } from "@/types/job";
  import Util from '@/resources/util';
  import ZoneId from '@/resources/zone_id';
  import { RaidbossData } from '@/types/data';
  import { TriggerSet } from '@/types/trigger';

  export interface Data extends RaidbossData {
    // ...
  }

  const triggerSet: TriggerSet<Data> = {
    zoneId: ZoneId.MiddleLaNoscea,
    triggers: [
      // triggers ...
    ],
    // ...
  };

  export default triggerSet;
  ```

- `Options` の型定義は `@/<モジュール名>/<モジュール名>_options.ts` に記述されており、直接参照することができます。

  ```typescript
  import Options from '@/raidboss/raidboss_options';
  ```

## 関連項目

  - [quisquous/cactbot](https://github.com/quisquous/cactbot)
  - [quisquous/cactbot-user](https://github.com/quisquous/cactbot-user)

## バグ報告や改善要望

  - 本プロジェクトに関するバグ報告は、[issue](https://github.com/MaikoTan/cactbot-user-template/issues) で提出してください。

      - Cactbot 自体に関する報告は [Cactbot のレポジトリに issue を提出してください](https://github.com/quisquous/cactbot/issues)。

  - 本プロジェクトに関する改善案は是非とも [pull request](https://github.com/MaikoTan/cactbot-user-template/pulls) で提出してください！

## ライセンス

  - 本プロジェクトは [MIT License](LICENSE) の下で配布されています。