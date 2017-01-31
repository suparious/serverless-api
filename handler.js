'use strict';

module.exports.urlInfo = (event, context, callback) => {
  const hostInfo  = event.pathParameters.hostname_and_port;
  const queryInfo = event.pathParameters.original_path_and_query_string;

  // ToDo: Add some actual validation code here
  //if (event.pathParameters.hostname_and_port === 'undefined' || event.pathParameters.hostname_and_port === null) {
  //  let status = 'INVALID';
  //} else {
  //  let status = 'PASS';
  //}

  // Debugging
  let status = 'undefined';
  let result = 'undefined';

  // Validate the input
  if (hostInfo && queryInfo) {
    status = 'RECIEVED'
  }

  // process the request
  if (status = 'RECIEVED') {
    // check against a DunamoDB table
    status = 'Successfully processed your request';
    result = 'PASS';
  } else {
    status = 'Successfully processed your request';
    result = 'FAIL';
  }


  const response  = {
          statusCode: 200,
          headers: {
            "x-custom-header" : "urlInfo - results"
          },
          body: JSON.stringify({
            request:' ' + hostInfo + '/' + queryInfo,
            status:' ' + status,
            result:' ' + result
          }, null, '\t')
  };
  callback(null, response);
};
