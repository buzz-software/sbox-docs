// gatsby-config.js
module.exports = {
  pathPrefix: '/docs/apollo-server',
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: "SaaSBox",
        title: 'SaaSBox Documentation',
        subtitle: 'Learn how to build a SaaS from your API',
        description: 'SaaSBox Docs',
        sidebarCategories: {
          null: [
            'index',
            'whats-new'
          ],
          "Getting Started": [
            'basic-setup'
          ],
          "Admin Dashboard": [
            'admin-dashboard-overview'
          ],
          "Setting up your Domain": [
            'domain/setup'
          ],
          "Customizing Content": [
            "content/customizing-content"
          ],
          "Enabling Stripe Plans": [
            'stripe/setup'
          ],
          "Enabling Social Login": [
            'social/setup'
          ],
          "Enabling Mailchimp": [
            'marketing/setup'
          ],
          "Enabling Analytics": [
            'analytics/google',
            'analytics/facebook'
          ],
          "Enabling Website Chat": [
            'chat/facebook'
          ],
          "Generating your API Key": [
            'apisetup/generate-key'
          ],
          "Creating User Dashboard": [
            'userdash/customizing-the-dashboard',
            'userdash/react-example'
            'userdash/supported-pages',
            'userdash/adding-forms',
            'userdash/jquery-example',
            'userdash/vuejs-example'
          ],
          "Frontend Templates": [
            'templates/how-templates-work',
            'templates/default-template',
            'templates/supported-pages',
            'templates/supported-tags',
            'templates/developing-a-template',
            'templates/sharing-using-template'
          ],
        }
      }
    }
  ]
};