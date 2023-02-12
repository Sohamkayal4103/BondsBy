import React, { useState, useEffect } from "react";
import BondCard from "../../components/BondCard";
import addNotification from 'react-push-notification';

const ExploreBonds = () => {
  const [bonds, setBonds] = useState([]);
  const endpoint = "http://localhost:5000/api/bonds/";
  const getBonds = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setBonds(data.slice(0,22));
  };
  
  const MaxLimit = 20;


  useEffect(() => {
    if(bonds.length > MaxLimit){
      addNotification({
        title: 'New Bond Added',
        subtitle: 'A new bond has been added to the list',
        message: 'Trade now to get the best price',
        theme: 'darkblue',
        duration:6000,
        native: true // when using native, your OS will handle theming.
    });
    }
    getBonds();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r pt-6 pb-12">
      <div className="flex items-center justify-center flex-wrap gap-12">
        {bonds.map((bond) => <BondCard {...bond} />)}
      </div>
    </div>
  );
};

export default ExploreBonds;
