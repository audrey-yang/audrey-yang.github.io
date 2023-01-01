module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `audrey-yang.github.io`,
    siteUrl: `https://audrey-yang.github.io`,
    favicon: `/static/icons/icon.png`
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-offline",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.ico',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
  ]
};