import './App.css';


import {BrowserRouter, Route, Link} from 'react-router-dom';

import {useState} from 'react';

import {Landing} from './routes/Landing';
import {ShowPosts} from './routes/ShowPosts';
import {AddPosts} from './routes/AddPosts.js';

function App() {   
  const [getList, setList] = useState([]);
  if(getList.length <1) {fetch('http://localhost:8888/read').then(response => response.json()).then(response => setList(response))};
   
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
        <BrowserRouter>
        <Link to="/showPosts">  <button> Show Posts </button> </Link>
        <Link to="/addPosts">  <button> Add Posts </button>   </Link>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/showPosts">
          <ShowPosts get = {getList}/>
        </Route>
        <Route path="/addPosts">
          <AddPosts set = {setList} />
        </Route>
        </BrowserRouter>
        </p>
      
      </header>

      </div>
  );
}

export default App;