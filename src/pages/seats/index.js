import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Layout from "../../components/layout";

const SeatsPage = ({data: {allWpSeat: {edges}}}) => {
    return(
        <Layout pageTitle="Seats at the Seating Studio">
            {edges.map((item) => {
                const seatInfo = item.node.seatFields;
                const slug = item.node.slug;
                
                return (
                    <Link to={`/seats/${slug}`} key={item.node.id}>
                        <p>{seatInfo.title}</p>
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
          }
          slug
          id
        }
      }
    }
  }
`

export default SeatsPage;