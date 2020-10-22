---
id: execute-a-query
title: Execute a query - Sequelize node
sidebar_label: Execute a Query
---

## Problem

You want to execute a sql query using Ignite-Sequelize node.

## Solution

Drag and drop an <code class="node">Inject</code> node to start the flow.
Use a <code class="node">Sequelize</code> node and draw a wire from inject node to <code class="node">sequelize</code> node.
Use the config node inside <code class="node">Sequelize</code> node to define your database configurataion.
Drag and drop a <code class="node">Debug</code> node and connect to sequelize node to print out the response in the debug window.

## Example

![](../assets/sequelize/execute-a-query.png)

<b>Flow JSON</b>

```json
[{"id":"5c243fd4.8e65d","type":"inject","z":"e80b077d.dc8e78","name":"","topic":"start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":330,"y":280,"wires":[["e7daf9cc.61e858"]]},{"id":"e7daf9cc.61e858","type":"sequelize","z":"e80b077d.dc8e78","name":"","usepayload":false,"query":"SELECT * FROM Users;","database":"","output":true,"outputs":1,"x":560,"y":280,"wires":[["bb949601.188718"]]},{"id":"bb949601.188718","type":"debug","z":"e80b077d.dc8e78","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":770,"y":280,"wires":[]}]
```

## Discussion

Sequelize node can be used to connect to a variety of Databases.

In the example flow, we are executing a simple select statement using a <code class="node">Sequelize</code> node.

The <code class="node">Catch</code> receives the error which passes the message back to the <code class="node">Function</code> node to sebd an error response.

You can also supply query via payload by ticking the checkbox against "Use Query From Payload".
