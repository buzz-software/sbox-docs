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
        subtitle: 'Learn how to use SaaSBox with your API',
        description: 'SaaSBox Docs',
        sidebarCategories: {
          null: [
            'index',
            'whats-new'
          ],
          "Initial Setup": [
            'setup'
          ],
          "Admin Dashboard": [
            'admin-dashboard-overview'
          ],
          Templates: [
            'templates/default-template',
            'templates/supported-pages',
            'templates/supported-tags',
            'templates/developing-a-template',
            'templates/sharing-using-template'
          ],
          "Stripe Setup": [
            'stripe/setup'
          ],
          "Marketing Setup": [
            'marketing/setup'
          ],
          "Analytics Setup": [
            'analytics/google',
            'analytics/facebook'
          ],
          "Website Chat Setup": [
            'chat/facebook'
          ],
          "API Key Setup": [
            'apisetup/generate-key'
          ],
          "User Dashboard": [
            'userdash/customizing-your-dashboard',
            'userdash/supported-pages',
            'userdash/adding-forms',
            'userdash/jquery-example',
            'userdash/vuejs-example',
            'userdsash/react-example'
          ]
        }
      }
    }
  ]
};