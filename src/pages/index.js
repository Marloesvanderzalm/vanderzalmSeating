import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  homeHeader,
  homeHeaderText,
  featuredSeatsSection,
  featuredSeats,
  featuredSeat,
  featuredSeatText,
  featuredSeatTitle,
  featuredSeatDesigner
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
          <GatsbyImage image={image} alt={homePageFields.picture.altText} />
        </section>
        <section className={featuredSeatsSection}>
          <div className={featuredSeats}>
            {homePageFields.featuredProducts.map((item) => {
              const image = getImage(item.seatFields.picture.localFile)
              return (
                <Link key={item.id} to={`/seats/${item.slug}`} className={featuredSeat}>
                  <GatsbyImage image={image} alt={item.seatFields.picture.altText} />
                  <div className={featuredSeatText}>
                    <p className={featuredSeatTitle}>{item.seatFields.title}</p>
                    <p className={featuredSeatDesigner}>{item.seatFields.designer}</p>
                  </div>
                </Link>
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
