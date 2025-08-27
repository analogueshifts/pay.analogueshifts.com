"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/contexts/user";
import { useAuth } from "@/hooks/auth";

import NavBar from "@/components/application/user-layout/navbar";
import SideBar from "@/components/application/user-layout/sidebar";

import Cookies from "js-cookie";
import LogoutIdiom from "@/components/application/logout-idiom";

export default function UserLayout({ children }) {
  const { user } = useUser();
  const { getUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const token = Cookies.get("analogueshifts");

  const authLink = process.env.NEXT_PUBLIC_AUTH_URL;
  const app = process.env.NEXT_PUBLIC_SITE_BUILD_UUID;

  useEffect(() => {
    if (!user && !token) {
      Cookies.set("RedirectionLink", pathname);
      window.location.href = `${authLink}?app=${app}`;
      return null;
    } else if (!user && token) {
      getUser({ setLoading, layout: "authenticated" });
    }
  }, []);

  return (
    <main className="w-full flex justify-end bg-platinum min-h-screen">
      <LogoutIdiom close={() => setOpen(false)} open={open} />
      <SideBar
        setOpen={setOpenSidebar}
        open={openSidebar}
        handleLogout={() => setOpen(true)}
      />
      <div className="min-h-screen relative  bg-transparent tablet:w-full w-[calc(100vw-344px)]">
        <NavBar
          setOpen={setOpenSidebar}
          user={user}
          logout={() => setOpen(true)}
          open={openSidebar}
        />
        <div className="w-full large:pt-[94px] pt-10 flex justify-center">
          {children}
        </div>
      </div>
    </main>
  );
}
