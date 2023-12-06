import React from 'react';
import Navbar from './Components/Navbar';
import PropertyList from './Components/PropertyList';
import PropertySearch from './Components/Propertysearch';

const App = () => {
  return (
    <div>
      <Navbar />
      <PropertySearch />
      <div className="mt-4"> {/* Adjust the margin top as needed */}
        <PropertyList />
      </div>
    </div>
  );
};

export default App;
