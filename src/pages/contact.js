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
            <section>
                <h4>Contact Us</h4>
                <form name="contact" method="POST" data-netlify="true">
                    <label>Your Fist Name:</label>
                    <input type="text" name="firstname" required={true} />
                    <label>Your Last Name</label>
                    <input type="text" name="lastname" required={true} />
                    <label>Your Email:</label>
                    <input type="email" name="email" required={true} />
                    <label>Subject</label>
                    <input type="text" name="subject" required={true} />
                    <label>Message:</label>
                    <textarea name="message" required={true}></textarea>
                    <button type="submit">Send</button>
                </form>
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
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default Contact;