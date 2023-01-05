import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  seatPageContainer,
  seatPageSeatInfo,
  seatPageTaxonomy,
  seatPageTaxonomyColor,
  seatPageTaxonomyColors,
  seatPageTaxonomyMaterial,
  seatPageTaxonomyMaterials,
  seatPageImage
} from '../../page.module.css'

const SeatPage = ({data: {wpSeat: {seatFields, colors: {nodes: colors}, materials: {nodes: materials}}}}) => {

    const image = getImage(seatFields.picture.localFile);
    
    return (
      <Layout>
        <section className={seatPageContainer}>
          <GatsbyImage className={seatPageImage} image={image} alt={seatFields.picture.altText} />
          <div className={seatPageSeatInfo}>
            <h1>{seatFields.title}</h1>
            <div dangerouslySetInnerHTML={{__html: seatFields.description}} />
            <p> 
              <span>Designer</span> 
              {seatFields.designer}
            </p>
            <p>
              <span>Brand</span> 
              {seatFields.brand}
            </p>
            <p> 
              <span>Year</span> 
              {seatFields.year}
            </p>
            <p> 
              <span>Height</span> 
              {seatFields.height}
            </p>
            <p> 
              <span>Width</span> 
              {seatFields.width}
            </p>
            <p> 
              <span>Dept</span>
              {seatFields.depth}
            </p>
            <p> 
              <span>Type of seat</span>
              {seatFields.typeOfSeat}
            </p>
            <div className={seatPageTaxonomy}>
              { colors[0] &&
                <div className={seatPageTaxonomyColor}> 
                  <span>Colors</span>
                  <div className={seatPageTaxonomyColors}>
                    {colors.map((color) => <p key={color.name}>{color.name}</p>)}
                  </div>
                </div>
              }
              { materials[0] && 
                <div className={seatPageTaxonomyMaterial}>
                  <span>Materials</span>
                  <div className={seatPageTaxonomyMaterials}>
                    {materials.map((material) => <p key={material.name}>{material.name}</p>)}
                  </div>
                </div>
              }
            </div>
          </div>
        </section>
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
    colors {
      nodes {
        name
      }
    }
    materials {
      nodes {
        name
      }
    }
  }
}
`

export default SeatPage;