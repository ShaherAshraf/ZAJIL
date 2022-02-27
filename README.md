# 📦 webpack Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A webpack boilerplate using Babel, PostCSS and Sass.

## Installation

Clone this repo and npm install.

```bash
npm i
```

## Usage

### Development server

```bash
npm run serve
```

You can view the development server at `localhost:3000`.

### Production build

```bash
npm run build
```

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/cli`](https://babeljs.io/docs/en/babel-cli) - A CLI used to compile files from the command line.
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`sass`](https://www.npmjs.com/package/sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`autoprefixer`](https://github.com/postcss/autoprefixer) - A PostCSS plugin which parses your CSS and adds vendor prefixes
- [`postcss-import`](https://github.com/postcss/postcss-import) - PostCSS plugin to transform @import rules by inlining content.

## Author

- [Shaher Ashraf](https://thegoat7.netlify.app/)