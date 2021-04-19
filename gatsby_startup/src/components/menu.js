import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div className="menu-main">
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link className="menu-items" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu-items" to="/editor-js">
            EditorJS
          </Link>
        </li>
        <li>
          <Link className="menu-items" to="/data-fetch">
            Data Fetch
          </Link>
        </li>
        <li>
          <Link className="menu-items" to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
