import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

const IndexPage = ({data: {wpPage: {homePageFields}}}) => {

  const image = getImage(homePageFields.picture.localFile);

  return (
      <Layout pageTitle="Welcome to van der Zalm Seating Studio!">
        <GatsbyImage image={image} alt={homePageFields.picture.altText} />
        <section>
          <h3>Featured Seats</h3>
          <article>
            {homePageFields.featuredProducts.map((item) => {
              return (
                <p key={item.id}>{item.seatFields.title}</p>
              )
            })}
          </article>
        </section>
      </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePageFields {
      description
      title
      featuredProducts {
        ... on WpSeat {
          id
          slug
          seatFields {
            title
            designer
            brand
            year
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
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

export default IndexPage
