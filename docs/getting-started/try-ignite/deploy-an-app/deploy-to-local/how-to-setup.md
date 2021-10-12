---
id: how-to-setup
title: How to Setup
sidebar_label: How to Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

 ## Introduction

Ignite lets you deploy, run and manage application on your local system. Local Ignite is much faster and it’s a new way to manage your flow files. Our simple and user-friendly interface allow you to deploy ignite on your local system easily. 

This guide explains how to set up your environment for Ignite Project development using the Docker & Postgres. It includes information about prerequisites, creating an initial workspace, setup and running that app locally to verify your setup.

To setup ignite in the local system, please follow the below steps-

## Prerequisite

To setup the Ignite locally, you should be familiar with the following:
1.  <a href="https://docs.docker.com/get-started/overview/" target="_blank">Docker</a>
2.  <a href="https://www.postgresql.org/docs/13/index.html" target="_blank">PostgreSQL</a>
2.  <a href="https://docs.github.com/en/get-started/quickstart/set-up-git" target="_blank">Git</a>

## Download and Install Docker

Ignite requires a latest version of **Docker Desktop**.
See more information about installing **<a href="https://www.docker.com/products/" target="_blank">Docker-Desktop</a>**. 

## Start Registration Page

1.  Signup, login and Navigate to <a href="https://dashboard.cgignite.io/#/apps" target="_blank">Ignite App</a>. 
 
2.	Create a new app and provide the name, such as my-app.

3.	The **Create App** action, will navigate to registration page which will provide information to start & register Ignite container.


## Knowing Start Mode

We support below start modes to setup Ignite in local-

<Tabs
  defaultValue="Standard"
  values={[
    {label: 'Standard', value: 'Standard'},
    {label: 'Development', value: 'Development'},
    {label: 'Advanced', value: 'Advanced'},
  ]}>
  <TabItem value="Standard">This is the default and basic mode which will allow user to manage Ignite app related data (flow, models) into their PostgreSQL database server.</TabItem>
  <TabItem value="Development">This mode is used for git-based application development. Runtime running with <b>Project</b> mode allow user to manage the local changes with the git repository.
User will find additional changes symbol in the project that we can push/pull in the git repository. Learn more <b><a href="/docs/getting-started/try-ignite/deploy-an-app/deploy-to-local/manage-application/#project-mode-git--based-application">how to manage git based application</a></b> </TabItem>
  <TabItem value="Advanced">This mode is used for docker container-based application development. Our <b>Recommendation</b> to run application in Advanced Mode.</TabItem>
</Tabs>

## Knowing Connection Type

We support below connection types to setup Ignite in local-

<Tabs
  defaultValue="Server-Side"
  values={[
    {label: 'Server-Side', value: 'Server-Side'},
    {label: 'Client-Side', value: 'Client-Side'}
  ]}>
  <TabItem value="Server-Side">Verify authenticity of Runtime from server machine.</TabItem>
  <TabItem value="Client-Side">Verify authenticity of Runtime from client machine.</TabItem>
</Tabs>


## Setup Ignite Secret Key

 - Select start mode (Build mode - Recommended).
 - Select connection type (Client-side - Recommended)
 - Copy the **IGNITE_EDITOR_API_SECRET** from runtime registration page. This key will require to create Docker compose file in [Docker Compose File](#setup-and-run-docker-file)

:::info Note

Do not click on button **"Test Connection"** now. Keep this page open.

:::

## Setup and Run Docker File

 1. Open explorer, Create new workspace directory.
 2. Create a file **docker-compose.yml** inside the workspace directory, you just created above
 3. Add below content in the **docker-compose.yml** file.

```
version: "3.9"
services:
  ignite_local_postgres:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin
  ignite_local_app:
    image: cybergroupignite/runtime:v2.0.0
    ports:
      - "1881:1881"
    environment:
      IGNITE_EDITOR_API_SECRET: "<Your Ignite Secret key>"
      DATABASE_URL: "postgres://admin:admin@[ignite_local_postgres]:5432/postgres"
      DB_SSL_OPTION: "false" 
      START_MODE: "PROJECT"
      PORT: "1881"
    depends_on:
      - ignite_local_postgres
```

Sample <span class="link">[docker-compose.yml](https://github.com/Cybergroup-Research/ignite-application-development/blob/master/docker-compose.yml)</span> file for application development.

 4. Replace **IGNITE_EDITOR_API_SECRET** in the above file from [Setup-Ignite-Secret-Key](#setup-ignite-secret-key).

 5. Open your workspace directory in the terminal and run the following command.

```
  docker-compose up
```

 6. Above command will launch the server, watch the logs, wait for container to start.

 7. When application is ready to accept the request, open <u>**http://localhost:1881/**</u> and confirm that you can see the Ignite Runtime App page.

## Complete Runtime Registration

 - Copy the Ignite Runtime URL <u>**http://localhost:1881/**</u>
 - Go back to the Runtime Registration Page [Setup-Ignite-Secret-Key](#setup-ignite-secret-key).
 - Paste in Ignite Runtime URL text box and hit **Test Connection**.
 - On Successful connection browser will be redirected to editor.

:::tip Successfully Setup

So far you have successfully setup **Ignite application** in your local system. Now to know how to manage application locally [visit here](/docs/getting-started/try-ignite/deploy-an-app/deploy-to-local/manage-application).

:::