import { Route,Switch } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';
import ContactList from './Components/ContactList';

function App() {
  return (
    <div className="App">
      <h2>Welcome</h2>
      <Switch>
        <Route exact path="/" component={ContactList}/>
        <Route path={["/add","edit/:id"]} component={Add}/>
      </Switch>
    </div>
  );
}

export default App;
