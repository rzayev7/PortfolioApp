import React from "react";
import img1 from "../assets/fooderra1.png";
import img2 from "../assets/fooderra2.png";
import img3 from "../assets/fooderra3.png";

export default function Projects() {
  return (
    <div className="section py-64" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 text-center">
            <div className="text-center ml-36">
              <h2 className="text-center pb-16 text-6xl font-thin tracking-tight lg:text-5xl">
                My Latest Work
              </h2>
              <p className="max-w-sm mb-8 text-lg text-gray-300 text-center mx-auto">
                Welcome to Fooderra, where you can quickly access the recipes
                for your favorite dishes, share your blogs with others, and
                explore theirs.
              </p>
              <button className="bg-accent text-white px-6 py-3 rounded-full hover:bg-accent-dark transition duration-300">
                View Projects
              </button>
            </div>
            {/* Image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl max-w-xl ml-40">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Image */}
              <img
                className="group-hover:scale-125 transition-all duration-500 w-full"
                src={img1}
                alt=""
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-lg">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white font-semibold">
                  Project Title
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1  flex flex-col gap-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl max-w-xl ml-10">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Image */}
              <img
                className="group-hover:scale-125 transition-all duration-500 w-full"
                src={img2}
                alt=""
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-lg">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white font-semibold">
                  Project Title
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl max-w-xl ml-10">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Image */}
              <img
                className="group-hover:scale-125 transition-all duration-500 w-full"
                src={img3}
                alt=""
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-lg">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white font-semibold">
                  Project Title
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
