# unknown

`unknown` is one of the top type in TypeScript.
It is a "safer" variant of `any` that you cannot use the value until there are some type guards or type assertions to the value.

## Type Checking

The `TupleType<T>` and friends are used to check if `T` is a tuple, excluding array.

```ts
import type { TupleType } from 'type-plus'

type R = TupleType<unknown> // unknown

type R = TupleType<1> // never
```

- [`TupleType<T, Then = T, Else = never>`](unknown_type.ts#L16): check if `T` is `unknown`.
- [`IsUnknown<T, Then = true, Else = false`](unknown_type.ts#L35): is `T` `unknown`.
- [`NotUnknownType<T, Then = T, Else = never>`](unknown_type.ts#L50): check if `T` is not `unknown`.
- [`IsNotUnknown<T, Then = true, Else = false>`](unknown_type.ts#L65): is `T` not `unknown`.

## References

- [Handbook]

[handbook]: https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown