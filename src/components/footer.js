import React from "react"
import footerStyles from "./footer.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"


const Footer = () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                author
              }
            }
          }
        `
      )

    return (
        <footer className={footerStyles.siteFooter}>
            <div className={footerStyles.container}>
            <p>
                Designed and developed by {data.site.siteMetadata.author}. No cookies or tracking. 
            </p>

            <div className={footerStyles.socialmedia}>
            <a href="mailto:cshe7660@gmail.com" target="_blank" rel="noreferrer">Email me</a>
              <Link to={`/resource-list`}>Links</Link>
              <a href="https://dribbble.com/uxclara">Dribbble</a>
              <a href="https://medium.com/@clarashen_">Medium</a>
              <a href="https://www.linkedin.com/in/clarashen/">LinkedIn</a>
              <a href="https://www.researchgate.net/profile/Clara-Shen">ResearchGate</a>
            </div>

            </div>
        </footer>
    )
}

export default Footer