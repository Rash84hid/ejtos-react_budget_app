import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    const currency = val;
    dispatch({
      type: "CHANGE_CURRENCY",
      payload: currency,
    });
  };
    

  return ( 
      <div className='alert alert-secondary' >Currency {  
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option defaultValue>Choose...</option>
        <option value="£">Pounds(£)</option>
        <option value="₹">Ruppee(₹)</option>
        <option value="€">Euro(€)</option>
        <option value="$">Dollars($)</option>
      </select>
}		
    </div>
    );
};

export default Currency;