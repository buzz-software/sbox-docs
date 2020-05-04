---
title: Embedding your React Application as a SaaS Dashboard
description: Steps to integrate create-react-app into SaaSBox
---

Below we cover how you can embed your standalone react application as a user
dashboard into SaaSBox.

You may want to do this as you simply developed a useful react applicatiton that others
might pay for, however what would make it a SaaS with users, payments, marketing pages 
are an afterthought.

## Install, build, run create-react-app

```
npx create-react-app my-app
cd my-app
npm start

```
[More details and full documentation here](https://reactjs.org/docs/create-a-new-react-app.html)

## Find out your SaaSBox Application ID and template ID

Open up the url for any one of your assets and you will the pattern: ```<cdn url>/<application uuid>/template uuid>```

## Build create-react-app with PUBLIC_URL set to your SaaSBox CDN 

You may build a production react app as follows:
```
npm run build
```

Instead we will run the same command with `PUBLIC_URL` environment variable set to where we will drag & drop our
static assets folder:
```PUBLIC_URL=https://d1vtdwko5kmvv8.cloudfront.net/eec277d7-53e2-4575-be66-d15fa06773cf/a7ee87c3-f36e-46dd-a596-e3354fce0b81 npm run build```

Following the above example, the format is as follows: ```<cdn url>/<application uuid>/template uuid>```


## Deploy your react application build

Drag and drop the ```static``` folder in your react app into the template drop zone in SaaSBox.

## Convert your React application index.html into Pug template
![React index copy paste](/react-example/react-index-copy-paste.png)

1. Create new template page (or edit settings html page)
2. Copy & Paste your react application index.html
3. Save
4. Press convert to pug button.
![React index page convert to pug](/react-example/react-index-convert-to-pug.png)
![React index pug](/react-example/react-index-pug.png)

## Copy & Paste your index page's pug template body and head into one of user dashboard pages, e.g. (service-settings page)
![Edit service settings page](/react-example/edit-service-settings.png)

1. Copy and paste head section under head
2. Copy and paste body section (your application div(id="root") and script tags under it) under card-body tag.
![React save into user settings](/react-example/react-save-into-user-settings.png)

### Your react application is now embedded inside the user dashboard under yourapp.com/user/settings
![Edit service settings page](/react-example/react-app-embedded-in-dashboard.png)

## Adding external data from SaaSBox
Define a script section before your react application div(id="root") tag as follows:
```
script.
	var external_data = "Hello from SaaSBox!";
	noscript You need to enable JavaScript to run this app.
```
You can now refer to `external_data` from your reactt app using the tag `{external_data}` from anywhere!

## Embedded React Application with user data from SaaSBox
Here is the final example you will get following all of the above steps:
![React App Embedded in SaaSBox User Dashboard](/react-example/app-final-with-external-value.png)

