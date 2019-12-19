import React, { useReducers } from 'react';

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducers(reducer, defaultValue);

    const boundActions = {};
    for(let key in actions){
      boundActions[key] = actions[key](dispatch);

      return (
        <Context.Provider value>
          {children}
        </Context.Provider>
      )
    }
  }
}