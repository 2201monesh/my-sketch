"use client"

import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Canvas = () => {
  const canvasRef = useRef(null);
  

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    // Add Fabric.js operations here
    const rect = new fabric.Rect({
     left: 100,
     top: 100,
     width: 50,
     height: 50,
     fill: 'red',
    });
    canvas.add(rect);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}  
      height={600} 
    />
  );
};

export default Canvas;
