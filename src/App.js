
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { About } from './components/About';
import { Cards } from './components/Cards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
        <Route path="/Home" component={Home} />
        <Route path="/Profile" component={Profile} />
        <Route path="/About" component={About} />
        <Route path="/Cards" component={Cards} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
