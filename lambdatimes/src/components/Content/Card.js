import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt="news" />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  })
}


// {
//   headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
//   tab: "javascript",
//   img: "./assets/sir.jpg",
//   author: "SIR RUFF'N'STUFF"
// },


export default Card;
