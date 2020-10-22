---
id: map-range
title: Map a property between different numeric ranges
sidebar_label: Map Range
---

## Problem

You want to scale a number from one numeric range to another. For example, a
sensor reading in the range 0 - 1023 should be mapped to a voltage range of 0 - 5.

## Solution

Use the <code class="node">Range</code> node to map between the defined ranges.

## Example

![](../assets/messages/map-between-different-number-ranges.png)

<b>Flow JSON</b>

## Discussion

The <code class="node">Range</code> node can be used to linearly scale between two
different numberic ranges.

By default, the result is not constrained to the range defined in the node. This means
using the voltage example above, a value of 2046 would map to a result of 10.

The node can be configured to constrain the result to the target range, or apply simple
modulo arithmetic so the value wraps within the target range.
