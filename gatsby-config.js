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
            'getting-started',
            'whats-new'
          ],
          Features: [
            'features/mocking',
            'features/errors',
            'features/data-sources'
          ]
        }
      }
    }
  ]
};