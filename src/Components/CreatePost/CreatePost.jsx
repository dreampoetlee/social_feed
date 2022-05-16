import React, { useState } from 'react';
import { Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import './CreatePost.css';

const CreatePost = (props) => {
  const [userName, setUserName] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    let addNewPost = {
      userName: userName,
      content: content,
      date: fullDate
    };
    props.addNewPostProperty(addNewPost);
  }

  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let fullDate = `${day}/${month}/${year}`

  return (
    <Container className='create' fluid>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Username:</FormLabel>
          <FormControl type='text'
            placeholder='Enter username'
            value={userName}
            onChange={(event) => setUserName(
              event.target.value
            )}        
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Content:</FormLabel>
          <FormControl type='textarea'
            placeholder='Please update your status here.'
            value={content}
            style={{height: '100px'}}
            onChange={(event) => setContent(
              event.target.value
            )}        
          />
        </FormGroup>

        <button type='submit' className='btn btn-primary'>       
          Post <span id='text' className='badge bg-light'>{fullDate}</span>
        </button>
      </Form>
    </Container>
  );
}

export default CreatePost;