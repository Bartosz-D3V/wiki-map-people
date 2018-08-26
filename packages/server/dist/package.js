{
  "name": "server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "clean": "rm -rf dist/",
    "prebuild": "yarn clean",
    "build": "babel **/* --out-dir dist/ --copy-files",
    "start": "yarn build && node ./dist/bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.16.0",
    "morgan": "~1.9.0"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}
