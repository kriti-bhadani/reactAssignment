import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addUser">
          <AddUser />
        </Route>
        <Route exact path="/editUser/:id">
          <EditUser />
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
