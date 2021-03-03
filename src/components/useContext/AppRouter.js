import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AboutScreen from './components/AboutScreen';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import NavBar from './components/NavBar';

const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={HomeScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
