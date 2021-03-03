import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutScreen from './components/AboutScreen';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';

const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
