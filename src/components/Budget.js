import React, { useContext, setBudget } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { Budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget:£ <input
                    required='required'
                    type='number'
                    id='budget'
                    value={Budget}
                   
                    onChange={(event) => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;
