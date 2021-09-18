import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import SearchInput from "./components/Input/SearchInput";
import Category from "./Layout/Category";
import Home from "./Layout/Home";

function App() {
  return (
    <Router>
      <div clasName="app">
        <div className="sidenav">
          <SearchInput placeholder="Search" />
          <div className="categories">
            <NavLink exact to="/" activeClassName="active">
              All Coffees
            </NavLink>
            <NavLink to="/category/hot" activeClassName="active">
              Hot
            </NavLink>
            <NavLink to="/category/iced" activeClassName="active">
              Iced
            </NavLink>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/category/:type" component={Category} />
      </div>
    </Router>
  );
}

export default App;
