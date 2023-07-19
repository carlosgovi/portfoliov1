"use client";
import Link from "next/link";
import { ScrollTo } from "react-scroll-to";
import { UpIcon } from "../assets/icon";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="font-mono grid grid-cols-2 max-md:grid-cols-1  gap-5 ali bg-zinc-800 h-full w-full ">
      <div className="  flex flex-col justify-center items-center ">
        <div className="grid grid-cols-1 gap-2 p-10">
          <div className="text-2xl mb-5 ">
            <h2>Let´s make something amazing together.</h2>
          </div>
          <div className="flex justify-center items-center mt-5">
            <ScrollTo>
              {({ scroll }) => (
                <button onClick={() => scroll({ y: 0, smooth: true })}>
                  <Image
                    className="animate-bounce "
                    height={100}
                    width={100}
                    src={UpIcon}
                    alt="up"
                  ></Image>
                </button>
              )}
            </ScrollTo>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div className="flex flex-col  mt-5">
          <div>
            <p className="text-base text-gray-500  mb-5">Información</p>
          </div>
          <div>
            <p className="text-base text-gray-500  mb-2">
              Rosario, SantaFe, Argentina
            </p>
          </div>
          <div className="text-2xl mb-5 ">
            <h2>carlosgovi.dev@gmail.com</h2>
          </div>
          <ul className="flex flex-col responsive-nav items-left">
            <li className="flex text-sm items-center m-4">
              <Link className="text-emerald-500" href="#works">
                {"< Servicios />"}
              </Link>
            </li>
            <li className="flex text-sm items-center m-4">
              <Link href="#cardsWorks">Trabajos</Link>
            </li>

            <li className="flex text-sm items-center m-4">
              <Link href="https://mail.google.com/mail/?view=cm&to=carlosgovi.dev@gmail.com&su=Asunto%20del%20correo&body=Cuerpo%20del%20correo">
                Contacto
              </Link>
            </li>
          </ul>
          <div className=" mt-10">
            <span className="text-emerald-500   text-sm">CarlosGovi </span>
            <span className="text-emerald-500   text-sm">
              © 2023_ All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
