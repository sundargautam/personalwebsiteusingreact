import React,{useContext,useEffect} from 'react';
import '../componentscss/skills.css';
import {GoHome} from "./GoHome";
import { Footer } from "../components/Footer";
import {FooterContext} from "../context/footerContext";
export const Skills = (props) => {
    const name = useContext(FooterContext);
useEffect(() => {
 name(false);
}, [])
    return (
        <div className="skillpart container">
<div id="skills">
<GoHome footer={name} routes={props}/>
<div className="jumbotron text-dark text-center" style={{
    backgroundColor:"white"
}}>
  <h1 className="display-8">My Skills</h1>
  <hr className="my-2"/>
</div>

<section id="cd-timeline" className="cd-container">
  <div className="cd-timeline-block">
    <div className="cd-timeline-img cd-picture"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Nodejs"/> </div>
  
           <div className="cd-timeline-content">
      <h2>NodeJs</h2>
      <p> Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. </p>
      <span className="cd-date">Feb 21,2018</span>

  </div>
 
  
  <div className="cd-timeline-block">
    <div className="cd-timeline-img cd-movie"> <img src="https://du0ulnyus7r80.cloudfront.net/wp-content/uploads/2020/02/spring-boot-logo-png-4-transparent.png" alt="Springboot"/> </div>
  
    
    <div className="cd-timeline-content">
      <h2>Spring boot</h2>
      <p> Spring Boot is an open source Java-based framework used to create a micro Service. It is developed by Pivotal Team and is used to build stand-alone and production ready spring applications.</p>
    <span className="cd-date">Jan 18,2020</span> </div>

  </div>
 
  
  <div className="cd-timeline-block">
    <div className="cd-timeline-img cd-picture"> <img src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png" alt="ReactJs"/> </div>
  
           
    <div className="cd-timeline-content">
      <h2>React Js</h2>
      <p> React is an open-source JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications </p>
    <span className="cd-date">Jan 24,2018</span> </div>

  </div>
 
  
  <div className="cd-timeline-block">
    <div className="cd-timeline-img cd-location"> <img src="https://cdn.worldvectorlogo.com/logos/flutter-logo.svg" alt="Flutters"/> </div>
  
   
    <div className="cd-timeline-content">
      <h2>Flutter</h2>
      <p> Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia and the web from a single codebase. The first version of Flutter was known as codename "Sky" and ran on the Android operating system</p>
      <span className="cd-date">Feb 21,2020</span> </div>

  </div>
  <div className="cd-timeline-block">
    <div className="cd-timeline-img cd-location"> <img src="https://banner2.cleanpng.com/20180426/wpw/kisspng-angularjs-javascript-directive-5ae17348350107.66916/53815247245522171.jpg" alt="Flutters"/> </div>
  
    
    <div className="cd-timeline-content">
      <h2>Angular</h2>
      <p>
        Angular is an open-source JavaScript library for building user interfaces or UI components. It is maintained by Google and a community of individual developers and companies. 
      </p>
      <span className="cd-date">Feb 21,2020</span> </div>

  </div>
  <div className="cd-timeline-block">
    <div className="cd-timeline-img cd-location"> <img src="https://e7.pngegg.com/pngimages/595/79/png-clipart-dart-programming-language-flutter-object-orient/ed-programming-flutter-logo-className-fauna.png" alt="Flutters"/> </div>
  
    
    <div className="cd-timeline-content">
      <h2>Dart</h2>
      <p> Dart is programming language used in flutter developed by Google </p>
      <span className="cd-date">Feb 21,2020</span> </div>

  </div>
  <div className="cd-timeline-block">
    <div className="cd-timeline-img cd-location"> <img src="https://www.pngitem.com/pimgs/m/519-5191896_pofolio-website-html-css-javascript-logo-png-tr/ansparent.png" alt="Flutters"/> </div>
  
    
    <div className="cd-timeline-content">
      <h2>HTML,CSS,PURE JS</h2>
      <p>In order to build an interactive and funcionality based website HTML,CSS,and JS are the most.An overview:

        HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript.
        CSS is used to control presentation, formatting, and layout.
        JavaScript is used to control the behavior of different elements.</p>
      <span className="cd-date">March 21,2016</span> </div>

  </div>
</div>
</section>
    <Footer />
</div>
</div>
 

    );
}


