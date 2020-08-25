import React,{useContext,useEffect} from 'react';
import { Redirect, Route, useRouteMatch } from 'react-router-dom';
import { Footer } from "../components/Footer";
import {Card} from "./Card";
import {GoHome} from "./GoHome";
import {FooterContext} from "../context/footerContext";
var flutter =[
    {
  
      topic:"Coffee App",
      description:"Basic coffee app.This project is going to blow your mind ",
      link:"https://github.com/sojoraja1/coffeeapp"
    },
  {
    topic:"NTC NCELL APP",
    description:"cloning of NTC NCELL app.This project is going to blow your mind ",
    link:"https://github.com/sojoraja1/NtcNcell"
  },
  {
    topic:"PushNotification",
    description:"If you enjoy embedding pushNotificaiton in your flutter app then ,this can be best",
    link:"https://github.com/sojoraja1/PushNotification-Local-"
  },
  
  
  ]
  
  var back = [
    {
  
      topic:"Implementing HateOas",
      description:"These project helps you to embedd other functional links to your api",
      link:"https://github.com/sojoraja1/workingWithSwaggerAndHateOas"
    },
  {
    topic:"JWT WebToken",
    description:"Helps you to embedd stateless JWT webtoken for managing logins",
    link:"https://github.com/sojoraja1/NtcNcell"
  },
  {
    topic:"Eudereka Server",
    description:"If you enjoy embedding pushNotificaiton in your flutter app then ,this can be best",
    link:"https://github.com/sojoraja1"
  }
  
  ]
  
  var front =[
    {
  
      topic:"Facebook Clone",
      description:"Do you love cloning fb website???If yes than this project is going to blow your mind",
      link:"#"
    },
  {
    topic:"Youtube CLone",
    description:"Do you love cloning youtube website???If yes than this project is going to blow your mind",
    link:"#"
  },
  {
    topic:"Instagram Clone",
    description:"Do you love cloning youtube website???If yes than this project is going to blow your mind",
    link:"#"
  }
  
  ]
export const Project = (props) => {
const name = useContext(FooterContext);
useEffect(() => {
 name(false);
}, [])
    return (
        <div className="container">
  
         <div id="projects">
<GoHome footer={name} routes={props}/>
        <div className="row justify-content-center" style={
            {
                "marginTop": "100px",
            }
        }><h2>My Projects</h2></div>
        <div className="row card-boxes">
          <div className="col-md-4" id="flutter">
          {flutter.map((data,index)=><Card topic={data.topic} description={data.description} link={data.link}/>)}
          </div>
          <div className="col-md-4" id="frontend">
          {front.map((data,index)=><Card topic={data.topic} description={data.description} link={data.link}/>)}
          </div>
          <div className="col-md-4" id="backend">
          {back.map((data,index)=><Card topic={data.topic} description={data.description} link={data.link}/>)}
          </div>
          

        </div>
      </div>
            <Footer />
        </div>
    );
}
