import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

function confirm() {
  return (
    <Layout>
      <h3>Thank you for submitting your post !</h3>
      <Link to="/editor-js">Go to editor js</Link>
    </Layout>
  )
}

export default confirm
