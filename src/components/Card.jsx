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
            backgroundImage: mouseEnter? 'linear-gradient(to bottom, #FFA701, white)' : null
            }} onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
            <h2>{props.title}</h2>
            <img src= {'/images/' + props.image}/>
        </div>
    );
}

export default Card;