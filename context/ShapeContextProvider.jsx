import React, { useState } from "react";
import ShapeContext from "./shapeContext";

const ShapeContextProvider = ({children}) => {

    const [rect, setRect] = useState(0);

    return (
        <ShapeContext.Provider value={{rect, setRect}}>
            {children}
        </ShapeContext.Provider>
    )
}

export default ShapeContextProvider;