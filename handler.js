'use strict';

module.exports.urlInfo = (event, context, callback) => {
  // Initialize variables
  let hostInfo  = '';
  let queryInfo = '';
  let status = '';
  let result = '';

  // Validate the input
  if (event.pathParameters.hostname_and_port && event.pathParameters.original_path_and_query_string) {
    hostInfo  = event.pathParameters.hostname_and_port;
    queryInfo = event.pathParameters.original_path_and_query_string;
    // check against a DunamoDB table
    status = 'Successfully processed';
    result = 'PASS';
    //result = 'FAIL';
  } else {
    status = 'Unexpected error, usage: GET /${env}/urlinfo/1/{hostname_and_port}/{original_path_and_query_string}';
    result = 'FAIL';
  }

  const response  = {
    statusCode: 200,
    headers: {
      "x-custom-header" : "urlInfo - results"
    },
    body: JSON.stringify({
      values: hostInfo + '/' + queryInfo,
      status: status,
      result: result
    }, null, '\t')
  };
  callback(null, response);
};
