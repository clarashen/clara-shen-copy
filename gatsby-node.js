const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({      node,      name: "slug",      value: slug,    })  }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const response = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    response.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `/${edge.node.fields.slug}`,
        component: path.resolve("./src/templates/project-page.js"),
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
  }