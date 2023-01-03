import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

const SeatPage = ({data: {wpSeat: {seatFields}}}) => {

    const image = getImage(seatFields.picture.localFile);

    return (
        <Layout pageTitle={seatFields.title}>
            <div>
                <GatsbyImage image={image} alt={seatFields.picture.altText} />
                <h3>Designer: {seatFields.designer}</h3>
                <h5>Brand: {seatFields.brand}</h5>
                <h5>Year: {seatFields.year}</h5>
                <div dangerouslySetInnerHTML={{__html: seatFields.description}} />
                <p>height: {seatFields.height} cm</p>
                <p>width: {seatFields.width}</p>
                <p>depth: {seatFields.depth}</p>
                <p>Type of seat: {seatFields.typeOfSeat}</p>
            </div>
        </Layout>
    )
}

export const query = graphql `
query ($id: String) {
    wpSeat(id: {eq: $id}) {
      seatFields {
        title
        brand
        designer
        year
        depth
        height
        width
        typeOfSeat
        description
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
  }
`

export default SeatPage;