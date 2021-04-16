import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div
      style={{
        background: "#f4f4f4",
        paddingTop: "10px",
      }}
    >
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
          <Link className="menu-items" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="menu-items" to="/services">
            Service
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
