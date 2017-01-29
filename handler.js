'use strict';

module.exports.urlcheck = (event, context, callback) => {
  let dynamicHtml = '<p>URL not found<br>usage: GET /urlinfo/1/{hostname_and_port}/{original_path_and_query_string}</p>';
  // check for GET params and use if available
  if (event.queryStringParameters) {
    dynamicHtml = `<p>Match found on ${event.queryStringParameters}!</p>`;
  }

  const html = `
  <html>
    <style>
      h1 { color: #73757d; }
    </style>
    <body>
      <h1>URL Check</h1>
      ${dynamicHtml}
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
