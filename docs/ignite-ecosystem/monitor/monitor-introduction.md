---
id: monitor-introduction
title: Introduction
sidebar_label: Introduction
---

## About

Monitor is used for getting the information about the node flow status in various forms (graphical metrics, Audit and scheduled task (job) which is running in the background). 

![img](/assets/docs/monitor/ignite-monitor-open-from-editor.png)

It consists mainly three tabs-

### Metric

Metric tab, you will get the information about nodes like error, http, http status code, http response time, flows, nodes (types), CPU and memory etc.

![img](/assets/docs/monitor/ignite-monitor-metric.png)

### Task

Task consist of background job details if any scheduled. If not any job scheduled then you will get message as below-

![img](/assets/docs/monitor/ignite-monitor-task.png)

If you will scheduled any job, then you will get information about the scheduled job like below-

### Example

![img](/assets/docs/monitor/scheduled-task.png)
![img](/assets/docs/monitor/scheduled-task-properties.png)

<b>Flow JSON</b>

~~~json
[{"id":"31800cdb.541ae4","type":"inject","z":"32f5620c.0d24de","name":"","topic":"","payload":"","payloadType":"date","repeat":"1","crontab":"","once":false,"onceDelay":0.1,"x":330,"y":280,"wires":[["69ee6986.3bd458"]]},{"id":"69ee6986.3bd458","type":"debug","z":"32f5620c.0d24de","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":520,"y":280,"wires":[]}]
~~~

![img](/assets/docs/monitor/ignite-monitor-task1.png)

### Audit

This part consist of user's deployment log information like which user deploy flow at which time and what type was the deployment.

![img](/assets/docs/monitor/ignite-monitor-audit.png)


To know how to use monitor, please visit [here](/docs/ignite-ecosystem/monitor/how-to-use)
