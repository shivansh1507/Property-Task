import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const PriceRangeSlider = ({ value, onChange }) => {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <div>
      <Typography gutterBottom variant="subtitle1">
        Price Range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `$${value}`}
        max={5000}
        step={100}
      />
    </div>
  );
};

export default PriceRangeSlider;
