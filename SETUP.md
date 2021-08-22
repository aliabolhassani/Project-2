
- To update serverless cli:
> npm i -g serverless

- To configure the API keys:
> aws configure

- To create new template (if needed)
> sls create --template aws-nodejs-typescript

- To deploy
> sls deploy

- To invoke "hello" function locally
> nix sls invoke local -f hello

- To list functions
> aws lambda list-functions
