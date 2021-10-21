---
id: post-form-data
title: Post Form Data to a Flow
sidebar_label: Post Form Data
---

## Problem

You want to post form data to a flow.

## Solution

Use the <code class="node">HTTP In</code> node to listen for POST requests that
have their `Content-Type` set to `application/x-www-form-urlencoded` and access
the form data as properties of `msg.payload`.

## Example

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/http-endpoints/post-form-data-to-a-flow.png)

<b>Flow JSON</b>

~~~json
[{"id":"5b98a8ac.a46758","type":"http in","z":"3045204d.cfbae","name":"","url":"/hello-form","method":"post","swaggerDoc":"","x":120,"y":820,"wires":[["bba61009.4459f"]]},{"id":"bba61009.4459f","type":"template","z":"3045204d.cfbae","name":"page","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"<html>\n    <head></head>\n    <body>\n        <h1>Hello {{ payload.name }}!</h1>\n    </body>\n</html>","x":290,"y":820,"wires":[["6ceb930a.93146c"]]},{"id":"6ceb930a.93146c","type":"http response","z":"3045204d.cfbae","name":"","x":430,"y":820,"wires":[]}]
~~~



~~~text
[~]$ curl -X POST -d "name=Nick" https://app_name.herokuapp.com/hello-form
<html>
    <head></head>
    <body>
        <h1>Hello Nick!</h1>
    </body>
</html>
~~~


## Discussion

HTML Forms can be used to send data from the browser back to a server. If
configured to `POST` the data, the browser will encode the data held in the
`<form>` using a `content-type` of `application/x-www-form-urlencoded`.

For example, when a form that looks like this is submitted:

~~~html
<form action="https://app_name.herokuapp.com/hello-form" method="post">
  <input name="name" value="Nick">
  <button>Say hello</button>
</form>
~~~

it results in the request:

~~~text
POST / HTTP/1.1
Host: localhost:1880
Content-Type: application/x-www-form-urlencoded
Content-Length: 9

name=Nick
~~~

When the <code class="node">HTTP In</code> node receives such a request, it
parses the body of the request and makes the form data available under
`msg.payload`:

~~~javascript
var name = msg.payload.name;
~~~
