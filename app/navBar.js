"use client";
import { useState } from "react";
import Link from "next/link";
import ApplicationLogo from "./Components/ApplicationLogo";
export default function NavBar() {
  const [opacity, setOpacity] = useState(1);
  const [transformOne, setTransformOne] = useState(0);
  const [transformTwo, setTransformTwo] = useState(0);
  const [position, setPosition] = useState(-900);
  const [bodyRotate, setBodyRotate] = useState(0);

  const toggleMenu = () => {
    if (position !== 0) {
      setPosition(0);
      setOpacity(0);
      setTransformOne(-90);
      setTransformTwo(-10);
      setBodyRotate(45);
    } else {
      setPosition(-900);
      setOpacity(1);
      setTransformOne(0);
      setTransformTwo(0);
      setBodyRotate(0);
    }
  };

  return (
    <nav className="w-full">
      <div
        style={{ boxShadow: "1px 1px 50px rgba(0,0,0,0.1)" }}
        className="w-[calc(100%-12px)] h-16 backdrop-filter backdrop-blur-sm top-1.5 left-1.5 fixed z-50 rounded-full px-7 flex justify-between items-center"
      >
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
            </Link>
          </div>
        </div>
        <div className="flex gap-4 max-[850px]:hidden">
          <Link href="#">
            <p className="text-sm text-black font-semibold">Details</p>
          </Link>
          <Link href="#">
            <p className="text-sm text-black font-semibold">Feedback</p>
          </Link>
          <Link href="#">
            <p className="text-sm text-black font-semibold">Queries</p>
          </Link>
        </div>
        <div
          style={{ transform: `rotate(${bodyRotate}deg)` }}
          onClick={toggleMenu}
          className="hidden max-[850px]:flex duration-300 origin-left flex-col w-5 h-3 cursor-pointer justify-between"
        >
          <div
            style={{ transform: `rotate(${transformOne}deg)` }}
            className="w-full duration-300 h-0.5 bg-black/80 rounded"
          ></div>
          <div
            style={{ opacity: opacity }}
            className="w-full h-0.5 duration-300 bg-black/80 rounded"
          ></div>
          <div
            style={{ transform: `translateY(${transformTwo}px)` }}
            className="w-full h-0.5 bg-black/80 duration-300 rounded"
          ></div>
        </div>
      </div>
      <div
        style={{ left: `${position}px` }}
        className="w-[70%] h-screen static hidden duration-300 max-[850px]:fixed z-50 bg-white pt-6 pl-5 max-[850px]:flex flex-col gap-5"
      >
        <Link href="#">
          <p className="text-sm text-black/70 hover:text-black/90 font-semibold">
            Payment
          </p>
        </Link>
        <Link href="#">
          <p className="text-sm text-black/70 hover:text-black/90 font-semibold">
            Options
          </p>
        </Link>
        <Link href="#">
          <p className="text-sm text-black/70 hover:text-black/90 font-semibold">
            Support
          </p>
        </Link>
        <Link href="#">
          <p className="text-sm text-black/70 hover:text-black/90 font-semibold">
            Details
          </p>
        </Link>
        <Link href="#">
          <p className="text-sm text-black/70 hover:text-black/90 font-semibold">
            Feedback
          </p>
        </Link>
        <Link href="#">
          <p className="text-sm text-black/70 hover:text-black/90 font-semibold">
            Queries
          </p>
        </Link>
      </div>
    </nav>
  );
}
