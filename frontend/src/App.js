import { useEffect, useState } from "react";
import Header from "./Component/Layout/Header.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./Component/Footer.js";
import Home from "./Component/Home/Home.js"

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  },[]);

  return (
    <Router>
      <Header/>
<Home/>

      <Footer/>
    </Router>

  );
}

export default App;
