// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import slugify from 'slugify'

import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  tagsGroup: {
    group: {
      fieldValue: string
      edges: {
        node: {
          fields: {
            slug: string
          }
          frontmatter: {
            title: string
            link: string
          }
        }
      }[]
    }[]
  }
}

const Tags = ({data }: PageProps<Data>) => {
  const tags = data.tagsGroup.group

  return (
    <Layout>
      <SEO title="Tags" />
      <article className="page">
        <h1 className="page-title">Tags</h1>
        <div>
          {
            tags.map(tag => (
              <div className="archive-group">
                <div id={'#' + slugify(tag.fieldValue, {lower: true})}></div>
                <h3 className="tag-head"><small>#{ tag.fieldValue }</small></h3>

                {
                  tag.edges.map(({node}) => (
                    <article className="archive-item">
                      <Link to={node.fields.slug}>{node.frontmatter.title }
                        {
                          node.frontmatter.link && (
                            <span className="link-arrow"> &rarr;</span>
                          )
                        }
                      </Link>
                    </article>
                  ))
                }
              </div>
            ))
          }
        </div>
      </article>
    </Layout>

  )
}

export default Tags

export const tagsQuery = graphql`
  query {
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              link
            }
          }
        }
      }
    }
  }
`
