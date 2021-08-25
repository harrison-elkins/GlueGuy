import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Card from "./components/Card/Card";
import PlayerDetails from "./pages/PlayerDetails/PlayerDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/card" exact component={Card} />
          <Route path="/playerdetails/:id" exact component={PlayerDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
