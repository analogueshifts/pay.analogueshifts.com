"use client";
import { useState } from "react";
import Image from "next/image";
import AnalogueShifts from "@/public/analogueShifts.png";

export default function Page({ params }) {
  const [data, setData] = useState([
    {
      id: 1,
      label: "First Name",
      type: "text",
      value: "",
    },
    {
      id: 2,
      label: "Last Name",
      type: "text",
      value: "",
    },
    {
      id: 3,
      label: "Email",
      type: "email",
      value: "",
      fullWidth: true,
    },
    {
      id: 4,
      label: "Phone",
      type: "number",
      value: 0,
      fullWidth: true,
    },
    {
      id: 5,
      label: "Description",
      type: "text",
      value: "",
      fullWidth: true,
    },
    {
      id: 6,
      label: "Postal Code",
      type: "number",
      value: 0,
      fullWidth: true,
    },
  ]);
  const [promoCode, setPromoCode] = useState(false);
  const [promoCodeValue, setPromoCodeValue] = useState("");

  const updateData = (id, newValue) => {
    setData((prev) =>
      prev.map((p) => {
        if (p.id !== id) {
          return p;
        } else {
          return { ...p, value: newValue };
        }
      })
    );
  };

  return (
    <main className="w-full flex justify-center pb-10 pt-[100px]">
      <div className="w-[1000px] max-[1100px]:w-[90%]">
        <p className="text-black font-extrabold text-3xl">Payment details</p>
        <div className="w-full max-[900px]:flex-col pt-10 flex gap-[60px] max-[900px]:gap-[35px]">
          <div className="w-[calc(50%-30px)] flex flex-wrap gap-x-4 gap-y-4 max-[900px]:w-full">
            {data.map((d) => {
              return (
                <div
                  key={d.id}
                  className="flex flex-col gap-1"
                  style={{
                    width: `${d.fullWidth ? "100%" : "calc(50% - 8px)"}`,
                  }}
                >
                  <p className="text-sm text-black/80 font-semibold">
                    {d.label}
                  </p>
                  <input
                    type={d.type}
                    value={d.value}
                    className="w-full border rounded px-2 py-2 outline-1 outline-[#FAE315] text-sm text-black/80 font-semibold"
                    onChange={(e) => updateData(d.id, e.target.value)}
                  />
                </div>
              );
            })}
            <div className="pt-3 w-full flex flex-col gap-4">
              <div
                onClick={() => setPromoCode((prev) => !prev)}
                className="w-full cursor-pointer flex gap-2 items-center"
              >
                <input
                  checked={promoCode}
                  type="checkbox"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.checked)}
                />
                <p className="text-sm text-black/90 font-semibold">
                  I have promo code
                </p>
              </div>
              {promoCode && (
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  value={promoCodeValue}
                  className="w-full border rounded px-2 py-2 outline-1 outline-[#FAE315] text-sm text-black/80 font-semibold"
                  onChange={(e) => setPromoCodeValue(e.target.value)}
                />
              )}
            </div>
            <div className="pt-3 w-full flex flex-col gap-4">
              <div className="w-full flex justify-between items-center">
                <p className="text-sm text-black/80 font-semibold">Subtotal</p>
                <p className="text-sm text-black/90 font-bold">$165</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p className="text-sm text-black/80 font-semibold">Fee</p>
                <p className="text-sm text-black/90 font-bold">$9</p>
              </div>
              <div className="w-full border-t"></div>
              <div className="w-full flex justify-between items-center">
                <p className="text-base text-black/80 font-semibold">
                  Total Amount
                </p>
                <p className="text-base text-black/90 font-bold">$174</p>
              </div>
              <button className="w-full flex justify-center h-10 items-center rounded-md text-white text-sm bg-[#FFC800] hover:bg-[#FFC800]/80">
                Continue to payment
              </button>
            </div>
          </div>
          <div className="w-[calc(50%-30px)] relative max-[900px]:w-full max-[900px]:h-[700px]">
            <Image
              src={AnalogueShifts}
              alt="AnalogueShift's Logo"
              className="w-full h-[90%] max-[900px]:h-full"
            />
            <div className="absolute bottom-[calc(10%+50px)] max-[900px]:bottom-[50px] left-[15px] w-[calc(100%-30px)] flex justify-between items-center">
              <p className="text-black font-bold text-xl">AnalogueShifts</p>
              <button className="flex justify-center h-9 items-center rounded-md text-[#FFC800] text-sm border hover:scale-110 duration-300 border-[#FFC800] px-10">
                PAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
