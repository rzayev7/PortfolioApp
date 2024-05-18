import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from '../assets/sahibaziz.jpg'
export default function Hero() {
  return (
    <div className="ml-40 mr-20 text-white border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              Sahib Rzayev
            </h1>
            <span className="bg-gradient-to-r from-pink-600  to-purple-700 bg-clip-text text-3xl tracking-tight text-transparent">
              Frontend Developer
            </span>
            <p className="my-2 max-w-xl text-2xl py-6 font-light tracking-wide">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img src={profilePic} className="rounded-full w-96 h-96" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}
