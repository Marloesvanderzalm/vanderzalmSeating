import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = ({data: {wpPage: { aboutPageFields }}}) => {
  const image = getImage(aboutPageFields.picture.localFile);
  return (
    <Layout pageTitle={aboutPageFields.title}>
      <section>
        <GatsbyImage image={image} alt={aboutPageFields.picture.altText} />
      </section>
      <article>
        <div dangerouslySetInnerHTML={{
            __html: aboutPageFields.description
        }}/>
      </article>
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
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}
`

export default AboutPage