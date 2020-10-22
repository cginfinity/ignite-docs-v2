---
id: convert-req-to-query
title: Convert an OData Request to a SQL Query
sidebar_label: Convert Request to Query
---

## Problem

You want to intercept OData requests and convert them into SQL statements that make sense in OData context.

## Solution

Drag and drop an <code class="node">Http in</code> node to receive the http requests.
Use a <code class="node">Function</code> node to define your database schema and connect it to <code class="node">Http in</code> node.
Drag and drop an <code class="node">Odata-in</code> node and connect it to the <code class="node">Function</code> node.
Use a <code class="node">Debug</code> node and connect it to the <code class="node">Odata-in</code> node to log out the sql-statements in the debug window to verify.

## Example

![](../assets/odata/convert-req-to-query.png)

<b>Flow JSON</b>

```json
[{"id":"a62b22db.8b0d6","type":"http in","z":"29efa5eb.87dd3a","name":"","url":"/root/*","method":"get","upload":false,"swaggerDoc":"","x":140,"y":140,"wires":[["cf5f06eb.87b3c8"]]},{"id":"cf5f06eb.87b3c8","type":"function","z":"29efa5eb.87dd3a","name":"users EDM","func":"msg.model = {\n    namespace: \"ignite\",\n    entityTypes: {\n        \"users\": {\n            \"id\": {\"type\": \"Edm.Int32\", \"key\": true},\n            \"name\": {\"type\": \"Edm.String\"},            \n            \"username\": {\"type\": \"Edm.String\"}            \n        }\n    },   \n    entitySets: {\n        \"users\": {\n            entityType: \"ignite.users\"\n        }\n    }\n}\nreturn msg;","outputs":1,"noerr":0,"x":350,"y":140,"wires":[["9abf5f23.f36f5"]]},{"id":"75495530.2f6adc","type":"debug","z":"29efa5eb.87dd3a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","x":690,"y":140,"wires":[]},{"id":"9abf5f23.f36f5","type":"odata in","z":"29efa5eb.87dd3a","name":"","x":520,"y":140,"wires":[["75495530.2f6adc"]]}]
```

## Discussion

This flow intercepts OData requests and converts them into database specific SQL statements.

These statements can be executed with the help of any desirable database node, we recommend using <code class="node">Ignite-Sequelize</code>.