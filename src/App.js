import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;