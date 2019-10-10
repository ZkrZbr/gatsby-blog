import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default () => {
  return (
    <Layout>
      <Head title="Not Found" />
      <h1>Page Not found</h1>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}