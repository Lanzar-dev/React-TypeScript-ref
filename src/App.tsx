import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
// import User from "./components/state/User";
import User from "./components/context/User";
import Status from "./components/Status";
import { UserContextProvider } from "./components/context/UserContext";
import MutableRef from "./components/ref/MutableRef";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restrictions/RandomNumber";
import Toast from "./components/templateLiterals/Toast";
import CustomButton from "./components/html/Button";

function App() {
  // const personName = {
  //   first: "Toheeb",
  //   last: "Yekeen",
  // };

  // const nameList = [
  //   {
  //     first: "Taiwo",
  //     last: "Yekeen",
  //   },
  //   {
  //     first: "Hammed",
  //     last: "Yekeen",
  //   },
  //   {
  //     first: "Saka",
  //     last: "Rabiu",
  //   },
  // ];

  return (
    <div className="App">
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton>
    </div>
  );
}

export default App;
