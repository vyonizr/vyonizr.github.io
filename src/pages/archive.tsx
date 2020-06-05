// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      next: {
        frontmatter: {
          title: string
          date: string
        }
      }
      node: {
        frontmatter: {
          title: string
          date: string
          link: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const Archive = ({ data }: PageProps<Data>) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Archive" />
      <article className="page">
        <h1 className="page-title">Archive</h1>
        <div className="post">
          {
            posts.map(({ node, next }, index) => (
              <React.Fragment key={index}>
                {
                  !next ? (
                    <h3><small>{ node.frontmatter.date }</small></h3>
                  ) : (
                    node.frontmatter.date !== next.frontmatter.date && (
                      <h3><small>{ node.frontmatter.date }</small></h3>
                    )
                  )
                }
                <Link to={ node.fields.slug }>{ node.frontmatter.title }
                {
                  node.frontmatter.link && (
                    <span className="link-arrow"> &rarr;</span>
                  )
                }
                </Link>
                <br/>
              </React.Fragment>
            ))
          }
        </div>
      </article>
    </Layout>
  )
}

export default Archive

export const archiveQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        next {
          frontmatter {
            title
            date(formatString: "MMMM Y")
          }
        }
        node {
          frontmatter {
            title
            date(formatString: "MMMM Y")
            link
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
