// Gatsby supports TypeScript natively!
import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

import Layout from "../components/layout"

const LayoutPage = ({ children, location }) => {
  return (
    <Layout>
      <article className="page">
        { children }
      </article>
    </Layout>
  )
}

export default LayoutPage