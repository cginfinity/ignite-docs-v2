---
id: generate-jwt
title: Generate a JSON Web Token
sidebar_label: Generate JWT
---

## Problem

You want to generate a JSON web token for authentication.

## Solution

Drag and drop an <code class="node">Http in</code> node to create an endpoint to receive the http requests.
Use a <code class="node">Function</code> node and set some data as payload for the JWT.
Drag and drop a <code class="node">JWT</code> node and define your JWT configuration.
Select "Generate" as the action from the dropdown.
Use another <code class="node">Function</code> node to send the token as an access_token back to the client

### Configure Setting

- #### Open Properties

    Double click on the node "jwt" and open the properties.

     ![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/open-properties.png)

- #### Add Configuration

    Click on the edit button and add configuration. Set any secret key. Give some name to this configuration like **igniteadmin**. You can also change the expiration time for the JWT and algorithm. Then click on button **Add**.

     ![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/edit-configuration.png)

Select mode as generate and then click **"Done"**

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/done-configuration.png)
 
Click **"Deploy"**

## Example

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/generate-jwt.png)

<b>Flow JSON</b>

~~~json
[{"id":"2efaf863.f0c7a8","type":"http response","z":"99f38f53.62683","name":"","statusCode":"","headers":{"content-type":"application/json"},"x":710,"y":280,"wires":[]},{"id":"f115185f.c4bcd8","type":"function","z":"99f38f53.62683","name":"Setting jwt as access_token","func":"msg.payload = {\n    \"access_token\" : msg.payload\n}\nreturn msg;","outputs":1,"noerr":0,"x":480,"y":280,"wires":[["2efaf863.f0c7a8"]]},{"id":"91ef189c.6f3fb8","type":"jwt","z":"99f38f53.62683","name":"creating jwt","jwtconfig":"766dcb94.6ebc04","generatejwt":"true","outputs":1,"x":210,"y":280,"wires":[["f115185f.c4bcd8"]]},{"id":"34c70aa9.45ad56","type":"function","z":"99f38f53.62683","name":"Setting payload to encode","func":"msg.payload = {\n    \"name\" : \"CYber Group Inc.\",\n    \"Domain\" : \"Information Technology & Services\",\n    \"Offices\" : {\n        \"Dallas\" :  \"12900 Preston Road, Ste 900, Dallas, TX, 75230\",\n        \"India\" : \"30/1 Knowledge Park III, Greater Noida\"\n    }\n}\nreturn msg;","outputs":1,"noerr":0,"x":370,"y":180,"wires":[["91ef189c.6f3fb8"]]},{"id":"588127fb.fa4d78","type":"http in","z":"99f38f53.62683","name":"","url":"/jwt/generate","method":"get","upload":false,"swaggerDoc":"","x":130,"y":180,"wires":[["34c70aa9.45ad56"]]},{"id":"766dcb94.6ebc04","type":"jwt-config","z":"","name":"igniteadmin","expiresin":"86400","algorithm":"HS256"}]
~~~

## Get Access Token
Copy runtime URL from menu.

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/copy-runtime-url.png)
 
Paste the URL in new tab, without press enter. Below is the sample runtime. Your runtime URL will be different.

https://ignite-demo.herokuapp.com/

Now add the demo JWT end point as mention in the above example with the Runtime URL you just copied.

https://ignite-demo.herokuapp.com/jwt/generate

Hit enter to go to the URL. You will get access token

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/security/access-token.png)

## Discussion

This flow generates a JWT from the given payload and sends it back to the client as the access_token.

JWTs are helpful in authorizing users requesting for a particular resource.