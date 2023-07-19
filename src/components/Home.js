import { React, useState, useEffect } from "react";
import axios from "axios";
import { SyncLoader } from "react-spinners";
const Home = () => {
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);//hmne loading state initialize kiya false se..pehle false rhega
  const [cityName, setCityName] = useState(""); //pehle ek empty string bana liya hmne...jaha name store hoga city ka
  const fetchData = async (city) => {//fetchData o ==to function banaya h maine..tm koi bhi name se bana skti ho
    try {
      
      const response = await axios.get(
        "https:weather-by-api-ninjas.p.rapidapi.com/v1/weather",//data yaha se get ho rha...url se..
        {
          params: {
            city: city,
          },
          headers: {
            "X-RapidAPI-Key":
              "65dd8a2efcmsh6a9bebc8250f765p190059jsn531434f844fa",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
          },
        }
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    const city = document.getElementById("city").value;
    try {
      await fetchData(city);//async await ye ensure krta hai..ki jab tak iss funtion ka process pura compplete nhi ho jata..tab tk koi dusra data ya function.. process ya render na ho..isliye pehle jab search kr rhe thay to loader or data dono ek sath aa ja rha tha or gayab ho ja rha tha..async await use krne ke baad thik ho gya...smjh aya?..ooh ok..good
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative top-8  flex justify-center">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http:www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search" 
            id="city"
            className="block w-[20rem] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Cities"
            onChange={(e) => {
              setCityName(e.target.value);
            }}
            required
          />
          <button
            onClick={handleSearch}
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>

      {loading && (
        <div className="mt-10">
          <SyncLoader color="gray" size={10} /> 
        </div>
      )}
      {weather && (
        <div>
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
              <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Weather of {cityName}
                </h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                  This weather app provides real-time forecasts and updates,
                  keeping users informed about current conditions and upcoming
                  weather events.
                </p>
              </div>
              <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Temperture</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Best for large scale uses and extended redistribution rights
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">
                      {weather.temp}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      °C{" "}
                    </span>
                  </div>

                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Temperature is{" "}
                        <span className="font-semibold">{weather.temp} °C</span>{" "}
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Max Temperature is{" "}
                        <span className="font-semibold">
                          {" "}
                          {weather.max_temp} °C
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Min Temperature is{" "}
                        <span className="font-semibold">
                          {" "}
                          {weather.min_temp} °C
                        </span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Humidity</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Best for large scale uses and extended redistribution rights
                  </p>

                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">
                      {weather.humidity}%
                    </span>
                    <span className="text-gray-500 dark:text-gray-400"></span>
                  </div>

                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Wind degree is{" "}
                        <span className="font-semibold">
                          {weather.wind_degrees}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Humidity is{" "}
                        <span className="font-semibold">
                          {weather.humidity}%
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Feels like :
                        <span className="font-semibold">
                          {weather.feels_like}
                        </span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Wind Speed</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Best for large scale uses and extended redistribution rights
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">
                      {weather.wind_speed}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      km/hr
                    </span>
                  </div>

                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Wind speed is{" "}
                        <span className="font-semibold">
                          {" "}
                          {weather.wind_speed} km/hr
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Sunrise time:{" "}
                        <span className="font-semibold">{weather.sunrise}</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http:www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Sunset time:{" "}
                        <span className="font-semibold">{weather.sunset}</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Home;
