import React from 'react';
import styled from 'styled-components';
import FilledStarImage from '../../assets/icon/star_filled.svg';
import EmptyStarImage from '../../assets/icon/star.svg';
import HalfFilledStarImage from '../../assets/icon/star_half_filled.svg';

const StarContainer = styled.div`
padding: 10px;
`;

const Star = styled.img`
width: 25px;
`;

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