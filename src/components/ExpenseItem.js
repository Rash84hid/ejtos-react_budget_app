import React, { useContext } from 'react';
import {AiFillMinusCircle, AiFillPlusCircle,AiFillDelete } from 'react-icons/ai';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = (name) => {
        const expense = {
            name: name
        };
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: expense,
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

    };
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        
        
        <td><AiFillPlusCircle size='1.5em' color='green' onClick={event=> increaseAllocation(props.name)}>+</AiFillPlusCircle></td>
        <td><AiFillMinusCircle size='1.5em' color='red' onClick={event=> decreaseAllocation(props.name)}>-</AiFillMinusCircle></td>
        <td><AiFillDelete size='1.5em' color='black' onClick={event=>handleDeleteExpense(props.name)}></AiFillDelete></td>
        </tr>
    );
};

export default ExpenseItem;

//<AiFillPlusCircle size='1.5em' color='green' onClick={event=> increaseAllocation(props.name)}>+</AiFillPlusCircle>
