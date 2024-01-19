"use client"

import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { useContext } from 'react';
import ShapeContext from '@/context/ShapeContext';

const CanvasBoard = () => {

  const canvasRef = useRef(null);
  const canvas = useRef(null);  

  useEffect(() => {
    canvas.current = new fabric.Canvas(canvasRef.current, {
      width: 400,
      height: 550
    })

    // canvas.current.on('mouse:down', (options) => {        // This function is optional can be discarded in future
    //   if (options.target === null) {
    //     canvas.current.discardActiveObject().renderAll();
    //   }
    // });    

    return () => {
      if (canvas.current) {
        canvas.current.dispose();
      }
    };
  },[])  

  // context 
  const {rect} = useContext(ShapeContext);

  useEffect(() => {
    if(canvas.current && rect > 0){
      const rectangle = new fabric.Rect({
       left: 100,
       top: 100,
       width: 50,
       height: 50,
       fill: 'red',
      });  
      canvas.current.add(rectangle);  
    }
  }, [rect])  

  return ( 
      <canvas
      ref={canvasRef}
      className='border'
    />
  );
};

export default CanvasBoard;
