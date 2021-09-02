const awsConfigs = {
  S3bucket: 'marketsmart2021',
  endpoint: process.env.DYNAMODB_ENDPOINT,
  region: 'us-west-2',
  accessKeyId: process.env.IAM_ACCESS_KEY_ID,
  secretAccessKey: process.env.IAM_SECRET_ACCESS_KEY
};

export { awsConfigs };
