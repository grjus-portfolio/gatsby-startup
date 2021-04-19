import React, { useState, useLayoutEffect } from "react"
import AppEditor from "../components/editorjs/editor"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const [data, setData] = useState()

  useLayoutEffect(() => {
    fetch("http://localhost:3000/jsonEditorPosts")
      .then(res => res.json())
      .then(json => setData(json))
  }, [])
  return (
    <Layout>
      <SEO title="About us" />
      <div>
        <h1>Welocome to Editor JS</h1>
        <div>
          {data
            ? data.map(item => {
                return (
                  <div key={item.id}>
                    <h3>{item.subject}</h3>
                    {item.content.map(post => {
                      if (post.type === "paragraph") {
                        return (
                          <p
                            dangerouslySetInnerHTML={{ __html: post.data.text }}
                          />
                        )
                      }
                      if (post.type === "list") {
                        return (
                          <li
                            dangerouslySetInnerHTML={{ __html: post.data.text }}
                          />
                        )
                      }
                    })}

                    <small style={{ fontWeight: "bold" }}>
                      Post submitted by: {item.username}
                    </small>
                    <hr style={{ border: "1px solid yellow" }} />
                  </div>
                )
              })
            : null}
        </div>
        <hr style={{ border: "1px solid whitesmoke" }} />
        <AppEditor />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query jsonEditorQuery {
    allJsonEditor {
      edges {
        node {
          subject
          username
          id
          content {
            data {
              text
            }
            type
          }
        }
      }
    }
  }
`

export default AboutPage
