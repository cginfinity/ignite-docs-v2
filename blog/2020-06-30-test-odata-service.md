---
slug: test-odata-service
title: Test OData 4.0 Service
author: Ravi Kant Sharma
author_title: Full Stack Engineer @ Cyber Group Inc.
author_url: https://github.com/Ravi-Kaushish
author_image_url: https://avatars0.githubusercontent.com/u/24990000?s=400&u=dbce2090b78b7108c7cbad0d1bf8fa2c8044c9d8&v=4
tags: [OData, Connect, Integration, Testing]
---

Browse OData 4.0 Service Using `OData Client` Node or Postman Client

Hey there folks!
You must be here for a reason, We know you have created an OData Service with Ignite and now you can't wait to see it in action. If you haven't created one yet, learn how to create an OData Service here.

Well, fasten you seat-belts because now we are going to get a live tour of our service.
You can use either `OData Client` or Postman Client to access your APIs according to your convenience. There will be no changes in the requests no matter which client you use. We will be using OData Client Node in this blogs.
Open Ignite Editor and make a simple on your  on your system and lets get started.

For this example we will take a table Users with columns (ID, FullName, Username) and perform CRUD operations on that table using our OData service. 


Note: Replace ServiceRoot with your Service URL.
Requesting Data
To perform CRUD operations, Let's start with a GET call.
Requesting Entity Collections
The call below will fetch us data from users Table.
GET serviceRoot/Users

Requesting an Individual Entity by ID
The call below call will fetch us data from users Table with specified key(primary key).
GET serviceRoot/Users(1)

Requesting an Individual Entity by ID
The call below will fetch FullName property from users Table with specified key(primary key).
GET serviceRoot/Users(1)/FullName

Querying Data
System Query Option $filter
The call below will fetch records where the filter matches the specified criteria.
GET serviceRoot/Users?$filter=FullName eq 'Ravi'
--options
you can add multiple filters by separating them with 'AND' & 'OR' keywords

System Query Option $top
The call below will fetch top 5 records.
GET serviceRoot/Users?$top=5

System Query Option $skip
The call below will skip top 5 records.
GET serviceRoot/Users?$skip=5

System Query Option $select.
The call below will get us FullName and username for all records.
GET serviceRoot/Users?$select=FullName, Username

System Query Option $count.
The call below will get us all the matching records with @Odata.count property with record count.
GET serviceRoot/Users?$count=true

System Query Option $orderby
The call below will fetch us all records in ascending order
GET serviceRoot/Users?$orderby= Id
	--options
$orderby= Id asc (default)
$orderby= Id desc

Data Modification
Create an Entity
The request below will create a new resource in users table.
POST serviceRoot/Users
NOTE: Request body must contain the data to POST.

```json
{
 "Id": 8,
 "FullName": "Ravi Sharma",
 "Username": "Ravi-Kaushish"
}
```

Remove an Entity
The call below will delete the record with Id 6.
DELETE serviceRoot/Users(6)
Note: The primary key for the matching record must be provided.

Update an Entity
PATCH serviceRoot/Users(8)
Note: The request body must contain the data to UPDATE.

```json
{
 "FullName": "Bijay",
 "Username": "Bijay-Shah"
}
```
These are the features our OData Nodes supports in its early version.

While you keep doing magic with our tools, we are here working hard to make things even better for you. *Fist Bump*
