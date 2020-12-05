import { Link, Route,Switch } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import Add from './Components/Add';
import ContactList from './Components/ContactList';
import { toggleFalse } from './JS/actions/contacts';

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h2>Welcome to the MERN APP</h2>
      <Link to="/add">
        <Button inverted color="yellow" onClick={() => dispatch(toggleFalse())}>
          Add Contact
        </Button>
      </Link>
      <Link to="/">
        <Button inverted color="red">
          Home
        </Button>
      </Link>
      <Switch>
        <Route exact path="/" component={ContactList}/>
        <Route path={["/add","edit/:id"]} component={Add}/>
      </Switch>
    </div>
  );
}

export default App;
