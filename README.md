# vue-demi-sample

[![semantic-release](https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![NPM version](https://img.shields.io/npm/v/@akccakcctw/vue-demi-sample.svg?style=flat-square)](https://www.npmjs.com/package/@akccakcctw/vue-demi-sample)
![LICENSE](https://img.shields.io/github/license/akccakcctw/vue-demi-sample.svg)

vue-demi-sample is a project aimed at Vue plugin developers, focusing on exploring and practicing how to write universal components compatible with Vue 2/3 using script setup syntax, Vue 3 syntax, and Single File Components (SFC). Inspired by ChuHoMan's vue-demi-component-template, this project builds upon that foundation for further exploration and development.

This template should help get you started developing with Vue 2/3 in Vite.

## Development Motivation

In the process of developing Vue plugins, many developers face questions and challenges like:

- Can the same set of code support both Vue 2/3?
- How should I manage my npm packages for Vue 2/3? Should I create two packages, or use different version numbers?
- Can I still develop components using the familiar SFC format?

## Solution

This project aims to provide a clear and efficient solution to these issues. Utilizing vue-demi, a library that allows coexistence of Vue 2/3, it supports the same codebase for both Vue versions. Vue-demi has been crucial in popular projects like antfu's VueUse.

## Technical Implementation

We utilize syntax common to both Vue 2 and Vue 3 for writing SFCs, ensuring compatibility across versions. During packaging, separate bundles for Vue 2 and Vue 3 are created, and a postinstall hook in the npm package releases the appropriate version-specific files upon installation.

## Project Setup

```sh
pnpm install
```
### Compile and Hot-Reload for Development
```sh
pnpm dev:2.7
pnpm dev:3
```

### Compile and Minify for Production

```sh
pnpm build
```

## Usage and Contribution

Vue plugin developers seeking to make their plugins compatible with both Vue 2 and Vue 3 will find vue-demi-sample a practical starting point. Refer to this project's examples and structure for developing and optimizing your plugins.

## Thanks

- [ChuHoMan/vue-demi-component-template](https://github.com/ChuHoMan/vue-demi-component-template)

## License

This project is licensed under the [MIT License](https://github.com/akccakcctw/vue-demi-sample/blob/master/LICENSE).

