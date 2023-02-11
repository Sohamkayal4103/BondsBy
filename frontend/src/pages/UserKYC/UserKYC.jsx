import React from "react";
import { useState } from "react";
import FileBase64 from "react-file-base64";

import { useNavigate } from "react-router-dom";

const UserKyc = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [dematAccNo, setDematAccNo] = useState("");
  const [panCardImage, setPanCardImage] = useState("");
  const [aadharCardImage, setAadharCardImage] = useState("");

  const handleSubmit = async (e) => {
    // let events = await fetch(`http://localhost:5000/api/events/add`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({}),
    // });
    // console.log(events.json());

    // navigate("/");
    console.log(address, dematAccNo, panCardImage, aadharCardImage);
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
      <div className="flex h-screen items-center justify-center ">
        <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex ">
          <div className="mr-5 w-3/6 flex flex-col align-top">
            <div className="mb-4 mt-0">
              <label className="block text-white text-sm font-bold mb-3">
                Demat Account Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Enter Demat Account Number"
                onChange={(e) => setDematAccNo(e.target.value)}
              />
            </div>
            <div className="mb-4 mt-0">
              <label className="block text-white text-sm font-bold mb-3">
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Enter Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="w-3/6">
            <div>
              <label className="block text-white text-sm font-bold mb-2">
                Add Pan Card
              </label>
              {/* <div className="flex justify-center items-center w-full">
                  <label className="flex flex-col justify-center items-center w-full h-34 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="mb-3 w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-800 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Image size should be less than 1MB
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className=""
                      onChange={(e) => setEventImage(e.target.files[0])}
                    />
                    {/* <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setOrganizerIdentification(base64)}
                /> */}
              {/* </label> */}
              {/* </div> */}
              <div className="block mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                <FileBase64
                  id="banners"
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setPanCardImage(base64)}
                />
              </div>
            </div>
            <div>
              <label className="block text-white text-sm font-bold mb-2">
                Add Aadhar Card
              </label>
              <div className="block mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                <FileBase64
                  id="banners"
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setAadharCardImage(base64)}
                />
              </div>
            </div>

            <div className="flex items-center justify-center mt-2">
              <button
                className="bg-white hover:bg-gray-300 mt-4 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserKyc;
