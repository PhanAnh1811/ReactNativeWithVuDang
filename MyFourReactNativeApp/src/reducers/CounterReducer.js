import React from 'react';

const counterReducer=(state,action)=>{
    switch(action.type){
        case 'increase':
            return {...state,counter:state.counter+action.payload};
        case 'decrease':
            return{...state,counter:state.counter+action.payload};
        default:
            return state;
    }
}

export default counterReducer;