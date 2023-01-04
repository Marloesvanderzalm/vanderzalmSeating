import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from "../../components/layout";
import {
  seatsPageHeader,
  seatsPageHeaderText,
  seatsPageSeats
} from '../../page.module.css'
import Seat from '../../components/seat';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const SeatsPage = ({data: {allWpSeat: {edges}, wpPage: {seatsPageFields}}}) => {
  const image = getImage(seatsPageFields.picture.localFile);
  return(
    <Layout>
      <section className={seatsPageHeader}>
        <GatsbyImage image={image} alt={seatsPageFields.picture.altText} />
        <div className={seatsPageHeaderText}>
          <h1>our seats</h1>
          <div dangerouslySetInnerHTML={{
            __html: seatsPageFields.description
          }}/>
        </div>
      </section>
      <section className={seatsPageSeats}>
        {edges.map(({node: seat}) => (
            <Seat key={seat.id} slug={seat.slug} seat={seat} />
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
query {
  allWpSeat {
    edges {
      node {
        seatFields {
          title
          designer
          brand
          year
          picture {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, height: 300, width: 300)
              }
            }
          }
        }
        slug
        id
      }
    }
  }
  wpPage(slug: {eq: "seats"}) {
    seatsPageFields {
      title
      description
      picture {
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

export default SeatsPage;