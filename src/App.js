import React, { Component, useEffect,useState } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Navigation } from "./components/Navigation";
import { NoticeBoard } from "./components/NoticeBoard";
import { AdditionFancyShowCase } from "./components/AdditionFancyShowCase";
import { Section } from "./components/Section";
import {Project} from "./components/Project";
import {Skills} from "./components/Skills"
import {FooterContext} from "./context/footerContext";
import {Footer} from "./components/Footer";
export const App = () => {
  const [footerShow, setFooterShow] = useState(true);
  var showFooterorNot=(showornot)=>{
    setFooterShow(showornot);
  }
  return (
<FooterContext.Provider value={showFooterorNot}>
<Router>
 <div className="mainApp container">
      <Navigation />
      <NoticeBoard />
      <AdditionFancyShowCase />
      <Section />   
      {footerShow?<Footer/>:""}
    </div>

<Switch>
    <Route  path="/project" component={Project}/>
    <Route path="/skills" component={Skills}/>
</Switch>
   </Router>
</FooterContext.Provider>
  );
};
