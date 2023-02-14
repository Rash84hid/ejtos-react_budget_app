import React, { useContext, setBudget } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ {<input 
            required='required'
             type='number'
             id='budget'
             value={budget}
             style={{ size: 5, paddingBlock: 1}}
             onChange={(event) => setBudget(event.target.value)}>
             </input>

 
            }</span>
        </div>
    );
};
export default Budget;