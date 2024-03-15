import './App.css';
import { Route, Switch } from "react-router-dom";
import Open from './Open';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Open } />
    </Switch>

  );
}

export default App;
