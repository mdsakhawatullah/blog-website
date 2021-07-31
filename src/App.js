import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TopBar from './TopBar/TopBar';
import Home from './Home/Home';
import Register from './RegisterPage/Register';
import Login from './LoginPage/Login';
import Write from './WritePage/Write';
import UserSetting from './UserSetting/UserSetting';
import Single from './Single/Single';
import { Context } from "./Context/Context";
import { useContext } from "react";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <UserSetting /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;


