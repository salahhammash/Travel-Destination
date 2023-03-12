import { useState } from 'react';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

const daBa = require('../../../data/db.json');


function Tour(props) {

  // useParams

  // const [newCity, setNEWCITY] = useState(0)
  return (
    <div className='tour'>
       <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.tour.image} style={{ width: '18rem' }} />
            <Card.Body>
              <Card.Title>{props.tour.name}</Card.Title>

              <Link to={`/city/${props.tour.id}`}>  {/* this "id" that we tooked from the db  */}
                <Button variant="primary">More Info</Button>

              </Link>
            </Card.Body>
          </Card>

    </div>

  );
}

export default Tour;
