import './App.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import NavigationBar from './components/Navigation/NavigationBar';

//Pages
import Home from './pages/Home';

library.add(fab,fas);

function App() {
  return (
      <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </Router>
  );
}

export default App;
