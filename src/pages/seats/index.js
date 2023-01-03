import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Layout from "../../components/layout";

const SeatsPage = ({data: {allWpSeat: {edges}}}) => {
    return(
        <Layout pageTitle="Seats - van der Zalm Studio">
            {edges.map((item) => {
                const seatInfo = item.node.seatFields;
                const slug = item.node.slug;
                return (
                    <Link to={`/seats/${slug}`}>
                        <p key={item.node.id}>{seatInfo.title}</p>
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