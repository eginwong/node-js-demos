# Logging

- `pino`, `express-pino-logger`

```js
const pino = require('pino')()
const logger = require('express-pino-logger')({
instance: pino })

app.use(logger);

... 
req.log.info('');
```

- Q? how does pino work?
  - log4j style (trace, info, warn, debug, error, fatal)
- `express-pino-logger` adds a `log` object to every incoming request
- best practice
  - offload logging to another service to avoid extra processing overhead
    - `node index | pino-elasticsearch`
    - `npm i -g pino` is a global prettifier
    - or `pino-colada`
      - `node index.js | pino`

also `morgan` with customizable logging formats (apache-style via `common`)
  - only supports req/res logging and not other custom logging

`winston` is similar and has `express-winston` middleware
- log4j as well
- high level of configuration