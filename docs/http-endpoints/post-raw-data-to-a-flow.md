---
id: post-raw-data
title:  Post raw data to a flow
sidebar_label: Post Data
---

## Problem

You want to post raw text data to a flow.

## Solution

Use the <code class="node">HTTP In</code> node to listen for POST requests that
have their `Content-Type` set to `text/plain` and access the posted data as `msg.payload`.

## Example

![](../assets/http-endpoints/post-raw-data-to-a-flow.png)

<b>Flow JSON</b>

```json
[{"id":"3e1c5107.c1e3ae","type":"http in","z":"3045204d.cfbae","name":"","url":"/hello-raw","method":"post","swaggerDoc":"","x":120,"y":920,"wires":[["cf679478.309868"]]},{"id":"cf679478.309868","type":"template","z":"3045204d.cfbae","name":"page","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"<html>\n    <head></head>\n    <body>\n        <h1>Hello {{ payload }}!</h1>\n    </body>\n</html>","x":290,"y":920,"wires":[["f3c1a3f0.0c3e6"]]},{"id":"f3c1a3f0.0c3e6","type":"http response","z":"3045204d.cfbae","name":"","x":430,"y":920,"wires":[]}]
```

```text
[~]$ curl -X POST -d 'Nick' -H "Content-type: text/plain" https://app_name.herokuapp.com/hello-raw
<html>
    <head></head>
    <body>
        <h1>Hello Nick!</h1>
    </body>
</html>
```


## Discussion

When the <code class="node">HTTP In</code> node receives a request with the `Content-Type`
header set to `text/plain` it makes the body available as `msg.payload`:

```javascript
var name = msg.payload;
```
