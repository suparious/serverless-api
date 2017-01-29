'use strict';

module.exports.urlInfo = (event, context, callback) => {
  const hostInfo  = event.pathParameters.hostname_and_port;
  const queryInfo = event.pathParameters.original_path_and_query_string;

  const response  = {
          statusCode: 200,
          body: JSON.stringify({ "message": 'Validated: ' + hostInfo + '/' + queryInfo + '!'})
  };
  callback(null, response);
}
