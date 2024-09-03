"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import check from "@/public/Vector.png";
import pay from "@/public/pay.png";
import Landing from "@/public/landing.png";

export default function Home() {
  const [token, setToken] = useState(''); // State to store the extracted token
  const [banks, setBanks] = useState([]); // Optional: if you need bank data on this page
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to extract token from the URL
    const extractTokenFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromURL = urlParams.get('token'); // Extract token from the URL parameter

      if (tokenFromURL) {
        setToken(tokenFromURL); // Store the token in state
        localStorage.setItem('authToken', tokenFromURL); // Optionally store in localStorage
      } else {
        console.error("Token not found in the URL.");
        setError("Token not found in the URL."); // Set error message in state
      }
    };

    extractTokenFromURL(); // Extract token on component mount
  }, []);

  useEffect(() => {
    if (!token) return; // If no token, do nothing

    // Optional: Fetch data that requires token after token is set
    const fetchBankData = async () => {
      try {
        const response = await axios.get("https://api.analogueshifts.com/api/tool/bank/dropdown", {
          headers: {
            'Authorization': `Bearer ${token}`, // Use the extracted token
          },
        });

        console.log("Bank dropdown response:", response); // Log the entire response object
        const data = response.data;
        console.log("Bank data received:", data); // Log the parsed JSON data
        setBanks(data.data.banks); // Assuming API response structure has data.banks array
      } catch (error) {
        console.error("Error fetching bank data:", error);
        setError(error.message); // Set error message in state
      }
    };

    fetchBankData(); // Call the fetch function
  }, [token]);

  const paymentOptions = [
    {
      title: "Card Payment",
      subTitle: "Ideal for quick transactions and Instant payments.",
      amount: 0,
      path: "/card-payment",
      perks: [
        "No Hidden Charges",
        "Swift Processing",
        "24/7 Support",
        "Secure Encryption",
      ],
    },
    {
      title: "USSD",
      subTitle: "Preferred choice for secure online transactions.",
      amount: 0,
      path: "/net-banking",
      perks: [
        "No Hidden Charges",
        "Instant Confirmation",
        "24/7 Customer Support",
        "Secure Gateway",
      ],
    },
    {
      title: "Wallet",
      subTitle: "Convenient for frequent transactions.",
      amount: 0,
      path: "/wallet",
      perks: [
        "Quick Refunds",
        "One-Click Payment",
        "24/7 Support",
        "Secure Encryption",
      ],
    },
  ];

  return (
    <main className="w-full bg-homeBackgroundColor">
      {error && <p className="text-red-500">{error}</p>} {/* Display error if exists */}
      <div className="w-full flex min-h-[500px] bg-transparent flex-col items-center justify-center gap-5">
        <div>
          <Image src={Landing} alt="Check Mark" width={200} height={200} />
        </div>
        <p className="text-black font-extrabold text-4xl text-center max-[500px]:text-2xl">
          Payment Options
        </p>
        <p className="text-black text-base w-[90%] text-center">
          Choose from our convenient payment options designed for your ease.
        </p>
      </div>
      <div className="w-full bg-transparent h-[500px] px-3 xl:px-8 max-[1050px]:h-auto max-[1050px]:py-10">
        <div className="w-full h-[450px] bg-white rounded pt-12 px-3 xl:px-6 gap-y-6 flex flex-wrap justify-between pb-5 max-[1050px]:h-auto">
          {paymentOptions.map((option, index) => (
            <div
              key={index}
              className="grid xl:min-w-[300px] h-full p-3 border rounded-md"
            >
              <p className="text-black font-extrabold text-2xl">
                {option.title}
              </p>
              <p className="text-sm text-black pt-1.5 tracking-wide">
                {option.subTitle}
              </p>
              <div className="w-full flex items-center py-4 gap-1">
                <p className="text-black font-extrabold text-2xl">
                  ${option.amount}
                </p>
                <p className="text-sm text-black pt-1.5 tracking-wide">
                  Per transaction
                </p>
              </div>
              <div className="w-full flex flex-col gap-2.5">
                {option.perks.map((perk) => (
                  <div
                    key={Math.random() + perk}
                    className="flex items-center gap-1.5"
                  >
                    <Image
                      src={check}
                      alt="Check Mark"
                      width={15}
                      height={15}
                    />
                    <p className="text-sm text-black tracking-wide">{perk}</p>
                  </div>
                ))}
              </div>
              <div className="pt-5 w-full">
                <Link
                  href={option.path}
                  className={`text-sm text-black tracking-wide hover:bg-[#FAE315] hover:border-none font-semibold w-full flex justify-center items-center rounded-lg h-11 border ${
                    option.title === "Net Banking"
                      ? "bg-[#FAE315]"
                      : "bg-transparent"
                  } ${
                    option.title !== "Net Banking"
                      ? "border-[#9CA3AF]"
                      : "border-transparent"
                  }`}
                >
                  Proceed to Pay
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-transparent h-[500px] px-3 xl:px-8 max-[1050px]:h-auto max-[1050px]:py-10">
        <div className="grid grid-cols-5">
          <div className="col-span-3 mt-16">
            <p className="text-white text-[50px] font-bold">
              Payments made easy with{" "}
              <a href="https://www.pay.analogueshifts.com">
                analogueshifts pay
              </a>
            </p>
            <p className="text-yellow-400 text-[30px] font-semibold capitalize mt-6">
              enjoy a secure and hassle-free Payment experience with instant
              confirmation
            </p>
            <Link
              href="/accountDetails" 
              className={`text-sm text-black tracking-wide bg-yellow-400 hover:bg-[#FAE315] hover:border-none font-semibold w-56 flex justify-center items-left rounded-lg h-11`}
            >
              <p className="items-center justify-center border-[#9CA3AF] mt-3 bg-transparent">
                Proceed to make payment
              </p>
            </Link>
            
          </div>
          <div className="col-span-2 mt-0">
            <Image src={pay} alt="pay" width={["600px"]} height={["600px"]} />
          </div>
        </div>
      </div>
      <div className="w-full h-[450px] bg-white flex justify-center items-center">
        <div className="w-[960px] max-[1000px]:w-[90%] flex flex-col items-center gap-4">
          <p className="text-xl font-bold text-black">Our Promise</p>
          <p className="text-black max-[500px]:text-2xl max-[1050px]:text-3xl font-extrabold text-center text-[48px] leading-[61.2px] tracking-[-2%]">
            We are committed to providing a secure and hassle-free payment
            experience.
          </p>
          <p className="text-black text-center text-base">Secure Payments.</p>
        </div>
      </div>
    </main>
  );
}
