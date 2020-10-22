---
id: move-property
title: Move a message property
sidebar_label: Move Property
---

## Problem

You want to move a message property to a different property.

## Solution

Use the <code class="node">Change</code> node to move a property.

## Example

![](../assets/messages/move-message-property.png)

<b>Flow JSON</b>

## Discussion

The <code class="node">Change</code> node can be used to move a property of a message.

It can be done as two separate actions in the <code class="node">Change</code> node;
first using a Set action to copy the property to its new location and then a Delete
action to remove the original.

Alternatively, the node supports a Move action that does it in one step.
