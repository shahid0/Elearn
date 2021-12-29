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
import VideosPage from './Components/ClassRoom/VideosPage/VideosPage';

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
      Route: "vPage",
    }
  }
  vClassData = {}
  vClassesData = (classCode , Teacher ,sName) => {
    this.vClassData = {
      classCode: classCode,
      Teacher: Teacher,
      CName: sName
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
      Route: this.prevArr[this.prevArr.length - 1]
    })
    this.prevArr.pop();
    console.log(this.vClassData)
  }
  render() {
    if (this.state.Route === "Login") {
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
          <Room vClassesData={this.vClassesData} RouteChangers={this.RouteChanger} />
        </ThemeProvider>
      )
    }
    else if (this.state.Route === "vPage") {
      return (
        <ThemeProvider theme={theme}>
          <GoBack getBack={this.getBack} />
          <VideosPage classData ={this.vClassData }/>
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
