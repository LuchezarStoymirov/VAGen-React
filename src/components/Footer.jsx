import './Footer.css';

function Footer(){

    var date = new Date();
    var year = date.getFullYear();

    return(
        <div className='Footer'>
            <p>MotoAir EOOD {year}</p>
        </div>
    );
}

export default Footer