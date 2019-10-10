import React from "react"
import { Link , withAssetPrefix} from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
export default () => (
    <Layout>
      <Head title="About Page" />
      <h1>About Us</h1>
      <p>
        You can find here anything about my life, the articles are written by me
        and I wish that you find them useful in some sort of way.
      </p>
      <div>
        <h5>Contact me ?</h5>
        <p> <Link to="/contact/">Click Here</Link> </p>
      </div>
    </Layout>
)