---
id: monitoring
title: Monitoring
sidebar_label: Monitoring 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Monitoring is used to enable Insight tab within Dashboard application. Runtime metrics details will be available within insight tab. This option is by default available with Sample <span class="link">[Standard Mode](/docs/getting-started/try-ignite/deploy-an-app/deploy-to-local/how-to-setup#knowing-start-mode)</span> in Runtime. Select Standard mode and download the docker compose file.


## Options

<Tabs
  defaultValue="Standard"
  values={[
    {label: 'Monitoring Mode', value: 'MonitoringMode'},
    {label: 'Monitoring History Retention Period', value: 'MonitoringHistoryRetentionPeriod'}
  ]}>
  <TabItem value="MonitoringMode">This option tells that monitoring is based on which mode. Currently we support only Postgres mode. Monitoring data saved into Postgres mode and showing insight details from there
</TabItem>
  <TabItem value="MonitoringHistoryRetentionPeriod">Monitoring history data persist for last 7 days by default. You can set it up to 90 days.
</TabItem>
</Tabs>

## Metrics Data Population 

<Tabs
  defaultValue="Digital Product Application"
  values={[
    {label: 'Digital Product Application Mode', value: 'DigitalProductApplication'},
    {label: 'On-Premise Application', value: 'OnPremiseApplication'}
  ]}>
  <TabItem value="DigitalProductApplication">Runtime metrics will automatically populate in Insight tab for digital Product.
</TabItem>
  <TabItem value="OnPremiseApplication">To populate runtime metrics for On-Premise application, Import Ignite Insight action to your runtime flows from connector library.
</TabItem>
</Tabs>