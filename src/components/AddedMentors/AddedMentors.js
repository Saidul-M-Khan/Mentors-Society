import React from 'react';
import './AddedMentors.css'

const AddedMentors = (props) => {
    
    const {name, image, tuition_fee} = props.mentor;
    
    return (
        <div className="added-mentor">
            <img src={image} alt="" />
            <span>{name}</span>
            <span className="salary">${tuition_fee}</span>
        </div>
    );
};

export default AddedMentors;
