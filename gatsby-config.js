/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://anhbernhardt.com',
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName:`Json`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/static/data/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`
      }
    },{
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/static/docs`
      }
    },{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/static/fonts/`
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-113472346-1',
        anonymize: true,
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Anh Bernhardt | Software Engineering',
        short_name: 'Anh Bernhardt',
        start_url: '/',
        background_color: '#1e2732',
        theme_color: '#1e2732',
        display: 'minimal-ui',
        icon: `static/favicons/favicon.png`,
        icons: [
          {
            src: '/favicons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: '/favicons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          }
        ]
      }
    },
  //   },{
  // // The name of the plugin
  //   resolve: 'gatsby-source-mongodb',
  //   options: {
  //   // Name of the database and collection where are books reside
  //     dbName: 'skills',
  //     collection: ['designs','frameworks','languages','tools'],
  //     server: {
  //       address: 'personalwebsite-shard-00-01.0zltz.mongodb.net',
  //       port: 27017
  //     },
  //     auth: {
  //       user: process.env.MONGO_USER,
  //       password: process.env.MONGO_PASS
  //     },
  //     extraParams: {
  //       replicaSet: 'PersonalWebsite-shard-00',
  //         ssl: true,
  //         authSource: 'admin',
  //         retryWrites: true
  //     }
  //   }
  //   },{
  //     // The name of the plugin
  //     resolve: 'gatsby-source-mongodb',
  //     options: {
  //       // Name of the database and collection where are books reside
  //       dbName: 'works',
  //       collection: 'projects',
  //       server: {
  //         address: 'personalwebsite-shard-00-01.0zltz.mongodb.net',
  //         port: 27017
  //       },
  //       auth: {
  //         user: process.env.MONGO_USER,
  //         password: process.env.MONGO_PASS
  //       },
  //       extraParams: {
  //         replicaSet: 'PersonalWebsite-shard-00',
  //         ssl: true,
  //         authSource: 'admin',
  //         retryWrites: true
  //       }
  //     }
  //   },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components'
  ],
}

