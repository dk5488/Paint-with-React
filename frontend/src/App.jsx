import React, { useState, useRef } from "react";
import ImageUpload from "./components/ImageUpload";
import Canvas from "./components/Canvas";
import BrushControls from "./components/BrushControls";

const App = () => {
  const [image, setImage] = useState(null);
  const [brushSize, setBrushSize] = useState(5);
  const maskRef = useRef(null);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Image Inpainting Widget</h1>
      <ImageUpload setImage={setImage} />
      {image && (
        <>
          <Canvas image={image} brushSize={brushSize} maskRef={maskRef} />
          <BrushControls brushSize={brushSize} setBrushSize={setBrushSize} />
        </>
      )}
    </div>
  );
};

export default App;
