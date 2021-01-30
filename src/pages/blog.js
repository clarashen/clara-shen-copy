import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import blogStyles from "./blog.module.scss"
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
    <Metadata title="Work" description="Jacek Kolanowski" /> 
        <div className="Projects">
        {data.allMarkdownRemark.edges.map(edge => {          
              return (     
                     <div className="project" key={edge.node.id}>
                         <div>              
                           <h3><Link className="title" to={`/blog/${edge.node.fields.slug}/`}>{edge.node.frontmatter.title}                
                               </Link>
                           </h3>          
                        <div className="description">{edge.node.frontmatter.excerpt}</div> 
                    </div> 
                    <div className="flex">
                            <Link className="button" to={`/blog/$/${edge.node.fields.slug}/`}>Read More</Link>
                    </div>   
                    </div>            
                    )        
                }
            )
        }      
        </div>
    </Layout>
    )
    }


export default Blog