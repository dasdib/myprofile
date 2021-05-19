import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
const Header = ({ siteTitle, topImg }) => (
  <header className="flex px-12 bg-white shadow-lg">
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
          <Link to="/">About</Link>
        </li>
        <li className="flex-initial">
          <Link to="/">Project</Link>
        </li>
        <li className="flex-initial">
          <Link to="/">Contact</Link>
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
