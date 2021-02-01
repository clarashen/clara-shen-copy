import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Index( {data} ) {
    const research = data.research.edges
    const infrastructure = data.infrastructure.edges
    const leadership = data.leadership.edges

    return (
        <Layout>
            <Metadata title="Home" description="Jacek Kolanowski isScientific research director" />
            <section>
                <p>Jacek is a research leader and strategist who is passionate about intersectroal collaborations for scientific advancement. He builds and coordinates research and infrastucture programs that win funding, encourage collaboration and promote innovation.</p>
                <p className="lighttext">Currently: Department leader and Centre director</p>
            </section>
            <section>
            <h2 id="work"><span class="emoji">🔬</span>Research projects</h2>
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
            <h2><span class="emoji">⚙️</span>Infrastructure projects</h2>
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
      <section>
            <h2><span class="emoji">🔍</span>Advisory</h2>
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