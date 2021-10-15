---
id: verify-jwt
title: Verify a JSON Web Token
sidebar_label: Verify JWT
---

## Problem

You want to verify a JSON web token.

## Solution

Drag and drop an <code class="node">Http in</code> node to create an endpoint to receive the http requests.
Use a <code class="node">JWT</code> node and configure the settings, select "Verify" from the dropdown.
As soon as you click done, you'll see two outputs from the JWT node. First one is for the Good case [JWT is valid] while the second one is for the Bad case [JWT is corrupt or expired]. Implement your business logic accordingly and send the response back to the client. For this example, we are just going to tell the user if the JWT is valid or not.
Use an <code class="node">Http response</code> node to send the response back to the client.

### Configure Setting

- #### Open Properties

    Double click on the node "jwt" and open the properties.

     ![img](/assets/docs/security/select-configuration-validate.png)

- #### Add Configuration

    Select the [previously created configuration setting](/docs/developer-guide/advanced/security/generate-jwt#add-configuration) from dropdown and set Mode as **“validate”**.
 
click **"Done"**. Then click **"Deploy"**.


## Example

![img](/assets/docs/security/verify-jwt.png)

<b>Flow JSON</b>

~~~json
[{"id":"4a604514.9dfafc","type":"http in","z":"99f38f53.62683","name":"","url":"/jwt/verify","method":"post","upload":false,"swaggerDoc":"","x":120,"y":180,"wires":[["d012a70d.23de28"]]},{"id":"d012a70d.23de28","type":"jwt","z":"99f38f53.62683","name":"","jwtconfig":"","generatejwt":false,"outputs":2,"x":290,"y":180,"wires":[["ce2c2aa8.eedf48"],["84ad82d.e06a68"]]},{"id":"ce2c2aa8.eedf48","type":"function","z":"99f38f53.62683","name":"jwt is Intact","func":"msg.statusCode =200;\nmsg.payload = {\n    message : \"Jwt is verified\"\n}\nreturn msg;","outputs":1,"noerr":0,"x":510,"y":160,"wires":[["13cac157.1eb0df"]]},{"id":"84ad82d.e06a68","type":"function","z":"99f38f53.62683","name":"Jwt is corrupt","func":"msg.statusCode =401;\nmsg.payload = {\n    message : \"There's an issue with jwt\"\n}\nreturn msg;","outputs":1,"noerr":0,"x":510,"y":200,"wires":[["13cac157.1eb0df"]]},{"id":"13cac157.1eb0df","type":"http response","z":"99f38f53.62683","name":"","statusCode":"","headers":{"content-type":"application/json"},"x":690,"y":180,"wires":[]}]
~~~

### How to Test From Postman

Open postman, provide API end point, for **Post** method

https://ignite-demo.herokuapp.com/jwt/verify

select **"Bearer Token"** under **"Authorization"** tab, provide the access token that you received from [Get Access Token](/docs/developer-guide/advanced/security/generate-jwt#get-access-token)

![img](/assets/docs/security/postman-jwt-verify.png)
 
Click on button **“Send”** and you will get message as **“Jwt is verified”**

![img](/assets/docs/security/jwt-verified.png)

## Discussion

This flow verifies the Authorization header of an incoming request against the one defined within the basic-auth settings.

The JWT node simplifies the authorization process so that our users can focus more on the business logic.