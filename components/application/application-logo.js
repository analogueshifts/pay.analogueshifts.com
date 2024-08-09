import Image from "next/image";
import Logo from "@/public/logo.png";

const ApplicationLogo = () => (
  <div className="flex gap-3">
    <Image src={Logo} className="w-10 h-10" alt="" />
    <h3 className="text-lg font-bold uppercase text-zinc-600 leading-5">
      <span className="tracking-widest text-yellow-400">Analogue</span>
      <br />
      <span className="tracking-[1rem]">Shifts</span>
    </h3>
  </div>
);

export default ApplicationLogo;
