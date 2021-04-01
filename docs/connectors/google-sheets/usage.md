---
id: usage
title: Using the Google Sheet Connector
sidebar_label: Using the Google Sheet Connector
---

## Prerequisite

 - [Set up Google Service](/docs/connectors/google-sheets/setup-google-service/)

 - [Setup Google Sheet](/docs/connectors/google-sheets/setup-google-sheet/)

 - [Install node-red-contrib-function-npm node](/docs/connectors/google-sheets/install-npm-function/)

## Usage

Open **Connectors** library from right menu.

![img](/assets/docs/google-sheet/open-connector-library.png)

Filter **Google Sheet** from search menu

![img](/assets/docs/google-sheet/search-google-sheet-1.png)

Import the **Get** Action

![img](/assets/docs/google-sheet/import-get-action.png)

Double click on **Google Sheet Connector** to open the properties menu.

![img](/assets/docs/google-sheet/google-sheet-connector.png)

![img](/assets/docs/google-sheet/google-sheet-properties.png)

### Set-up Google Sheet Connector Properties

 - Provide the credential from **[Save Credential File](/docs/connectors/google-sheets/setup-google-service#save-credential-file)**

 - Provide **Sheet_Id** from **[Copy ID Part from Sheet](/docs/connectors/google-sheets/setup-google-sheet#copy-id-part-from-sheet)**

 - Provide the **Range** that you want to cover from the sheet in the format “Sheet1!A1:C1”, where Sheet1 is the name of sheet within your Google Sheet. 

In our example sheet **“Sheet1”** is the name of sheet and you can select the cells to get the range details.

![img](/assets/docs/google-sheet/google-sheet-detail.png)

After fill the properties, associate the **Google Sheet Get** sub-flow with inject and debug node.

![img](/assets/docs/google-sheet/complete-get-flow.png)

Deploy the changes and then inject message from **“Inject”** node. You will get result.

![img](/assets/docs/google-sheet/google-sheet-get-output.png)

Similarly, you can setup the other actions like **“Append”**, **”Update”** and **“Clear”**. For **Update** and **Append** you have to pass the comma separated values in the **“Value”** property.

![img](/assets/docs/google-sheet/google-sheet-append-properties.png)

Deploy the changes and then inject message from “Inject” node. You will get result.

![img](/assets/docs/google-sheet/google-sheet-append-output.png)