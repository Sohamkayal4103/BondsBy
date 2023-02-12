import React from "react";
import { useState } from "react";
import FileBase64 from "react-file-base64";

import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserKYC = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [dematAccNo, setDematAccNo] = useState("");
  const [panCardImage, setPanCardImage] = useState("");
  const [aadharCardImage, setAadharCardImage] = useState("");
  const { user } = useAuth0();
  let name = user.name;
  let email = user.email;
  let image = user.picture;
  const notify = () =>
    toast.success("KYC details uploaded successfully !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleSubmit = async (e) => {
    let users = await fetch(`http://localhost:5000/api/users/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        image: image,
        pancard: panCardImage,
        aadharcard: aadharCardImage,
        address: address,
        dmataccountnumber: dematAccNo,
      }),
    });
    notify();
    console.log(users);
  };

  return (
    <div className="overflow-hidden bg-gray-800">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              KYC is <span className="text-teal-accent-400">Essential</span>
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
              >
                <defs>
                  <pattern
                    id="766323e1-e594-4ffd-a688-e7275079d540"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                  width="52"
                  height="24"
                />
              </svg>
              <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Complete Your KYC
                </h3>
                <div>
                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      Demat Account Number
                    </label>
                    <input
                      placeholder="Demat Account Number"
                      required
                      maxLength={16}
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      onChange={(e) => setDematAccNo(e.target.value)}
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      Address
                    </label>
                    <input
                      placeholder="Enter Address"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div>
                    <div>
                      <label className="inline-block mb-1 font-medium">
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
                    <div>
                      <label className="inline-block mb-1 font-medium">
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
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <ToastContainer />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Submit
                    </button>
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

export default UserKYC;
