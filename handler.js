'use strict';

module.exports.hostinfo = (event, context, callback) => {
  let hostInfo    = `${event.queryStringParameters.hostinfo}`;
  let dynamicHtml = '<p>Incomplete URL</p><p>usage: GET /urlinfo/1/{hostname_and_port}/{original_path_and_query_string}</p>';
  // check for GET params and use if available
  if (event.queryStringParameters && event.queryStringParameters.hostinfo) {
    dynamicHtml = `<p>Looking up request for: ${event.queryStringParameters.hostinfo}!</p>`;
  }

  const html = `
  <html>
    <style>
      h1 { color: #73757d; }
    </style>
    <body>
      <h1>Domain Check</h1>
      ${dynamicHtml}
      Diagnostics: ${hostInfo}
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

module.exports.queryinfo = (event, context, callback) => {
  let queryInfo   = `${event.queryStringParameters.queryinfo}`;
  let dynamicHtml = '<p>Query not found</p>';
  // check for GET params and use if available
  if (event.queryStringParameters && event.queryStringParameters.queryinfo) {
    dynamicHtml = `<p>Validating query: ${event.queryStringParameters.queryinfo}!</p>`;
  }

  const html = `
  <html>
    <style>
      h1 { color: #73757d; }
    </style>
    <body>
      <h1>Path and Query check</h1>
      ${dynamicHtml}
      Diagnostics: ${queryInfo}
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
