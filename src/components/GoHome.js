import React from 'react';

export const GoHome = (props) => {
    return (
        <div>
              <button className="btn btn-primary"   onClick={()=>{
                props.footer(true)
props.routes.history.push("/")
}}>
  <i className="fa fa-backward fa-lg"/>
  <b>Go back</b>
  </button>
        </div>
    );
}
