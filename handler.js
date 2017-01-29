'use strict';

module.exports.urlInfo = (event, context, callback) => {
  const hostInfo  = event.pathParameters.hostname_and_port;
  const queryInfo = event.pathParameters.original_path_and_query_string;

  // ToDo: Add some actual validation code here
  const status = 'FAIL';
  if (hostInfo == null) {
    let status = 'isnull';
  } else {
    let status = 'notnull';
  }

  const response  = {
          statusCode: 200,
          body: JSON.stringify({ "message": status + ':' + hostInfo + '/' + queryInfo + '!'})
  };
  callback(null, response);
};
