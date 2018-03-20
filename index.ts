/**
 * Casts an object to the type T while only requiring a partial implementation of the type to be passed.
 * This allows us to easily mock an object while writing tests without having to define all of the properties of an object.
 */
export const mockPartial = <T extends {}>(x: Partial<T>): T => x as T;

/**
 * Same as `mockPartial`, but recursively partial 🙃
 */
export const mockRecursivePartial = <T extends {}>(x: RecursivePartial<T>): T => x as any as T;

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
