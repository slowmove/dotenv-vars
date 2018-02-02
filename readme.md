dotenv-vars
===

The slimmest module to load a .env file in your project path, setting each row in environment variables.

[![NPM](https://nodei.co/npm/dotenv-vars.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dotenv-vars/)

## Installation
``` npm install --save dotenv-vars ```

## Usage
- Put a **.env** file in your project root containing one pair of environment variable on each row like ``` NODE_ENV=debug ```
- In the top of your main file put ``` require('dotenv-vars') ```

## Example
Supports both ```[Segment titles]``` as well as ```# comments```
### .env
```
[Environment]
NODE_ENV=debug
PORT=3000

[Amazon]
# AWS_ACCESS_KEY_ID=
# AWS_SECRET_ACCESS_KEY=
# AWS_SESSION_TOKEN=
```

### index.js
```javascript
require('dotenv-vars');

console.log(process.env.PORT);
```

Prints: ```3000```
