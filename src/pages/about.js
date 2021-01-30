import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const About = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>Jacek Kolanowski</p>
      <a className="button large" href="mailto:jacek.kolanowski@gmail.com" target="_blank" rel="noreferrer">
        <span class="emoji">✉️</span>
        Send me an email
        </a>
    </Layout>
  )
}

export default About