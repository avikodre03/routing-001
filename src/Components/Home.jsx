import React from 'react'
import "../Styles/Home.css"
import { AiFillPlayCircle } from 'react-icons/ai';
const Home = () => {
    return (
        <div className='homePage'>
            <div className="leftContainer">
                <h1>Leading MEP & Facility<br /> management company in Dubai</h1>
                <p>Urban Science is always ready to accept your challenges
                    Meeting your goals is our main objective. Professional services for facility management & MEP works.</p>
                <div className="buttonContainer">
                    <button>Componey Profile</button>
                    <button style={{ color: "black", background: "white" }}><AiFillPlayCircle fontSize="1.7em" /> Watch Video</button>
                </div>
            </div>
            <div className="RightContainer"></div>
        </div>
    )
}

export default Home