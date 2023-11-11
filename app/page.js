import Image from "next/image";
import Link from "next/link";
import check from "@/public/Vector.png";

export default function Home() {
  const paymentOptions = [
    {
      title: "Card Payment",
      subTitle: "Ideal for quick transactions and Instant payments.",
      amount: 9,
      path: "/card-payment",
      perks: [
        "No Hidden Charges",
        "Swift Processing",
        "24/7 Support",
        "Secure Encryption",
      ],
    },
    {
      title: "Net Banking",
      subTitle: "Preferred choice for secure online transactions.",
      amount: 0,
      path: "/net-banking",
      perks: [
        "Unlimited Transactions",
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
      <div className="w-full flex h-[380px] bg-transparent flex-col items-center justify-center gap-5">
        <p className="text-black font-extrabold text-4xl text-center max-[500px]:text-2xl">
          Payment Options
        </p>
        <p className="text-black text-base w-[90%] text-center">
          Choose from our convenient payment options designed for your ease.
        </p>
      </div>
      <div className="w-full bg-transparent h-[500px] px-8 max-[1050px]:h-auto max-[1050px]:py-10">
        <div className="w-full h-[380px] bg-white rounded pt-12 px-6 gap-y-6 flex flex-wrap justify-between pb-5 max-[1050px]:h-auto">
          {paymentOptions.map((option, index) => (
            <div key={index} className="min-w-[300px] w-[30%] h-full">
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
      <div className="w-full h-[450px] bg-white flex justify-center items-center">
        <div className="w-[960px] max[1000px]:w-[90%] flex flex-col items-center gap-4">
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
