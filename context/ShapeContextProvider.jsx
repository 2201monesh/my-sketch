"use client"

import React, { useState } from "react";
import ShapeContext from "./ShapeContext";

const ShapeContextProvider = ({children}) => {

    // draw shapes states
    const [rect, setRect] = useState(0);
    const [circle, setCircle] = useState(0);
    const [triangle, setTriangle] = useState(0);
    const [pentagon, setPentagon] = useState(0);

    // draw and erase states
    const [drawPen, setDrawPen] = useState(false);
    const [eraser, setEraser] = useState(false);

    // height and width states
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(550);

    // canvas background color state
    const [canvasColor, setCanvasColor] = useState('#ffffff');

    // image upload
    const [image, setImage] = useState(null);

    // textbox render
    const [text, setText] = useState(''); 

    return (
        <ShapeContext.Provider value={{rect, setRect, circle, setCircle, triangle, setTriangle, pentagon, setPentagon, drawPen, setDrawPen, eraser, setEraser, width, setWidth, height, setHeight, canvasColor, setCanvasColor, image, setImage, text, setText}}>
            {children}
        </ShapeContext.Provider>
    )
}

export default ShapeContextProvider;