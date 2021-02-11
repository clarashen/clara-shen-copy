import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function Index( {data} ) {
    const research = data.research.edges

    return (
        <Layout>
            <Metadata title="Home" description="Clara Shen is a UX strategist and designer." />
            <section>
                <h1 className="name">Clara Shen</h1>
                <p>I am an interdisciplinary designer and strategist with a background in the analytical sciences. Passionate about research and helping organizations bring their vision to life, I love working with people and helping them reveal what they are passionate about through their website, app and customer experience.</p>
                <p className="lighttext">Currently designing user experiences at SNOW.DOG.</p>
            </section>
            <section>
            <h2 id="work"><span class="emoji">✍🏼</span>Selected work</h2>
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
                           <h3><Link className="title" to={`/blog/${edge.node.fields.slug}/`}>{edge.node.frontmatter.title}                
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
                  }
        `