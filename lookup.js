// Prepare our DynamoDB functions
var AWS = require('aws-sdk');
var uuid = require('uuid');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const hostLookup = {
  TableName: process.env.DYNAMODB_TABLE,
  Key: {
    host: event.pathParameters.host,
  },
};
const queryLookup = {
  TableName: process.env.DYNAMODB_TABLE,
  Key: {
    host: event.pathParameters.query,
  },
};
