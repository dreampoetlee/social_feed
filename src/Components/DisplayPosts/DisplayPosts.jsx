import React from 'react';
import { Card, Container } from 'react-bootstrap';
import DislikeButton from './CustomButtons/DislikeButton';
import LikeButton from './CustomButtons/LikeButton';
import './DisplayPosts.css';


const DisplayPosts = (props) => {
  return (
    <Container>
      {props.parentPosts.map((el, index) => {
        return (
          <Card className='post-feed' key={index}>
            <Card.Body>
              <Card.Title>
                {el.userName}
              </Card.Title>

              <Card.Text>
                {el.content}
              </Card.Text>

              {/* <Card.Date>
                {el.fullDate}
              </Card.Date> */}

              <div className='btn-group'>
                <LikeButton/> <DislikeButton/>
              </div>
            
            </Card.Body>
          </Card>
        )
      })}
    </Container>
  );
}
 
export default DisplayPosts;
