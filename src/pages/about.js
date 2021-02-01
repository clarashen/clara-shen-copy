import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import Positions from '../components/positions'
import resume from '../data/resume'
import Teaching from '../components/teaching'
import teaching from '../data/teaching'

const About = () => {
  return (
    <Layout>
    <section>
      <h1>About</h1>
            <p>Jacek is a Principal Investigator working on new chemical tools for in situ biosensing and molecular imaging of small molecules and proteins, and discovery of bioactive compounds, with documented diverse interdisciplinary research experiences at the interface of chemistry and biology. He is a recognised young leader known for an engaging and inclusive approach to teaching and outreach. Proficient in building intersectoral and international collaborations. Vice Chair of Polish Young Academy (2019-2021).</p>

            <ul>
              <li><a href="https://orcid.org/0000-0002-6779-4736">Publication List<span class="emoji">📚</span></a></li>
            </ul>

      <section id="experience">
      <h3>Experience</h3>
      <Positions data={resume} />
      </section>

      <section>
      <h3>Peer review</h3>
      <p>
        <ul>
          <li><a href="google.com">My Publons profile</a></li>
          <li>5000 papers reviewed in 2019</li>
          <li>Named top reviewer in 2019 for journal</li>
          <blockquote>What can I say, Jacek does amazing reviews</blockquote>
        </ul>
      </p>
      </section>
      <section>
      <h3>Achievements</h3>
      <p>
        <ul>
          <li>Fellowship of the Polish Minister of Science and Higher Education for outstanding young scientists</li>
        </ul>
      </p>
      </section>
      <section>
      <h3>Teaching</h3>
      <Teaching data={teaching} />
      </section>
      <section>
      <h3>Contact me</h3>
      <a className="button large" href="mailto:jacek.kolanowski@gmail.com" target="_blank" rel="noreferrer">
        <span class="emoji">✉️</span>
        Send me an email
        </a>
      </section>

    </section>
    </Layout>
  )
}

export default About