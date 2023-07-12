"use client";
import Image from "next/image";
import { Perfil } from "../assets/icon";
import { ReactIcon, TypeScriptIcon, NodeIcon } from "../assets/icon";
import { motion } from "framer-motion";

function ItemTechnology() {
  return (
    <div className=" max-md:ml-20">
      <motion.div
        className="absolute w-32 h-32"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ y: -200, opacity: 0.7, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className=" flex items-center justify-center  w-20 h-20 rounded-full bg-zinc-700">
          <Image src={NodeIcon} alt="carta" width={50} height={50}></Image>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-32 h-32"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ y: -175, x: "23vw", opacity: 0.7, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className=" flex items-center justify-center  w-32 h-32 rounded-full bg-zinc-700">
          <Image src={ReactIcon} alt="carta" width={150} height={150}></Image>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-32 h-32"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ y: -300, x: "15vw", opacity: 0.7, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className=" flex items-center justify-center  w-24 h-24 rounded-full bg-zinc-700">
          <Image
            src={TypeScriptIcon}
            alt="carta"
            width={70}
            height={70}
          ></Image>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-3 h-3"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ y: -300, x: "30vw", opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className=" flex items-center justify-center  w-2 h-2 rounded-full bg-emerald-400"></div>
      </motion.div>

      <motion.div
        className="absolute w-3 h-3"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ y: -200, x: "22vw", opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className=" flex items-center justify-center  w-5 h-5 rounded-full bg-zinc-700"></div>
      </motion.div>
    </div>
  );
}
const welcome = () => {
  return (
    <div className="font-mono flex  max-md:flex-col   w-full  bg-zinc-800 ">
      <div className="flex flex-col max-md:ml-14 ml-24 mt-5">
        <div className=" flex w-52 h-10 items-center justify-center rounded bg-emerald-400 ">
          <h2 className="text-black m-0 ">Software Developer</h2>
        </div>
        <div className="text-4xl mt-5 ">
          <h1>Talk is cheap.</h1>
        </div>
        <div className="text-4xl mb-5 ">
          <h1>Show me the code.</h1>
        </div>
        <div>
          <p className="text-base text-gray-500  mr-20">
            Como desarrollador de software, mi enfoque es el desarrollo de
            código sostenible como eje central de mis soluciones.
          </p>
        </div>
        <div className=" mt-10">
          <span className="text-emerald-400   text-xl"> LET´S CHAT!</span>
        </div>
      </div>

      <div className=" max-md:ml-20">
        <Image
          className=" mt-52 max-md:mt-10 justify-end items-end"
          src={Perfil}
          alt="perfil"
        ></Image>
        {ItemTechnology()}
      </div>
    </div>
  );
};

export default welcome;
