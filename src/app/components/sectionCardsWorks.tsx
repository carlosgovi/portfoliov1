import React from "react";
import Image from "next/image";
import {
  PetFinder,
  PetIcon,
  LvDesigns,
  LvWeb,
  PptIcon,
  Pptweb,
} from "../assets/icon";
import Link from "next/link";
import { title } from "process";
interface tipeCardsWorks {
  title: string;
  // technologies es un array de string de un largo indeterminado
  technologies: string[];
  imgBgn: any;
  imgIcon: any;
  link: string;
}
function CardsWorks(props: tipeCardsWorks) {
  return (
    <div className="flex drop-shadow-2xl bg-gradient-to-r from-zinc-700 to-zinc-800 w-96  justify-center items-center  rounded-md p-10  ">
      <div className="flex  responsive flex-wrap">
        <div className="flex responsive flex-wrap">
          <div className="flex responsive justify-center items-center"></div>
          <h2 className="text-emerald-400 mb-5 text-xl mr-5">{props.title}</h2>
          {props.technologies.map((technology) => (
            <div
              key={technology.length}
              className="flex justify-center items-center responsive  bg-zinc-700 rounded-md  m-1  "
            >
              <p className="text-sm text-gray-400 m-2">{technology}</p>
            </div>
          ))}
        </div>
        <div
          className="w-full h-80 rounded-xl  transform-gpu "
          style={{
            backgroundImage: `url(${props.imgBgn.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.4)",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <div className="flex responsive justify-center items-center m-5 hover:scale-150 transition-all ">
            <Link href={props.link}>
              <Image
                src={props.imgIcon}
                alt="carta"
                width={200}
                height={200}
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
const SectionCardsWorks = () => {
  return (
    <div>
      <div
        id="cardsWorks"
        className="flex justify-center items-center font-mono w-full bg-zinc-900 "
      >
        <div className="text-gray-600 text-4xl mb-4">
          Trabajos<p className="inline text-emerald-400">_</p>
        </div>
      </div>
      <div /* className="grid grid-cols-2 max-md:grid-cols-1  gap-20  justify-center items-center font-mono  bg-zinc-900 p-20" */
        className=" card  bg-zinc-900 p-5"
      >
        <CardsWorks
          title="LV Designs"
          technologies={["Next", "TS", "React"]}
          link="https://un-sol-para-tres-princesas.vercel.app/"
          imgBgn={LvWeb}
          imgIcon={LvDesigns}
        />
        <CardsWorks
          title="Pet Finder"
          technologies={["Node", "TS", "React"]}
          link="https://pets-lost-apx.web.app/"
          imgBgn={PetFinder}
          imgIcon={PetIcon}
        />
        <CardsWorks
          title="P.P.T"
          technologies={["Node", "TS", "C.Elemts"]}
          link="https://apx-desafio-final-m6.onrender.com"
          imgBgn={Pptweb}
          imgIcon={PptIcon}
        />
      </div>
    </div>
  );
};

export default SectionCardsWorks;
