import React from "react";
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    seatStyle,
    seatText,
    seatTextTitle,
    seatTextDesigner
} from './seat.module.css'

const Seat = ({slug, seat}) => {
    const image = getImage(seat.seatFields.picture.localFile)
    return ( 
        <Link className={seatStyle} to={`/seats/${slug}`}>
            <GatsbyImage image={image} alt={seat.seatFields.picture.altText} />
            {/* https://galeriemagazine.com/eames-lounge-chair-design-icon/ photo by Herman Miller */}
            {/* https://www.artek.fi/en/products/stool-60 */}
            {/** https://www.misterdesign.nl/wishbone-stoel-ch24-beuken-chair-carl-hansen.html */}
            {/** https://www.misterdesign.be/cassina-lc4-chaise-longue.html */}
            {/** https://www.vitra.com/en-gb/living/product/details/soft-pad-chairs-ea-217-219 */}
            {/** https://www.hay.nl/en/pyramid-bench-12#visit-store-product-detail */}
            {/** https://www.gufram.it/en/prodotto-3-bocca */}
            <article className={seatText}>
                <h4 className={seatTextTitle}>{seat.seatFields.title}</h4>
                <p className={seatTextDesigner}>{seat.seatFields.designer}</p>
                <p className={seatTextDesigner}>for {seat.seatFields.brand}</p>
            </article>
        </Link>
    )
}

export default Seat;