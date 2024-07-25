# Cactbot User Template

[English](README.md) | 简体中文  | [日本語](README.ja-JP.md)

该项目是一个用于创建 Cactbot 自定义触发器/时间轴或自定义用户配置的模板项目，以 Cactbot 的用户文件夹覆盖的功能为基础扩展了其自定义范围和可能性。

**提示** 由于该项目使用了 webpack 将所有配置文件打包为以对应的模块名为文件名的 js 文件，因此即便使用 CafeACT 等不支持子文件夹的版本也可以正常使用。

## 使用说明

1. 下载 [Node.js](https://nodejs.org/zh-cn/download/) 并安装，一般情况下选择 windows 安装包即可。*若您已经安装，请跳过此步骤。*
1. 下载 [Git](https://git-scm.com/download/win) 并安装。*若您已经安装，请跳过此步骤。*
1. 点击 `Use This Template` 按钮，在您的账户下建立一个新项目。
1. 运行 `git clone <您的GitHub账户名>/<您的项目名>.git` 命令将本项目克隆到本地。
1. 运行 `cd <您的项目名>` 命令进入项目目录。
1. 如果你还没有安装 yarn，请先安装它：`npm install -g yarn`。
1. 运行 `yarn install` 以安装项目所需的依赖。
1. 运行 `yarn run build` 命令将项目打包到 `dist` 目录。
1. 启动 ACT 并导航至 `OverlayPlugin > Cactbot > 用户文件夹`，并将路径设置到该项目的 `dist` 目录。
1. 测试项目是否正常编译成功并被 Cactbot 正常加载。
    - 传送到盛夏农庄。
    - 使用倒计时功能或向木人行礼以启动测试时间轴。
    - 在聊天栏键入 `/e test user` 并回车，观察是否有文字及 TTS 提示。

## 与Cactbot的不同

- 所有模块的默认配置入口都是 `src/<模块名>/index.js`

### Raidboss 模块

- `raidboss` 中所有触发器文件均需放置在 `data` 目录下
- 所有触发器文件的导出方式必须为 `export default { ... }`
- 使用 `timelineFile` 和 `overrideTimelineFile` 参数加载自定义时间轴时，应当使用 `import` 语句或 `require` 函数指定时间轴文件。[实例文件](./src/raidboss/data/test.ts)

## TypeScript 支持

本项目内建 TypeScript 支持。

## 关联项目

- [quisquous/cactbot](https://github.com/quisquous/cactbot)
- [quisquous/cactbot-user](https://github.com/quisquous/cactbot-user)

## 问题反馈与支持

- 如果您在使用本项目中发现任何问题，请在 GitHub 上提交 [issue](https://github.com/MaikoTan/cactbot-user-template/issues)。

  - 如果是 Cactbot 本身的问题，请在 [Cactbot 仓库中提交 issue](https://github.com/quisquous/cactbot/issues)。

- 如果您有更好的建议，请在 GitHub 上提交 [pull request](https://github.com/MaikoTan/cactbot-user-template/pulls)。

## 许可证

本项目使用 MIT 许可证，详情见 [LICENSE](LICENSE) 文件。
