import React from 'react';
import './Cart.css'
import AddedMentors from '../AddedMentors/AddedMentors'

const Cart = (props) => {
    const {totalAdded} = props;
    let totalCost = 0;

    if(totalAdded.length !== 0){
        for(const item of totalAdded){
            totalCost += item.tuition_fee;
        }
    }
    return (
        <div>
            <h2>Number of Mentors Added: {totalAdded.length}</h2>
            <h2>Total Cost: <span style={{color:"red"}}>${totalCost}</span></h2>

            <div className="display-added">
                {
                    totalAdded.map(mentor => <AddedMentors key={mentor.id} mentor={mentor}></AddedMentors>)
                }
            </div>
        </div>
        
    );
};

export default Cart;