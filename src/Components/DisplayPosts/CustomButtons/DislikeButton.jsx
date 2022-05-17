import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './CustomButtons.css';

const DislikeButton = (props) => {
  const [disBttn, setDisBttn] = useState('inactive');

  function handleClick() {
    if (disBttn === 'inactive') {
      setDisBttn('dislike')
    } else {
      setDisBttn('inactive');
    }
  } 

  return (
    <Container>
      <button className={disBttn} onClick={handleClick}>
        Dislike
      </button>
    </Container>
  );
}
 
export default DislikeButton;