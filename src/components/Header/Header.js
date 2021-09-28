import React from 'react';

const Header = () => {
    return (
<div>
    <div className="header">
        <div className="navbar"> 
            <div className="logo">
                <h2><i className="fas fa-user-graduate"></i>  Mentors Society</h2>
            </div>
            <div className="nav">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/mentors">Mentors</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
            </div> 
        </div>   
    </div>
    <div className="heading">
        <h1>
            Hire Mentors With <span style={{color:"blue"}}>Mentors Society</span> 
        </h1>
        <h4>
            We have highly skilled mentors who are working as professional in many top class companies.
        </h4>
        <h2>
            Total Budget: <span style={{color:"purple"}}>$100000</span>
        </h2>
    </div>
</div>
    );
};

export default Header;

