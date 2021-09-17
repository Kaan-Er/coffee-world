import { Fragment } from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
  return (
    <Fragment>
      <div className="sidenav">
        <Input placeholder="Search" />
      </div>
      <div className="main"></div>
    </Fragment>
  );
}

export default App;
