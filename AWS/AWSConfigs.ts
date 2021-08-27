const awsConfigs = {
    S3bucket: "marketsmart2021",
    // endpoint: "http://localhost:8000",
    endpoint: "https://dynamodb.us-west-2.amazonaws.com",
    region: "us-west-2",
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
};

export { awsConfigs };
