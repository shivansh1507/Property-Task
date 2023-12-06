import React from 'react';
import Navbar from './Components/Navbar';
import PropertyList from './Components/PropertyList';
import PropertySearch from './Components/Propertysearch';

const App = () => {
  return (
    <div>
      <Navbar />
      <PropertySearch/>
      <PropertyList/>
    </div>
  );
};

export default App;
