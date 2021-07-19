import React from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.css'

export const CardList = ({monsters}) => {
  return (
    <div className="card_list">
      { 
        monsters.map(monster => (
          <Card
            key={monster.id}
            id={monster.id}
            name={monster.name}
            email={monster.email}
          />
        ))
      }
    </div>
  )
}