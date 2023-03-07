import React from 'react';
import './Tours.css'

const data = require('../../data/db.json');

function Tours() {
  return (

    <div className='tours'>

      {
        data.map((item) => {
          return (
            <div >

              <img src={item.image} className="imgs"></img>
              <h1> {item.name} </h1>
            </div>
          )
        })

      }

    </div>
  )

}

export default Tours