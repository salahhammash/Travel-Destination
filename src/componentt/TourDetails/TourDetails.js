import { useParams } from "react-router-dom" 
// we use it just when we want to to take the id from the link that in the top of page 
import { useState } from 'react';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './TourDetails.css'


const daBa = require('../../data/db.json');



// function Details() {
    // const { id } = useParams() //-> this id is the same name that i gived to the /citiy/:id at the app 
    // const newData = daBa.filter((i) => {
    //     if (i.id === id) {
    //         return i
    //     }
    // })
    // return (

    //     <div className="det">

    //         <h3>{newData[0].name}</h3>
    //         <img src={newData[0].image} />
    //         <p>{newData[0].info}</p>
    //         <h6>{newData[0].price}</h6>

    //     </div>

    // )

    
function Details() {
    const { id } = useParams();
    const info = daBa.filter((e) => e.id === id);
    let cityCard = info[0];
  
    const [showMore, setShowMore] = useState(false);
  
    const handleShowMoreClick = () => {
      setShowMore(!showMore);
    }
  
    return (
      <div className="a">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cityCard.image}  style={{ width: '25rem' }} />
          <Card.Body>
            <Card.Title  style={{ width: '30rem' }} >{cityCard.name}</Card.Title>
            <Card.Text>
              {showMore ? cityCard.info : `${cityCard.info.substring(0, 100)}...`}
              <Card.Text> {cityCard.price}</Card.Text>
            </Card.Text>
            <Button onClick={handleShowMoreClick}>
              {showMore ? "Show less" : "Show more"}
            </Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
  


export default Details