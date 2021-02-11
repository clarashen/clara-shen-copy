import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import postStyles from "./projectPage.module.scss"
import Metadata from "../components/metadata"

export const query = graphql`  
    query($slug: String!) {    
        markdownRemark(fields: { slug: { eq: $slug } }) {      
            frontmatter {        
                title        
                date(formatString: "DD MMMM, YYYY")      
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
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>              
                    <div          
                        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}        
                        >
                    </div>      
                    </div> 
        <a className="button large" href="mailto:jacek.kolanowski@gmail.com" target="_blank" rel="noreferrer">
        <span class="emoji">📱</span>
        Contact me
        </a>  
        </section> 
    </Layout>
  )
}

export default ProjectPage