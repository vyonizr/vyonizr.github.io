// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
      author: {
        summary: string
      }
      social: {
        website: string
      }
    }
  }
  file: {
    childImageSharp: {
      fluid: {
        src: string
      }
    }
  }
}

const About = ({ data }: PageProps<Data>) => {
  const { summary } = data.site.siteMetadata.author
  const { website } = data.site.siteMetadata.social

  return (
    <Layout>
      <SEO title="About" />
      <article className="page">
        <h1 className="page-title">About</h1>
        <div className="post">
          <p>{summary}</p>
          <a href={website} target="_blank" rel="noopener noreferrer">Go to main website</a>
        </div>
      </article>
    </Layout>
  )
}

export default About

export const archiveQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          summary
        }
        social {
          website
        }
      }
    }
    file(relativePath: {eq: "avatar.jpg"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
