import React from "react";
import programmer from '../assets/programmerGuy.json';
import Lottie from 'lottie-react';
export default function About() {
  return (
    <div className="flex gap-10 justify-between  ml-40 mr-40 text-white border-neutral-900 ">
      <div className="">
        <Lottie animationData={programmer}/>
      </div>
      <div className="flex flex-col w-3/5">
        <header className="text-right pb-16 text-6xl font-thin tracking-tight lg:text-6xl">
          What I do
        </header>
        <div className="text-xl mb-12 lg:text-2xl">
          <p>CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
        </div>
        <div className="text-xl lg:text-lg flex flex-col gap-6">
          <p>
            ⚡ Craft visually stunning and intuitive user interfaces using HTML,
            CSS, and JavaScript.
          </p>
          <p>
            ⚡ Craft captivating and dynamic Frontend/User Interfaces, elevating
            the user experience in web and mobile platforms.
          </p>
          <p>
            ⚡ Stay on the cutting edge of technology, exploring and integrating
            the latest frontend frameworks and libraries such as React, Vue.js.
          </p>
        </div>
      </div>
    </div>
  );
}
