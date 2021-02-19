import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import Positions from '../components/positions'
import resume from '../data/resume'


const About = () => {
  return (
    <Layout>
                  <Metadata title="About" description="Clara Shen is a UX strategist and designer." />
    <section>
      <h1>About <span class="emoji">👋🏼</span></h1>
            <p>I'm a multidisciplinary designer, scientist and IT enthusiast. I love working with technology, new tools and software and making sure it all works together. I'm passionate about education and helping people figure out how to get the most out of their digital tools. As someone with an analytical science background, I'm used to researching creative solutions to problems, synthesising diverse information and taking inventive approaches to complex tasks.</p>
            <p>I've been designing user experiences professionally since 2018, but creative projects have been my passion since learning how to customize websites and use photoshop and illustrator in my early teens.</p>
            <p>I moved from Australia to Poland in 2017 and love travelling.</p>
            <h3>Connect with me:</h3>
            <p><a href="https://www.linkedin.com/in/clarashen/">LinkedIn</a> | <a href="https://dribbble.com/uxclara">Dribbble</a></p>

      <section id="experience">
      <h2>Experience</h2>
      <Positions data={resume} />
      </section>

      <div class="contactbutton">
      <a className="button large" href="mailto:cshe7660@gmail.com" target="_blank" rel="noreferrer">
        <span class="emoji">✉️</span>
        Send me an email
        </a>
        </div>
      </section>

    </Layout>
  )
}

export default About