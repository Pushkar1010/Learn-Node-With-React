import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Component, useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import axios from 'axios';

const gitHubUrl = "http://localhost:3001/api/get";

function App() {

  const [nameIt, setName] = useState('');
  const [review, setReview] = useState('');

  const [listOfNames, setListofNames] = useState([]);

  //console.log('nameit:'+listOfNames.nameIt);

  const getGiHubUserWithAxios =  () => {
    const response =  axios.get(gitHubUrl);
    setListofNames(response.data);
  };

  useEffect(() => {
    getGiHubUserWithAxios();
  }, []);

  const submitReview = () => {
    axios.post('http://localhost:3001/api',
      {
        nameIt: nameIt,
        review: review
      }).then(() => {

        alert('Success insert');

      })
  };

  return (

    <div className="App"><h1>CRUD APPLICATION</h1>
    <div className="form">

      <label>Movie Name</label>
      <input type="text" name="movieName" onChange={(e) => {

        setName(e.target.value)

      }} />
      <br />
      <br />
      <label>Review</label>
      <input type="text" name="review" onChange={(e) => {

        setReview(e.target.value)

      }} />
      <br />
      <br />
      <button onClick={submitReview}>Submit</button>
      
      <h5 className="info-item">{listOfNames}</h5>
      <h5 className="info-item">{listOfNames}</h5>
      </div>
    </div>
  );
}

export default App;

    /*     <Greet name='Steve Roger' heroName='Captain America'>
  
        <p>This is child prop</p>
  
        </Greet>
        <Greet name='Peter Parker'/>
        <Greet name='Tony Stark'/>
        <Welcome/>
        <Hello/>
        <Message/>
        <Counter/>
        <FunctionClick/>
        <ClassClick/>*/