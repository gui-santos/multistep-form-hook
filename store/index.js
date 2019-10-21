import React from 'react'

const initialState = {
  step1: {},
  step2: {},
}

function reducer(state, action) {
  switch (action.type) {
    case 'STEP_1':
      return { ...state, step1: action.payload }
    case 'STEP_2':
      return { ...state, step2: action.payload }
    default:
      return state
  }
}

export const Store = React.createContext()

export function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <Store.Provider value={value}>{children}</Store.Provider>
}
