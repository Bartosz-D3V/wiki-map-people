# Wikipedia people place of birth

<p align="center">
Find where people from wikipedia from your country were born
</br>

<a href="https://opensource.org/licenses/MIT">
  <img alt="license: MIT" src="https://travis-ci.com/Bartosz-D3V/wiki-map-people.svg?token=tqZyPRhzSnop7iN2Y7Ug&branch=master">
</a>
<a href="https://travis-ci.com/Bartosz-D3V/wiki-map-people">
  <img alt="ci status" src="https://img.shields.io/github/license/mashape/apistatus.svg">
</a>
<a href="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  <img alt="code style: prettier" src="https://github.com/prettier/prettier">
</a>
<a href="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github">
  <img alt="contribute" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
</a>
</br>

<img src="showcase/screenshot.png" width="607" height="290"/>
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
