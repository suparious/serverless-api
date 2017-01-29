'use strict';

module.exports.urlinfo = (event, context, callback) => {
  let hostInfo    = `${event.queryStringParameters.hostinfo}`;
  let queryInfo   = `${event.queryStringParameters.queryinfo}`;
  let dynamicHtml = '<p>URL not found</p><p>usage: GET /urlinfo/1/{hostname_and_port}/{original_path_and_query_string}</p>';
  // check for GET params and use if available
  if (event.queryStringParameters && event.queryStringParameters.hostinfo && event.queryStringParameters.queryinfo) {
    dynamicHtml = `<p>Looking up request for: ${event.queryStringParameters.hostinfo}!</p>`;
  }

  const html = `
  <html>
    <style>
      h1 { color: #73757d; }
    </style>
    <body>
      <h1>URL Security Check</h1>
      ${dynamicHtml}
      Host information: ${hostInfo}
      Path and query: ${queryInfo}
    </body>
  </html>`;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  // callback is sending HTML back
  callback(null, response);
};
