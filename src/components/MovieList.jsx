import React from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap'

const MovieList = () => {
  return (
    <Row className='mt-3'>
        <CardMovie/>
        <CardMovie/>
        <CardMovie/>

    </Row>
  )
}

export default MovieList