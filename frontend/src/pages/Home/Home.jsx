import { temp } from "../../assets";
import Content from "../../components/Content";

const Home = () => {
  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly ">
        <div className="ml-12">
          <img
            className="object-cover w-full h-56 rounded sm:h-96"
            src={temp}
            alt=""
          />
        </div>
        <div className="">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div> */}
          </a>
          <div className="flex items-center justify-center flex-col">
            <h5 className="mb-4 text-4xl font-extrabold leading-none text-white">
              Buying bonds has
              <br className="hidden md:block" />
              never been{" "}
              <span className="inline-block text-deep-purple-accent-400">
                easier
              </span>
            </h5>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, aspernatur?
            </p>
            <div className="mt-2">
              <a
                href="#_"
                class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-700 rounded-full shadow-md group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-600 group-hover:translate-x-0 ease">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-indigo-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Explore Bonds
                </span>
                <span class="relative invisible">Explore Bonds</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
