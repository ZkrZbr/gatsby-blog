import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import blogStyles from "./blog.module.css"
import Head from "../components/head"

export default ({data}) => (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <div>Here where posts gonna go : </div>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map( ({node}, index) => (
          <li key={index} className={blogStyles.post}>
            <Link to={`/blog/${node.slug}`}>
              <h3>{node.title}</h3>
              <p>{node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
)

export const query = graphql`
    query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
            edges {
                node {
                    title
                    slug
                    publishedDate(formatString: "MMMM Do, YYYY")
                }
            }
        }
    }
`;