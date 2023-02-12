import { Link } from "react-router-dom";

const AdminCard = ({
  image,
  name,
  email,
  id,
  address,
  dmataccountnumber,
  pancard,
  adharcard,
}) => {
  return (
    <div className="shadow-lg">
      <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center rounded-b">
            <img
              src={image}
              alt="Profile"
              className="w-20 h-20 border-none mr-5"
            />
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center flex-col">
                <span className="text-lg font-semibold">User Name: {name}</span>
                <span className="text-lg font-semibold">
                  User Email: {email}
                </span>
                <span className="text-lg font-semibold">
                  Address: {address}
                </span>
                <span className="text-lg font-semibold">
                  Demat No: {dmataccountnumber}
                </span>
                <span className="text-md font-semibold mb-2">
                  User Documents:
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[50%] h-48 flex ">
          <img
            src={pancard}
            className="object-cover w-full h-full rounded-t p-1"
            alt="Plan"
          />
          <br />
          <img
            src={adharcard}
            className="object-cover w-full h-full rounded-t p-1"
            alt="Plan"
          />
        </div>
        <button
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          onClick={async () => {
            await fetch(`http://localhost:5000/api/users/verify/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: name,
                email: email,
                image: image,
                address: address,
                dmataccountnumber: dmataccountnumber,
                pancard: pancard,
                adharcard: adharcard,
              }),
            });
          }}
        >
          Approve KYC
        </button>
      </div>
    </div>
  );
};

export default AdminCard;
