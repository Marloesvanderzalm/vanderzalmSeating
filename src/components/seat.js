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
            <article className={seatText}>
                <h4 className={seatTextTitle}>{seat.seatFields.title}</h4>
                <p className={seatTextDesigner}>{seat.seatFields.designer}</p>
            </article>
        </Link>
    )
}

export default Seat;