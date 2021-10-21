---
id: get-parsed-JSON
title: Get a Parsed JSON Response
sidebar_label: Parse JSON
---

## Problem

You want to return the JSON response of an HTTP request as a parsed JavaScript object.

## Solution

The <code class="node">HTTP Request</code> node will return the body of a JSON response in the `msg.payload` as a string by default.
Change the `Return` configuration of this node to `a parsed JSON object` to parse the JSON response in the `msg.payload` that
can be easily accessed by downstream nodes.

## Example

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/http-requests/parse-json-response.png)

<b>Flow JSON</b>

~~~json
[{"id":"14c60a10.794df6","type":"http request","z":"c9a81b70.8abed8","name":"","method":"GET","ret":"obj","url":"https://jsonplaceholder.typicode.com/posts/{{post}}","tls":"","x":390,"y":500,"wires":[["b4ea8dd4.61a05"]]},{"id":"b4ea8dd4.61a05","type":"debug","z":"c9a81b70.8abed8","name":"","active":true,"console":"false","complete":"payload.title","x":570,"y":500,"wires":[]},{"id":"3479192a.04f016","type":"inject","z":"c9a81b70.8abed8","name":"post id","topic":"","payload":"2","payloadType":"str","repeat":"","crontab":"","once":false,"x":90,"y":500,"wires":[["e69250cf.368fd"]]},{"id":"e69250cf.368fd","type":"change","z":"c9a81b70.8abed8","name":"","rules":[{"t":"set","p":"post","pt":"msg","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":230,"y":500,"wires":[["14c60a10.794df6"]]}]
~~~

We have reconfigured the flow from the [Set the URL of a Request URL recipe](./set-request-url)
by changing the <code class="node">HTTP Request</code> node configuration.  The <code class="node">Debug</code>
node has been modified to display only the `title` property of the parsed JSON response:

~~~text
"qui est esse"
~~~


## Discussion

If your HTTP request returns XML, the <code class="node">XML</code> node can be used to parse JavaScript objects from XML documents.