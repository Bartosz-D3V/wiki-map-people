# Wikipedia people place of birth

<p align="center">
  Find where people from wikipedia from your country were born
</p>

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/Bartosz-D3V/wiki-map-people.svg?token=tqZyPRhzSnop7iN2Y7Ug&branch=master)](https://travis-ci.com/Bartosz-D3V/wiki-map-people)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

<p align="center">

<img src="showcase/screenshot.png" width="607" height="209"/>

</p>

## About

The following application consumes WikiData resources using SPARQL query.
Select a nationality from the dropdown list and application will draw markers on the map allowing you to see
where people of the selected nationality, present on english wikipedia were born.

## Install

```bash
yarn bootstrap // or...
npm run bootstrap
```

## Run

```bash
lerna run start
```

## Test

```bash
lerna run test
```
