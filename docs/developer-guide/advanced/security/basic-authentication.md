---
id: basic-authentication
title: Secure Endpoints With Basic Authentication
sidebar_label: Basic Authentication
---

## Problem

You want to secure your Ignite API endpoints with basic authentication.

## Solution

Please follow below steps to setup basic auth.

### Drag Nodes

Drag and drop an <code class="node">Http in</code> node to receive the http requests.
Use a <code class="node">basic-auth</code> node and configure the settings. Check how to configure basic-auth setting.
Drag and drop two <code class="node">Function</code> nodes and set the response for good and bad cases.
Use an <code class="node">Http response</code> node to send the response back to the client

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/basic-authentication.png)



### Configure Setting

- #### Open Properties

    Double click on the node "basic-auth" and open the properties.

    ![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/basic-auth-edit-properties.png)

- #### Add Configuration

    Click on the edit button and add configuration. Set any username and password that you want to match when any user passed it to using basic authorization header to access the API end point that you want to create. In this case we are adding username=admin and password=admin.

    ![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/basic-auth-add-configuration.png)

    Click "Done"

    ![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/basic-auth-add-configuration-done.png)

    Click "Deploy"

    ![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/deploy.png)

### Example

<b>Flow JSON</b>

~~~json
[{"id":"190c3305.55dbfd","type":"http in","z":"32f5620c.0d24de","name":"","url":"/api/users","method":"get","upload":false,"swaggerDoc":"","x":200,"y":120,"wires":[["f46c6aea.a4e8e8"]]},{"id":"a9a02070.724df","type":"function","z":"32f5620c.0d24de","name":"goodcase response","func":"msg.statusCode = 200;\nmsg.payload = {\n    \"message\" : \"username and password are correct\"\n}\nreturn msg;","outputs":1,"noerr":0,"x":590,"y":100,"wires":[["bccd0e19.05bd1"]]},{"id":"bccd0e19.05bd1","type":"http response","z":"32f5620c.0d24de","name":"","statusCode":"","headers":{},"x":850,"y":140,"wires":[]},{"id":"acb10b74.0badf8","type":"function","z":"32f5620c.0d24de","name":"badcase response","func":"msg.statusCode = 401;\nmsg.payload = {\n    \"message\" : \"username or password is wrong\"\n}\nreturn msg;","outputs":1,"noerr":0,"x":590,"y":160,"wires":[["bccd0e19.05bd1"]]},{"id":"f46c6aea.a4e8e8","type":"basic","z":"32f5620c.0d24de","name":"Basic","basicconfig":"87d6da40.2f84f8","outputs":2,"x":390,"y":120,"wires":[["a9a02070.724df"],["acb10b74.0badf8"]]},{"id":"87d6da40.2f84f8","type":"basic-config","z":"","name":"Basic","username":"admin"}]
~~~

## How to Test From Postman

Open postman, provide API end point, select **"Basic Auth"** under **"Authorization"** tab, provide same Username and Password that you mentioned in the flow and click on button **"Send"**

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/basic-auth-testing.png)

If the username and password will not match with flow under **"basic-auth"** node then you will get different message.

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/basic-auth-testing-1.png)

## Discussion

This flow verifies the Authorization header of an incoming request against the one defined within the basic-auth settings.

This method is vastly supported including Salesforce Connect with OData Services.