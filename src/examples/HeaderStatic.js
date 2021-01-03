import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
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

const HeaderStatic = () => (
  <StaticQuery
    query={getData}
    render={({
      site: {
        info: { title, author },
      },
    }) => (
      <>
        <h1>HeaderStatic Component</h1>
        <p>Title: {title}</p>
        <p>Author: {author}</p>
      </>
    )}
  ></StaticQuery>
)

export default HeaderStatic
