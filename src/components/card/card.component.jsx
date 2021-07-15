import React from 'react';
import './card.styles.css'

export const Card = ({id, name, email}) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?set=set2`} />
      <div>
        <h3 className="ma4 mb2 navy">{name}</h3>
        <p className="ma0 mb3">{email}</p>
      </div>
    </div>
  )
}