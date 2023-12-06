import React from 'react';

const PropertyCard = ({ cost, propertyName, address, imageUrl }) => {
  return (
    <div className="max-w-sm mx-auto bg-gray-200 rounded overflow-hidden shadow-lg mb-8 mt-8">
      <div>
        <img className="w-full h-48 object-cover" src={imageUrl} alt="Property" />
      </div>
      <div className="px-6 py-4">
        <div className="text-left mb-4">
          <p className="text-gray-700 text-lg">
            <span className="text-blue-500 text-2xl font-semibold">&#8377;{cost}</span> <strong>/month</strong>
          </p>
        </div>
        <div className="font-bold text-xl mb-2">{propertyName}</div>
        <p className="text-gray-700 text-base">
          <strong>{address}</strong> 
        </p>
      </div>
    </div>
  );
};

const PropertyList = () => {
  const properties = [
    {
      id: 1,
      cost: 5000,
      propertyName: 'Beautiful Home',
      address: 'Andheri, Mumbai',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      cost: 5000,
      propertyName: 'Luxury Apartment',
      address: 'Andheri, Mumbai',
      imageUrl: 'https://media.istockphoto.com/id/1221621512/photo/3d-rendering-of-modern-house-with-wood-plank-facade-in-night.jpg?s=2048x2048&w=is&k=20&c=d1fLtFDm6jiNntvo2tz91bQTpapHL1EFBXknqdS35FE=',
    },
    {
      id: 3,
      cost: 5000,
      propertyName: 'Cozy Cottage',
      address: 'Andheri, Mumbai',
      imageUrl: 'https://media.istockphoto.com/id/1146481144/photo/3d-rendering-of-modern-house-on-the-hill-with-pool-in-evening.jpg?s=2048x2048&w=is&k=20&c=ZoRQcCGPb-4k3RST_aopU3mdd4xFKlcA8hIsftucWLk=',
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
