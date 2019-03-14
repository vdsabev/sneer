/**
 * Casts an object (or array of objects) to a type `T` while only requiring a partial implementation of the type to be passed.
 * This allows us to easily mock an object while writing tests without having to define all of the properties of an object.
 */
export interface MockPartial {
  <T extends {}>(x: Partial<T>): T;
}

export const mockPartial: MockPartial = (x: any) => x;

export interface MockPartialArray {
  <T extends {}>(x: Partial<T>[]): T[];
}

export const mockPartialArray: MockPartialArray = (x: any) => x;

/**
 * Same as `mockPartial`, but recursively partial 🙃
 */
export interface MockRecursivePartial {
  <T extends {}>(x: RecursivePartial<T>): T;
}

export const mockRecursivePartial: MockRecursivePartial = (x: any) => x;

export interface MockRecursivePartialArray {
  <T extends {}>(x: RecursivePartial<T>[]): T[];
}

export const mockRecursivePartialArray: MockRecursivePartialArray = (x: any) => x;

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends PrimitiveType ? T[P] : RecursivePartial<T[P]>
};

type PrimitiveType = never | void | undefined | null | boolean | number | string;
