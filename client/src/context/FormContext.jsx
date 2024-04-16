import React, { createContext, useContext, useReducer } from "react";


// Create the context
const FormContext = createContext();

const FormReducer = (state, action) => {
    // each dispatch have the (type: , and the payload) so we're .. type
    switch (action.type) {
        case 'SET_MEMORIES':
            return {
                memories: action.payload // set the memories to all the payloads
            }
            break;
        case 'ADD_MEMORIES':
            return {
                memories: [action.payload, ...state.memories]
            }
            break;
        case 'DELETE_MEMORIES':
            return {
                memories: state.memories.filter(m => m._id !== action.payload._id) 
            }   
            break;
        case 'UPDATE_MEMORIES':
            return {
                 memories: state.memories.map(m => m._id === action.payload._id ? action.payload : m)
            }
            break;
        default:
            return state;
            break;
    }
}

// Create the context provider component
export const FormContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FormReducer, {
        memories: null // initial state
    })
    return (
        <FormContext.Provider value={{ ...state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
};

// Create the useForm hook to access the context
export const useForm = () => {
    const context = useContext(FormContext)
    if (!context) {
        console.log('No Context Dude');
    }
    return context;
};
