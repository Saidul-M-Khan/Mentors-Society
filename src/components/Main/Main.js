import React, { useState, useEffect } from 'react';
import Mentor from '../Mentor/Mentor';
import Cart from '../Cart/Cart';

import './Main.css';

const Main = () => {

    const [persons, setPersons] = useState([]);
    const [added, setAdded] = useState([]);

    useEffect(()=>{
        fetch('./mentorsDB.json')
        .then(response=>response.json())
        .then(data=>{setPersons(data);
        })
    },[])

    const handleAdded = (mentor) => {
        for(const item of added){
            if(item.id === mentor.id){
                alert("This Mentor Is Already Added");
                return;
            }
        }
        const newAdded = [...added, mentor];
        setAdded(newAdded)
    }

    
    
    return (
        
        <div className="main-container">
            <div className="mentors-container">
                {
                    persons.map(mentor => (
                        <Mentor key={mentor.id} mentor={mentor} handler={handleAdded}></Mentor>
                    ))
                }
            </div>

            <div className="cart-container">
                <Cart totalAdded={added}></Cart>
            </div>
        </div>
    );
};

export default Main;