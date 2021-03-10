---
id: deploy-on-aws-lightsail
title: Deploy on AWS Lightsail
sidebar_label: Deploy on AWS Lightsail
---

## Deploy application in AWS Lightsail

### Create Instance

Visit: **<u><a href="https://lightsail.aws.amazon.com/ls/webapp/home/instances" target="_blank">https://lightsail.aws.amazon.com/ls/webapp/home/instances</a></u>**

Click on button **“Create instance”**.

![img](/assets/docs/deploy-to-aws/create-instance.png)

### Select Platform

Select suitable platform for you among Linux/Unix and Windows.

![img](/assets/docs/deploy-to-aws/select-platform.png)

### Select a Blueprint

![img](/assets/docs/deploy-to-aws/select-blueprint.png)

### Select Instance Plan

![img](/assets/docs/deploy-to-aws/select-instance-plan.png)

### Create Instance 

Provide suitable instance name.

![img](/assets/docs/deploy-to-aws/provide-instance-name.png)

Click on button **"Create Instance"**.

![img](/assets/docs/deploy-to-aws/create-instance.png)

Application will start processing...

![img](/assets/docs/deploy-to-aws/app-processing.png)

Once processing completed, application will start running.

![img](/assets/docs/deploy-to-aws/app-running.png)

### Set Static IP

Click on Application instance name and select Networking tab and click on link button **“Create static IP”**.

![img](/assets/docs/deploy-to-aws/app-network.png)

Select Application instance from **"Select an instance"** dropdown menu.

![img](/assets/docs/deploy-to-aws/app-attach-instance.png)

Provide any static IP identifier for your application.

![img](/assets/docs/deploy-to-aws/app-static-ip-identifier.png)

Click on button **“Create”**

![img](/assets/docs/deploy-to-aws/static-ip-create.png)

After static Ip will create, this will look like below-

![img](/assets/docs/deploy-to-aws/app-static-ip-attached.png)

### Add Port Number

You can add port number from link button **“Add rule”** under **“Networking”** tab.

![img](/assets/docs/deploy-to-aws/app-add-rule.png)

Provide port number.

![img](/assets/docs/deploy-to-aws/app-add-rule-1.png)

You can see the latest added rule.

![img](/assets/docs/deploy-to-aws/app-rule-list.png)

### Setup Instance

Select tab **“Instances”**, there you can see your newly added instance. Click on the console icon in the instance (Make sure instance is in Running status).

![img](/assets/docs/deploy-to-aws/app-instance.png)

A console window will be open.

![img](/assets/docs/deploy-to-aws/app-console-blank.png)

Run the following commands

    ls
    cd htdocs
    rm -rf *
    git clone urlForYourGitHubRepository
    Provide github UserName and Password
    cd yourApplicationDirectory
    ls
    npm install
    node yourJsFileName

![img](/assets/docs/deploy-to-aws/app-console-command.png)

### Run Application on Browser

Now open the static IP in the browser, you will find that application will be running there.

![img](/assets/docs/deploy-to-aws/app-web-browser.png)

