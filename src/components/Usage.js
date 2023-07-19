import React from 'react'


    import { ArrowPathIcon, HomeIcon, FingerPrintIcon,InformationCircleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Home',
    description:
      'You can know the temperature, humidity , wind speed  of the area in which you are located in or any other area uyou need to know. ',
    icon: HomeIcon,
  },
  {
    name: 'About',
    description:
      'Stay weather-ready and informed with our reliable, user-friendly website, delivering accurate forecasts and essential updates for your daily planning.',
    icon: InformationCircleIcon,
  },
  {
    name: 'Usage Guide',
    description:
      'From this you will know about the overall website, how does it works and any other information you want to know.',
    icon: ArrowPathIcon,
  },
  {
    name: 'News',
    description:
      'In this part you can get information about the latest news related to weather forcasting and other news related to weather .',
    icon: FingerPrintIcon,
  },
]

export default function Usage() {
  return (
    <div className="bg-white py-7 sm:py-17">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-600">Usage Guide</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How you can use this Website</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          


          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

