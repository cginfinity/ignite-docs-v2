---
id: introduction
title: Introduction
sidebar_label: Introduction
---

## About

Ignite openAPI allows you to work with APIs defined by OpenAPI 3 (Swagger). You can set parameters within the Node-RED-UI and trigger the flow from within your flow.

It is based on <a href="https://github.com/swagger-api/swagger-js" target="_blank">swagger-js</a>.

## Nodes

Ignite openAPI contains two nodes.

### [OpenAPI Router](./open-api-router "OpenAPI-Router")


This node creates end points within ignite runtime, based on the openAPI url provided.


![img](/assets/docs/open-api/ignite-open-api-router.png)

### [OpenAPI Client](./open-api-client "OpenAPI-Client")

This node is used to load and hit open api end points.

![img](/assets/docs/open-api/ignite-open-api-client.png)

## Parameter Configuration

Each parameter has an input-field corresponding to its type. You can further define that a parameter shall be read from the incoming message object or define a jsonata expression.

JSON parameters may define a sample structure. You can set this as the value by clicking the corresponding button - either with only the required keys (set required) or with all keys (set default).

## Authentification

If the API requires an authentification token, you can log in using the standard `http-request` node of Node-RED. The JWT token you get as a response must then be put into `msg.openApiToken` to be automatically placed in the request-header as bearer authentification.

## Error Handling

You can choose how to handle a returning server error. The last server response object will be placed in msg.response instead of msg.error. This ensures that all 3 ways react the same.

* `Standard`: The flow moves on normally. You have to handle an server error in your flow.
* `Separate output`: Your flow will take a different way.
* `Throw an exception`: Throws an node.error which can be catched by the standard 'catch' node (usefull for many nodes with the same error handling).

## How To Install

![img](/assets/docs/open-api/ignite-open-api-install.gif)
