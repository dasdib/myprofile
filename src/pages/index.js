import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div className="flex">
      <div className="flex-1">
        <h1 className="text-8xl pb-4">Hi There!</h1>
        <h4 className="text-5xl pb-4">
          I’m Dibyendu and I’m a Full Stack developer!
        </h4>
        <a
          href="/"
          className="bg-white
          hover:bg-gray-100
          text-gray-800
          font-semibold
          py-2
          px-4
          border
          border-gray-400
          rounded
          shadow
          inline-flex
          items-center
          mr-4
          mt-4"
        >
          Download Resume
        </a>
        <a
          href="/"
          className="bg-white
          hover:bg-gray-100
          text-gray-800
          font-semibold
          py-2
          px-4
          border
          border-gray-400
          rounded
          shadow
          inline-flex
          items-center
          mt-4"
        >
          Connect Me
        </a>
      </div>
      <div className="flex-1 text-right">
        <Img
          fixed={data.profileimage.childImageSharp.fixed}
          alt="Robots"
          className="w-6 h-6 object-cover rounded-3xl ring-1 ring-white"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
export const query = graphql`
  {
    profileimage: file(relativePath: { eq: "mypic.jpg" }) {
      childImageSharp {
        fixed(height: 500, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
