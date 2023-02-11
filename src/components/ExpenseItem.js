import React, { useContext } from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        
        <td><TiPlus size='1.5em' onClick={event=> increaseAllocation(props.name)}>+</TiPlus></td>
        <td><TiMinus size='1.5em' onClick={handleDeleteExpense}></TiMinus></td>
        </tr>
    );
};

export default ExpenseItem;

//<AiFillPlusCircle size='1.5em' color='green' onClick={event=> increaseAllocation(props.name)}>+</AiFillPlusCircle>