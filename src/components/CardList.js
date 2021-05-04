import React from 'react';

import Card from './Card.js';

const CardList=(props)=>{
  const {robots} =props;
  //when you do a loop, you have to give a unique key to identify uniqly each item in the loop in case of update etc...
  const cardsArray = robots.map((user,i) =>{
    return (<Card 
      key={robots[i].id} 
      id={robots[i].id} 
      name={robots[i].name} 
      email={robots[i].email}/>);
    }
  );

  return(
    <div>
     {cardsArray}
    </div>
  );
}

export default CardList;