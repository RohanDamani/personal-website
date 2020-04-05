module.exports = {
  siteMetadata: {
    title: 'Rohan Damani - Personal Site',
    author: 'Rohan Damani',
    description: 'Personal Website For Rohan Damani',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/roventures-icon.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'rohandamani.com',
        protocol: "https",
        hostname: "rohandamani.com",
      },
    },
  ],
}
