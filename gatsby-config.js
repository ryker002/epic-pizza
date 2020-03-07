module.exports = {
  siteMetadata: {
    title: `East Coast Pizza`,
    description: `ECP is a fast-casual, family friendly spot serving New York style Hand-tossed pizzas, Slices, subs, and over 80 beers. Catering and large reservations available.`,
    keywords: `Slices, outdoor seating, Lunch Special, Garlic Knots, Brick Ovens, Cheesesteaks, Local`,
    author: `Lewandowski Design`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `io9l05j3sg7i`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "vicDN5v09hwWyMEfff0JBNJADo47o3Lp3Iyffbwm6D4",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          analytics: true,
          performance: true,
        },
        credentials: {
          apiKey: "AIzaSyDy3yHofHWr6ZZl4A1UP72fXkaBPp9BtxI",
          authDomain: "east-coast-pizza.firebaseapp.com",
          databaseURL: "https://east-coast-pizza.firebaseio.com",
          projectId: "east-coast-pizza",
          storageBucket: "east-coast-pizza.appspot.com",
          messagingSenderId: "396628438822",
          appId: "1:396628438822:web:8ce99bd455174e7e469be7",
          measurementId: "G-343SJWF1HZ",
        },
      },
    },
      {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "G-WRCM3NPDFF",
      },
    },
  ],
}
