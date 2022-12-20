# Introduction

A NodeJS TypeScript project boilerplate with settings and common toolchain in place. Good for starting a new project from scratch:

- [Node v16.19.0 (LTS)](https://nodejs.org/en/blog/release/v16.19.0/)
- [TypeScript v4.9.x](https://www.typescriptlang.org/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Editorconfig](https://editorconfig.org/)
- [Nodemon](https://nodemon.io/)
- [Volta](https://volta.sh/)
- [Jest](https://jestjs.io/): N/A
- [Husky](https://www.npmjs.com/package/husky): N/A
- [TypeDoc](https://typedoc.org/guides/doccomments/): N/A
- [Github Actions](https://docs.github.com/en/actions): N/A

## Volta

Use [Volta](https://volta.sh/) to manage your toolchain. See `package.json`

- node
- npm
- yarn

## Typescript

Choose the typescript configuration for your NodeJS version.

- Extending the base configuration for Node 16: https://github.com/tsconfig/bases/blob/main/bases/node16.json.
- Adding common, recommended `tsconfig` configuration
- Optimal configuration for production

## ESlint

Standard configuration for Nodejs + TypeScript.

```bash
npm init @eslint/config
```

Current settings:

✔ How would you like to use ESLint? · style

✔ What type of modules does your project use? · esm

✔ Which framework does your project use? · none

✔ Does your project use TypeScript? · Yes

✔ Where does your code run? · node

✔ How would you like to define a style for your project? · guide

✔ Which style guide do you want to follow? · standard-with-typescript

✔ What format do you want your config file to be in? · JSON

## Gitignore

- Common .gitignore configuration for Nodejs projects https://github.com/github/gitignore/blob/main/Node.gitignore

## Editorconfig

- Common `.editorconfig` configuration https://github.com/editorconfig/editorconfig/blob/master/.editorconfig
- With small amendments suggested by Prettier in https://prettier.io/docs/en/configuration.html#editorconfig
