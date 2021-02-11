import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          <div className="flex">
        <Link to="/" className="brand">cs.</Link>
          </div>
          <div className="flex">
            <Link to="/">My work</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header