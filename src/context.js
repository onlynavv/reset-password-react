import React , {useContext,useReducer} from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const initialState = {
        user:null
    }

    const setUser = (authUser) => {
        dispatch({type:"SET_USER", payload:authUser})
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <AppContext.Provider value={{...state, setUser}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return(
        useContext(AppContext)
    )
}

export {AppProvider}