import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Index( {data} ) {
    const leadership = data.leadership.edges

    return (
        <Layout>
            <Metadata title="Leadership" description="Jacek Kolanowski is a scientific research director" />
            <section>
            <h1>Leadership and Science community</h1>
                <div className="Projects">
                    {leadership.map(edge => {          
                    return (     
                     <div className="project" key={edge.node.id}>
                         <div>              
                           <h3><Link className="title" to={`/blog/${edge.node.fields.slug}/`}>{edge.node.frontmatter.title}                
                               </Link>
                           </h3>          
                        <div className="description">{edge.node.frontmatter.excerpt}</div> 
                    </div> 
                    <div className="flex">
                            <Link className="button" to={`/blog/${edge.node.fields.slug}/`}>Details</Link>
                    </div>   
                    </div>            
                    )        
                }
            )
        }      
        </div>
      </section>
      <section>
          <h2>Teaching</h2>
      </section>
    </Layout>
    )
}

export const pageQuery = graphql`
    query communityQuery {
        leadership: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: {categories: {eq:"leadership"}}}) 
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