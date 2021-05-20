import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Img from "gatsby-image"
const Header = ({ siteTitle, topImg }) => (
  <header className="flex px-12 bg-white shadow-lg sticky top-0 z-50">
    <div class="flex-initial self-center">
      <Img
        fixed={topImg}
        alt="Robots"
        className="rounded-full border border-gray-100 shadow-lg"
      />
    </div>
    <div className="flex-1 text-left py-6 pl-2 signeture text-2xl">
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className="flex-1 py-7">
      <ul className="flex justify-end space-x-10">
        <li className="flex-initial">
          <AnchorLink to="/#home" title="Home" className="stripped" stripHash />
        </li>
        <li className="flex-initial">
          <AnchorLink to="/#about" title="About Me" className="stripped" stripHash />
        </li>
        <li className="flex-initial">
          <AnchorLink to="/#experience" title="Experience" className="stripped" stripHash />
        </li>
        <li className="flex-initial">
          <AnchorLink to="/#contact" title="Contact" className="stripped" stripHash />
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
