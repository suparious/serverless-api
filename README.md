# serverless-api
Simple URL look-up service using AWS API Gateway and Lamda

Objective
Write a small web service, in the language/framework your choice,
that responds to GET requests where the caller passes in a URL and
the service responds with some information about that URL. The GET
requests look like this:

        GET /urlinfo/1/{hostname_and_port}/{original_path_and_query_string}

Synopsys
The caller wants to know if it is safe to access that URL or not.
As the implementer you get to choose the response format and
structure. These lookups are blocking users from accessing the URL
until the caller receives a response from your service.

Requirements
nodejs =< 4.2.x
npn serverless =< 1.5.x
