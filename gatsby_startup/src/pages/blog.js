import { graphql, Link } from "gatsby"
import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const [cont, setCoount] = useState(0)
  return (
    <Layout>
      <SEO title="About us" />
      <div>
        <h2>Content generated using markdown files</h2>
        <hr style={{ borderBottom: "1px solid white" }} />
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
        <p>Simple couter, nothing special here {cont}</p>
        <button onClick={() => setCoount(prev => prev + 1)}>Increase</button>
        <button onClick={() => setCoount(prev => prev - 1)}>Descrease</button>
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
