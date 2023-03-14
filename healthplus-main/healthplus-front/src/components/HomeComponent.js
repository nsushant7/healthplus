import React from "react";
import '../img.css';
import '../images/home.jpg'

function Home(){
    return(
        <div >
            <img src={process.env.PUBLIC_URL + '/home.jpg'} alt="home" />
        </div>
    )
}

export default Home;