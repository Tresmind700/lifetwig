import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed';

import RightSideBar from './RightSideBar';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <>
        <Header />

        <div className='app__body'>
          <Sidebar />
          <Feed />

          <RightSideBar />
        </div>
      </>
      ;
    </div>
  );
}

export default App;


