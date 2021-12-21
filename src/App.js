import './App.css';
import Info from './Components/Info/Info'
import react from 'react';
import {
  ThemeProvider,
  DefaultTheme
} from "react-atomize";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login'
import Room from './Components/ClassRoom/Room'
import GoBack from './Components/back/Back';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    brand800: "#671de1"
  },
  rounded: {
    ...DefaultTheme.rounded,
    brandRadius: "20px"
  }
};

class App extends react.Component {
  constructor() {
    super()
    this.state = {
      Route: "Land",
    }
  }

  prevArr = []

  RouteChanger = (R) => {
    this.prevArr.push(this.state.Route);
    this.setState({
      Route: R
    })
  }
  getBack = () => {
    this.setState({
      Route: this.prevArr[this.prevArr.length-1]
    })
    this.prevArr.pop();
  }
  render() {
    if (this.state.Route === "Login") {
      alert("Username : shadow | Password : shadow")
      return (
        <ThemeProvider theme={theme}>
          <GoBack getBack={this.getBack} />
          <Login RouteChangers={this.RouteChanger} />
        </ThemeProvider>
      );
    }
    else if (this.state.Route === "Room") {
      return (
        <ThemeProvider theme={theme}>
          <GoBack getBack={this.getBack} />
          <Room />
        </ThemeProvider>
      )
    }
    else {
      return (
        <ThemeProvider theme={theme}>
          <GoBack getBack={this.getBack} />
          <Navbar RouteChangers={this.RouteChanger} />
          <Info RouteChange={this.RouteChanger} />
        </ThemeProvider>
      );
    }
  }

}

export default App;