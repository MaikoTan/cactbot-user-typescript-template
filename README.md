# Cactbot User Template

English | [简体中文](README.zh-CN.md) | [日本語](README.ja-JP.md)

This project is a template project for creating Cactbot customized triggers/timelines or custom user configurations, extending the scope and possibilities of customization based on the functionality of Cactbot's user folder override.

## Instructions

1. Download and install [Node.js](https://nodejs.org/en/download/), in normal situation just choose the Windows installer. *If you have already installed it, please skip this step.*.
1. Download and install [Git](https://git-scm.com/download/win). *If you have already installed it, please skip this step.*.
1. Click the `Use This Template` button to create a new project under your account.
1. Run the `git clone <your GitHub account name>/<your project name>.git` command to clone this project locally.
1. Run the `cd <your project name>` command to enter the project directory.
1. Install yarn if you haven't already done so: `npm install -g yarn`.
1. Run `yarn install` to install the required dependencies for the project.
1. Run the `yarn run build` command to package the project into the `dist` directory.
1. Start ACT and navigate to `OverlayPlugin > Cactbot > User Folder`, set the path to the project's `dist` directory.
1. Test the project whether it was compiled and loaded successfully by Cactbot.
    - Teleport to the Summerford Farms.
    - Start the test timeline by using the "/countdown" command or "/bow" to the striking dummy.
    - Type `/e test user` in the chat window to ensure the functions are working properly.

## Differences from Cactbot

- The default configuration entry for all modules is `src/<module name>/index.js`

### Raidboss module

- Trigger files in `raidboss` must be placed in the `data` directory
- Trigger files must be exported as `export default { ... }`
- `import` statement or `require` function is required when loading custom timelines with `timelineFile` and `overrideTimelineFile`. [Example](./src/raidboss/data/test.ts)

## TypeScript support

TypeScript support is available in this project.

## Associated Projects

- [quisquous/cactbot](https://github.com/quisquous/cactbot)
- [quisquous/cactbot-user](https://github.com/quisquous/cactbot-user)

## Feedback and Support

- If you find any problems using this project, please submit an [issue](https://github.com/MaikoTan/cactbot-user-template/issues) on GitHub.

  - If the problem is with Cactbot itself, please submit an issue to the [Cactbot repository](https://github.com/quisquous/cactbot/issues).

- If you have any suggestions, please submit a [pull request](https://github.com/MaikoTan/cactbot-user-template/pulls) on GitHub.

## License

This project is published under MIT license. See [LICENSE](LICENSE) for details.
