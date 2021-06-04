---
id: azure
title: Azure + Azure Devops
sidebar_label: Azure + Azure Devops
---

## Configure PostgreSQL

Create and configure PostgreSQL database for storing your app related information. This database will be managed by Ignite App and required for App registration.

### 1.	Setup PostgreSQL

**<u><a href="https://portal.azure.com/#create/Microsoft.PostgreSQLServer" target="_blank">https://portal.azure.com/#create/Microsoft.PostgreSQLServer</a></u>**

![img](/assets/docs/deploy-to-azure/postgresql-basic.png)

### 2.	Review & Create

### 3.	Database Credential

Keep your database credential handy in the following format postgres://{username}:{your_password}@{servername}.postgres.database.azure.com/postgres?sslmode=require


## Create Container Registry


### 1.	Create New Container Registry

**<u><a href="https://portal.azure.com/#create/Microsoft.ContainerRegistry" target="_blank">https://portal.azure.com/#create/Microsoft.ContainerRegistry</a></u>**

![img](/assets/docs/deploy-to-azure/create-container-registry.png)

### 2.	Review & Create
### 3.	View

![img](/assets/docs/deploy-to-azure/create-container-view.png)

### 4.	Enable Admin User

![img](/assets/docs/deploy-to-azure/create-container-enable-admin.png)


## Configure Service Connection

### 1.	New Service Connection

Select Azure Resource Manager

![img](/assets/docs/deploy-to-azure/new-service-connection.png)

### 2.	Select Service Principle

![img](/assets/docs/deploy-to-azure/new-azure-service-connection.png)

### 3.	Select Subscription

![img](/assets/docs/deploy-to-azure/new-azure-service-connection-detail.png)


## Configure Pipelines

### 1.	Create New Pipeline 

Use the classic editor

![img](/assets/docs/deploy-to-azure/configure-pipeline.png)

### 2.	Select a Source

Select Repository & **“Dev”** Branch

![img](/assets/docs/deploy-to-azure/select-source.png)

### 3.	Select a Template

Search and Select Docker container

![img](/assets/docs/deploy-to-azure/select-template.png)

### 4.	Select Agent Pool

![img](/assets/docs/deploy-to-azure/select-agent-pool.png)

### 5.	Review/Change Source

![img](/assets/docs/deploy-to-azure/review-change-source.png)

### 6.	Build an Image

Select Subscription & Container Registry
    
On Build Arguments

    BUILD_VERSION=beta-$(Build.BuildId) ,for Dev Branch (Dev Pipeline)
    Or BUILD_VERSION=v$(Build.BuildId) ,for Main/Master Branch (QA-Prod Pipeline)
    Press Info and Link the Settings
On Image Name

    your-desire-image-name:beta-$(Build.BuildId) ,for Dev Branch (Dev Pipeline)
    your-desire-image-name:v$(Build.BuildId) ,for Main/Master Branch (QA-Prod Pipeline)


### 7.	Push an Image

Select Subscription & Container Registry
On Image Name

    your-desire-image-name:beta-$(Build.BuildId) ,for Dev Branch (Dev Pipeline)
    your-desire-image-name:v$(Build.BuildId) ,for Main/Master Branch (QA-Prod Pipeline)

![img](/assets/docs/deploy-to-azure/ignite-platform-dev-build.png)


## Custom Deployment Using Private Repository (Local Development)

Deploy using private repository (local development)

### 1. Create App

Visit: **<u><a href="https://dashboard.cgignite.io/apps" target="_blank">https://dashboard.cgignite.io/apps</a></u>**

Click on button **“New App”**

![](/assets/docs/deploy-to-azure/new-app.png)

### 2. Set App Name

Provide a suitable name for your application and click on button **“Create App”**

![](/assets/docs/deploy-to-azure/new-app-popup.png)

### 3. Get Ignite Keys

You will get the IGNIT_EDITOR_API_SECRET key, copy or save this key for later use in <u>**[Deploy to Azure](#4-deploy-to-azure)**</u>.

![](/assets/docs/deploy-to-azure/ignite-runtime-registration.png)

### 4. Set Ignite Runtime URL

We will setup this URL once we will finish the "<u>**[deploy-on-azure](#3-deploy-to-azure)**</u>".

![](/assets/docs/deploy-to-azure/ignite-runtime-url-popup.png)


### 5. Deploy to Azure

After the Ignite Platform team provisions your account, you may use the following **"Deploy to Azure"** button to get started your deployment using local development with private repository.

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FCybergroup-Research%2Fignite-runtime-image%2Fmaster%2Fazure-app-service-docker-private-image.json" target="_blank"><img src="/assets/docs/deploy-to-azure/deploy-to-azure.png"></img> </a>  

 > You may need a Microsoft Azure account, docker account with azure container registry

 > You will be redirected to Azure after clicking this button.

![img](/assets/docs/deploy-to-azure/custom-deployment-private-repo.png)

Below are required parameters details-

- **Subscription:** Select your azure account subscription type that you want for this custom deployment.
All resources in an Azure subscription are billed together.

- **Resource group:** A resource group is a collection of resources that share the same lifecycle, permissions, and policies. You can select your existing resource group or can also create new one.

- **Region:** Select a location for the resource group. For example, Central US. Not every resource is available in every region.

- **Location:** Select a location for the storage account. For example, Central US.

- **App_Service_Plan_Name:** Provide app service plan name

- **App_Service_Plan_SKU:** Select the suitable Azure plan. For more information about Azure plan visit <u><a href="https://azure.microsoft.com/en-us/pricing/details/app-service/linux/" target="_blank">Azure Pricing Plans</a></u>

- **Web_App_Name:** Create a unique and suitable web application name. Your deployed application will be running with your web app name. for example, if Web_App_name is "myDemo" then application will be hosted in URL 
    > **[https://myDemo.azurewebsites.net/](#)**

- **ENV_DATABASE_URL:** This URL includes protocol, user credentials, host and port. Refer to [database credential](#3-database-credential)

- **ENV_IGNITE_EDITOR_API_SECRET:** This API key is found within the **<u><a href="https://dashboard.cgignite.io/apps" target="_blank">Ignite Dashboard</a></u>** when registering an app. Refer to [Get Ignite Keys](#3-get-ignite-keys)

- **ENV_DB_SSL_OPTION:** If your database supports or requires SSL, it is recommended to turn this on

- **ENV_START_MODE:** Select desired start mode (Required for git based application development)

- **Env_DOCKER_REGISTRY_SERVER_URL** Provide docker registry server URL

- **Env_DOCKER_CUSTOM_IMAGE_NAME** Provide docker image name URL

- **Env_DOCKER_REGISTRY_SERVER_USERNAME** Provide docker registry server username

- **Env_DOCKER_REGISTRY_SERVER_PASSWORD** Provide docker registry server password


### 6. Finish Ignite Runtime URL

 - Once azure application will be deployed successfully you will get the application url like **[https://myDemo.azurewebsites.net/](#)**

- Go back to [Runtime regisration step](#4-set-ignite-runtime-url) and paste the runtime url and click on **"Test Connection"** 

![img](/assets/docs/deploy-to-azure/finish-runtime-registration.png)

- Click **Launch** button on your application in the [Dashboard](https://dashboard.cgignite.io/apps) and start execution.

    ![img](/assets/docs/deploy-to-azure/launch-app.png)

Repeat above steps for others environment like Dev, QA, and Prod

## Release Pipeline

### 1.	New Release Pipeline

Search deployment and select Azure App Service deployment

![img](/assets/docs/deploy-to-azure/new-release-pipeline.png)

### 2.	Enter Stage Name

![img](/assets/docs/deploy-to-azure/enter-stage-name.png)

### 3.	Add Artifacts

![img](/assets/docs/deploy-to-azure/add-artifacts.png)

### 4.	Modify Task

    Select Stage & Deploy Azure App Service Task
    Select Subscription & App Service
    Registry: yourazureregistry.azurecr.io
    Image: registry image
    Tag: $(Build.BuildId)

![img](/assets/docs/deploy-to-azure/modify-task.png)

### 5.	Enable Continuous Deployment

Enter Tag Filter: **^beta-** for Dev
Enter Tag Filter: ^v for QA/Prod

![img](/assets/docs/deploy-to-azure/enable-continuous-deployment.png)

### 6.	Sample Release Strategy

On Push to Dev Branch

![img](/assets/docs/deploy-to-azure/sample-release-strategy.png)

On Push to Master Branch

![img](/assets/docs/deploy-to-azure/on-push-master-branch.png)



