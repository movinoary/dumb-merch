import { createContext, useReducer } from "react";

export const UserContext = createContext()

const initialState = {
    isLogin: false,
    user: {}
}

const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'LOGIN SUCCESS':
            return {
                isLogin: true,
                user: payload
            }
        case 'LOGOUT':
            return {
                isLogin: false,
                user: {}
            }
        default:
            throw new Error()
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState) // proses useReducer

    // proses create context
    return (
        <UserContext.Provider value={[state, dispatch]} >
            {children}
        </UserContext.Provider>
    )
}