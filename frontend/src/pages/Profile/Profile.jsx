import React,{useEffect,useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import "./Profile.css";

const Profile = () => {
  const[name,setName] = useState('')
  const[image,setImage] = useState('')
  const[pancard,setPancard] = useState('')
  const[aadharcard,setAadharcard] = useState('')
  const[address,setAddress] = useState('')
  const[dmataccountnumber,setDmataccountnumber] = useState('')
  const {user} = useAuth0();
  const email = user.email;
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`http://localhost:5000/api/users/${email}`)
        const data = await response.json()
        setName(data.name)
        setImage(data.image)
        setPancard(data.pancard)
        setAadharcard(data.aadharcard)
        setAddress(data.address)
        setDmataccountnumber(data.dmataccountnumber)
        }
        fetchData()
   },[])
  return (
    <div className="admin-duty">
            <div>
              <div className="profile-header">
                <img src={image} alt="Profile" className="profile-pic" />
                <span>{name}</span>
              </div>
              <div className="profile-info">
                <span>Email: {email}</span>
                <span>Address: {address}</span>
                <span>Demat Account: {dmataccountnumber}</span>
              </div>

              <div className="img-docs">
                <img src={pancard} alt="Pancard" />
                <img src={aadharcard} alt="Aadharcard" />
              </div>
            </div>
        </div>
  );
};

export default Profile;
