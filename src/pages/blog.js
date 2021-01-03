import React from "react"

//components
import Layout from "../components/Layout"

//css
import style from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={style.page}>
        <h1>This is Blog Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit
        </p>
      </div>
    </Layout>
  )
}

export default blog
