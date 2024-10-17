# langchainjs







- 新建项目

  ```bash
  mkdir langchainjs-learning 
  cd langchainjs-learning && npm init
  
  npm install --save-dev typescript  # ts
  touch tsconfig.json
  
  npm install --save-dev prettier tslint tslint-config-prettier
  touch tslint.json .prettierrc
  
  npm install --save-dev jest ts-jest @types/jest
  touch jestconfig.json
  
  
  npm install @dotenvx/dotenvx --save
  
  
  
  
  ```
  
  package.json
  
  ```json
  {
    "name": "langchainjs-learning",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "tsc",
      "format": "prettier --write \"src/**/*.ts\" \"src/**/*.js\"",
      "lint": "tslint -p tsconfig.json"
    },
    "author": "oswin",
    "license": "ISC",
    "devDependencies": {
      "prettier": "^3.3.3",
      "tslint": "^6.1.3",
      "tslint-config-prettier": "^1.18.0",
      "typescript": "^5.6.3"
    }
  }
  
  ```
  
  tsconfig.json
  
  ```json
  {
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "declaration": true,
      "outDir": "./lib",
      "strict": true
    },
    "include": ["src"],
    "exclude": ["node_modules", "**/__tests__/*"]
  }
  
  ```
  
  tslint.json
  
  ```json
  {
    "extends": ["tslint:recommended", "tslint-config-prettier"]
  }
  
  ```
  
  



- 环境变量

  ```bash
  touch .env
  touch index.js
  
  ```

  



- Langchain

  ```bash
  npm install -S langchain
  
  # https://js.langchain.com/docs/how_to/installation/ 0.3
  
  
  ```

  









































































































































