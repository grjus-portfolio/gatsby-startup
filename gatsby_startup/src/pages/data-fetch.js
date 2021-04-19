import { graphql, Link } from "gatsby"
import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FetchData = ({ data }) => {
  return (
    <Layout>
      <SEO title="About us" />
      <div>
        <h2>Content from JSON placeholder </h2>
        <hr style={{ borderBottom: "1px solid white" }} />
        {data.allJsonPlaceholder.edges.map(item => {
          return (
            <div key={item.node.id}>
              <h3>{item.node.name}</h3>
              <small>Email adress {item.node.email}</small>
              <br />
              <br />
              <Link to={item.node.path}>Read more...</Link>
              <br />
              <br />
              <hr />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query JSONPlaceholderQuery {
    allJsonPlaceholder {
      edges {
        node {
          name
          email
          id
          path
        }
      }
    }
  }
`

export default FetchData
