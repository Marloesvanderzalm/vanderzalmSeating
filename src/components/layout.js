import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container,
  nav,
  navLi,
  navLiItem,
  navLiText
 } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav className={nav}>
        <ul className={navLi}>
          <li className={navLiItem}>
            <Link className={navLiText} to="/">Home</Link>
          </li>
          <li className={navLiItem}>
            <Link className={navLiText} to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout