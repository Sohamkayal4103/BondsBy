import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export default function IndivisualBonds() {

    const [bondType,setBondType] = useState("");
    const [chng,setChng] = useState("");
    const [couponrate,setCouponrate] = useState("");
    const [creditrating,setCreditrating] = useState("");
    const [faceval,setFaceval] = useState("");
    const [ltp,setLtp] = useState("");
    const [maturitydate,setMaturitydate] = useState("");
    const [series,setSeries] = useState("");
    const [symbol,setSymbol] = useState("");
    const [userTrade,setUserTrade] = useState([]);
    const [value,setValue] = useState("");
    const [volume,setVolume] = useState("");
    const [objid,setObjid] = useState("");
    const [units,setUnits] = useState("");

    const handleSubmit = async (e) =>{
      e.preventDefault();
      const a = parseInt(units);
      const b = parseInt(volume);
      console.log(`a: ${a}`);
      console.log(`b: ${b}`);
      if(parseInt(units) <= parseInt(volume)){
        updateVolume();
      }
      else{
        console.log(units + " " + volume);
        console.log("Not enough units available");
      }
      setUnits("")
    }

    const updateVolume = async () => {
      console.log(units);
      await fetch(
        `http://localhost:5000/api/bonds/trade/${objid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            unitsReq: units
          }),
        }
      );
    }

    let { id } = useParams();
    useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`http://localhost:5000/api/bonds/${id}`)
        const data = await response.json()
        console.log(data)
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
        }
        fetchData()
   },[units])
  return (
    <div>
      IndivisualBonds
      <div>{bondType}</div>
      <div>{chng}</div>
      <div>{couponrate}</div>
      <div>{creditrating}</div>
      <div>{faceval}</div>
      <div>{ltp}</div>
      <div>{maturitydate}</div>
      <div>{series}</div>
      <div>{symbol}</div>
      <div>{userTrade}</div>
      <div>{value}</div>
      <div>{volume}</div>
      <div>{objid}</div>
      <input
        type="text"
        placeholder="Enter the Units"
        value={units}
        onChange={(e)=>setUnits(e.target.value)}
      />
      <button onClick={handleSubmit}>Invest</button>
      </div>
  )
}
