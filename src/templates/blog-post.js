import React from "react"
import { Link, graphql } from "gatsby"
import slugify from 'slugify'

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.image}
      />
      <article className="post">
      {
        post.link ? (
          <h1 className="post-title"><Link href={ post.link }>
            { post.frontmatter.title } <span className="link-arrow">&rarr;</span></Link>
          </h1>
        ) : (
          <h1 className="post-title">{ post.frontmatter.title }</h1>
        )
      }
        <time dateTime={ post.frontmatter.date } className="post-date">{ post.timeToRead } min read &#183; { post.frontmatter.date }
        {
          post.frontmatter.categories && post.frontmatter.categories.map((category, index, categories) => (
            <React.Fragment key={index}>
              {
                index === 0 && (<>&nbsp;in </>)
              }
              <Link to={`/categories/#${slugify(category, {lower: true})}`}>{category}</Link>
              {
                index < categories.length - 1 && (<>, </>)
              }
            </React.Fragment>
          ))
        }
        {
          post.frontmatter.last_modified_at && (
            <>
              <br/><i>Updated: { post.frontmatter.last_modified_at }</i>
            </>
          )
        }
        </time>
        {
          post.frontmatter.link && (
            <span className="external-link">{ post.frontmatter.link }</span>
          )
        }
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <br/>
        <div className="tag-list">
          {
            post.frontmatter.tags && post.frontmatter.tags.map((tag, index, tags) => (
              <React.Fragment key={index}>
                <Link to={`/tags/#${slugify(tag, {lower: true})}`}>#{ tag }</Link>
                {
                  index < tags.length - 1 && (<>&nbsp;</>)
                }
              </React.Fragment>
            ))
          }
        </div>
      </article>

      <div className="PageNavigation">
        {
          previous && (
            <Link className="prev" to={ previous.fields.slug }>← Previous</Link>
          )
        }
        {
          next && (
            <Link className="next" to={ next.fields.slug }>Next →</Link>
          )
        }
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        last_modified_at(formatString: "MMMM Do, YYYY")
        categories
        description
        link
        tags
        image {
          publicURL
        }
      }
      timeToRead
    }
  }
`
