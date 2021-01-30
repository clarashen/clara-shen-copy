import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Index( {data} ) {
    const research = data.research.edges
    const infrastructure = data.infrastructure.edges

    return (
        <Layout>
            <Metadata title="Home" description="Jacek Kolanowski isScientific research director" />
            <section>
                <p>Jacek is a research leader and strategist who is passionate about bridging intersectoral industries for scientific advancement. He builds research and infrastucture programs that win funding, encourage collaboration and promote innovation.</p>
                <p className="lighttext">Currently: Department leader and Centre director</p>
            </section>
            <section>
            <h2>Research projects</h2>
                <div className="Projects">
                    {research.map(edge => {          
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
            <h2>Infrastructure projects</h2>
                <div className="Projects">
                    {infrastructure.map(edge => {          
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
    </Layout>
    )
}

export const pageQuery = graphql`
    query IndexQuery {
        research: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: {categories: {eq:"research"}}}) 
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
            infrastructure: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }
                        filter: { frontmatter: {categories: {eq:"infrastructure"}}}) 
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