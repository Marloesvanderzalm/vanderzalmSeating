import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from "../components/layout";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  contactPageHeader,
  contactPageText,
  contactPageFormSection,
  contactPageForm,
  contactPageImage
} from '../page.module.css';

const Contact = ({data: {wpPage: {contactPageFields}}}) => {
    const image = getImage(contactPageFields.picture.localFile);
    return(
        <Layout>
          <section className={contactPageHeader}>
            <GatsbyImage className={contactPageImage} image={image} alt={contactPageFields.picture.altText} />
            <div className={contactPageText}>
              <h1>{contactPageFields.title}</h1>
              <div dangerouslySetInnerHTML={{
                __html: contactPageFields.description
              }}/>
            </div>
          </section>
          <section className={contactPageFormSection}>
            <h1>Send Us a message</h1>
            <div className={contactPageForm}>
              <form name="contact" method="POST" data-netlify="true">
                <label>Your Fist Name
                  <input type="text" name="firstname" required={true} />
                </label>
                <label>Your Last Name
                  <input type="text" name="lastname" required={true} />
                </label>
                <label>Your Email
                  <input type="email" name="email" required={true} />
                </label>
                <label>Subject
                  <input type="text" name="subject" required={true} />
                </label>
                <label>Message
                  <textarea name="message" required={true}></textarea>
                </label>
                <input type="hidden" name="form-name" value="contact" />
                <button type="submit">Send</button>
              </form>
            </div>
          </section>
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
              gatsbyImageData(placeholder: BLURRED, height: 300, width: 450)
            }
          }
        }
      }
    }
  }
`

export default Contact;