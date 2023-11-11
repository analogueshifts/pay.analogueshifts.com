import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function FlutterwavePay({ data }) {
  const config = {
    public_key: process.env.NEXT_PUBLIC_FlUTTER_KEY,
    tx_ref: Date.now(),
    amount: data[5].value,
    currency: "USD",
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email: data[1].value,
      phone_number: data[2].value,
      name: data[0].value,
    },
    customizations: {
      title: data[3].value,
      description: data[4].value,
      logo: "pay.analogueshifts.com/analogueShifts.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <button
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            closePaymentModal(); // this will close the modal programmatically
          },
          onClose: () => {},
        });
      }}
      className="w-full flex justify-center h-10 items-center rounded-md text-white text-sm bg-[#FFC800] hover:bg-[#FFC800]/80"
    >
      Continue to payment
    </button>
  );
}
