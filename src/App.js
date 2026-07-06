import React from 'react'
import './App.css';
import { useState } from 'react';
import LoadingBar from "react-top-loading-bar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar';
import News from './components/news';
import Master from './components/master';
function App() {
  // const newsApiKey = process.env.REACT_APP_API_NEWSSPHERE;
  const[progress,setProgress]=useState(0);
  return (
    <div>
      <div>
      <BrowserRouter>
      <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
      />
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Master/>}>
          <Route index element={<News  setProgress={setProgress} key="general" category="general"  pageSize={10}/>}/>
          <Route exact  path='business' element={<News  setProgress={setProgress} key="business" category="business"  pageSize={10}/>}/>
          <Route exact path='/entertainment' element={<News  setProgress={setProgress} key="entertainment" category="entertainment"  pageSize={10}/>}/>
          <Route exact path='health' element={<News  setProgress={setProgress} key="health" category="health"   pageSize={10}/>}/>
          <Route exact path='science' element={<News  setProgress={setProgress} key="science" category="science"  pageSize={10}/>}/>
          <Route exact path='sports' element={<News  setProgress={setProgress} key="sports" category="sports"  pageSize={10}/>}/>
          <Route exact path='technology' element={<News  setProgress={setProgress} key="technology" category="technology"  pageSize={10}/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App