import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [pancard, setPancard] = useState("");
  const [aadharcard, setAadharcard] = useState("");
  const [address, setAddress] = useState("");
  const [dmataccountnumber, setDmataccountnumber] = useState("");
  const { user } = useAuth0();
  const email = user.email;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/api/users/${email}`);
      const data = await response.json();
      setName(data.name);
      setImage(data.image);
      setPancard(data.pancard);
      setAadharcard(data.aadharcard);
      setAddress(data.address);
      setDmataccountnumber(data.dmataccountnumber);
    };
    fetchData();
  }, []);
  return (
    // <div classNameName="admin-duty bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen">
    //   <div classNameName="bg-white p-2">
    //     <div>
    //       <div classNameName="flex items-center justify-center">
    //         <img src={image} alt="Profile" classNameName="profile-pic" />
    //       </div>
    //       <div classNameName="profile-info">
    //         <span>{name}</span>
    //         <span>Email: {email}</span>
    //         <span>Address: {address}</span>
    //         <span>Demat Account: {dmataccountnumber}</span>
    //       </div>
    //       <div classNameName="flex flex-col">
    //         <div classNameName="">
    //           <img src={pancard} alt="Pancard" />
    //           <img src={aadharcard} alt="Aadharcard" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="overflow-hidden">
      <div className="max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-24">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src={image}
                  alt="Profile"
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-10"></div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {name}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {address}
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-semibold leading-relaxed text-slate-600 mb-4">
                  Demat Account Number: {dmataccountnumber}
                </p>
                <div>
                  <span>Your Documents:</span>
                  <div className="flex items-center justify-center gap-5 h-[225px]">
                    <img
                      src={pancard}
                      alt=""
                      className="object-cover overflow-hidden"
                    />
                    <img
                      src={aadharcard}
                      alt=""
                      className="object-cover overflow-hidden h-[220px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
