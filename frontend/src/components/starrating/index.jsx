import React from 'react';
import FilledStarImage from '../../assets/icon/star_filled.svg';
import EmptyStarImage from '../../assets/icon/star.svg';
import HalfFilledStarImage from '../../assets/icon/star_half_filled.svg';
import {StarContainer, Star} from './style';

const StarRating = (props) => {

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (props.rating >= i ) {
        stars.push(<Star src={FilledStarImage} key={i} />)
    } else if (props.rating >= i - 0.5) {
        stars.push(<Star src={HalfFilledStarImage} key={i} />)
    } else {
        stars.push(<Star src={EmptyStarImage} key={i} />)
    }
  }

  return (
    <StarContainer>
      {stars}
    </StarContainer>
  )
};

export default StarRating;