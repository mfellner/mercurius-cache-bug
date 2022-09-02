# mercurius-cache bug #110: double execution of resolver on error

Reproduction for bug in mercurius-cache bug. https://github.com/mercurius-js/cache/issues/110

Actual output:

```sh
$ yarn start
yarn run v1.22.19
$ node server.mjs
query hello 0
query hello 1
```

Expected output:

```sh
$ yarn start
yarn run v1.22.19
$ node server.mjs
query hello 0
```
