'use strict';

module.exports.urlcheck = (event, context, callback) => {
  let dynamicHtml = '<p>Unlisted URL</p>';
  // check for GET params and use if available
  if (event.queryStringParameters && event.queryStringParameters.name) {
    dynamicHtml = `<p>Match found on ${event.queryStringParameters.name}!</p>`;
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
