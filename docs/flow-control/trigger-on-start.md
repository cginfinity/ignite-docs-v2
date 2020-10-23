---
id: trigger-on-start
title: Trigger a flow whenever Ignite Runtime starts
sidebar_label: Trigger On Start
---

## Problem

You want to trigger a flow whenever Ignite Runtime starts.

This could be used to initialise context variables, or to send a notification
that Ignite Runtime has been restarted.

## Solution

Use an <code class="node">Inject</code> node configured to fire once on start.

## Example

![](../assets/flow-control/trigger-on-start.png)

<b>Flow JSON</b>

```json
[{"id":"e60b12c1.93bb3","type":"inject","z":"535331d8.55c1f","name":"","topic":"","payload":"Started!","payloadType":"str","repeat":"","crontab":"","once":true,"x":140,"y":540,"wires":[["9b1d7727.56d0f8"]]},{"id":"9b1d7727.56d0f8","type":"debug","z":"535331d8.55c1f","name":"","active":true,"console":"false","complete":"false","x":410,"y":540,"wires":[]}]
```


## Discussion

When configured to fire on start, the <code class="node">Inject</code> node will
be automatically triggered a few hundred milliseconds after it is deployed. This
delay is used to help ensure the rest of the flows have been created and Started
by this point.

The node will trigger whenever it is deployed.
