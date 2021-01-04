import React from "react"
import { graphql } from "gatsby"

//components
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { Link } from "gatsby"

//css
import style from "../components/products.module.css"

const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <section className={style.page}>
        {products?.map(product => (
          <article key={product.id}>
            <Image fluid={product.image.fluid} alt={product.title} />
            <h3>
              {product.title} <span>${product.price}</span>
            </h3>
            <Link to={`/products/${product.slug}`}>more details</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default products
export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        slug
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
          id
        }
      }
    }
  }
`
