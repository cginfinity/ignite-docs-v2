---
id: introduction
title: Introduction to JSONata Node
sidebar_label: Introduction
---

## Introduction

An Ignite JSONata node is used to extract meaningful/customized data from your input JSON and JSONata query. Based on the JSONata query passed to the Ignite JSONata node, it will return the result in JSON structure.

## How to Use

Drag and drop an "inject" node to inject a message into a flow. Use a template node, define your JSON and JSONata query and connect it to an "inject" node. Connect a template node with an "ignite-jsonata" node and connect it to the debug node to get the value of resultant data from the "jsonataResult" field.

### Example

![img](/assets/docs/jsonata/ignite-jsonata-flow.png)

<b>Flow JSON</b>

~~~json
[{"id":"64a88f88.495d4","type":"ignite-jsonata","z":"6ca7dbb0.7c2e34","name":"ignite-jsonata","property":"payload","jsonata":"","jsonataOpts":"","x":690,"y":160,"wires":[["fd64a210.48f21"]]},{"id":"cd6af911.1cf4f8","type":"inject","z":"6ca7dbb0.7c2e34","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":240,"y":160,"wires":[["5117bd10.7596a4"]]},{"id":"fd64a210.48f21","type":"debug","z":"6ca7dbb0.7c2e34","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"jsonataResult","targetType":"msg","x":870,"y":160,"wires":[]},{"id":"8dfaf10c.b3b12","type":"template","z":"6ca7dbb0.7c2e34","name":"jsonata query","field":"jsonata","fieldType":"msg","format":"json","syntax":"mustache","template":"$sum(Account.Order.Product.(Price * Quantity))","output":"str","x":520,"y":160,"wires":[["64a88f88.495d4"]]},{"id":"5117bd10.7596a4","type":"template","z":"6ca7dbb0.7c2e34","name":"json","field":"payload","fieldType":"msg","format":"json","syntax":"mustache","template":"{\n  \"Account\": {\n    \"Account Name\": \"Firefly\",\n    \"Order\": [\n      {\n        \"OrderID\": \"order103\",\n        \"Product\": [\n          {\n            \"Product Name\": \"Bowler Hat\",\n            \"ProductID\": 858383,\n            \"SKU\": \"0406654608\",\n            \"Description\": {\n              \"Colour\": \"Purple\",\n              \"Width\": 300,\n              \"Height\": 200,\n              \"Depth\": 210,\n              \"Weight\": 0.75\n            },\n            \"Price\": 34.45,\n            \"Quantity\": 2\n          },\n          {\n            \"Product Name\": \"Trilby hat\",\n            \"ProductID\": 858236,\n            \"SKU\": \"0406634348\",\n            \"Description\": {\n              \"Colour\": \"Orange\",\n              \"Width\": 300,\n              \"Height\": 200,\n              \"Depth\": 210,\n              \"Weight\": 0.6\n            },\n            \"Price\": 21.67,\n            \"Quantity\": 1\n          }\n        ]\n      },\n      {\n        \"OrderID\": \"order104\",\n        \"Product\": [\n          {\n            \"Product Name\": \"Bowler Hat\",\n            \"ProductID\": 858383,\n            \"SKU\": \"040657863\",\n            \"Description\": {\n              \"Colour\": \"Purple\",\n              \"Width\": 300,\n              \"Height\": 200,\n              \"Depth\": 210,\n              \"Weight\": 0.75\n            },\n            \"Price\": 34.45,\n            \"Quantity\": 4\n          },\n          {\n            \"ProductID\": 345664,\n            \"SKU\": \"0406654603\",\n            \"Product Name\": \"Cloak\",\n            \"Description\": {\n              \"Colour\": \"Black\",\n              \"Width\": 30,\n              \"Height\": 20,\n              \"Depth\": 210,\n              \"Weight\": 2\n            },\n            \"Price\": 107.99,\n            \"Quantity\": 1\n          }\n        ]\n      }\n    ]\n  }\n}","output":"str","x":370,"y":160,"wires":[["8dfaf10c.b3b12"]]}]
~~~

![img](/assets/docs/jsonata/ignite-jsonata-node.gif)

## How to Install Ignite-JSONata Node

To install an "ignite-jsonata" node, you can go to the “Manage palette" section and search for "ignite-jsoanata" node and then simply install it.

![img](/assets/docs/jsonata/ignite-jsonata-node-install-1.gif)

## Discussion

Once you provide the JSON and JSONata query to filter out the result, you will get the filtered JSON output in "msg.jsonataResult" property.

You can find the ignite JSONata explorer for exploring purpose here: https://jsonata.cgignite.io