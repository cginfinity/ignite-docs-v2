---
id: setup-google-service
title: Set up Google Service
sidebar_label: Set up Google Service
---

## Set up Google Service Account

Go to **[Google Console](https://console.developers.google.com/project)** and sign in to your **Google account**. Once signed in, you'll see a list of existing projects (if there are any) or you can click Create Project to create a new one. 

![img](/assets/docs/google-sheet/service-account.png)

On the **New Project** page, enter a name for your project, select an organization and then click Create.

![img](/assets/docs/google-sheet/create-project.png)


## Enable the Sheet's API

Make sure your project is still selected as the current project. From the navigation menu, select **Library** under **APIs & Services option**.

![img](/assets/docs/google-sheet/select-library.png)

Search for **Google Sheets** and click the API tile. 

![img](/assets/docs/google-sheet/search-google-sheet.png)

Click **Enable**. 

![img](/assets/docs/google-sheet/enable-google-sheet.png)


## Enable the Drive's API

Do the same thing to enable the **Google Drive API**.  Search for **Google Drive** and click the API tile.

![img](/assets/docs/google-sheet/search-google-drive.png)

Click **Enable**. 

![img](/assets/docs/google-sheet/enable-google-drive.png)


## Download Service Account Credentials

Now we will create credentials that we will download as a **JSON** file and later add to the **Google sheets** node to configure it. To create credentials, from the navigation menu, select **Credentials** under **APIs and Services**. 

![img](/assets/docs/google-sheet/create-credential.png)

On the **Credentials** page, click **Create Credentials** and select the **Service Account** option.

![img](/assets/docs/google-sheet/select-service-account.png)

Set the Service account dropdown to **New Service Account** and click Create.

![img](/assets/docs/google-sheet/create-service-account.png)

Select the Role for your **Service Account**. 

![img](/assets/docs/google-sheet/select-roles.png)

 Click **Done** to create credentials. Select **Service Account** from the list.

![img](/assets/docs/google-sheet/select-credential.png)


## Save Service Account Email

Select **Details** tab and copy the email address.

![img](/assets/docs/google-sheet/select-service-email.png)

This information will be used to **[Share Sheet With Email](/docs/connectors/google-sheets/setup-google-sheet#share-sheet-with-email)**.


## Save Credential File

Select **Keys** tab and click on **Add Key**

![img](/assets/docs/google-sheet/add-key.png)

Select **JSON** key type and click on **Create**

![img](/assets/docs/google-sheet/select-key-type.png)

A key file of josn type will be download to your system.

![img](/assets/docs/google-sheet/private-key-saved.png)

Now open the downloaded **JSON** file and copy all information from the file. This information will be used to **[Set up Google Sheet Connector](/docs/connectors/google-sheets/how-to-use#set-up-google-sheet-connector-properties)**.


