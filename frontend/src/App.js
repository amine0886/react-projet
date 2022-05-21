import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [userName, setUsername] = useState('')

  useEffect(() => {
    getName();

  },[])

  const getName = async () => {
    const response = await axios.get('api/books/');
    console.log(response);

   }
  return (
  <>
    <h1>My Books</h1>
    <h3>name of book:</h3>
  </>
  );
}

export default App;
