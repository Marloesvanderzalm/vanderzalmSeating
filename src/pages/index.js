import { graphql } from 'gatsby';
import * as React from 'react';
import Seat from '../components/seat';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  homeHeader,
  homeHeaderText,
  homeHeaderImage,
  featuredSeatsSection,
  featuredSeats,
} from '../page.module.css'

const IndexPage = ({data: {wpPage: { homePageFields }}}) => {

  const image = getImage(homePageFields.picture.localFile);

  return (
    <Layout>
        <section className={homeHeader}>
          <div className={homeHeaderText}>
            <h1>{homePageFields.title}</h1>
            <div dangerouslySetInnerHTML={{
              __html: homePageFields.description
            }}/>
          </div>
          <GatsbyImage className={homeHeaderImage} image={image} alt={homePageFields.picture.altText} />
        </section>
        <section className={featuredSeatsSection}>
          <div className={featuredSeats}>
            {homePageFields.featuredProducts.map((item) => {
              return(
                <Seat key={item.id} slug={item.slug} seat={item} /> 
              )
            })}
          </div>
          <h1>Some of our Seats</h1>
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
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, height: 200, width: 200)
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
            gatsbyImageData(placeholder: BLURRED, height: 300, width: 600)
          }
        }
      }
    }
  }
}

`

export default IndexPage
