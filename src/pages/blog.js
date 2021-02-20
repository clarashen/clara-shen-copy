import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

export default function Blog( {data} ) {
    const blog = data.blog.edges

    return (
    <Layout>
    <Metadata title="Blog" description="Writings, articles, posts, updates." />
    <section>
        <h1>Blog</h1>
        <div className="Postlist">
        {blog.map(edge => {
              return (
                     <div className="post" key={edge.node.id}>
                         <div>
                             <div className="date">{edge.node.frontmatter.date}</div>
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

export const pageQuery = graphql`
    query BlogQuery {
        blog: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: {categories: {eq:"blog"}}}) 
          {
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