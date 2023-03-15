import { Route, useLocation} from 'react-router-dom';
import './App.css';
import {Home, Landing, Detail, Form} from "./views"; 
import NavBar from './components/NavBar/NavBar';

function App() {
  const location = useLocation(); 
  console.log(location);
  return (
    <div className="App">
      
    {location.pathname!== "/" && <NavBar />}
   
    
      <Route exact path="/">
        <Landing/>
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/detail/:id">
        <Detail />
      </Route>

      <Route path="/create">
        <Form />
      </Route>
    </div>
  );
}

export default App;
