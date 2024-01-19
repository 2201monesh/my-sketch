"use client"

import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { useContext } from 'react';
import ShapeContext from '@/context/ShapeContext';

const CanvasBoard = () => {
  // - const canvasRef = useRef(null);
  // - const fabricCanvasRef = useRef(null); // this line can be deleted

  // context related

  // - const {rect} = useContext(ShapeContext);

  //- useEffect(() => {
  //-   const canvas = new fabric.Canvas(canvasRef.current);
  //-   fabricCanvasRef.current = canvas; // this line can be deleted
  //-   const recta = new fabric.Rect({
  //-    left: 100,
  //-    top: 100,
  //-    width: 50,
  //-    height: 50,
  //-    fill: 'red',
  //-   });

  //-   canvas.add(recta);
  //- }, [rect])
  
  // useEffect(() => {
  //   const canvas = new fabric.Canvas(canvasRef.current);

  //   fabricCanvasRef.current = canvas; // this line can be deleted

    
  //   const rect = new fabric.Rect({
  //    left: 100,
  //    top: 100,
  //    width: 50,
  //    height: 50,
  //    fill: 'red',
  //   });

  //   const circle = new fabric.Circle({
  //    left: 100,
  //    top: 100,
  //    radius: 25,
  //    fill: 'blue',
  //   });

  //   const triangle = new fabric.Triangle({
  //    left: 200,
  //    top: 100,
  //    width: 50,
  //    height: 50,
  //    fill: 'green',
  //   });

  //   const pentagon = new fabric.Polygon([
  //    { x: 250, y: 100 },
  //    { x: 300, y: 50 },
  //    { x: 350, y: 75 },
  //    { x: 350, y: 125 },
  //    { x: 300, y: 150 }
  //   ], {
  //     left: 300,
  //     top: 100,
  //     fill: 'orange',
  //   });


  //   canvas.add(rect);
  //   canvas.add(circle);
  //   canvas.add(triangle);
  //   canvas.add(pentagon);


  // }, []);


  const canvasRef = useRef(null);
  const canvas = useRef(null);  

  // context 
  const {rect} = useContext(ShapeContext);

  useEffect(() => {
    if(canvas.current){
      const rect = new fabric.Rect({
       left: 100,
       top: 100,
       width: 50,
       height: 50,
       fill: 'red',
      });  
      canvas.current.add(rect);  
    }
  }, [rect])  

  useEffect(() => {
    canvas.current = new fabric.Canvas(canvasRef.current, {
      width: 400,
      height: 550
    })

    canvas.current.on('mouse:down', (options) => {        // This function is optional can be discarded in future
      if (options.target === null) {
        canvas.current.discardActiveObject().renderAll();
      }
    });    

    return () => {
      if (canvas.current) {
        canvas.current.dispose();
      }
    };
  },[])

  return (
    
      <canvas
      ref={canvasRef}
      //- width={400}
      //- height={550}
      className='border'
    />

  );
};

export default CanvasBoard;
