import React from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.css'

export const CardList = (props) => {
  console.log(props.monsters);
  return (
    <div className="card_list">
      { 
        props.monsters.map(monster => (
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