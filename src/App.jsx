import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CreatePosts from './Components/CreatePosts/CreatePosts';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import { Container, Row } from 'react-bootstrap';


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
        <CreatePosts addNewPostProperty={addNewPost}/>
      </Row>

      <Row>
        <DisplayPosts parentPosts={posts}/>
      </Row>
    </Container>
  );
}

export default App;
