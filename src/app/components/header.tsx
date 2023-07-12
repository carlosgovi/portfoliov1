import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Letter } from "../assets/icon";

function Header() {
  return (
    <nav className="font-mono responsive-nav flex items-center justify-between flex-wrap p-6 bg-zinc-800">
      <div>
        <Link
          className="mr-6 text-2xl font-bold flex flex-col items-baseline "
          href="/"
        >
          <div>Carlos</div>

          <div className="font-normal text-xl ml-1 ">Govi</div>
        </Link>
      </div>
      <ul className="flex responsive-nav max-md:hidden  responsive-nav items-center">
        <li className="flex text-sm items-center m-2 hover:animate-pulse">
          <Link className="text-emerald-500" href="#works">
            {"< Servicios />"}
          </Link>
        </li>
        <li className="flex text-sm items-center m-2 hover:animate-pulse">
          <Link href="#cardsWorks">Trabajos</Link>
        </li>

        <li className="flex text-sm items-center m-2 hover:animate-pulse">
          <Link href="https://mail.google.com/mail/?view=cm&to=carlosgovi.dev@gmail.com&su=Asunto%20del%20correo&body=Cuerpo%20del%20correo">
            Contacto
          </Link>
        </li>
      </ul>
      <div className="flex  text-sm items-center m-1 ">
        <div className="flex items-center m-5 hover:animate-pulse ">
          <Image
            style={{ filter: "invert(1)" }}
            src={Github}
            alt="github"
            width={25}
            height={25}
          ></Image>
          <Link className="ml-2 text-sm" href="https://github.com/carlosgovi">
            Github
          </Link>
        </div>
        <div className="flex items-center hover:animate-pulse">
          <Image
            style={{ filter: "invert(1)" }}
            src={Linkedin}
            alt="linkedin"
            width={25}
            height={25}
          ></Image>
          <Link
            className="ml-2 text-sm hover:animate-pulse"
            href="https://www.linkedin.com/in/carlos-govi-desarrollador-web-freelancer/"
          >
            Linkdin
          </Link>
        </div>
        <div className="flex items-center justify-center m-5 w-12 h-12 rounded-full bg-zinc-700 hover:animate-pulse">
          <Link href="https://mail.google.com/mail/?view=cm&to=carlosgovi.dev@gmail.com&su=Asunto%20del%20correo&body=Cuerpo%20del%20correo">
            <Image src={Letter} alt="carta" width={30} height={30}></Image>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
