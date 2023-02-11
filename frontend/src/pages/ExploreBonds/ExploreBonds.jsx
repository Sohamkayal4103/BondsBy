import React, { useState, useEffect } from "react";
import BondCard from "../../components/BondCard";

const ExploreBonds = () => {
  const [bonds, setBonds] = useState([]);
  const endpoint = "http://localhost:5000/api/bonds/";
  const getBonds = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setBonds(data);
  };

  useEffect(() => {
    getBonds();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r pt-6 pb-12">
      <div className="flex items-center justify-center flex-wrap gap-12">
        {bonds.map((bond) => <BondCard {...bond} />).slice(0, 19)}
      </div>
    </div>
  );
};

export default ExploreBonds;
