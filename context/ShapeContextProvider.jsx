"use client"

import React, { useState } from "react";
import ShapeContext from "./ShapeContext";

const ShapeContextProvider = ({children}) => {

    const [rect, setRect] = useState(0);
    const [circle, setCircle] = useState(0);
    const [triangle, setTriangle] = useState(0);
    const [pentagon, setPentagon] = useState(0);

    const [drawPen, setDrawPen] = useState(false);
    const [eraser, setEraser] = useState(false);

    return (
        <ShapeContext.Provider value={{rect, setRect, circle, setCircle, triangle, setTriangle, pentagon, setPentagon, drawPen, setDrawPen, eraser, setEraser}}>
            {children}
        </ShapeContext.Provider>
    )
}

export default ShapeContextProvider;