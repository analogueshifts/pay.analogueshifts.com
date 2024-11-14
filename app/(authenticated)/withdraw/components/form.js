"use client";
import { useEffect, useState } from "react";
import { bankList } from "@/lib/banks";
import Cookies from "js-cookie";

import { useBanks } from "@/hooks/banks";

export default function Form() {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const { getBanks, withdrawFunds } = useBanks();
  const token = Cookies.get("analogueshifts");

  useEffect(() => {
    if (token) {
      getBanks({
        setLoading: (v) => {},
        setBanks: setAccounts,
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    withdrawFunds({
      account_uuid: selectedAccount,
      amount,
      password,
      setLoading,
    });
  };

  return (
    <form
      className="flex w-full flex-col large:gap-8 gap-5 large:mb-8 mb-5"
      onSubmit={handleSubmit}
    >
      <div className="w-full bg-white border border-gainsBoro rounded-2xl px-10 tablet:px-6 large:px-[60px] pt-6 large:pt-7 pb-7 large:pb-9">
        <p className="text-black font-normal text-lg large:text-2xl mb-5 large:mb-[43px]">
          Withdrawal details
        </p>
        <div className="w-full grid grid-cols-1  gap-y-5 large:gap-y-8">
          <select
            value={selectedAccount}
            required
            onChange={(e) => setSelectedAccount(e.target.value)}
            className={`text-sm font-medium large:text-lg border border-gainsBoro w-full rounded-[13px] large:rounded-2xl bg-transparent px-6  outline-amber h-12 large:h-16 ${
              selectedAccount.length > 0 ? "text-shadowDark" : "text-neutral100"
            }`}
          >
            <option value="">Select Account</option>
            {accounts.map((item) => {
              return (
                <option key={item?.uuid} value={item?.uuid}>
                  {item?.bank_name} ({item?.account_number})
                </option>
              );
            })}
          </select>
          <input
            placeholder="Enter Amount e.g 1000"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            minLength={3}
            className="w-full pl-6 font-normal text-shadowDark placeholder:text-neutral100 bg-transparent border border-gainsBoro outline-amber text-sm large:text-lg rounded-[13px] large:rounded-2xl h-12 large:h-16"
          />
          <input
            placeholder="Password - Enter your account Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full pl-6 font-normal text-shadowDark placeholder:text-neutral100 bg-transparent border border-gainsBoro outline-amber text-sm large:text-lg rounded-[13px] large:rounded-2xl h-12 large:h-16"
          />
        </div>
      </div>
      <button
        disabled={loading}
        type="submit"
        className={`w-full h-12 large:h-16 rounded-[13px] large:rounded-2xl flex items-center justify-center bg-amber text-white font-bold large:text-xl text-base`}
      >
        {loading ? "Please wait..." : "Withdraw funds"}
      </button>
    </form>
  );
}
