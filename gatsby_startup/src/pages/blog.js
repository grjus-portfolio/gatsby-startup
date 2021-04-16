import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About us" />
      <div>
        <h1>Latest posts</h1>
        {data.allMarkdownRemark.edges.map(item => {
          return (
            <div key={item.node.id}>
              <h3>{item.node.frontmatter.title}</h3>
              <small>
                Posted by {item.node.frontmatter.author} on{" "}
                {item.node.frontmatter.date}
              </small>
              <br />
              <br />
              <Link to={item.node.frontmatter.path}>Read more</Link>
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
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            author
            date
          }
        }
      }
    }
  }
`

export default BlogPage
