

## AWS

- To update serverless cli:
> npm i -g serverless

- To configure the API keys:
> aws configure

- To create new template (if needed)
> sls create --template aws-nodejs-typescript

- To deploy
> sls deploy

- To invoke "hello" function locally
> npx sls invoke local -f hello --path src/functions/hello/mock.json

- To list functions
> aws lambda list-functions


---
## Twitter Feed Reader

- Download NodeJS (https://nodejs.org/en/download/)
> -  npm install
> - node twitter.js

