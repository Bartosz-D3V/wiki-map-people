Arguments: 
  D:\Program Files\nodejs\node.exe D:\Program Files (x86)\Yarn\bin\yarn.js start

PATH: 
  C:\Users\User\bin;D:\Program Files\Git\mingw64\bin;D:\Program Files\Git\usr\local\bin;D:\Program Files\Git\usr\bin;D:\Program Files\Git\usr\bin;D:\Program Files\Git\mingw64\bin;D:\Program Files\Git\usr\bin;C:\Users\User\bin;C:\ProgramData\Oracle\Java\javapath;C:\Program Files (x86)\Intel\iCLS Client;C:\Program Files\Intel\iCLS Client;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0;C:\Program Files\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files\Intel\Intel(R) Management Engine Components\IPT;C:\Program Files (x86)\Intel\Intel(R) Management Engine Components\DAL;C:\Program Files (x86)\Intel\Intel(R) Management Engine Components\IPT;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0;D:\Program Files\Git\cmd;C:\Program Files\Java\jdk1.8.0_91\bin;D:\Program Files (x86)\Yarn\bin;C:\Program Files\Calibre2;D:\Program Files\nodejs;D:\JEE Tools\apache-maven-3.3.9\bin;C:\Users\User\AppData\Local\Microsoft\WindowsApps;D:\JEE Tools\gradle-4.1\bin;C:\Users\User\AppData\Local\Yarn\bin;D:\Program Files\Heroku\bin;C:\Users\User\AppData\Roaming\npm;D:\Program Files\Git\usr\bin\vendor_perl;D:\Program Files\Git\usr\bin\core_perl

Yarn version: 
  1.0.1

Node version: 
  8.11.2

Platform: 
  win32 x64

npm manifest: 
  {
    "name": "server",
    "version": "0.0.0",
    "private": true,
    "scripts": {
      "clean": "rm -rf dist/",
      "prebuild": "yarn clean",
      "build": "babel ./ --out-dir dist/ --ignore ./node_modules .babelrc package.json --copy-files",
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
      "babel-preset-env": "^1.7.0",
    }
  }

yarn manifest: 
  No manifest

Lockfile: 
  No lockfile

Trace: 
  SyntaxError: D:\Programming\wiki-map-people\packages\server\package.json: Unexpected token } in JSON at position 506
      at JSON.parse (<anonymous>)
      at D:\Program Files (x86)\Yarn\lib\cli.js:797:57
      at Generator.next (<anonymous>)
      at step (D:\Program Files (x86)\Yarn\lib\cli.js:92:30)
      at D:\Program Files (x86)\Yarn\lib\cli.js:103:13
      at <anonymous>
