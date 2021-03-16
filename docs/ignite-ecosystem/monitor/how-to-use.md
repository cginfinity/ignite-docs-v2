---
id: how-to-use
title: How to Use Monitor
sidebar_label: How to Use Monitor
---

## Usage

To see the graphical changes in metric, you can just create and http-in, template and http-response node. Deploy the changes and hit the newly created end point and then see the changes in metric section. If any error occurred the <b>Error</b> metric will show graphical changes. To see the background job in the task list, you just need to add an inject node with some repeat interval.

### Example

![img](/assets/docs/monitor/ignite-monitor-flow.png)

<b>Flow JSON</b>

~~~json
[{"id":"7b8383db.f2f7cc","type":"inject","z":"fc80d035.d7951","name":"","topic":"","payload":"","payloadType":"date","repeat":"1","crontab":"","once":false,"onceDelay":0.1,"x":170,"y":200,"wires":[["7f7ec554.4642ec"]]},{"id":"340d7943.9eb076","type":"http in","z":"fc80d035.d7951","name":"","url":"/test","method":"get","upload":false,"swaggerDoc":"","x":150,"y":120,"wires":[["3ba8cf79.dec4"]]},{"id":"f9dc61f9.c47ce","type":"http response","z":"fc80d035.d7951","name":"","statusCode":"","headers":{},"x":440,"y":120,"wires":[]},{"id":"3ba8cf79.dec4","type":"template","z":"fc80d035.d7951","name":"","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"This is the payload.","output":"str","x":300,"y":120,"wires":[["f9dc61f9.c47ce"]]},{"id":"7f7ec554.4642ec","type":"sequelize","z":"fc80d035.d7951","name":"","usepayload":false,"query":"SELECT * FROM ;","output":true,"outputs":1,"x":360,"y":200,"wires":[[]]}]
~~~

![img](/assets/docs/monitor/ignite-monitor-how-to-use.gif)