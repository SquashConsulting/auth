# Auth

Run arangodb on `http://localhost:8529` and create a database named `squash`

## Available Scripts

### `yarn run setup`

Adds server `squash` with the homonym database to `foxx-cli` and runs `yarn install:service`

### `yarn run install:service`

Builds the TypeScript codebase and mounts the service on `/auth`

### `yarn run upgrade:service`

Builds the TypeScript codebase and upgrades the current service on `/auth`

## License

Copyright (c) 2020 Squash Consulting. All rights reserved.
