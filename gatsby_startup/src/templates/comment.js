import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { name, body, email } = data.jsonPlaceholder
  console.log(name)
  return (
    <Layout>
      <div>
        <Link to="/data-fetch">Go to services</Link>
        <hr />
        <h1>{name}</h1>
        <p>{body}</p>
        <h4>Posted by {email}</h4>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CommentByPath($path: String!) {
    jsonPlaceholder(path: { eq: $path }) {
      name
      body
      email
    }
  }
`
