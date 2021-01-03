import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>Header Component</h1>
      <p>Title: {title}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default Header
