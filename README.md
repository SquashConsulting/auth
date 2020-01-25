# Auth

## Geting started

### Run arangodb

Run arangodb on `http://localhost:8529` and create a database named `squash`

### Install packages

```sh
yarn install
```

#### Note: this projcet uses yarn version >= 2.0, and follows the `Zero Install` ideology. Follow [this link](https://yarnpkg.com/features/zero-installs) for more information.

## Available Scripts

```sh
yarn run setup
```

Adds server `squash` with the homonym database to `foxx-cli` and runs `yarn install:service`

```sh
yarn run install:service
```

Builds the TypeScript codebase and mounts the service on `/auth`

```sh
yarn run upgrade:service
```

Builds the TypeScript codebase and upgrades the current service on `/auth`

## License

Copyright (c) 2020 Squash Consulting. All rights reserved.
