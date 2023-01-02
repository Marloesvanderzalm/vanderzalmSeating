import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  nav,
  navLi,
  navLiItem,
  navLiText
 } from './layout.module.css'

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
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
        <ul className={navLi}>
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
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout