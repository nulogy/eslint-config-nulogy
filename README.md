# @nulogy/eslint-config-nulogy

A custom ESLint config with recommended settings for Apollo/TypeScript/React/JSON development at Nulogy.

[This configuration](./index.js) is based on [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint). For supporting JSON files [`eslint-plugin-json`](https://github.com/azeemba/eslint-plugin-json) is being used. Support for [Prettier](https://github.com/prettier) has been also added.

## Usage

Install this using:

```bash
yarn add -D @nulogy/eslint-config-nulogy
```

In order to use this configuration, you also have to install the peer dependencies `eslint`, `prettier` and `typescript`:

```bash
yarn add -D eslint prettier
yarn add typescript
```

Then add `extends: "@nulogy/nulogy"` to your `.eslintrc.*` file like so:

`.eslintrc.js`:
```javascript
module.exports = {
  extends: "@nulogy/nulogy"
}
```

You may also want to add a prettier config, especially to filter out `__generated__` files from Apollo Codegen.

## Changelog

### 0.0.1-alpha.1

-   Initial alpha release

## TODOs

- Extract [rules](./rules.js) that have been customized
- Consider using `eslint-config-react-app`
