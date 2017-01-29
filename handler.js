'use strict';

module.exports.hostInfo = (event, context, callback) => {
  const hostInfo = event.pathParameters.hostname_and_port
  const response = {
    statusCode: 200,
    body: JSON.stringify({ "message": 'Validating ' + hostInfo + '!'})
  };
  callback(null, response);
};
