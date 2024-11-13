"use client";
import { useEffect, useState } from "react";
import { bankList } from "@/lib/banks";

import { useBanks } from "@/hooks/banks";

export default function Form() {
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [validating, setValidating] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [loading, setLoading] = useState(false);

  const { validateAccount, addBank } = useBanks();

  function handleSubmit(e) {
    e.preventDefault();
    const bank = bankList.find((i) => i.slug === selectedBank);
    addBank({ accountName, accountNumber, bank, setLoading });
  }

  const handleAccountNumberInputChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setAccountNumber(value);
    }
  };

  const handleAllFieldFilled = () => {
    return accountName.length > 0;
  };

  useEffect(() => {
    if (selectedBank.length > 0 && accountNumber.length === 10) {
      const bank = bankList.find((i) => i.slug === selectedBank);
      validateAccount({
        setLoading: setValidating,
        account_number: accountNumber,
        bank_code: bank.code,
        setAccountName,
      });
    } else {
      setAccountName("");
    }
  }, [accountNumber, selectedBank]);

  return (
    <form
      className="flex w-full flex-col large:gap-8 gap-5 large:mb-8 mb-5"
      onSubmit={handleSubmit}
    >
      <div className="w-full bg-white border border-gainsBoro rounded-2xl px-10 tablet:px-6 large:px-[60px] pt-6 large:pt-7 pb-7 large:pb-9">
        <p className="text-black font-normal text-lg large:text-2xl mb-5 large:mb-[43px]">
          Account details
        </p>
        <div className="w-full grid grid-cols-1  gap-y-5 large:gap-y-8">
          <select
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className={`text-sm font-medium large:text-lg border border-gainsBoro w-full rounded-[13px] large:rounded-2xl bg-transparent px-6  outline-amber h-12 large:h-16 ${
              selectedBank.length > 0 ? "text-shadowDark" : "text-neutral100"
            }`}
          >
            <option value="">Select Bank</option>
            {bankList.map((item) => {
              return (
                <option key={item.id} value={item.slug}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <input
            placeholder="Account number"
            type="number"
            value={accountNumber}
            onChange={handleAccountNumberInputChange}
            required
            className="w-full pl-6 font-normal text-shadowDark placeholder:text-neutral100 bg-transparent border border-gainsBoro outline-amber text-sm large:text-lg rounded-[13px] large:rounded-2xl h-12 large:h-16"
          />
          <div className="w-full pl-6 font-normal text-shadowDark flex items-center bg-transparent border border-gainsBoro outline-amber text-sm large:text-lg rounded-[13px] large:rounded-2xl h-12 large:h-16">
            {validating ? "Validating..." : accountName}
          </div>
        </div>
      </div>
      <button
        disabled={handleAllFieldFilled() ? false : true}
        type="submit"
        className={`w-full h-12 large:h-16 rounded-[13px] large:rounded-2xl flex items-center justify-center bg-amber text-white font-bold large:text-xl text-base ${
          handleAllFieldFilled() ? "opacity-100" : "opacity-50"
        }`}
      >
        {loading ? "Adding..." : "Add bank"}
      </button>
    </form>
  );
}
