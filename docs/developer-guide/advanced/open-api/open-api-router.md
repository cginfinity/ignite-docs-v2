---
id: open-api-router
title: OpenAPI Router
sidebar_label: OpenAPI Router
---

## About

This node, creates end points within ignite runtime, based on the openAPI URL provided.


## Usage

Enter the URL to your OpenAPI configuration (JSON or YAML file) and push the <b>Load specification</b> button. You will get the list of end points. Once you will deploy this change, all the list of end points will be creating separate end point within the ignite-runtime.

### Example

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/open-api/ignite-open-api-router-example.png)

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/open-api/ignite-open-api-router-example-flow.png)

<b>Flow JSON</b>

~~~json
[{"id":"fc80d035.d7951","type":"tab","label":"Flow 1","disabled":false,"info":""},{"id":"26a4102e.6d741","type":"ignite-openapirouter","z":"fc80d035.d7951","name":"","docurl":"https://ignite-aux.herokuapp.com/schema/v2","hiddenendpointsdata":"[{\"method\":\"POST\",\"url\":\"/v2/pet\"},{\"method\":\"PUT\",\"url\":\"/v2/pet\"},{\"method\":\"GET\",\"url\":\"/v2/pet/findByStatus\"},{\"method\":\"GET\",\"url\":\"/v2/pet/findByTags\"},{\"method\":\"GET\",\"url\":\"/v2/pet/:petId\"},{\"method\":\"POST\",\"url\":\"/v2/pet/:petId\"},{\"method\":\"DELETE\",\"url\":\"/v2/pet/:petId\"},{\"method\":\"POST\",\"url\":\"/v2/pet/:petId/uploadImage\"},{\"method\":\"GET\",\"url\":\"/v2/store/inventory\"},{\"method\":\"POST\",\"url\":\"/v2/store/order\"},{\"method\":\"GET\",\"url\":\"/v2/store/order/:orderId\"},{\"method\":\"DELETE\",\"url\":\"/v2/store/order/:orderId\"},{\"method\":\"POST\",\"url\":\"/v2/user\"},{\"method\":\"POST\",\"url\":\"/v2/user/createWithArray\"},{\"method\":\"POST\",\"url\":\"/v2/user/createWithList\"},{\"method\":\"GET\",\"url\":\"/v2/user/login\"},{\"method\":\"GET\",\"url\":\"/v2/user/logout\"},{\"method\":\"GET\",\"url\":\"/v2/user/:username\"},{\"method\":\"PUT\",\"url\":\"/v2/user/:username\"},{\"method\":\"DELETE\",\"url\":\"/v2/user/:username\"}]","outputs":20,"x":160,"y":940,"wires":[[],[],["274f875a.f19818"],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]},{"id":"274f875a.f19818","type":"template","z":"fc80d035.d7951","name":"","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"get pet list by status","output":"str","x":380,"y":840,"wires":[["8cfa15fd.210c28"]]},{"id":"8cfa15fd.210c28","type":"http response","z":"fc80d035.d7951","name":"","statusCode":"","headers":{},"x":590,"y":840,"wires":[]}]
~~~

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/open-api/ignite-open-api-router-usage.gif)

## View in Designer

By clicking on button 'View in Designer' it will load the OpenAPI in Ignite Designer in a new tab.