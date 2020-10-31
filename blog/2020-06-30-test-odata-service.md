---
slug: test-odata-service
title: Test OData 4.0 Service
author: Ravi Kant Sharma
author_title: Full Stack Engineer @ Cyber Group Inc.
author_url: https://github.com/Ravi-Kaushish
author_image_url: https://avatars0.githubusercontent.com/u/24990000?s=400&u=dbce2090b78b7108c7cbad0d1bf8fa2c8044c9d8&v=4
tags: [OData, Connect, Integration, Testing]
---

Browse OData 4.0 Service Using `OData Client` Node or Postman Client.

Hey there folks!<br />You must be here for a reason, We know you have created an OData Service with Ignite and now you can't wait to see it in action. well, if you haven't created one yet, learn how to create an OData Service [here](./create-odata-service).

Well, fasten you seat-belts because now we are going to get a live tour of our service.
You can either use `OData Client` node or Postman Client to access your APIs as per your convenience. There will be no changes in the requests no matter which client you use. We will be Postman Client for this tutorial.
Open Postman on your system and lets get started.

For this example we will take a table (entity) Users with columns (properties) (ID, FullName, Username) and perform CRUD operations on that table using our OData service. 

:::note

Note: Replace ServiceRoot with your Service URL in the below example URLs.

:::

To perform CRUD operations, Let's start with a GET call.

><b>Requesting Data</b>

<b>Requesting Entity Collections</b>

_The call below will fetch us data from Users Table._

GET serviceRoot/Users

<b>Requesting an Individual Entity by ID</b>

_The call below call will fetch us data from Users Table with specified key(primary key)._

GET serviceRoot/Users(1)

<b>Requesting an Individual Entity by ID</b>

_The call below will fetch FullName property from Users Table with specified key(primary key)._

GET serviceRoot/Users(1)/FullName

><b>Querying Data</b>

<b>System Query Option $filter</b>

_The call below will fetch records where the filter matches the specified criteria._

GET serviceRoot/Users?$filter=FullName eq 'Ravi'

you can add multiple filters by separating them with 'AND' & 'OR' keywords.

* Fullname eq 'Ravi' AND Username eq 'Ravi-Kaushish'
* Fullname eq 'Ravi' OR Username eq 'Ravi-Kaushish'

<b>System Query Option $top</b>

_The call below will fetch top 5 records._

GET serviceRoot/Users?$top=5

<b>System Query Option $skip</b>

_The call below will skip top 5 records._

GET serviceRoot/Users?$skip=5

<b>System Query Option $select.</b>

_The call below will get us FullName and Username for all records._

GET serviceRoot/Users?$select=FullName, Username

<b>System Query Option $count.</b>

_The call below will get us all the matching records with @Odata.count property with record count._

GET serviceRoot/Users?$count=true

<b>System Query Option $orderby</b>

_The call below will fetch us all records in ascending order_

GET serviceRoot/Users?$orderby= Id

* $orderby= Id asc (default)
* $orderby= Id desc

><b>Data Modification</b>

<b>Create an Entity</b>

_The request below will create a new resource in Users table._

POST serviceRoot/Users

```json
{
 "Id": 8,
 "FullName": "Ravi Sharma",
 "Username": "Ravi-Kaushish"
}
```

:::important

NOTE: Request body must contain the data to POST.

:::

<b>Remove an Entity</b>

_The call below will delete the record with Id 6._

DELETE serviceRoot/Users(6)

:::warning

Note: The primary key for the matching record must be provided.

:::
<b>Update an Entity</b>

PATCH serviceRoot/Users(8)

```json
{
 "FullName": "Bijay",
 "Username": "Bijay-Shah"
}
```

:::caution

Note: The request body must only contain the data you want to UPDATE.

:::

These are the features our OData Nodes supports in its early version.

While you keep doing magic with our tools, we are here working hard to make things even better for you. *Fist Bump*
