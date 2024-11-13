"use client";
import Cookies from "js-cookie";
import Footer from "@/components/application/footer";
import Navigation from "@/components/application/navigation";
import { useEffect } from "react";
import { useUser } from "@/contexts/user";
import { useAuth } from "@/hooks/auth";

export default function GuestLayout({ children }) {
  const { user } = useUser();
  const { getUser } = useAuth();
  const token = Cookies.get("analogueshifts");

  useEffect(() => {
    if (!user && token) {
      //    Fetch User
      getUser({ setLoading: (value) => {}, layout: "guest" });
    }
  }, []);

  return (
    <div className="w-full bg-white flex justify-center">
      <section className="bg-white w-full large:pt-104 pt-20 max-w-[1600px]">
        <Navigation user={user} />
        {children}
        <Footer />
      </section>
    </div>
  );
}
