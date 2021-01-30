import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import Positions from '../components/positions'
import resume from '../data/resume'

const About = () => {
  return (
    <Layout>
    <section>
      <h1>About</h1>
            <p>Jacek is a Principal Investigator working on new chemical tools for in situ biosensing and molecular imaging of small molecules and proteins, and discovery of bioactive compounds, with documented diverse interdisciplinary research experiences at the interface of chemistry and biology. He is a recognised young leader known for an engaging and inclusive approach to teaching and outreach. Proficient in building intersectoral and international collaborations. Vice Chair of Polish Young Academy (2019-2021).</p>

      <h3>Experience</h3>
      <Positions data={resume} />


      <h3>Publications</h3>


      <a className="button large" href="mailto:jacek.kolanowski@gmail.com" target="_blank" rel="noreferrer">
        <span class="emoji">✉️</span>
        Send me an email
        </a>

    </section>
    </Layout>
  )
}

export default About