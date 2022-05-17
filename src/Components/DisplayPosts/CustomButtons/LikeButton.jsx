import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './CustomButtons.css';

const LikeButton = (props) => {
  const [likeBttn, setLikeBttn] = useState('inactive');

  function handleClick(){
    if (likeBttn === 'inactive'){
      setLikeBttn('like')
    } else {
      setLikeBttn('inactive');
    }
  }

  return (
   <Container>
     <button className={likeBttn} onClick={handleClick}>
        Like
      </button>
   </Container>
  );
}
 
export default LikeButton;