import { FaReact } from "react-icons/fa";
import { RiNextjsFill  } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill  } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
const Technologies = () => {
  return (
    <div className="">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNextjsFill className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaVuejs className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaSass className="text-7xl text-pink-700" />
        </div>
      </div>
    </div>
  );
};
export default Technologies;
