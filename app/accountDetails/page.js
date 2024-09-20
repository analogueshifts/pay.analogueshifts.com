"use client"; // Ensure this is a Client Component

import GetBankDropdown from "./components/accountDetails";
import Image from "next/image";
import { useState } from "react"; 
import { useRouter } from "next/navigation"; // For client-side routing in Next.js App Router
import img from "@/public/woman1.png";
import dropdown from "@/resources/listOfBanks/dropdown.json";

export default function Page() {
  const banks = dropdown.data.banks;
  const router = useRouter(); // Ensure routing happens only on client

  const [accountNumber, setAccountNumber] = useState(""); 
  const [selectedBank, setSelectedBank] = useState("");
  const [amount, setAmount] = useState(""); 

  const handleContinue = () => {
    if (!accountNumber || !selectedBank || !amount) {
      alert("Please fill out all fields");
      return;
    }

    // Navigate to the next page
    router.push(`/accountverification?accountNumber=${accountNumber}&selectedBank=${selectedBank}&amount=${amount}`);
  };

  return (
    <div className="mt-36">
      <GetBankDropdown />
      <div className="pt-3 gap-2 space-y-5 grid grid-cols-5">
        <div className="col-span-3 m-5 mt-20">
          <input
            type="number"
            className="h-14 rounded-lg col-span-3 bg-transparent border w-full"
            placeholder="Input your 10-digit account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <select
            className="h-14 bg-transparent border w-full rounded-lg text-white"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <option disabled selected value="">
              Select your bank
            </option>
            {banks.map((bank, index) => (
              <option className="bg-yellow-500" key={index} value={bank.code}>
                {bank.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            className="h-14 mt-4 rounded-lg col-span-3 bg-transparent border w-full"
            placeholder="Input amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            onClick={handleContinue}
            className="text-sm text-black mt-4 tracking-wide bg-yellow-400 hover:bg-[#FAE315] hover:border-none font-semibold w-56 flex justify-center items-left rounded-lg h-11"
          >
            Continue
          </button>
        </div>
        <div className="col-span-2">
          <Image className="flex justify-end" src={img} alt="picture" />
        </div>
      </div>
    </div>
  );
}
