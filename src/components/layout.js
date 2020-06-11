import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              tagline
              description
            }
          }
        }
      `}
      render={data => (
        <div className="container content">
          <header className="masthead">
            <h3 className="masthead-title">
              <Link to="/" title="Home">
                {data.site.siteMetadata.title}
              </Link>
              <br />
              <small>{data.site.siteMetadata.tagline}</small>
            </h3>

            <div className="navigation">
              <ul id="navigation-list">
                <li>
                  <Link to="/archive/">archive</Link>
                </li>
                <li>
                  <Link to="/tags/">tags</Link>
                </li>
                <li>
                  <Link to="/categories/">categories</Link>
                </li>
                <li>
                  <Link to="/about/">about</Link>
                </li>
              </ul>
            </div>
          </header>

          <main>{children}</main>

          <footer className="footer">
            <p>
              © {new Date().getFullYear()}{" "}
              <a
                href="https://vyonizr.com/"
                className="no-decoration"
                target="_blank"
                rel="noopener noreferrer"
              >
                vyonizr
              </a>
              <br />
              <a href="https://github.com/essentialenemy/noir/">Noir</a> theme
              for <a href="https://jekyllrb.com/">Jekyll</a> by{" "}
              <a href="https://essentialenemy.com/">Victor Johnson</a>
              <br />
              <a href="https://github.com/essentialenemy/noir/blob/master/LICENSE.md">
                Released under MIT License
              </a>
            </p>
          </footer>
        </div>
      )}
    />
  )
}

export default Layout
