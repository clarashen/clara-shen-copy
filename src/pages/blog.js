import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Metadata from "../components/metadata"

const Blog = () => {
  const data = useStaticQuery(
          graphql`
                query {
                        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
                                      edges {
                                            node {
                                                  frontmatter {
                                                        title
                                                        date(formatString: "DD MMMM, YYYY")
                                                        excerpt
                                                }
                                                timeToRead
                                                excerpt
                                                id
                                                fields {
                                                    slug
                                                }
                                            }
                                        }
                                    }
                                }
                                `
                            )
return (
    <Layout>
    <Metadata title="Blog" description="Writings, articles, posts, updates." />
    <section>
        <h1>Blog</h1>
        <div className="Projects">
        {data.allMarkdownRemark.edges.map(edge => {
              return (
                     <div className="blogpost" key={edge.node.id}>
                         <div>
                             <div>{edge.node.frontmatter.date}</div>
                           <h3><Link className="title" to={`/${edge.node.fields.slug}/`}>{edge.node.frontmatter.title}
                               </Link>
                           </h3>
                    </div>
                    <div className="flex">
                    </div>
                    </div>
                    )
                }
            )
        }
        </div>
        </section>
    </Layout>
    )
    }


export default Blog
