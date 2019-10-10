import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/head"

export default () => (
  <Layout>
    <Head title="Home Page" />
    <h1>
        Hi!, I'm Zoubeir Zakaria, a React developer intern, living in Settat
    </h1>
    <p>
      Need a developer ? <Link to="/contact/">Contact Me</Link>
    </p>
  </Layout>
)