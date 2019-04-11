module.exports = {
  siteMetadata: {
    title: `Emma Gates Portfolio`,
    description: `Pictures by Emma Gates`,
    author: `Big Tent`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u0msphl4hcau`,
        accessToken: `72f0c4ae59fe491384f65356c6f0128833924d80e78f938cce9dffa06ab7dbff`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emma Gates Portfolio`,
        short_name: `Emma Gates`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline"
  ]
}
