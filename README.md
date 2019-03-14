[![downloads][downloads-badge]][npmcharts]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

<h1 align="center">
  Sneer 😏
</h1>
<p align="center">Type-safe mocking utilities</p>

## Why?
You want to write test mocks in TypeScript while preserving type safety and getting meaningful type errors.

## Installation
```
npm install sneer -D
```

## Usage
```ts
import {
  mockPartial,
  mockPartialArray,
  mockRecursivePartial,
  mockRecursivePartialArray,
} from 'sneer';
```

### `mockPartial`
### `mockPartialArray`
Casts an object (or array of objects) to a type `T` while only requiring a partial implementation of the type to be passed. This allows us to easily mock an object while writing tests without having to define all of the properties of an object.

Example:
```ts
const store = mockPartial<Store<State>>({
  select: jest.fn((selector: (state: State) => any) => Observable.of(selector(state))),
});
```

### `mockRecursivePartial`
### `mockRecursivePartialArray`
Same as `mockPartial` and `mockPartialArray`, but recursively partial 🙃

Example:
```ts
const svg = mockRecursivePartial<SVGSVGElement>({
  x: {
    baseVal: { value: 1 }
  }
});
```

[version-badge]: https://img.shields.io/npm/v/sneer.svg?style=flat-square
[package]: https://www.npmjs.com/package/sneer
[downloads-badge]: https://img.shields.io/npm/dm/sneer.svg?style=flat-square
[npmcharts]: https://npmcharts.com/compare/sneer
[license-badge]: https://img.shields.io/npm/l/sneer.svg?style=flat-square
[license]: https://github.com/vdsabev/sneer/blob/master/LICENSE.md
