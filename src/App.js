import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import wipPage from './pages/wip';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/wip" component={wipPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
