import Image from "next/image";
import { Apx } from "../assets/icon";
const SectionStudy = () => {
  return (
    <div className="flex justify-center items-center font-mono w-full bg-zinc-900">
      <div className="text-gray-600 text-2xl mb-4">Powered By</div>
      <div className="flex m-5">
        <Image src={Apx} alt="carta" width={70} height={70}></Image>
      </div>
    </div>
  );
};

export default SectionStudy;
