import React from "react";

import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

export default function News() {
  return (
    <>
     <h1 className="text-3xl font-semibold tracki"> Top News</h1>
      <div className="events w-full relative  justify-center align-center top-12 max-[678px]:pt-16">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            EffectFlip,
            EffectCards,
            EffectCoverflow,
            EffectCreative,
            EffectCube,
          ]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          parallax={true}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          style={{ width: "85%", height: "30%" }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/300x300/?2"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                    Lorem lectus leo
                  </h2>
                  <p className="dark:text-gray-100">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/300x300/?2"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                    Lorem lectus leo
                  </h2>
                  <p className="dark:text-gray-100">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/300x300/?2"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                    Lorem lectus leo
                  </h2>
                  <p className="dark:text-gray-100">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/300x300/?2"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                    Lorem lectus leo
                  </h2>
                  <p className="dark:text-gray-100">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/300x300/?2"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                    Lorem lectus leo
                  </h2>
                  <p className="dark:text-gray-100">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/300x300/?2"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                    Riou thr eyww
                  </h2>
                  <p className="dark:text-gray-100">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/300x300/?2"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                    Donec lectus leo
                  </h2>
                  <p className="dark:text-gray-100">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/300x300/?2"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                    Donec lectus leo
                  </h2>
                  <p className="dark:text-gray-100">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/300x300/?2"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                    Donec lectus leo
                  </h2>
                  <p className="dark:text-gray-100">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src="https://source.unsplash.com/random/300x300/?2"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                  Wetdr lectus leo
                  </h2>
                  <p className="dark:text-gray-100">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="relative isolate top-16 overflow-hidden  py-12 sm:py-24 lg:pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8  lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                Subscribe to our news.
              </h2>
              <p className="mt-4 text-lg leading-8 text-black-300">
                In this part you can get information about the latest news
                related to weather forcasting and other news related to weather
                .
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus: sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md px-3.5 py-2.5 bg-black text-white sm font-semibol shadow-sm hover:bg-black-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  E-mail
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md  p-2 ring-1 ">
                  <CalendarDaysIcon
                    className="h-6 w-6 "
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold ">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 ">
                  "Our newsletter keeps you informed and engaged with the latest
                  updates, trends, and exclusive content delivered directly to
                  your inbox.".
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md  p-2 ring-1 ">
                  <HandRaisedIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-black">No spam</dt>
                <dd className="mt-2 leading-7 ">
                  "Rest assured,we guarantee a spam-free experience, delivering
                  only valuable and relevant content in our newsletter.".
                </dd>
              </div>
            </dl>
          </div>
        </div>

          
        
      </div>
    </>
  );
}
