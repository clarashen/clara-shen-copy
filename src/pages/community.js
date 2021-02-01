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
            <h1>Speaking, Outreach and Teaching</h1>  
            <p>A list of selected speaking engagagements, conferences, outreach and courses I have taught.</p>
            </section>
            <section>
                <h2>Selected Seminars</h2>
            </section>
            <section>
                <h2>Selected Conferences</h2>
            </section>
            <section>
                <h2>Teaching</h2>
            </section>
            <section>
                <h2>Outreach activities</h2>
                <p>
                <ul>
                    <li>Young Scientists Conference on Molecular and Cell Biology popular science seminar (IIMCB, Warsaw, Poland)</li>
                    <li>XXIII National Symposium of NKCh UAM seminar during students conference (Jeziory, Poland); 2018</li>
                    <li>Do Science (Poznan branch) inaugural career seminar for PhD students and post-docs (AMU Poznan, Poland)</li>
                    <li>Akademia Sztuk Przepięknych (PolAndRock Festival, Kostrzyn, Poland) lecture/discussion on biomarkers and personalised medicine for the participants of the music festival (various age groups and background)</li>
                </ul>
                </p>
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