'use strict';

module.exports.urlInfo = (event, context, callback) => {
  let hostInfo  = event.pathParameters.hostname_and_port;
  let queryInfo = event.pathParameters.original_path_and_query_string;

  // Validate the input
  if (hostInfo && queryInfo) {
    status = 'RECIEVED';
  } else {
    status = 'INCOMPLETE';
    hostInfo = 'null';
    queryInfo = 'null';
  }

  // process the request
  if (status == 'RECIEVED') {
    // check against a DunamoDB table
    status = 'Successfully processed your request';
    result = 'PASS';
    //result = 'FAIL';
  } else {
    status = 'Unexpected error, usage: GET /urlinfo/1/{hostname_and_port}/{original_path_and_query_string}';
    result = 'FAIL';
  }

  const response  = {
          statusCode: 200,
          headers: {
            "x-custom-header" : "urlInfo - results"
          },
          body: JSON.stringify({
            request: hostInfo + '/' + queryInfo,
            status: status,
            result: result
          }, null, '\t')
  };
  callback(null, response);
};
