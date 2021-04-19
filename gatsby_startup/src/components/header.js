import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header-main">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: "max-content",
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        <Link className="header-title" to="/">
          {siteTitle}
        </Link>
      </h1>
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
