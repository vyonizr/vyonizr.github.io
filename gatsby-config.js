module.exports = {
  siteMetadata: {
    title: `Into the Blue Hour`,
    tagline: `a vyonizr's blog`,
    author: {
      name: `Fitrahtur Rahman`,
      summary: `I am a sailor in the ocean of knowledge—cruising on lifelong learning to create meaningful legacies. ⛵️`
    },
    description: `a vyonizr's blog`,
    keywords: ['programming', 'web', 'blog'],
    siteUrl: `https://vyonizr.github.io`,
    social: {
      twitter: `vyonizr`,
      website: `https://vyonizr.com/`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-numbered-footnotes`,
          `gatsby-plugin-catch-links`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              rel: "noopener noreferrer"
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168548737-1`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Into the Blue Hour`,
        short_name: `vyonizr's Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0366d6`,
        display: `standalone`,
        icon: `content/assets/vyonizr-web-icon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      // options: {
      //   data: `@import "${__dirname}/src/styles/";`,
      // }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ]
}
