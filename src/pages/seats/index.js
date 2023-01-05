import { graphql } from 'gatsby';
import * as React from 'react';
import Seat from '../../components/seat';
import Layout from "../../components/layout";
import {
  seatsPageHeader,
  seatsPageImage,
  seatsPageHeaderText,
  seatsPageSeats,
} from '../../page.module.css'
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const SeatsPage = ({data: {allWpSeat: {edges}, wpPage: {seatsPageFields}}}) => {
  const image = getImage(seatsPageFields.picture.localFile);
  return(
    <Layout>
      <section className={seatsPageHeader}>
        <GatsbyImage className={seatsPageImage} image={image} alt={seatsPageFields.picture.altText} />
        {/* https://galeriemagazine.com/eames-lounge-chair-design-icon/ photo by Herman Miller */}
        {/* https://www.artek.fi/en/products/stool-60 */}
        {/** https://www.misterdesign.nl/wishbone-stoel-ch24-beuken-chair-carl-hansen.html */}
        {/** https://www.misterdesign.be/cassina-lc4-chaise-longue.html */}
        {/** https://www.vitra.com/en-gb/living/product/details/soft-pad-chairs-ea-217-219 */}
        {/** https://www.hay.nl/en/pyramid-bench-12#visit-store-product-detail */}
        {/** https://www.gufram.it/en/prodotto-3-bocca */}
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

export default SeatsPage;