import React from "react";
import { Slider, Typography } from "@mui/material";

const BrushControls = ({ brushSize, setBrushSize }) => {
  return (
    <div>
      <Typography>Brush Size: {brushSize}</Typography>
      <Slider
        value={brushSize}
        onChange={(e, newValue) => setBrushSize(newValue)}
        min={1}
        max={30}
      />
    </div>
  );
};

export default BrushControls;
