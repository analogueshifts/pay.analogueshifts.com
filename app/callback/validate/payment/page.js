"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import Image from "next/image";
import Spinner from "@/public/spinner.svg";
import Success from "@/public/verified-check.png";
import Error from "@/public/error.png";

export default function Page() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");

  const [paymentState, setPaymentState] = useState("loading");

  const validate = async () => {
    const url =
      process.env.NEXT_PUBLIC_BACKEND_URL +
      "/callback/validate/paystack?reference=" +
      reference;

    try {
      const req = await fetch(url);
      const res = await req.json();

      if (res.success) {
        setPaymentState("successfull");
      } else {
        setPaymentState("failed");
      }
    } catch (error) {
      setPaymentState("failed");
    }
  };

  useEffect(() => {
    validate();
  }, []);

  return (
    <Suspense fallback={<p>redirecting</p>}>
      <section className="w-full h-screen flex justify-center items-center flex-col gap-5">
        <h3 className="text-sm font-semibold text-black/80">
          {paymentState === "loading"
            ? "Validating your payment"
            : `Payment ${paymentState}`}
        </h3>
        <Image
          src={
            paymentState === "loading"
              ? Spinner
              : paymentState === "successfull"
              ? Success
              : Error
          }
          alt=""
          className={`w-20 h-max ${
            paymentState === "loading" ? "animate-spin" : ""
          }`}
        />
      </section>
    </Suspense>
  );
}
