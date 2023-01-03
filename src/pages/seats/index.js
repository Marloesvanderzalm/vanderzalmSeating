import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

const SeatsPage = ({data: {allWpSeat: {edges}}}) => {
  return(
    <Layout pageTitle="Seats at the Seating Studio">
        {edges.map((item) => {
          const seatInfo = item.node.seatFields;
          const slug = item.node.slug;
          const image = getImage(seatInfo.picture.localFile)
          return (
            <Link to={`/seats/${slug}`} key={item.node.id}>
              <section>
                <GatsbyImage image={image} alt={seatInfo.picture.altText} />
              <article>
                <h4>{seatInfo.title}</h4>
                <p>{seatInfo.brand}</p>
                <p>{seatInfo.designer}</p>
                <p>{seatInfo.year}</p>
              </article>
              </section>
            </Link>
          )
        })}
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
                gatsbyImageData(placeholder: BLURRED, height: 100, width: 100)
              }
            }
          }
        }
        slug
        id
      }
    }
  }
}
`

export default SeatsPage;