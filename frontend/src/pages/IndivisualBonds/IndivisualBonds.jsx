import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function IndivisualBonds() {
  const [bondType, setBondType] = useState("");
  const [chng, setChng] = useState("");
  const [couponrate, setCouponrate] = useState("");
  const [creditrating, setCreditrating] = useState("");
  const [faceval, setFaceval] = useState("");
  const [ltp, setLtp] = useState("");
  const [maturitydate, setMaturitydate] = useState("");
  const [series, setSeries] = useState("");
  const [symbol, setSymbol] = useState("");
  const [userTrade, setUserTrade] = useState([]);
  const [value, setValue] = useState("");
  const [volume, setVolume] = useState("");
  const [objid, setObjid] = useState("");
  const [units, setUnits] = useState("");
  const [cost, setCost] = useState(0);

  const calculateCost = async () => {
    const costTemp = parseInt(faceval) * parseInt(units);
    setCost(costTemp);
    console.log(`Total Cost: ${costTemp} ${units} ${faceval} `);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const a = parseInt(units);
    const b = parseInt(volume);
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    if (parseInt(units) <= parseInt(volume)) {
      updateVolume();
      calculateCost();
    } else {
      console.log(units + " " + volume);
      console.log("Not enough units available");
    }
    setUnits("");
  };

  const updateVolume = async () => {
    console.log(units);
    await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/bonds/trade/${objid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          unitsReq: units,
        }),
      }
    );
  };

  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/bonds/${id}`
      );
      const data = await response.json();
      console.log(data);
      setBondType(data.bondtype);
      setChng(data.chng);
      setCouponrate(data.couponrate);
      setCreditrating(data.creditRating);
      setFaceval(data.facevalue);
      setLtp(data.ltp);
      setMaturitydate(data.maturityDate);
      setSeries(data.series);
      setSymbol(data.symbol);
      setUserTrade(data.userTrade);
      setValue(data.value);
      setVolume(data.volume);
      setObjid(data._id);
    };
    fetchData();
  }, [units]);
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Bond Information
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Symbol</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {symbol}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Bond Type</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {bondType}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Coupon Rate</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {couponrate}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Chng(in %)</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {chng}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Credit Rating</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {creditrating}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Face Value:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {faceval}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">LTP</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {ltp}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Maturity Date</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {maturitydate}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Series</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {series}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Value</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {value}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Volume</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {volume}
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center m-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Select Units
            </label>
            <div className="relative mt-1 rounded-md shadow-sm m-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 m-4"></div>
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 bg-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm m-4"
                placeholder="0"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="group relative  rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleSubmit}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 w-5"></span>
              Invest
            </button>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Total Cost:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {cost}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
