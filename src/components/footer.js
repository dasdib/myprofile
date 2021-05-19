import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="px-12 pb-2 pt-4">
    © {new Date().getFullYear()} <span className="signeture">Dibyendu Das</span>
    , Built with
    {` `}
    <Link to="https://www.gatsbyjs.com">Gatsby</Link>
  </footer>
)

export default Footer
