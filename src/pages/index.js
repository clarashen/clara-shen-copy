import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function Index( {data} ) {
    const research = data.research.edges
    const blog = data.blog.edges

    return (
        <Layout>
            <Metadata title="Home" description="Clara Shen is a UX strategist and designer." />
            <section>
                <h1 className="name">Clara Shen</h1>
                <p>I am an interdisciplinary designer and strategist with a background in the analytical sciences. I love working with and helping people, learning about new topics and disciplines, and helping.</p>
                <p className="lighttext">Currently designing user experiences at SNOW.DOG.</p>
            </section>
            <section>
            <h2 id="work">Selected work</h2>
                <div className="Projects">
                    {research.map(edge => {          
                    return (     
                     <div className="project" key={edge.node.id}>
                         <div> 
                            {
                                edge.node.frontmatter.featured && (
                                    <Img 
                                    className="featured"
                                    fluid={edge.node.frontmatter.featured.childImageSharp.fluid}
                                    alt={edge.node.frontmatter.title}
                                    />
                                )
                            }           
                           <h3><Link className="title" to={`/${edge.node.fields.slug}/`}>{edge.node.frontmatter.title}                
                               </Link>
                           </h3>         
                        <div className="description">{edge.node.frontmatter.excerpt}</div> 
                    </div> 
                    </div>            
                    )        
                }
            )
        }      
        </div>
      </section>
      <section>
    <div className="LatestPosts">
    <h2>Recent posts</h2>
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
        <Link className="viewall" to={`/blog`}>All posts</Link>
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
                                          featured {
                                              childImageSharp {
                                                  fluid(maxWidth: 750) {
                                                    ...GatsbyImageSharpFluid
                                                  }
                                              }
                                          }
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
        blog: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }
            limit: 3
            filter: { frontmatter: {categories: {eq:"blog"}}}) 
            {
                    edges {
                            node {
                                  frontmatter {
                                     title 
                                     date(formatString: "DD MMMM, YYYY")
                                     excerpt
                                              }
                                              id
                                              fields {
                                                  slug
                                              }            
                                          }          
                                      }        
                                  }
                  }
        `