'use strict';

module.exports.urlInfo = (event, context, callback) => {
  const hostInfo  = event.pathParameters.hostname_and_port;
  const queryInfo = event.pathParameters.original_path_and_query_string;

  // ToDo: Add some actual validation code here
  let status = 'FAIL';
  if (typeof hostInfo === 'undefined' || hostInfo === null) {
    let status = 'INCOMPLETE';
  } else {
    let status = 'PASS';
  }

  const response  = {
          statusCode: 200,
          body: JSON.stringify({ "message": status + ':' + hostInfo + '/' + queryInfo + '!'})
  };
  callback(null, response);
};
