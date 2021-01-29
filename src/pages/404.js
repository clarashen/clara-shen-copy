import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Metadata from "../components/metadata"

const NotFound = () => {
  return (
    <Layout>
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/blog/">Go back to homepage</Link>
      </p>
    </Layout>
  )
}

export default NotFound