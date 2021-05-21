import Authen from './Authen';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <h1>hi</h1>
    <Switch>
      <Route path="/">
      <Authen />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
