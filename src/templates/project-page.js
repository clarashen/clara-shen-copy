import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import postStyles from "./projectPage.module.scss"
import Metadata from "../components/metadata"
import Img from "gatsby-image"

export const query = graphql`  
    query($slug: String!) {    
        markdownRemark(fields: { slug: { eq: $slug } }) {      
            frontmatter {        
                title        
                date(formatString: "DD MMMM, YYYY")
                excerpt
                designers
                year
                featured {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }      
            timeToRead      
            html    
        }  
    }
`

const ProjectPage = props => {
  return (
    <Layout>     
        <Metadata title={props.data.markdownRemark.frontmatter.title} description="Jacek Kolanowski Science" />  
        <section>
        <div className={postStyles.content}>
            <div className={postStyles.header}>     
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.excerpt}</p>
            <div className="details">
                <p>{props.data.markdownRemark.frontmatter.year}</p>
                <p>{props.data.markdownRemark.frontmatter.designers}</p>
            </div>
            </div> 
            {
                props.data.markdownRemark.frontmatter.featured && (
                 <Img
                fluid={props.data.markdownRemark.frontmatter.featured.childImageSharp.fluid}
                alt={props.data.markdownRemark.frontmatter.title}
                />
                )
            }         
             
                    <div          
                        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}        
                        >
                    </div>      
                    </div> 
        </section> 
        <a className="button large" href="mailto:jacek.kolanowski@gmail.com" target="_blank" rel="noreferrer">
        <span class="emoji">📱</span>
        Contact me
        </a>  

    </Layout>
  )
}

export default ProjectPage