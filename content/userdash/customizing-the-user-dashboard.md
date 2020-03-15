---
title: Custom SaaS dashboard for your users
description: Learn how to customize the dashboard and make requests to your API Server
---

## Custom SaaS dashboard for your users

In this section we are going to cover how you can customize your custom SaaS dashboard for your
users to access your SaaS.

## User JWT Tokens to talk to your SaaS API
Your user SaaS dashboard pages are loaded with user-specific JWT tokens that contain the
user specific information. In particular each JWT token made available on your SaaS user
dashboard contains the following information:

* User information: User firstname, lastname, username, email
* Subscription Plan: Subscription plan and plan capabilities.

## How to verify per-user information and credentials on your SaaS API server
Each JWT token is signed by the autogenerated or pre-defined API key that you defined from
your administration dashboard.

On the API server side, you can access the Bearer Token field for each request and verify
the JWT token validity. Once verified you can access the contents to learn more about the 
user and his/her capabilities per their subscribed plan.
