---
id: publish-message
title: Publish Messages to a Topic
sidebar_label: Publish Message
---

## Problem

You want to publish a message to an MQTT topic on a broker.

## Solution

Use the <code class="node">MQTT Output</code> node to publish messages to a topic.

## Example

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/mqtt/publish-to-topic.png)

<b>Flow JSON</b>

~~~json
[{"id":"9c138886.116928","type":"mqtt out","z":"eda2a949.74ea98","name":"","topic":"sensors/livingroom/temp","qos":"","retain":"","broker":"61de5090.0f5d9","x":430,"y":100,"wires":[]},{"id":"ff654e7f.32e9e","type":"inject","z":"eda2a949.74ea98","name":"temperature","topic":"","payload":"22","payloadType":"num","repeat":"","crontab":"","once":false,"x":230,"y":100,"wires":[["9c138886.116928"]]},{"id":"61de5090.0f5d9","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
~~~



## Discussion

The <code class="node">MQTT Output</code> node with an associated <code class="node">MQTT Config</code> node connected to an MQTT broker can be used to publish messages to a pre-configured topic.
