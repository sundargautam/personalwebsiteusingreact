import React from 'react';
import '../componentscss/section.css';
export const Section = () => {
    return (
        <div className="section">
            <section className="heading text-center" style={{

                background:"#fcfcfc"
            }}>
        <div className="container">
          <h2 className="jumbotron-heading">
            Searching for Web and Mobile developer??
          </h2>
          <p className="lead text-muted">
            I can develop beautiful websites and mobile apps
          </p>
          <i
            className="fas fa-lg fa-arrow-circle-down lead"
         
          />
          CheckOut
          <p>
            <button  className="btn btn-primary my-2">Searching for Front End</button>
            <button className="btn btn-primary my-2"
              >Searching for App Developer</button>
            
            <button className="btn btn-primary my-2">Searching for Back End</button>
          </p>
        </div>
      </section>
        </div>
    );
}
