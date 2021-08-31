import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import PlayerDetails from "./pages/PlayerDetails/PlayerDetails";
import DynamicLine from "./components/DynamicLine/DynamicLine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <DynamicLine /> */}
        <Switch>
          <Route path="/" exact component={Card} />
          <Route path="/playerdetails/:id" exact component={PlayerDetails} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
