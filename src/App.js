
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default class App extends Component {
  pageSize=9
  apiKey=process.env.REACT_APP_NEW_API_KEY
  render() {
    return (
      <Router>
        <div>
        <Navbar/>
          <Routes>
            <Route path='/' element={<News key='general' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<News key='business' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='entertainment' />}></Route>
            <Route path='/general' element={<News key='general' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='general'/>}></Route>
            <Route path='/health' element={<News key='health' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='health' />}></Route>
            <Route path='/science' element={<News key='science' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='technology' />}></Route>
          </Routes>
          

        </div>
      </Router>
    )
  }
}

