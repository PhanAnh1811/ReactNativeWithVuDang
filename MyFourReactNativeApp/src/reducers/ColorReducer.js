import React from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'red':
            if (state.red + action.payload >= 0 && state.red + action.payload <= 255)
                return { ...state, red: state.red + action.payload };
            return state;
        case 'green':
            if (state.green + action.payload >= 0 && state.green + action.payload <= 255)
                return { ...state, green: state.green + action.payload };
            return state;
        case 'blue':
            if (state.blue + action.payload >= 0 && state.blue + action.payload <= 255)
                return { ...state, blue: state.blue + action.payload };
            return state;
        default:
            return state;
    }
}

export default reducer;