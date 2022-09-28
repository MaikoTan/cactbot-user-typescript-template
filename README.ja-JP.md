# Cactbot User Template

[English](README.md) | [简体中文](README.zh-CN.md) | 日本語

当プロジェクトは、Cactbot に自作トリガーやタイムラインを使うや、ユーザー設定をカスタマイズするために使用されるテンプレートです。Cactbot のユーザーディレクトリ機能に基づいて、そのカスタマイズ範囲や可能性を広がれるようにする。

## 使用方法

1. [Node.js](https://nodejs.org/ja/download/) をインストールしてください。推奨版がおすすめです。*インストール済みの場合は無視してください。*
1. [Git](https://git-scm.com/download) をインストールしてください。*インストール済みの場合は無視してください。*
1. `Use This Template` をクリックして、新たなレポジトリを作成してください。
1. `git clone <あなたのGitHubアカウント名>/<レポジトリ名>.git` を実行して、レポジトリの内容をローカルへダウンロードしてください。
1. `git submodule update --init` を実行して、サブモジュール(cactbot)をダウンロードしてください。
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
- `timelineFile`と`overrideTimelineFile`を用いてタイムラインをカスタマイズする場合は、`import`文や`require`関数を用いてタイムラインファイルを指定してください。[例](./src/raidboss/data/test.ts)

## TypeScript サポート

本プロジェクトには TypeScript のサポートが組み込まれています。

## 関連項目

- [quisquous/cactbot](https://github.com/quisquous/cactbot)
- [quisquous/cactbot-user](https://github.com/quisquous/cactbot-user)

## バグ報告や改善要望

- 本プロジェクトに関するバグ報告は、[issue](https://github.com/MaikoTan/cactbot-user-template/issues) で提出してください。

  - Cactbot 自体に関する報告は [Cactbot のレポジトリに issue を提出してください](https://github.com/quisquous/cactbot/issues)。

- 本プロジェクトに関する改善案は是非とも [pull request](https://github.com/MaikoTan/cactbot-user-template/pulls) で提出してください！

## ライセンス

- 本プロジェクトは [MIT License](LICENSE) の下で配布されています。
