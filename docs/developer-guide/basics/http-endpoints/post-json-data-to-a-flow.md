---
id: post-json-data
title: Post JSON Data to a Flow
sidebar_label: Post JSON
---

## Problem

You want to post JSON data to a flow.

## Solution

Use the <code class="node">HTTP In</code> node to listen for POST requests that
have their `Content-Type` set to `application/json` and access the parsed JSON as
properties of `msg.payload`.

## Example

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/http-endpoints/post-form-data-to-a-flow.png)

<b>Flow JSON</b>

~~~json
[{"id":"5b98a8ac.a46758","type":"http in","z":"3045204d.cfbae","name":"","url":"/hello-form","method":"post","swaggerDoc":"","x":120,"y":820,"wires":[["bba61009.4459f"]]},{"id":"bba61009.4459f","type":"template","z":"3045204d.cfbae","name":"page","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"<html>\n    <head></head>\n    <body>\n        <h1>Hello {{ payload.name }}!</h1>\n    </body>\n</html>","x":290,"y":820,"wires":[["6ceb930a.93146c"]]},{"id":"6ceb930a.93146c","type":"http response","z":"3045204d.cfbae","name":"","x":430,"y":820,"wires":[]}]
~~~



~~~text
[~]$ curl -X POST -d '{"name":"Nick"}' -H "Content-type: application/json" https://app_name.herokuapp.com/hello-form
<html>
    <head></head>
    <body>
        <h1>Hello Nick!</h1>
    </body>
</html>
~~~


## Discussion

When the <code class="node">HTTP In</code> node receives a request with the `Content-Type`
header set to `application/json` it parses the body of the request and makes the data
available under `msg.payload`:

~~~javascript
var name = msg.payload.name;
~~~
