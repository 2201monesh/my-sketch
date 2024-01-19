
import { createContext, useContext } from 'react';

export const ShapeContext = createContext({
  // default context goes here
})

export const ShapeProvider = ShapeContext.Provider

export default function useShape(){
    return useContext(ShapeContext)
}