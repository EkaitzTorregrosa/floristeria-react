import "./App.css";
import { FloristeriaForm } from "./views/FloristeriaForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Details } from "./views/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Floristería Dulces Pétalos</h1>
          <hr />

          <Switch>
            <Route exact path="/" component={FloristeriaForm} />
            <Route path="/details/" component={Details} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
