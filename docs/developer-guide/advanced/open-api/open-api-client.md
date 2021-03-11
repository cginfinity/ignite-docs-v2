---
id: open-api-client
title: OpenAPI Client
sidebar_label: OpenAPI Client
---

## About

This node, is used to load and hit openAPI end point


## Usage

Enter the URL to your openAPI configuration (json or yaml file) and push the <b>Load Specification</b> button. That's it. You can now select the operation you want to run.

### Example

![img](/assets/docs/open-api/ignite-open-api-client-example.png)

<!-- ![img](/assets/docs/open-api/ignite-open-api-client-example-low.png) -->

<b>Flow JSON</b>

~~~json
[{"id":"8bbf076d.854308","type":"ignite-openapi","z":"fc80d035.d7951","name":"","openApiUrl":"https://ignite-aux.herokuapp.com/schema/v2","api":"pet","operation":"findPetsByStatus","operationData":{"name":"Finds Pets by status"},"errorHandling":"","parameters":{"query status":{"name":"status","in":"query","required":true,"value":"available","isActive":true,"inputType":{}}},"contentType":"application/json","outputs":1,"x":460,"y":880,"wires":[["9b986a29.be9858"]]}]
~~~

![img](/assets/docs/open-api/ignite-open-api-client.gif)

## View in Designer

By clicking on button 'View in Desinger' it will load the OpenAPI in Ignite Desinger in a new tab.