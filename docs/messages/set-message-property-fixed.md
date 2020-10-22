---
id: set-message-property-fixed
title: Set a message property to a fixed value
sidebar_label: Set Property Fixed
---

## Problem

You want to set a message property to a fixed value.

## Solution

Use the <code class="node">Change</code> node to set the property of the message.

## Example

![](../assets/messages/set-message-property-fixed.png)

<b>Flow JSON</b>

## Discussion

The <code class="node">Change</code> node can be used to set properties of a message.

The node supports setting various JavaScript types as well as some Ignite specific types.

 - strings: `"hello world"`
 - numbers: `42`
 - boolean: `true`/`false`
 - timestamp: the current time, in milliseconds, since epoch (January 1st, 1970)
 - JSON: a JSON string that will be parsed to its Object representation
 - Buffer: a Node.js Buffer object

It also supports setting a property to a value based on the value of context properties,
other message properties or a JSONata expression.
