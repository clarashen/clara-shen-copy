import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import postStyles from "./projectPage.module.scss"
import Metadata from "../components/metadata"

export const query = graphql`  
    query($slug: String!) {    
        markdownRemark(fields: { slug: { eq: $slug } }) {      
            frontmatter {  
                client      
                title        
                date(formatString: "DD MMMM, YYYY")
                excerpt
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
        <Metadata title={props.data.markdownRemark.frontmatter.title} description="Clara Shen" />  
        <section>
        <div className={postStyles.header}>  
            </div>  
        <div className={postStyles.client}>{props.data.markdownRemark.frontmatter.client}</div>
        <div className={postStyles.content}>
                    <div          
                        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}        
                        >
                    </div>      
        </div> 
        
        <div className={postStyles.updated}>
             <p className="date">Last updated: {props.data.markdownRemark.frontmatter.date}</p>
        </div>    
        
        </section>
        <section> 
        <span class="emoji">⬅️</span>
        <Link to={`/`}>Return to homepage</Link>
        </section>

    </Layout>
  )
}

export default ProjectPage