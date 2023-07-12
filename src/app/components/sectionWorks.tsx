import Link from "next/link";
import Image from "next/image";
import { Code, Seo, Design } from "../assets/icon";
interface cardsProps {
  title: string;
  description: string;
  link: string;
  img: any;
}
function Cards(cards: cardsProps) {
  return (
    <div className="flex hover:animate-pulse  bg-zinc-800 rounded-md p-10  ">
      <div className="flex  flex-wrap">
        <h2 className="text-emerald-400 mb-5 text-xl">{cards.title}</h2>
        <p className="text-base text-gray-500  mr-2">{cards.description}</p>
        <Link className="text-base mt-2 text-gray-300  mr-20" href="/trabajos">
          {cards.link}
        </Link>
      </div>
      <div>
        <Image height={200} width={200} src={cards.img} alt="work"></Image>
      </div>
    </div>
  );
}
function Introduction() {
  return (
    <div className="flex flex-col  max-md:ml-14 ml-32 mt-5">
      <div className="text-4xl mt-5 ">
        <h1>Hola! soy </h1>
      </div>
      <div className="text-4xl mb-5 ">
        <h1>Carlos Govi</h1>
      </div>

      <div className="text-2xl italic mb-5 ">
        <h2>Cada buen diseño comienza con una historia aún mejor.</h2>
      </div>

      <div>
        <p className="text-base text-gray-500  mr-20">
          Realicé trabajo remoto para agencias, asesoré a startups y colaboré
          con talentosos profesionales para crear productos digitales tanto para
          uso comercial como para consumidores. Me esfuerzo constantemente por
          mejorar el código, una línea a la vez...
        </p>
      </div>
      <div className=" mt-10">
        <span className="text-emerald-400   text-xl"> LET´S CHAT!</span>
      </div>
    </div>
  );
}
const SectionWorks = () => {
  return (
    <div
      id="works"
      className="font-mono grid grid-cols-2 max-md:grid-cols-1  gap-5 ali bg-zinc-900 h-full w-full "
    >
      <div className="  flex flex-col justify-center items-center ">
        <div className="grid grid-cols-1 gap-2 p-10">
          <Cards
            title="Design"
            description="Diseños web responsivos que fusionan funcionalidad y estética, creando productos digitales con ideas únicas e innovadoras. "
            link="5 PROYECTOS"
            img={Design}
          />
          <Cards
            title="Front-End"
            description="Desarrollo front-end con un enfoque en la codificación fluida, creando experiencias digitales excepcionales y de alto rendimiento. "
            link="5 PROYECTOS"
            img={Code}
          />
          <Cards
            title="SEO"
            description="Impulsa tu negocio con optimización SEO que potencia tu presencia online y aumenta tu visibilidad."
            link="5 PROYECTOS"
            img={Seo}
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        {Introduction()}
      </div>
    </div>
  );
};

export default SectionWorks;
