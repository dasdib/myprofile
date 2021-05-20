/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      profileTopImage: file(relativePath: { eq: "profileTop.jpg" }) {
        childImageSharp {
          fixed(height: 64, quality: 100, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full bg-gradient-to-r from-gray-200 via-white to-white">
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          topImg={data.profileTopImage.childImageSharp.fixed}
        />
        {children}
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
