"use client"

import React, { useState } from "react";
import ShapeContext from "./ShapeContext";

const ShapeContextProvider = ({children}) => {

    const [rect, setRect] = useState(0);

    return (
        <ShapeContext.Provider value={{rect, setRect}}>
            {children}
        </ShapeContext.Provider>
    )
}

export default ShapeContextProvider;