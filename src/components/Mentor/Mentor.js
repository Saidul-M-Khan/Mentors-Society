import React from 'react';
import './Mentor.css'


const Mentor = (props) => {
    const {name, department, course, tuition_fee, rating, total_rating, image}=props.mentor  || {}
    return (
        <div className="mentor">
            <div className="mentor-image">
                <img src={image} alt="" />
            </div>
            <div className="mentor-details">
                <strong><h1>{name}</h1></strong>
                <p><strong>Department :</strong> {department}</p>
                <p><strong>Course :</strong> {course}</p>
                <p><strong>Rating :</strong> {rating} (Rated By {total_rating} People)</p>
                <h2><strong>Tuition Fee :</strong><span style={{color:"red"}}>${tuition_fee}</span></h2>
                <button onClick={() => props.handler(props.mentor)}><i className="fas fa-cart-plus"></i>&nbsp; Add Member</button>
            </div>
        </div>
    );
};

export default Mentor;