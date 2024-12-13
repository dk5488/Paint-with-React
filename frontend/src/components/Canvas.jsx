import React, { useEffect, useRef } from "react";
import { Canvas, util } from "fabric";

const CanvasComponent = ({ image, brushSize, maskRef }) => {
  console.log("image in the canvas:::",image)
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  useEffect(() => {
    const canvasElement = document.getElementById("drawing-canvas");

    // Dispose of existing canvas if it exists
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.dispose();
    }

    // Create new Fabric canvas
    const fabricCanvas = new Canvas(canvasElement, {
      isDrawingMode: true,
      width: 400,
      height: 400,
    });

    // Set brush size
    fabricCanvas.freeDrawingBrush.width = brushSize;

    // Load the image onto the canvas using fabric.Image.fromURL
    if (image) {
      util.loadImage(image, (loadedImage) => {
        fabricCanvas.setBackgroundImage(
          new Canvas.Image(loadedImage, {
            scaleX: 400 / loadedImage.width,
            scaleY: 400 / loadedImage.height,
          }),
          fabricCanvas.renderAll.bind(fabricCanvas)
        );
      });
    }

    // Store references
    canvasRef.current = canvasElement;
    fabricCanvasRef.current = fabricCanvas;

    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
      }
    };
  }, [image, brushSize]);

  const exportMask = () => {
    if (fabricCanvasRef.current) {
      const dataURL = fabricCanvasRef.current.toDataURL({
        format: "png",
        multiplier: 1,
        backgroundColor: "black",
      });
      maskRef.current = dataURL; // Save the mask in the reference
      alert("Mask exported successfully!");
    }
  };

  return (
    <div>
      <canvas id="drawing-canvas"></canvas>
      <button onClick={exportMask}>Export Mask</button>
    </div>
  );
};

export default CanvasComponent;
