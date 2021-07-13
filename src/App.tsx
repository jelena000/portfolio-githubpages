import React, { useState } from 'react';
import './App.css';
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import { BrowserRouter, Route } from 'react-router-dom';
import Work from './components/Work/Work';

type stateType = {
  a: number,
  b? : string,
}

function App() {
  const [state, setstate] = useState<stateType>({ a : 1, b: 'a'});

  return (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Route exact path="/" component={Main}></Route>
          <Route path="/work/:id" component={Work}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
