import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'

const SeatPage = ({data: {wpSeat: {seatFields}}}) => {

    return (
        <Layout pageTitle={seatFields.title}>
            <h3>Designer: {seatFields.designer}</h3>
            <h5>Brand: {seatFields.brand}</h5>
            <h5>Year: {seatFields.year}</h5>
            <div dangerouslySetInnerHTML={{__html: seatFields.description}} />
            <p>height: {seatFields.height} cm</p>
            <p>width: {seatFields.width}</p>
            <p>depth: {seatFields.depth}</p>
            <p>Type of seat: {seatFields.typeOfSeat}</p>
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
      }
    }
  }
  
`

export default SeatPage;