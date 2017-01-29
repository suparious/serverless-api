'use strict';

module.exports.hostInfo = (event, context, callback) => {
  const hostInfo = event.pathParameters.hostname_and_port
  const response = {
    statusCode: 200,
    body: JSON.stringify({ "message": 'Validating ' + hostInfo + '!'})
  };
  callback(null, response);
};

module.exports.queryInfo = (event, context, callback) => {
  const queryInfo = event.pathParameters.original_path_and_query_string
  const response = {
    statusCode: 200,
    body: JSON.stringify({ "message": 'Validating ' + queryInfo + '!'})
  };
  callback(null, response);
};
