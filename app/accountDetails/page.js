import GetBankDropdown from "./components/accountDetails";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/woman1.png";
import dropdown from "@/resources/listOfBanks/dropdown.json";

export default function Page() {
  const banks = dropdown.data.banks;

  return (
    <div className="mt-36">
      <GetBankDropdown />
      <div className="pt-3 gap-2 space-y-5 grid grid-cols-5">
        <div className="col-span-3 m-5 mt-20">
          <input
            type="number"
            className="h-14 rounded-lg col-span-3 bg-transparent border w-full"
            placeholder="Input your 10-digit account number"
          />
          <select className="h-14 bg-transparent border w-full rounded-lg text-white">
            <option disabled selected>
              Select your bank
            </option>
            {banks.map((bank, index) => (
              <option
                className="text-black bg-[#FAE315] hover:bg-yellow-400"
                key={index}
                value={bank.code}
              >
                {bank.name}
              </option>
            ))}
          </select>
          <Link
            href="/accountDetails/page"
            className={`text-sm text-black mt-4 tracking-wide bg-yellow-400 hover:bg-[#FAE315] hover:border-none font-semibold w-56 flex justify-center items-left rounded-lg h-11`}
          >
            <p className="items-center font-bold capitalize justify-center border-[#9CA3AF] mt-3 bg-transparent">
              continue
            </p>
          </Link>
        </div>
        <div className="col-span-2">
          <Image className="flex justify-end" src={img} alt="picture" />
        </div>
      </div>
    </div>
  );
}
