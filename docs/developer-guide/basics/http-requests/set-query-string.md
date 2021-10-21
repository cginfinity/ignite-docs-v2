---
id: set-query-string-params
title: Set the Query String Parameters in a URL
sidebar_label: Set Query String
---

## Problem

You want to set the query string parameters of a URL for an HTTP request.

## Solution

Use the <code class="node">HTTP Request</code> node's support for [mustache](http://mustache.github.io/mustache.5.html) to substitute query parameter strings in URLs directly.

## Example

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/http-requests/set-query-string.png)

<b>Flow JSON</b>

~~~json
[{"id":"e95c6faa.ab2e1","type":"http request","z":"c9a81b70.8abed8","name":"","method":"GET","ret":"txt","url":"https://query.yahooapis.com/v1/public/yql?q={{{query}}}&format=json","tls":"","x":470,"y":420,"wires":[["7cf30700.5bc978"]]},{"id":"7cf30700.5bc978","type":"debug","z":"c9a81b70.8abed8","name":"","active":true,"console":"false","complete":"payload","x":630,"y":420,"wires":[]},{"id":"637d3c55.eb3084","type":"inject","z":"c9a81b70.8abed8","name":"query parameter","topic":"","payload":"select astronomy.sunset from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"maui, hi\")","payloadType":"str","repeat":"","crontab":"","once":false,"x":120,"y":420,"wires":[["b001d489.d8f818"]]},{"id":"b001d489.d8f818","type":"change","z":"c9a81b70.8abed8","name":"","rules":[{"t":"set","p":"query","pt":"msg","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":300,"y":420,"wires":[["e95c6faa.ab2e1"]]}]
~~~



The <code class="node">Inject</code> node generates a query string that is to be sent in the URL.  The <code class="node">Change</code> node changes this to `msg.query` which is substituted in the mustache template in the <code class="node">HTTP Request</code> node URL property configured as shown:

~~~text
https://query.yahooapis.com/v1/public/yql?q={{{query}}}&format=json
~~~


The returned JSON content is the sunset in Hawaii:

~~~text
"{"query":{"count":1,"created":"2017-01-22T01:31:07Z","lang":"en-US","results":{"channel":{"astronomy":{"sunset":"6:9 pm"}}}}}"
~~~



## Discussion

By default, mustache will escape any HTML entities in the values it substitutes. To ensure HTML escaping is not used in your URL use `<b>Flow JSON</b>{{{triple}}}` braces.
