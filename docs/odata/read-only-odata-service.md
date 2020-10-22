---
id: read-only-odata-service
title: OData Service with Read Only Support
sidebar_label: Read Only OData Service
---

## Problem

You want to create an OData Service with read support(GET) only.

## Solution

Drag and drop an <code class="node">Http in</code> node to receive with GET method and connect it to an <code class="node">Odata-in</code> node.
Use a <code class="node">Function</code> node before the<code class="node">Odata-in</code> node OR an <code class="node">EDM</code> node inside the<code class="node">Odata-in</code> node to define your database schema.
Connect the <code class="node">Odata-in</code> node to a <code class="node">Sequelize</code> node and configure your database settings.
Draw a wire from the<code class="node">Sequelize</code> node to an<code class="node">Odata-out</code> node to formulate an OData compliant response.
Use an <code class="node">Http response</code> node to send the http response back to the client.

## Example

![](../assets/odata/read-only-odata-service.png)

<b>Flow JSON</b>

```json
[{"id":"142e39e1.410ee6","type":"sequelize","z":"29efa5eb.87dd3a","name":"Configure database","usepayload":false,"query":"","database":"","output":true,"outputs":1,"x":310,"y":280,"wires":[["9af76df7.0ace"]]},{"id":"1de72c64.80d9c4","type":"http in","z":"29efa5eb.87dd3a","name":"","url":"/root/*","method":"get","upload":false,"swaggerDoc":"","x":120,"y":180,"wires":[["d3f120a.dec7be"]]},{"id":"d3f120a.dec7be","type":"function","z":"29efa5eb.87dd3a","name":"users EDM","func":"msg.model = {\n    namespace: \"ignite\",\n    entityTypes: {\n        \"users\": {\n            \"id\": {\"type\": \"Edm.Int32\", \"key\": true},\n            \"name\": {\"type\": \"Edm.String\"},            \n            \"username\": {\"type\": \"Edm.String\"}            \n        }\n    },   \n    entitySets: {\n        \"users\": {\n            entityType: \"ignite.users\"\n        }\n    }\n}\nreturn msg;","outputs":1,"noerr":0,"x":310,"y":180,"wires":[["1ae9a04f.eb2fe"]]},{"id":"1cc5b619.1e3a7a","type":"http response","z":"29efa5eb.87dd3a","name":"","statusCode":"","headers":{},"x":750,"y":280,"wires":[]},{"id":"9af76df7.0ace","type":"odata out","z":"29efa5eb.87dd3a","name":"","x":540,"y":280,"wires":[["1cc5b619.1e3a7a"]]},{"id":"1ae9a04f.eb2fe","type":"odata in","z":"29efa5eb.87dd3a","name":"","x":500,"y":180,"wires":[["142e39e1.410ee6"]]}]
```

## Discussion

The above OData service can be used to create OData compliant REST APIs with read support only.

In the example flow, we have defined a sample edm "users" using both, a <code class="node">Function</code> node and the <code class="node">EDM</code> node.

Using this flow you can send data from your Database to another OData Consumer.
