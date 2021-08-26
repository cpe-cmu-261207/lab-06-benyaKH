import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about'>
          {/* template for about me */}
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>About me</p>
            <p className='text-xl'>Benyapa Khiaotai 630610747</p>
          </div>
        </Route>

        <Route path='/history/result'>
          {/* template for /history/result */}
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Historical price</p>
            <p className='text-2xl'>Loading ...</p>
            <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
            <p className='text-xl font-semibold'> ( From 2021-01-01 To 2021-01-02)</p>
            <ul>
              <li className='text-xl'>2021-01-01 - {(1000000).toLocaleString()} THB</li>
              <li className='text-xl'>2021-01-02 - {(2000000).toLocaleString()} THB</li>
              <li className='text-xl'>2021-01-03 - {(3000000).toLocaleString()} THB</li>
            </ul>
          </div>
        </Route>

        <Route path='/history/select'>
          {/* template for /history/select */}
          <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select historical range</p>
            <span>From date</span>
            <input type='date' onChange={e => console.log(e.target.value)}></input>
            <span>To date</span>
            <input type='date' onChange={e => console.log(e.target.value)}></input>
            <br />
            <button>Get data</button>
          </div>
        </Route>

        <Route path='/current'>
          {/* template for /current */}
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Current price</p>
            <p className='text-2xl'>Loading ...</p>
            <p className='text-2xl'>{(999999999).toLocaleString()} THB</p>
            <p> (Last updated) </p>
          </div>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
