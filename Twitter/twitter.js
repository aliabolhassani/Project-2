const Twitter = require("twitter");
const csvjson = require("csvjson");
const fs = require("fs");
require("dotenv").config();

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const getTweets = (params) =>
  new Promise(async (resolve, reject) => {
    client.get("statuses/user_timeline", params, (error, tweets, response) => {
      if (!error) {
        resolve(
          tweets.map((item) => ({
            id: item.id,
            timestamp: +new Date(item.created_at),
            text: item.text,
          }))
        );
      } else {
        console.log(error);
      }
    });
  });

const readCsv = (path) => {
  try {
    const data = fs.readFileSync(path, { encoding: "utf8" });
    const options = {
      delimiter: ",",
      quote: '"',
    };
    return csvjson.toObject(data, options);
  } catch (e) {
    return [];
  }
};

const writeCsv = (data, path) => {
  const options = {
    delimiter: ",",
    wrap: false,
    headers: "key",
  };

  fs.writeFileSync(path, csvjson.toCSV(data, options), {
    encoding: "utf8",
  });
};

const textPath = "../Data/texts.csv";
const accountPath = "../Data/accounts.csv";
const allTweets = readCsv(textPath);
const accounts = readCsv(accountPath).map((item) => item.name);

(async () => {
  for (let account of accounts) {
    let params = { screen_name: account, count: 20 };
    data = await getTweets(params);
    allTweets.push(...data);
  }
  console.log(allTweets);
  writeCsv(allTweets, textPath);
})();

// First deduplicate the CSV by Id, finally select just those which are for today
