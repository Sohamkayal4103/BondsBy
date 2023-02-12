import { Link } from "react-router-dom";

const AdminCard = () => {
  return (
    <div className="shadow-lg">
      <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center rounded-b">
            <img
              src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Profile"
              className="w-20 h-20 border-none mr-5"
            />
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center flex-col">
                <span className="text-lg font-semibold">User Name:</span>
                <span className="text-lg font-semibold">User Email:</span>
                <span className="text-lg font-semibold">Address:</span>
                <span className="text-lg font-semibold">Demat No:</span>
                <span className="text-md font-semibold mb-2">
                  User Documents:
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[50%] h-48 flex ">
          <img
            src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="object-cover w-full h-full rounded-t p-1"
            alt="Plan"
          />
          <img
            src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="object-cover w-full h-full rounded-t p-1"
            alt="Plan"
          />
        </div>
        <Link
          to="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Verify User
        </Link>
      </div>
    </div>
  );
};

export default AdminCard;
