import React from "react"

//components
import Layout from "../components/Layout"
import { ExampleButton } from "../components/Buttons"

export default function Home() {
  return (
    <Layout>
      <h1>Assalamualaikum Home Page</h1>
      <ExampleButton onClick={() => console.log("asb")}>Click Me</ExampleButton>
    </Layout>
  )
}
