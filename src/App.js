
import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = (props) => {
  let {apiKey,pageSize}= props
  pageSize = 9
  apiKey = process.env.REACT_APP_NEW_API_KEY
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<News key='general' apiKey={apiKey} pageSize={pageSize} country='in' category='general' />}></Route>
          <Route path='/business' element={<News key='business' apiKey={apiKey} pageSize={pageSize} country='in' category='business' />}></Route>
          <Route path='/entertainment' element={<News key='entertainment' apiKey={apiKey} pageSize={pageSize} country='in' category='entertainment' />}></Route>
          <Route path='/general' element={<News key='general' apiKey={apiKey} pageSize={pageSize} country='in' category='general' />}></Route>
          <Route path='/health' element={<News key='health' apiKey={apiKey} pageSize={pageSize} country='in' category='health' />}></Route>
          <Route path='/science' element={<News key='science' apiKey={apiKey} pageSize={pageSize} country='in' category='science' />}></Route>
          <Route path='/sports' element={<News key='sports' apiKey={apiKey} pageSize={pageSize} country='in' category='sports' />}></Route>
          <Route path='/technology' element={<News key='technology' apiKey={apiKey} pageSize={pageSize} country='in' category='technology' />}></Route>
        </Routes>


      </div>
    </Router>
  )

}
export default App

