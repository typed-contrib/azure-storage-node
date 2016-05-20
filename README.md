# Typed azure-storage-node [![Build Status](https://travis-ci.org/typed-contrib/azure-storage-node.svg?branch=master)](https://travis-ci.org/typed-contrib/azure-storage-node)

Type definitions for [azure-storage-node](https://github.com/Azure/azure-storage-node).

## Installation

Installation can be done using [typings](https://github.com/typings/typings).

From the registry:
```bash
$ typings install azure-storage --save
```

From the source:
```bash
$ typings install github:typed-contrib/azure-storage-node --save
```

`azure-storage` module works in `node.js` environment.
So you also have to install `node.js` typings.

```bash
$ typings install dt~node --global --save
```

## Contributing

Contributions are welcome !

```bash
# Installation
# Fork this repo (https://github.com/typed-contrib/azure-storage-node)
# Clone the fork (E.g. `https://github.com/<your_username>/azure-storage-node.git`)
cd azure-storage-node

# Install modules and dependencies
npm install

# Test typings over azure-storage-node samples and tests
npm test
```

Some resources to help writing Typescript type definitions:
 * [Writing Declaration Files](http://www.typescriptlang.org/docs/handbook/writing-declaration-files.html)
 * [typings examples](https://github.com/typings/typings/blob/master/docs/examples.md)

## Tests

This type definitions are tested using source [azure-storage-node] samples and services tests.
 * [Samples](https://github.com/Azure/azure-storage-node/tree/master/examples/samples)
 * [Services](https://github.com/Azure/azure-storage-node/tree/master/test/services)

## License

MIT

