---
id: define-metadata-model
title: Define a Metadata Model
sidebar_label: Define a Metadata Model
---

## Problem

You want to define a metadata model for your OData Service.

## Solution

Drag and drop an <code class="node">Http in</code> node to receive the http requests.
Use a <code class="node">Function</code> node to define your database schema and connect it to <code class="node">Http in</code> node.
Use a <code class="node">Debug</code> node and connect it to the <code class="node">Function</code> node to log out the model in the debug window to verify.

## Example

![](../assets/odata/define-metadata-model.png)

<b>Flow JSON</b>

```json
[{"id":"a62b22db.8b0d6","type":"http in","z":"29efa5eb.87dd3a","name":"","url":"/root/*","method":"get","upload":false,"swaggerDoc":"","x":300,"y":320,"wires":[["cf5f06eb.87b3c8"]]},{"id":"cf5f06eb.87b3c8","type":"function","z":"29efa5eb.87dd3a","name":"users EDM","func":"msg.model = {\n    namespace: \"ignite\",\n    entityTypes: {\n        \"users\": {\n            \"id\": {\"type\": \"Edm.Int32\", \"key\": true},\n            \"name\": {\"type\": \"Edm.String\"},            \n            \"username\": {\"type\": \"Edm.String\"}            \n        }\n    },   \n    entitySets: {\n        \"users\": {\n            entityType: \"ignite.users\"\n        }\n    }\n}\nreturn msg;","outputs":1,"noerr":0,"x":510,"y":320,"wires":[["75495530.2f6adc"]]},{"id":"75495530.2f6adc","type":"debug","z":"29efa5eb.87dd3a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"model","targetType":"msg","x":730,"y":320,"wires":[]}]
```

## Discussion

The metadata model is used to generate model specific queries and exchange metadata with the OData Connector.

In the example flow, we have defined a sample "users" edm using a <code class="node">Function</code> node.

This model is used to generate EDMX response for metadata requests.