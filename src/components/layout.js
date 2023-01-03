import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  nav,
  navItems,
  navLiItem,
  navLiText,
  main
 } from './layout.module.css'
import Footer from './footer'

const Layout = ({ pageTitle, children }) => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
        <ul className={navItems}>
          <li className={navLiItem}>
            <Link className={navLiText} to="/">Home</Link>
          </li>
          <li className={navLiItem}>
            <Link className={navLiText} to="/seats">Seats</Link>
          </li>
          <li className={navLiItem}>
            <Link className={navLiText} to="/about">About</Link>
          </li>
          <li className={navLiItem}>
            <Link className={navLiText} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main className={main}>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout