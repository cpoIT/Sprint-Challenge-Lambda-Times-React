import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { cardData } from '../../data';

const Cards = props => {
  console.log(props.cards)
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map(card => <Card
            key={card.headline}
            card={card}
            />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = PropTypes.arrayOf(PropTypes.objects)

export default Cards;