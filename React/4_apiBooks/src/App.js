import React, {useState, useEffect} from 'react';
import Home from './Home';
import Blog from './Blog';
import Book from './Book';
import Contact from './Contact';
// import $, { data } from 'jquery';
import axios from 'axios';
import About from './About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {

//   const [books, setBooks] = useState([]);

//   useEffect(()=>{
//     axios
//     .get("https://openlibrary.org/subjects/fantasy.json?details=true")
//     .then(response => {
//       setBooks(response);
  
//     })

// }, []);

// console.log(books);
// let arr = books.data;
// console.log(arr.works);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about' element={<About/>} />
          <Route path='/books' element={<Book/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
