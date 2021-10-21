---
id: jsonata-explorer
title: JSONata Explorer
sidebar_label: JSONata Explorer 
---

## What is JSONata

- Open-source lanuage for querying and transforming JSON
- A way to extract specific meaningful data using a relatively simple logic
- Sophisticated query expressions with minimal syntax
- A way to format query results into any JSON output structure
- Inspired by the location path semantics of XPath 3.1
- Creates user-defined functions
- Imposes no limit on the complexity of your data transformation task
- Any valid JSON data is also a valid JSONata expression.

Imagine you have an order with several items and you need to calculate an average price or a total price, or you have only the maximum amount and you need to get the minimum amount as a result of your integration.

With JSONata, such data transformations can be completed in a matter of several minutes and you will be able to watch in real-time how your data transforms according to your conditions

## What is JSONata Explorer

It is an Open-editor to explore your JSON. It has 3 sections as shown in the below image:

- <b>Section-1:</b> You can provide any JSON (simple/complex)

- <b>Section-2:</b> You can provide the JSONata query to fetch the customized JSON result.

- <b>Section-3:</b> You will get the customized result value.

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/explorer/ignite-jsonata-editor-detail-1.png)

## Redirect to Explorer From Editor

You can redirect to Ignite JSONata from the editor

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/explorer/ignite-editor-link-to-jsonata-explorer.gif)

## How to Use the Explorer

- <b>Step-1:</b> Open <a href="https://jsonata.cgignite.io/" target="_blank">JSONata Explorer</a>

- <b>Step-2:</b> Copy below JSON and paste into Section-1 inside JSONata Explorer

```sh
{
  "FirstName": "John",
  "Surname": "Russell",
  "Age": 28,
  "Address":
    {
        "Street": "Hursley Park",
        "City": "Winchester",
        "Postcode": "SO21 2JN"
    }
}
```

- <b>Step-3:</b> Now add <b>FirstName</b> in the Section-2 inside JSONata Explorer

- <b>Step-4:</b> You will get the result "John" in the Section-3 inside JSONata Explorer

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/explorer/ignite-jsonata-example.png)

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/explorer/ignite-jsonata-sample-1.gif)

## Example

Here are some example expressions and their results when applied to the JSON document:

- <b>Basic Query</b>

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/explorer/ignite-jsonata-basic-query.gif)

- <b>String Function</b>

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/explorer/ignite-jsonata-string-function.gif)

- <b>Numeric Function</b>

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/explorer/ignite-jsonata-numeric-function.gif)

- <b>String Expressions</b>

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/explorer/ignite-jsonata-string-expression.gif)

- <b>Numeric Expressions</b>

![img](https://igniteresources.blob.core.windows.net/public/docs/static/assets/docs/explorer/ignite-jsonata-numeric-expressions.gif)

## Additional Resources

   [df1]: <https://docs.jsonata.org/overview>

For more information about JSONata details, please visit <a href="https://docs.jsonata.org/overview" target="_blank">here</a>