import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResponsiveCards from "./components/ResponsiveCards/ResponsiveCards";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import PlayerDetails from "./pages/PlayerDetails/PlayerDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Card} />
          <Route path="/playerdetails/:id" exact component={PlayerDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
