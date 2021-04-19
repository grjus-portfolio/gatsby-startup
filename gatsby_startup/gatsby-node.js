/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// import { graphql } from "gatsby"

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const postTemplate = require.resolve("./src/templates/blog_posts.js")

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
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
  `)

  if (result.error) {
    reporter.panicOnBuild("Error while running GraphQL query")
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    })
  })

  const commentTemplate = require.resolve("./src/templates/comment.js")

  const resultComment = await graphql(`
    {
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
  `)

  if (resultComment.error) {
    reporter.panicOnBuild("Error while running GraphQL query")
    return
  }
  resultComment.data.allJsonPlaceholder.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: commentTemplate,
    })
  })
}

const fetch = require(`node-fetch`)
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(`https://jsonplaceholder.typicode.com/comments`)
  const data = await result.json()
  data.forEach(item => {
    const commentNode = {
      id: createNodeId(`${item.id}`),
      name: item.name,
      email: item.email,
      body: item.body,
      path: `/data-fetch/${createNodeId(`${item.id}`)}`,
      internal: {
        type: `json_placeholder`,
        contentDigest: createContentDigest(item),
      },
    }
    actions.createNode(commentNode)
  })
}
