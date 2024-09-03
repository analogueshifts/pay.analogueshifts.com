"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import img from "@/public/woman1.png";
import Image from "next/image";

export default function GetBankDropdown() {
  // State to store fetched bank data
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to store error messages
  const [accountNumber, setAccountNumber] = useState(''); // State to store account number input
  const [selectedBank, setSelectedBank] = useState(''); // State to store selected bank code
  const [accountName, setAccountName] = useState(''); // State to store verified account name
  const [token, setToken] = useState(''); // State to store the extracted token

  // Fetch the token from the authentication service
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get("https://auth.analogueshifts.com?app=pay", {
          headers: {
            // Include any required headers here
            "Content-Type": "application/json"
          }
        });

        console.log("Auth response:", response); // Log the auth response

        const tokenFromHeader = response.headers['authorization-token']; // Adjust this based on the actual header name
        console.log("Extracted token:", tokenFromHeader);

        if (tokenFromHeader) {
          setToken(tokenFromHeader); // Store the token in state
        } else {
          throw new Error("Token not found in response headers.");
        }
      } catch (error) {
        console.error("Error fetching token:", error);
        setError(error.message); // Set error message in state
      }
    };

    fetchToken();
  }, []);

  // useEffect to fetch bank data when the token is available
  useEffect(() => {
    if (!token) return; // Only fetch if the token is available

    const fetchBankData = async () => {
      try {
        const response = await axios.get("https://api.analogueshifts.com/api/tool/bank/dropdown", {
          headers: {
            'Authorization': `Bearer ${token}`, // Use the extracted token
          },
        });

        console.log("Bank dropdown response:", response); // Log the entire response object

        // Axios automatically parses JSON, so we can directly use response.data
        const data = response.data;
        console.log("Bank data received:", data); // Log the parsed JSON data
        setBanks(data.data.banks); // Assuming API response structure has data.banks array
      } catch (error) {
        console.error("Error fetching bank data:", error);
        setError(error.message); // Set error message in state
      } finally {
        setLoading(false); // Stop loading after data is fetched or error is caught
      }
    };

    fetchBankData();
  }, [token]); // Dependency on the token state

  // Function to verify the account number and selected bank
  const verifyAccountDetails = async () => {
    if (!accountNumber || !selectedBank) {
      alert("Please enter an account number and select a bank.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.analogueshifts.com/api/tool/bank/resolve`, // Updated URL to be more readable
        {
          headers: {
            "Authorization": `Bearer ${token}`, // Use the extracted token
          },
          params: { // Use Axios `params` for query parameters
            account_number: accountNumber,
            bank_code: selectedBank
          }
        }
      );

      console.log("Verification response:", response); // Log the entire response object

      // Axios automatically parses JSON, so we can directly use response.data
      const data = response.data;
      console.log("Verification data received:", data); // Log the parsed JSON data
      setAccountName(data.accountName); // Assuming API response has an accountName field

    } catch (error) {
      console.error("Error verifying account details:", error);
      setError(error.message); // Set error message in state
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading state while fetching data
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message if fetch fails
  }

  return (
    <div className="pt-3 gap-2 m-4 space-y-5 grid grid-cols-5">
      <div className="col-span-3">
        <input
          type="number"
          className="bg-transparent border w-full"
          placeholder="Input your 10-digit account number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)} // Update state on input change
        />
        <select
          className="bg-transparent border w-full rounded-lg text-white"
          value={selectedBank}
          onChange={(e) => setSelectedBank(e.target.value)} // Update state on select change
        >
          <option disabled selected value="">
            Select your bank
          </option>
          {banks.map((bank, index) => (
            <option key={index} value={bank.code}>{bank.name}</option> // Adjusting to correct bank code and name
          ))}
        </select>
        <button
          className="mt-2 p-2 bg-blue-500 text-white rounded"
          onClick={verifyAccountDetails} // Button to trigger verification
        >
          Verify Account
        </button>
        {accountName && ( // Display account name if available
          <p className="text-green-500 mt-2">Account Name: {accountName}</p>
        )}
      </div>
      <div className="col-span-2 flex justify-end">
        <Image src={img} alt="image" />
      </div>
    </div>
  );
}
