import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

const IndexPage = ({data: {wpPage: { homePageFields }}}) => {

  const image = getImage(homePageFields.picture.localFile);

  return (
      <Layout pageTitle="Welcome to the Seating Studio!">
        <section>
          <GatsbyImage image={image} alt={homePageFields.picture.altText} />
          <h1>{homePageFields.title}</h1>
          <article>
            <div dangerouslySetInnerHTML={{
              __html: homePageFields.description
            }}/>
          </article>
        </section>
        <section>
          <h1>Some of our Seats</h1>
          <article>
            {homePageFields.featuredProducts.map((item) => {
              const image = getImage(item.seatFields.picture.localFile)
              return (
                <Link key={item.id} to={`/seats/${item.slug}`}>
                  <GatsbyImage image={image} alt={item.seatFields.picture.altText} />
                  <p>{item.seatFields.title}</p>
                  <p>{item.seatFields.brand} - {item.seatFields.designer}</p>
                  <p>{item.seatFields.year}</p>
                </Link>
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
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, height: 100, width: 100)
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
