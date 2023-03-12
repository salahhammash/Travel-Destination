import React from 'react';
import './Tours.css'
import Tour from './tour/Tour';
const daBa = require('../../data/db.json');

function Tours() {
  return (


    <div className="tours">
      {daBa.map((element) => {
        return (
          <div key={element.id}>
            <Tour tour={element} />
          </div>
        )
      })}
    </div>
  )
}











export default Tours