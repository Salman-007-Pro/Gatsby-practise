import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

//images
import img from "../images/image-3.jpg"

const getImage = graphql`
  {
    fixed: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    example: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Images = () => {
  const data = useStaticQuery(getImage)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" />
      </article>

      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>

      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}
export default Images
