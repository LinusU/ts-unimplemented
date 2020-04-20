# Unimplemented for TypeScript

Utility function to indicate unimplemented code by throwing with a message of "Not implemented".

This allows your code to type-check, which is useful if you are implementing an interface that requires multiple methods which you don't plan of using all of.

The difference between `unimplemented` and [`todo`][todo] is that while [`todo`][todo] conveys an intent of implementing the functionality later and the message is "not yet implemented", `unimplemented` makes no such claims. Its message is "not implemented".

[todo]: https://github.com/LinusU/ts-todo

Advantages over simply throwing an error:

- You can easily search your codebase for `unimplemented()`
- The error thrown will have the code `ERR_UNIMPLEMENTED`
- Very clear what intentions it conveys

## Installation

```sh
npm install --save ts-unimplemented
```

## Usage

```typescript
import unimplemented = require('ts-unimplemented')

// Say we have an interface Foo:
interface Foo {
  bar(): number
  baz(): void
  qux(): Promise<number>
}

// We want to implement Foo for 'MyClass', but for some reason it only makes sense to implement the bar() function. baz() and qux() will still need to be defined in our implementation of Foo, but we can use unimplemented in their definitions to allow our code to compile.
//
// We still want to have our program stop running if the unimplemented methods are reached.
class MyClass implements Foo {
  bar () {
    return 1 + 1
  }

  baz () {
    return unimplemented()
  }

  qux () {
    return unimplemented()
  }
}
```

## Related Packages

- [`ts-todo`](https://github.com/LinusU/ts-todo)
- [`ts-unreachable`](https://github.com/LinusU/ts-unreachable)
- [`ts-unwrap`](https://github.com/LinusU/ts-unwrap)

## Prior Art

- Rust [`unimplemented` macro](https://doc.rust-lang.org/std/macro.unimplemented.html)
