import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePost';
import { Container, Row } from 'react-bootstrap';
import './App.css';


function App() {
  const [posts, setPosts] = useState([
    {
      userName: 'Garrus Vakarian',
      content: `It's so much easier to see the world in black and white. Gray? I don't know what to do with gray...`,
      date: '13 May 2022'
    }, 
    {
      userName: 'Thane Krios',
      content: `Guide this one, Kalahira, and he will be a companion to you as he was to me.`,
      date: '1 Jan 1999'
    }
  ]);

  // Need to add a new post function here
  function addNewPost(post) {
    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }

  return (
    <Container className='create' fluid>
      <Row>
        <NavBar/>
      </Row>

      <Row>
        <CreatePost addNewPostProperty={addNewPost}/>
      </Row>

      <Row>
        
      </Row>
    </Container>
  );
}

export default App;
