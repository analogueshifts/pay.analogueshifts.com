import Link from "next/link";
import ProfileDropdown from "./profile-dropdown";
import { Menu } from "lucide-react";
import Image from "next/image";
import NavLogo from "@/public/images/guest-layout/nav-logo.svg";

export default function NavBar({ user, logout, setOpen, open }) {
  return (
    <nav className="w-full z-30 sticky top-0 h-[94px] bg-grayishWhite flex justify-between items-center tablet:px-6 pr-12 pl-14 ">
      <h3 className="large:text-xl tablet:hidden text-base font-semibold text-shadowDark">
        Account Overview
      </h3>

      <div className="flex items-center h-10 tablet:hidden">
        <ProfileDropdown user={user} handleLogout={logout} />
      </div>
      <Link href="/" className="h-[27px] hidden tablet:flex">
        <Image src={NavLogo} alt="Logo" className="h-full w-max" />
      </Link>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-18 hidden tablet:flex flex-col gap-1.5 bg-transparent border-none outline-none"
      >
        <div
          className={`w-full h-[1px] bg-tremor-brand-boulder700 duration-300 ${
            open
              ? "rotate-[45deg] translate-y-[3.6px]"
              : "rotate-0 translate-y-0"
          }`}
        ></div>
        <div
          className={`w-full h-[1px] bg-tremor-brand-boulder700 duration-300 ${
            open
              ? "-rotate-[45deg] -translate-y-[3.6px]"
              : "rotate-0 translate-y-0"
          }`}
        ></div>
      </button>
    </nav>
  );
}
