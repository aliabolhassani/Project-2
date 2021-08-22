const Twitter = require("twitter");
const csvjson = require("csvjson");
const fs = require("fs");

var client = new Twitter({
  consumer_key: "JcgZIw8AGGoxRVrG0P8ScSlcT",
  consumer_secret: "61nmWy43Y62RVTDt4WbiSvO3EvwoZ78yLKcHnGwzmpFGWcHgHi",
  access_token_key: "1429147109916385287-T93CwHuSmjs6TSv0vzqfxmsdKnv4EE",
  access_token_secret: "ivrJl0qUjaT5EO1ZOLM3Ni2u7Lbb0POwPQr4VskeSqE0n",
});

const getTweets = (params) =>
  new Promise(async (resolve, reject) => {
    client.get("statuses/user_timeline", params, (error, tweets, response) => {
      if (!error) {
        resolve(
          tweets.map((item) => ({
            id: item.id,
            timestamp: +new Date(item.created_at),
            text: item.text
          }))
        );
      } else {
        console.log(error);
      }
    });
  });

const readCsv = (path) => {
  try {
    var data = fs.readFileSync(path, { encoding: "utf8" });

    var options = {
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

const textPath = "../Data/texts.csv"
const accountPath = "../Data/accounts.csv";

const allTweets = readCsv(textPath);
const accounts = readCsv(accountPath).map((item) => item.name);

(async () => {
  for (let account of accounts) {
    var params = { screen_name: account, count: 1 };
    data = await getTweets(params);
    allTweets.push(...data);
  }
  console.log(allTweets);
  writeCsv(allTweets, textPath)
})();






// First deduplicate by Id, then sort by date, finally select just those which are for today
