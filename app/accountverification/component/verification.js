import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TransactionDetails() {
  const [transactionData, setTransactionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactionDetails = async () => {
      try {
        const response = await axios.post(
          'https://api.analogueshifts.com/api/tool/bank/withdraw/request/28fb98b5-3cd2-3cc5-b1f4-d6b5d667cb54',
          {
            amount: "10000", // Set the amount dynamically
            pin: "your-pin-here" // Set the pin dynamically
          },
          {
            headers: {
              Authorization: `Bearer YOUR_SECRET_TOKEN`, // Your token goes here
              'Content-Type': 'application/json',
            },
          }
        );

        console.log("API Response:", response);
        setTransactionData(response.data.data.transaction); // Set transaction data
      } catch (err) {
        console.error("Error fetching transaction details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactionDetails();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message
  }

  return (
    <div className="m-4">
      <div className="flex text-yellow-400 justify-center font-bold text-2xl border-b-2 border-dashed">
        Transaction details
      </div>
      <div className="border-b-2 mb-8 border-dashed">
        <div className="grid grid-cols-2 m-3">
          <p className="col-span-1 text-[20px] text-left">Recepient Details</p>
          <p className="col-span-1 text-[20px] text-right font-semibold">
            {/* Dynamic recipient details */}
            Account Name | Bank Name | Account Number
          </p>
        </div>
        <div className="grid grid-cols-2 m-3">
          <p className="col-span-1 text-[20px] text-left">Transaction type</p>
          <p className="col-span-1 text-[20px] text-right font-semibold">
            {transactionData?.reason || "Bank Transfer"}
          </p>
        </div>
        <div className="grid grid-cols-2 m-3">
          <p className="col-span-1 text-[20px] text-left">Transaction Id</p>
          <p className="col-span-1 text-[20px] text-right font-semibold">
            {transactionData?.uuid}
          </p>
        </div>
        <div className="grid grid-cols-2 m-3">
          <p className="col-span-1 text-[20px] text-left">Transaction Date & Time</p>
          <p className="col-span-1 text-[20px] text-right font-semibold">
            {new Date(transactionData?.created_at).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex justify-center w-32 h-10 hover:bg-yellow-500 rounded-lg bg-yellow-400">
        <button>Confirm</button>
      </div>
    </div>
  );
}
