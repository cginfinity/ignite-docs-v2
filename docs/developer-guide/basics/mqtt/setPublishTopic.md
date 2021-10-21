---
id: set-topic
title: Set the Topic of a Published Message
sidebar_label: Set the Topic
---

## Problem

You want to set the topic of a published MQTT message dynamically.

## Solution

Set the `topic` message property, before sending the message to an <code class="node">MQTT Output</code> node.

## Example

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/mqtt/set-publish-topic.png)

<b>Flow JSON</b>

~~~json
[{"id":"73abc692.bb3838","type":"mqtt out","z":"eda2a949.74ea98","name":"","topic":"","qos":"","retain":"","broker":"61de5090.0f5d9","x":410,"y":300,"wires":[]},{"id":"ef5a01ee.a940d","type":"inject","z":"eda2a949.74ea98","name":"kitchen temperature","topic":"sensors/kitchen/temperature","payload":"22","payloadType":"num","repeat":"","crontab":"","once":false,"x":250,"y":300,"wires":[["73abc692.bb3838"]]},{"id":"61de5090.0f5d9","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
~~~



In this example, the <code class="node">Inject</code> node sets the `msg.topic`,
but you don't always need to use an inject node to do this.

## Discussion

Ensure the `Topic` field in the <code class="node">MQTT Output</code> configuration dialog is left blank to use the `topic` message property.
