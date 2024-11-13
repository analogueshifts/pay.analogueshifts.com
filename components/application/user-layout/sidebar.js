"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import SideBarMenuLink from "./sidebar-menu-link";
import { sidebarMenuLinks } from "./links";

import Image from "next/image";
import NavLogo from "@/public/images/guest-layout/nav-logo.svg";
import Link from "next/link";

export default function SideBar({ handleLogout, open, setOpen }) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <section className="fixed z-40 tablet:hidden top-0 left-0 w-[344px] h-screen px-0.5 border-r border-gainsBoro bg-white  ">
        <div className=" w-full h-full flex flex-col px-[31px] h-lg:py-16 py-7">
          {/* Logo */}
          <Link
            href="/"
            className="h-[27px] flex justify-start pl-5  items-start mb-5 large:mb-10"
          >
            <Image src={NavLogo} alt="Logo" className="h-full w-max" />
          </Link>
          {/* Logo */}

          {/* Menus */}
          <div className="w-full large:mt-6 mt-4  large:h-[60%] h-[40%] overflow-y-auto ">
            <div className="w-full h-max flex flex-col">
              {sidebarMenuLinks.top.map((item) => {
                return (
                  <SideBarMenuLink
                    click={() => {}}
                    item={item}
                    key={item.title}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-full h-24 large:h-32 absolute bottom-7 large:bottom-16 flex flex-col">
            {sidebarMenuLinks.bottom.map((item) => {
              return (
                <SideBarMenuLink
                  click={handleLogout}
                  item={item}
                  key={item.title}
                />
              );
            })}
          </div>
        </div>
      </section>{" "}
      <section
        className={`fixed z-40 top-0 hidden duration-300 tablet:block w-screen h-screen ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
        <div
          className="w-full h-full z-20 top-0 left-0 absolute"
          onClick={() => setOpen(false)}
        ></div>
        <div
          className={` z-50 absolute top-0 left-0 w-[344px] max-w-[75%] h-full px-0.5 border-r  border-gainsBoro bg-white  `}
        >
          <div className=" w-full h-full flex flex-col px-[31px] h-lg:py-16 py-7">
            {/* Logo */}
            <Link
              href="/"
              className="h-[27px] flex justify-start pl-5  items-start mb-5 large:mb-10"
            >
              <Image src={NavLogo} alt="Logo" className="h-full w-max" />
            </Link>
            {/* Logo */}

            {/* Menus */}
            <div className="w-full large:mt-6 mt-4  large:h-[60%] h-[40%] overflow-y-auto ">
              <div className="w-full h-max flex flex-col">
                {sidebarMenuLinks.top.map((item) => {
                  return (
                    <SideBarMenuLink
                      click={() => {}}
                      item={item}
                      key={item.title}
                    />
                  );
                })}
              </div>
            </div>

            <div className="w-full h-24 large:h-32 absolute bottom-7 large:bottom-16 flex flex-col">
              {sidebarMenuLinks.bottom.map((item) => {
                return (
                  <SideBarMenuLink
                    click={handleLogout}
                    item={item}
                    key={item.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
