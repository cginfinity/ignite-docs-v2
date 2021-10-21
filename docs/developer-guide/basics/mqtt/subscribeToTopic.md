---
id: subscribe
title: Subscribe to a Topic
sidebar_label: Subscribe to a Topic
---

## Problem

You want to subscribe to messages on an MQTT topic.

## Solution

Use the <code class="node">MQTT Input</code> node to subscribe to the broker and
receive messages published to matching topics.

## Example

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/mqtt/subscribe-to-topic.png)

<b>Flow JSON</b>

~~~json
[{"id":"8024cb4.98c5238","type":"mqtt in","z":"eda2a949.74ea98","name":"","topic":"sensors/#","qos":"2","broker":"61de5090.0f5d9","x":240,"y":180,"wires":[["15d727dd.33e808"]]},{"id":"15d727dd.33e808","type":"debug","z":"eda2a949.74ea98","name":"","active":true,"console":"false","complete":"false","x":390,"y":180,"wires":[]},{"id":"61de5090.0f5d9","type":"mqtt-broker","z":"","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
~~~



## Discussion

The <code class="node">MQTT Input</code> node must be hardcoded with the topic filter
to use - it cannot be changed dynamically.

One possible workaround is to set the topic to an environment variable such as
`$(MY_TOPIC)`. When the Ignite runtime starts it will substitute the environment
variable value into that property of the node. This does allow the topic to be changed, although
doing so does require a restart of Ignite to pick up changes to the environment variable.

You can also use MQTT wildcards, `+` for a single topic level or `#` for multiple. This allows
you to receive multiple topics with a single node. The messages will be sent from
the node with `msg.topic` set to the actual topic received.
