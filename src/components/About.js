import React from 'react'
 import weather from '../img/temp.png'

const About = () => {
  return (
    
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-8 lg:px-8 lg:mb-24">
        <div className="relative isolate overflow-hidden bg-white-900 px-6  shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1}stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-6 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              About Us...
              
        
            </h2>
            <p className="mt-6 text-lg leading-2 text-black-300">
            Our weather website provides reliable and up-to-date weather information, including current conditions, hourly and daily forecasts, and interactive maps. You can also receive weather alerts and access historical data. Our goal is to help you stay informed and plan your activities based on the weather forecast.With a user-friendly interface and mobile compatibility, our weather website is designed to provide convenient access to weather updates on the go. Trust us to deliver accurate forecasts and keep you prepared for any weather condition.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-grey">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-72 lg:mt-8 ">
          <img
              className="absolute left-16 top-0 w-[30rem] h-[25rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
               src={weather}
              alt="App screenshot"
           
            />
          </div>
        </div>
      </div>
    </div>
  )
}

    

export default About