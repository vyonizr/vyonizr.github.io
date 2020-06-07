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
  categoriesGroup: {
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

const Categories = ({data }: PageProps<Data>) => {
  const categories = data.categoriesGroup.group

  return (
    <Layout>
      <SEO title="Tags" />
      <article className="page">
        <h1 className="page-title">Categories</h1>
        <div>
          {
            categories.map((category, index) => (
              <div className="archive-group" key={index}>
                <div id={'#' + slugify(category.fieldValue, {lower: true})}></div>
                <h3 className="tag-head"><small>{ category.fieldValue }</small></h3>

                {
                  category.edges.map(({node}, index) => (
                    <article className="archive-item" key={index}>
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

export default Categories

export const archiveQuery = graphql`
  query {
    categoriesGroup: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 2000) {
      group(field: frontmatter___categories) {
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
