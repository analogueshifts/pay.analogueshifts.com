"use client"; // Mark this as a Client Component

import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import TransactionDetails from "./component/verification";

export default function Page() {
  const searchParams = useSearchParams(); // Use searchParams to get query params

  // Extract query parameters from the URL
  const accountNumber = searchParams.get('accountNumber');
  const selectedBank = searchParams.get('selectedBank');
  const amount = searchParams.get('amount');

  return (
    <div className="mt-20">
      <TransactionDetails />
      <div className="m-4">
        <div className="flex text-yellow-400 justify-center font-bold text-2xl border-b-2 border-dashed">
          Transaction details
        </div>
        <div className="border-b-2 mb-8 border-dashed">
          <div className="grid grid-cols-2 m-3">
            <p className="col-span-1 text-[20px] text-left">Recepient Details</p>
            <p className="col-span-1 text-[20px] text-right font-semibold">
              Account Name | {selectedBank} | {accountNumber} {/* Dynamic Details */}
            </p>
          </div>

          <div className="grid grid-cols-2 m-3">
            <p className="col-span-1 text-[20px] text-left">Transaction Type</p>
            <p className="col-span-1 text-[20px] text-right font-semibold">
              Bank Transfer
            </p>
          </div>

          <div className="grid grid-cols-2 m-3">
            <p className="col-span-1 text-[20px] text-left">Transaction Amount</p>
            <p className="col-span-1 text-[20px] text-right font-semibold">
              {amount} NGN {/* Dynamic Amount */}
            </p>
          </div>
        </div>

        <div className="flex justify-center w-32 h-10 hover:bg-yellow-500 rounded-lg bg-yellow-400">
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
}
