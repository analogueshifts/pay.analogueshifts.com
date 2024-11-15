"use client";
import Image from "next/image";
import Book from "@/public/images/briefcase.svg";
import AnimatedText from "@/components/ui/animated-text";
import { motion } from "framer-motion";
import React from "react";
import { useUser } from "@/contexts/user";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { user } = useUser();
  const router = useRouter();
  return (
    <div className="w-full large:pt-[138px] pb-10 pt-[78px] bg-white tablet:flex-col-reverse flex-row justify-between px-[112px] tablet:px-6 gap-[51px]  h-max items-center flex">
      <div className="w-max max-w-[calc(55%-51px)] tablet:max-w-full flex flex-col gap-6">
        <div className="w-max h-max overflow-y-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: "linear", duration: 0.5 }}
            className="w-max max-w-full h-max rounded-full tablet:py-1 py-1.5 large:py-2.5 tablet:px-2.5 px-3.5 large:px-6 flex items-center tablet:gap-1 gap-2.5 bg-tremor-background-darkYellow/10"
          >
            <Image
              className="large:w-max h-max tablet:w-2.5 w-4"
              src={Book}
              alt=""
            />
            <p className="font-medium tablet:text-xs text-sm large:text-base text-tremor-background-darkYellow">
              PayOut
            </p>
          </motion.div>
        </div>
        <div className="w-max max-w-full flex flex-col">
          <h3
            className={`overflow-hidden large:text-[32px] tablet:text-xl text-2xl tablet:leading-8 leading-[45px] mb-4 large:mb-[38px] font-semibold large:leading-[64px] text-black`}
          >
            <AnimatedText
              phrases={"Withdraw your earnings with our"}
              delay={0}
              stagger={0.05}
            />
            <br />{" "}
            <span className="text-tremor-background-darkYellow">
              {" "}
              <AnimatedText
                phrases={"Payment gateway"}
                delay={0}
                stagger={0.05}
              />
            </span>
          </h3>
          <p
            className={`text-tremor-brand-boulder400 mb-8 large:text-xl text-base leading-9 large:leading-[48px] font-normal `}
          >
            {" "}
            <AnimatedText
              phrases={
                "Effortlessly access and withdraw your earnings with our"
              }
              delay={0}
              stagger={0.05}
            />
            <br />{" "}
            <AnimatedText
              phrases={"secure platform, designed to make managing your"}
              delay={0}
              stagger={0.05}
            />{" "}
            <br />{" "}
            <AnimatedText
              phrases={"funds simple and seamless."}
              delay={0}
              stagger={0.05}
            />
          </p>
          <div className="h-max w-full overflow-y-hidden">
            <motion.button
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ ease: "linear", duration: 0.5 }}
              onClick={() =>
                router.push(
                  user ? "/wallet" : "https://auth.analogueshifts.app?app=pay"
                )
              }
              type="button"
              className="min-w-max hover-text-button flex justify-center items-center large:px-16 px-12 tablet:px-6 h-14 rounded-2xl bg-tremor-background-darkYellow text-[#FEFEFE] large:text-xl tablet:text-sm text-lg font-medium"
            >
              <div className="flex-col flex overflow-hidden relative h-4">
                {" "}
                <span className="h-5 leading-4 overflow-hidden duration-300">
                  {" "}
                  Get started now!
                </span>{" "}
                <span className="h-5 leading-4 overflow-hidden absolute translate-y-4 duration-300">
                  {" "}
                  Get started now!
                </span>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ ease: "linear", duration: 2 }}
        src={"/landing.png"}
        alt=""
        className="w-[45%] h-max tablet:h-[250px] object-contain tablet:w-max tablet:max-w-full"
      />
    </div>
  );
}
