import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from "../components/layout";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'; 

const Contact = ({data: {wpPage: {contactPageFields}}}) => {
    const image = getImage(contactPageFields.picture.localFile);
    return(
        <Layout pageTitle={contactPageFields.title}>
            <section>
                <GatsbyImage image={image} alt={contactPageFields.picture.altText} />
            </section>
            <article>
                <div dangerouslySetInnerHTML={{
                    __html: contactPageFields.description
                }}/>
            </article>
        </Layout>
    )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "contact"}) {
      contactPageFields {
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

export default Contact;