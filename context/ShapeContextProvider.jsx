"use client"

import React, { useState } from "react";
import ShapeContext from "./ShapeContext";

const ShapeContextProvider = ({children}) => {

    const [rect, setRect] = useState(0);
    const [circle, setCircle] = useState(0);
    const [triangle, setTriangle] = useState(0);
    const [pentagon, setPentagon] = useState(0);

    return (
        <ShapeContext.Provider value={{rect, setRect, circle, setCircle, triangle, setTriangle, pentagon, setPentagon}}>
            {children}
        </ShapeContext.Provider>
    )
}

export default ShapeContextProvider;