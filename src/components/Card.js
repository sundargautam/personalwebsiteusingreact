import React from 'react'

export const Card=(props)=>{
    return (
            <div class='card box-shadow text-center' style={{

width: "18rem"
            }}>
       <div class='card-body'>
           <h5 class='card-title'>{props.topic} </h5>
         <p class='card-text'>{props.description}</p>
             <a href='#'  target='popup' class='d-inline-flex btn btn-primary'>View Project in Github</a>
         </div>
       </div>

    )
}
