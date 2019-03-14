import {
  mockPartial,
  mockPartialArray,
  mockRecursivePartial,
  mockRecursivePartialArray,
} from './index';

interface State {
  b: boolean;
  n: number;
  s: string;
  o: {
    a: number;
    b: number;
    c: number;
  };
}

// Object
mockPartial<State>({});

mockPartial<State>({ b: true });

mockPartial<State>({ n: 1 });

mockPartial<State>({ s: 'a' });

mockPartial<State>({ o: { a: 1, b: 2, c: 3 } });

mockRecursivePartial<State>({ o: {} });

mockRecursivePartial<State>({ o: { a: 1 } });

// Array
mockPartialArray<State>([]);

mockPartialArray<State>([{}]);

mockPartialArray<State>([{ b: true }]);

mockRecursivePartialArray<State>([{ o: {} }]);

mockRecursivePartialArray<State>([{ o: { a: 1 } }]);

// Errors
// Comment out to verify the TypeScript compiler rejects these with a relevant message

// Argument of type '{ x: string; }[]' is not assignable to parameter of type 'Partial<State>[]'.
//   Type '{ x: string; }' is not assignable to type 'Partial<State>'.
//     Object literal may only specify known properties, and 'x' does not exist in type 'Partial<State>'.ts(2345)
mockPartialArray<State>([{ x: 'error' }]);

// Argument of type '{ b: string; }[]' is not assignable to parameter of type 'Partial<State>[]'.
//   Type '{ b: string; }' is not assignable to type 'Partial<State>'.
//     Types of property 'b' are incompatible.
//       Type 'string' is not assignable to type 'boolean'.ts(2345)
mockPartialArray<State>([{ b: 'error' }]);

// Argument of type '{ o: string; }[]' is not assignable to parameter of type 'RecursivePartial<State>[]'.
//   Type '{ o: string; }' is not assignable to type 'RecursivePartial<State>'.
//     Types of property 'o' are incompatible.
//       Type 'string' has no properties in common with type 'RecursivePartial<{ a: number; b: number; c: number; }>'.ts(2345)
mockRecursivePartialArray<State>([{ o: 'error' }]);

// Argument of type '{ o: { a: string; }; }[]' is not assignable to parameter of type 'RecursivePartial<State>[]'.
//   Type '{ o: { a: string; }; }' is not assignable to type 'RecursivePartial<State>'.
//     Types of property 'o' are incompatible.
//       Type '{ a: string; }' is not assignable to type 'RecursivePartial<{ a: number; b: number; c: number; }>'.
//         Types of property 'a' are incompatible.
//           Type 'string' is not assignable to type 'number'.ts(2345)
mockRecursivePartialArray<State>([{ o: { a: 'error' } }]);
