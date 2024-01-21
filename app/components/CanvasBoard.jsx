"use client"

import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { useContext } from 'react';
// import ShapeContext from '@/context/ShapeContext';
import ShapeContext from '../../context/ShapeContext'

const CanvasBoard = () => {

  const canvasRef = useRef(null);
  const canvas = useRef(null);  

  // context 
  const {rect, circle, triangle, pentagon, drawPen, eraser, width, height, canvasColor, image, text} = useContext(ShapeContext);  


  useEffect(() => { 

    if (canvas.current) {
      // If the canvas already exists, update its dimensions
      canvas.current.setDimensions({ width: width, height: height });
      canvas.current.setBackgroundColor(canvasColor);
      canvas.current.renderAll();
    } else{
        canvas.current = new fabric.Canvas(canvasRef.current, {
          width: width,
          height: height,
          backgroundColor: canvasColor
        })
    }     
    
    // This method is commented because there is no need of disposing canvas after the change in its width and height
    // return () => {
    //   if (canvas.current) {
    //     canvas.current.dispose();
    //   }
    // };

  },[width, height, canvasColor])


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
    if(canvas.current && text){
      const textObject = new fabric.Textbox(text, {
        left: 50,
        top: 50,
        width: 200,
        fontSize: 20,
      });
      canvas.current.add(textObject);      
    }
  }, [text])  

  useEffect(() => {
    if (canvas.current ) {
      drawPen ? canvas.current.isDrawingMode = true : canvas.current.isDrawingMode = false;
      canvas.current.freeDrawingBrush.color = 'blue';
      canvas.current.freeDrawingBrush.width = 20;
    }    
  }, [drawPen])

  useEffect(() => {
    if (canvas.current) {
      eraser ? canvas.current.isDrawingMode = true : canvas.current.isDrawingMode = false;
      canvas.current.freeDrawingBrush.color = 'white';
      canvas.current.freeDrawingBrush.width = 20;
    }
  }, [eraser])

  useEffect(() => {
    if(canvas.current && image){
      fabric.Image.fromURL(URL.createObjectURL(image), (img) => {
        img.set({
          left: 0,
          top: 0,
        })
        canvas.current.add(img);
      })
    }   
  }, [image])


  return ( 
      <canvas
      ref={canvasRef}
      className='border-4'
    />
  );
};

export default CanvasBoard;
