import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import {
  aboutPage,
  aboutPageText,
  aboutPageImage
} from '../page.module.css'

const AboutPage = ({data: {wpPage: { aboutPageFields }}}) => {
  const image = getImage(aboutPageFields.picture.localFile);
  return (
    <Layout>
      <section className={aboutPage}>
        <GatsbyImage className={aboutPageImage} image={image} alt={aboutPageFields.picture.altText} />
        {/* https://www.artek.fi/en/products/stool-60 */}
        <div className={aboutPageText}>
          <h1>{aboutPageFields.title}</h1>
          <div dangerouslySetInnerHTML={{
              __html: aboutPageFields.description
          }}/>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "about"}) {
    aboutPageFields {
      title
      description
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, height:300, width:450)
          }
        }
      }
    }
  }
}
`

export default AboutPage