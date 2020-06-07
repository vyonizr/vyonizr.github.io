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
      previous: {
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

  const swapToMonthYear = (YearMonth: String) => {
    return YearMonth.split(' ').reverse().join(' ')
  }

  return (
    <Layout>
      <SEO title="Archive" />
      <article className="page">
        <h1 className="page-title">Archive</h1>
        <div className="post">
          {
            posts.map(({ node, previous }, index) => (
              <React.Fragment key={index}>
                {
                  !previous ? (
                    <h3><small>{ node.frontmatter.date }</small></h3>
                  ) : (
                    swapToMonthYear(node.frontmatter.date) !== swapToMonthYear(previous.frontmatter.date) && (
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
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        previous {
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
