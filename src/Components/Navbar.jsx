import { Button } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-300 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-black font-bold text-lg mr-8 font-sans">LOGO</div>
          <a href="#" className="text-black font-semibold font-sans">Home</a>
        </div>
        <div className="flex space-x-4 items-center">
          <Button
            variant="outlined"
            color="primary"
            sx={{
              backgroundColor: '#87CEEB',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: '30px', 
              '&:hover': { backgroundColor: '#A2DEED' },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#D1EFF7',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: '30px', 
              '&:hover': { backgroundColor: '#D1EFF7' },
            }}
          >
            Signup
          </Button>
        </div>
      </nav>
      <div className="bg-white-200 p-4 text-left mt-2 p-25">
        <p className="text-xl font-bold font-sans">Select Properties for Rent</p>
      </div>
    </div>
  );
};

export default Navbar;
