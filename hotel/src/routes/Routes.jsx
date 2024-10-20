import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Rooms from '../pages/Rooms';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Reservation from '../pages/Reservation';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/reservation" component={Reservation} />
      </Switch>
    </Router>
  );
}

export default Routes;
