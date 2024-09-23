import React from 'react'
import { Col } from 'react-bootstrap'
import img1 from "../assets/img/img1.jpg"

const CardMovie = () => {
  return (
    <Col xs='6' sm="6" md="4" lg="3" className='my-1'>
        <div className='card'>
            <img className='card_image' src={img1} alt='img'/>
            <div className='card__overlay'>
                <div className='overlay__text text-center w-100 p-2'>
                    <p>Movie Name : Cast AWay</p>
                    <p>Date  : 10-2-1992</p>
                    <p>Type : Animation</p>
                    <p>evaluation : Cast AWay</p>
                </div>
            </div>

        </div>

    </Col>
  )
}

export default CardMovie