import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {

    

    const { budget,currency } = useContext(AppContext);
   
    /*
    const [budget_,setBudget] = useState(0);
    budget = budget_;

        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });

    }
*/

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
        </div>
    );
};
export default Budget;
