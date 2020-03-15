---
title: Building a SaaS using SaaSBox
description: Overview for how you can launch your SaaS fast
---
 
## What kind of a SaaS can SaaSBox deliver, and who is it for?

If you are building a specific API in your domain expertise and lacking a backend focused team and experience to convert it into a SaaS, SaaSBox will do that for you very quickly.

For example, you have developed a machine learning API where users submit data, and want to get back processed data through a dashboard.

In this scenario, instead of focusing on implementing and hosting SaaS infrastructure, you only need to focus on improving and maintaining your machine learning API. The rest of the infrastructure to run it as a SaaS with users, subscriptions, marketing pages, is handled by SaaSBox.

We have shared such a SaaS implementation example in the documentation.

## What do I gain by using SaaSBox for such a SaaS? Whatif I develop everything myself?

If your SaaS is closely related to web services and you have a full stack team, you might be better off designing your own.

SaaSBox is especially useful for ideas where you need a team to handle the user facing software to deliver your service through a dashboard,
and enforce subscriptions on it.

If you have dedicated backend and front-end engineers who can fully focus on user dashboard design, payments, marketing pages, user management, then
you are probably better off building a fully custom design on your own.

If you don't have such a team of engineers, SaaSBox is a viable option that can enable you and validate your idea really fast.

To be specific, the following comes as turnkey using SaaSBox:
* User registration using 3 different social accounts, password resets. **(Save 3-4 man weeks to implement, or you pay $300/month for a login service)**
* Integrated Stripe subscriptions and plan updates. **(Save 3 to 4 man weeks for integration)**
* Specific SaaS marketing pages that you can iterate your message quickly with forms such as landing, features, pricing, and more.
* Auto-issued HTTPS certificate installed on a load balancer **(Save devops time)**
* User management dashboard for you to administer your SaaS **(Save 3 to 4 man weeks)**
* Pre-integrated marketing analytics you can get via Google Analytics, Facebook, and mailing list sign up for Mailchimp. **(Save  manual work by engineer)**
* API Key generation to talk to your API
* Hosting - You instantly get a scalable site, and this partially removes your devops engineer requirement and limits it to your API. **(Save lots of devops time)**
* Holistic approach - everything is pre-integrated relieving you from lots of API integration and further developer work if each piece was available individually. **(Save engineering time and hassle)**

The following requires additional customization:
* The biggest integration requirement is for you to customize the user dashboard pages (2-3 pages in total) such that those pages can communicate 
  with your API in the specific way that your API requires (this took 5 days in our example SaaS, can take up to 1 man week per page). For example, forms to submit data, areas in your dashboard
  to deliver data back to your user.
  - Should you get to this stage our developer team helps you with the integration effort.
* If needed, you may completely customize your front-end template by importing HTML, CSS and Javascript.

## How do I get started?

1. Sign up for a "Develop" account
2. Pick a front-end SaaS template
3. Fill out basic information about your SaaS, and fill out marketing forms to show on your pages
4. Copy over your API keys for Stripe, Mailchimp, Google, Facebook.
5. Point your domain at your instance and issue an HTTPS certificate.
6. Generate your API key, customize your user dashboard to talk to your API.
7. Launch!

## How can I learn more?

Check out the SaaSBox docs for examples on getting started with each section, user dashboard customization and more. Also check out the sample
SaaS code we provided to launch a SaaS.