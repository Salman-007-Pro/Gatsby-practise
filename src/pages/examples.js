import React from "react"
import { graphql } from "gatsby"

//examples
import Layout from "../components/Layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"

const examples = ({ data }) => {
  const {
    site: {
      info: { author, description },
    },
  } = data
  return (
    <Layout>
      <h1>Hello from example page</h1>
      <Header />
      <HeaderStatic />
      <h1>Example Component</h1>
      <h4>Author: {author}</h4>
      <h4>Des: {description}</h4>
    </Layout>
  )
}
export const query = graphql`
  {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

export default examples
