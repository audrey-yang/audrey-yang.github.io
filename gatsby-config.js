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
    "gatsby-plugin-postcss",
    "gatsby-transformer-json",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/icons/icon.png',
      },
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