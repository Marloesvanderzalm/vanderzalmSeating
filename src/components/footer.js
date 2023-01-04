import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
    footerContainer,
    footerSiteTitle,
    footerSeparator,
    footerSiteDescription
} from './footer.module.css'

const Footer = () => {
    
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

    return(
        <section className={footerContainer}>
            <p className={footerSiteTitle}>{data.site.siteMetadata.title}</p>
            <p className={footerSeparator}>|</p>
            <p className={footerSiteDescription}>{data.site.siteMetadata.description}</p>
        </section>
    )
}

export default Footer;