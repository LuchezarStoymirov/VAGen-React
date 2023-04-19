import './Card.css';
import { useState } from 'react';


function Card(props){

    var [mouseEnter, setMouseEnter] = useState(false);

    var mouseOver = (event) => {
        setMouseEnter(true);
    } 

    var mouseLeave = (event) => {
        setMouseEnter(false);
    }

    return(
        <div className='Card' style={{
            backgroundImage: mouseEnter? 'linear-gradient(to bottom ,#FFA701 ,white ,white)' : null,
            width: mouseEnter? '320px':null,
            height: mouseEnter? '200px':null,
            marginLeft: mouseEnter? '70px':null,
            marginTop: mouseEnter? '20px':null
            }} onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
            <h2>{mouseEnter? null: props.title}</h2>
            {mouseEnter? <h6>{props.text}</h6>:<img src= {'/images/' + props.image}/>}
        </div>
    );
}

export default Card;