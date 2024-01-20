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
  const {rect, circle, triangle, pentagon, drawPen, eraser} = useContext(ShapeContext);

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

  useEffect(() => {
    if(canvas.current && circle > 0){
        const circle = new fabric.Circle({
        radius: 25,
        fill: 'red',
        selectable: true,
      });
      canvas.current.add(circle);    
    }
  }, [circle])

  useEffect(() => {
    if(canvas.current && triangle > 0){
      const triangle = new fabric.Triangle({
       left: 200,
       top: 100,
       width: 50,
       height: 50,
       fill: 'green',
      });
      canvas.current.add(triangle);
    }
  }, [triangle])

  useEffect(() => {
    if(canvas.current && pentagon > 0){
      const pentagon = new fabric.Polygon(
        [
          { x: 250, y: 100 },
          { x: 300, y: 50 },
          { x: 350, y: 75 },
          { x: 350, y: 125 },
          { x: 300, y: 150 },
        ],
        {
          left: 300,
          top: 100,
          fill: 'orange',
        }
      ); 
      canvas.current.add(pentagon);     
    }
  }, [pentagon])

  useEffect(() => {
    console.log("pen state is " + drawPen);
    if (canvas.current ) {
      drawPen ? canvas.current.isDrawingMode = true : canvas.current.isDrawingMode = false;
      canvas.current.freeDrawingBrush.color = 'blue';
      canvas.current.freeDrawingBrush.width = 20;
    }    
  }, [drawPen])

  useEffect(() => {
    console.log("eraser state is " + eraser);
    if (canvas.current) {
      eraser ? canvas.current.isDrawingMode = true : canvas.current.isDrawingMode = false;
      canvas.current.freeDrawingBrush.color = 'white';
      canvas.current.freeDrawingBrush.width = 20;
    }
  }, [eraser])

  return ( 
      <canvas
      ref={canvasRef}
      className='border-4'
    />
  );
};

export default CanvasBoard;
