---
title: Frontend Templates
description: What SaaS Templates are and how they work
---

## What is included in the SaaS Templates?

The SaaS templates consist of a bundle of web pages that implement common SaaS functionality. 

The key point with SaaSBox templates is that every page is fully functional and pre-integrated, whereas any template you buy as plain html will require building a backend for each page.

You can integrate any SaaS HTML template by adding the render tags available for individual pages. For example, the tag ```{landing.title}}``` will render the title you set for that page. The tags are described in the tags section for each page.

If you are not a frontend developer you are better off by selecting and using an existing template.

## Pages for your visitors and onboarding

| Page name | filename | Route     | Notes                                       |
|-----------|----------|-----------|---------------------------------------------|
| Landing   | landing  | /         |                                             |
| Features  | features | /features |                                             |
| Login     | login    | /login    |                                             |
| Pricing   | pricing  | /pricing  |                                             |
| Checkout  | checkout | /checkout | This page is not customizable at this time. |
| Signup    | signup   | /signup   |                                             |
| Products  | products | /products |                                             |

## Dashboard pages for your users
| User Dashboard Pages | filename         |   route         | Requires customizing for your SaaS  | Notes                           |
|----------------------|------------------|-----------------|-----|-----------------------------------------------------------------|
| Subscriptions        | user-dashboard   | /user/dashboard | No  | User can manage his/her subscription                            |
| Purchases            | purchases        | /user/purchases | No  | User can manage one-off purchases                               |
| Settings             | service-settings | /user/settings  | Yes | User can setup the service they get from you on this page. This page will make API calls to your server |
| Service         | service-app      | /user/service   | Yes | User will get your service from you via this page. This page will make requests to your API server using your API Key. Contact us to expand the set of such service pages. |

The templates are limited by the above group of pages. You can customize existing or create new templates within the boundary of this set. If you need to add additional pages, let us know via our website chat widget and we will add them.

**Note: For replacing or adding a new page, you must use the same filenames as above.**

## What components are the pages built with?

Plain HTML + asset files such as CSS and Javascript.

You can import any html and reference asset files from the html.

The HTML pages are stored as Pug templates and they dynamically render as html.

## Customizing the Apperance of Pages

### Start a new template from scratch
Use our barebones template project to start a new template from scratch. This barebones template defines the above set of implemented pages in pug with common components used across all pages such as the navigation bar, footer and so on.

If you want to only extend functionality of a few pages, using an existing template is highly recommended to save time.

### Import a new page
1. Create a new page in your admin panel by visiting:

**Frontend Templates > Locate Active Template > Edit Template > Create New Page > Use a name that matches the filename above**
2. Copy and paste a plain HTML file you have designed.

Convert it to Pug using the "convert to pug" button. Then import assets as described below and reference them from this page.

### Requirements for new pages and templates

* You must use the same filename for new pages as listed above, and save with an all-lowercase name
* You must use the same routes listed above for links across your pages

Contact us if you need to enable new routes, with new tags, using new filenames.

## Adding new assets

Simply drag and drop the asset file, or folder into the assets drop zone. They will be auto-uploaded.

At the moment this is the only way to import new assets. Assets are stored in CDN and you may need to append random strings to asset filenames to realize updates immediately. We are working on enabling automated CDN invalidation when you push an update for the same file.

## Adding Images
Drag and drop images into the assets dropzone. Jpeg, PNG images are automatically minimized after you import them. Please only upload images that will be served from the web page.

## Referencing assets from html

You can use the asset() helper to reference assets from pug files. Example:

```
asset('asset/main.css')
```