import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';


function App() {
  const [posts, setPosts] = useState([
    {
      userOne: 'Garrus Vakarian',
      content: `It's so much easier to see the world in black and white. Gray? I don't know what to do with gray...`,
      date: '13 May 2022'
    }, 
    {
      userTwo: 'Thane Krios',
      content: `Guide this one, Kalahira, and he will be a companion to you as he was to me.`,
      date: '1 Jan 1999'
    }
  ])

  // Need to add a new post function here

  return (
    // lists the various components here
    <div>
      <NavBar/>
    </div>
  );
}

export default App;
