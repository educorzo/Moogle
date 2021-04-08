# Moogle
A Spotify albums, tracks and artist searcher.
Check it [here](https://educorzo.github.io/Moogle/).

## Introduction
This was an intensive exercise to learn basic thing of VueJS in just one week. I would like to add new functionality and improve this solution in the future.

There were a lot of commits to track the process of this exercise, but they were lost in a private repo.

## Instructions

Install dependencies.
```sh
$ npm install
```

Run the app
```sh
$ npm run serve
```
Note: The server must run in the port 8080 of your localhost, otherwise spotify configuration must to be modified.

Run tests
```sh
$ npm run test:unit
$ npm run test:e2e
```

Run lint
```sh
$ npm run lint
```

## Build
```sh
$ npm run build
```
The build is intended for GitHub pages. When building the app, the generated dist folder is prepared for working properly in github pages (assets folders are not allowed in Github pages yet). When the PR is approved against Master branch, Github actions will test and deploy the website automatically.
