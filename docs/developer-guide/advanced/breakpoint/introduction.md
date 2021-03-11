---
id: introduction
title: Introduction
sidebar_label: Introduction
---

## About

breakpoint allows you to pause the execution of the flow and helps you to explore your JSON data (msg.payload) directly into the <a href="https://jsonata.cgignite.io/" target="_blank">Ignite JSONata Explorer</a>.

## Running Status


The <b>breakpoint</b> node initially starts with status <b>Stopped</b>.

![img](/assets/docs/breakpoint/ignite-breakpoint-stopped.png)

When you initiate a message within it, the node changes to status <b>Running</b>.

![img](/assets/docs/breakpoint/ignite-breakpoint-running.png)

Once the node finishes the timeout value and stops running service, the node changes to status <b>Resumed</b>.

![img](/assets/docs/breakpoint/ignite-breakpoint-resumed.png)

![img](/assets/docs/breakpoint/Ignite-breakpoint-status.gif)

## Properties

Below are the properties of breakpoint node.

### Timeout


Set the amout of time that you want to pause the execution of the flow and want to explore data into the <a href="https://jsonata.cgignite.io/" target="_blank">Ignite JSONata Explorer</a>. After the timeout period, the data will be automatically wiped out and the node status will be <b>Resumed</b>.

### Explore With JSONata


When the node is in <b>Running</b> status, data will be available in breakpoint node and when you will click on the button, data will be automatically loaded into JSONata explorer in another tab.

![img](/assets/docs/breakpoint/ignite-breakpoint-properties.png)