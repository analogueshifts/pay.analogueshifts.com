"use client"
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

export default function CreatePayment() {
  const [isMounted, setIsMounted] = useState(false); // Guard for SSR issues
  // const router = useRouter();

  const [formData, setFormData] = useState({
    title: 'Sample Title',
    description: 'Sample Description',
    amount: '100',
    min_amount: '50',
    max_amount: '200',
    payment_method: 'Credit Card',
    reoccurring_limit: '12',
    valid_to: '2024-12-31',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  // Get Bearer token from the cookie (client-side only)
  // const getBearerToken = () => {
  //   if (typeof window === 'undefined') return ''; // Ensure it's only accessed client-side
  //   const cookieValue = document.cookie
  //     .split('; ')
  //     .find((row) => row.startsWith('analogueshifts='))
  //     ?.split('=')[1];
  //   return cookieValue || '';
  // };

  // Populate the form with query parameters when in edit mode (only on client)
  // useEffect(() => {
  //   if (isMounted && router.query.title) {
  //     setFormData({
  //       title: router.query.title || '',
  //       description: router.query.description || '',
  //       amount: router.query.amount || '',
  //       min_amount: router.query.min_amount || '',
  //       max_amount: router.query.max_amount || '',
  //       payment_method: router.query.payment_method || '',
  //       reoccurring_limit: router.query.reoccurring_limit || '',
  //       valid_to: router.query.validity_period || '',
  //     });
  //     setIsEditMode(true);
  //   }
  // }, [isMounted, router.query]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (either create or update)
  // const handleSubmit = async () => {
  //   const token = getBearerToken();

  //   const apiUrl = isEditMode 
  //     ? 'https://api.analogueshifts.com/api/tool/pay/9d312d2a-5738-33d2-9b10-72ccc46ab58c'  // PUT request for editing payment
  //     : 'https://api.analogueshifts.com/api/tool/pay';       // POST request for creating payment

  //   const response = await fetch(apiUrl, {
  //     method: isEditMode ? 'PUT' : 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       title: formData.title,
  //       description: formData.description,
  //       amount: parseFloat(formData.amount),
  //       min_amount: parseFloat(formData.min_amount),
  //       max_amount: parseFloat(formData.max_amount),
  //       payment_method: formData.payment_method || null,
  //       reoccurring_limit: parseFloat(formData.reoccurring_limit),
  //       valid_to: new Date(formData.valid_to).toISOString(),
  //       status: true,
  //     }),
  //   });

  //   if (response.ok) {
  //     const result = await response.json();
  //     alert(isEditMode ? 'Payment updated successfully!' : 'Payment created successfully!');
  //     console.log(result);
  //   } else {
  //     const error = await response.json();
  //     alert('Error: ' + error.message);
  //   }
  // };

  return (
    <div className="mt-20 m-6">
      <input
        type="text"
        name="title"
        className="capitalize mb-3 w-full h-10 border rounded-lg border-black"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        className="mb-3 w-full h-10 border rounded-lg border-black"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        className="mb-3 w-full h-10 border rounded-lg border-black"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        type="number"
        name="min_amount"
        className="mb-3 w-full h-10 border rounded-lg border-black"
        placeholder="Min-Amount"
        value={formData.min_amount}
        onChange={handleChange}
      />
      <input
        type="number"
        name="max_amount"
        className="mb-3 w-full h-10 border rounded-lg border-black"
        placeholder="Max-Amount"
        value={formData.max_amount}
        onChange={handleChange}
      />
      <input
        type="text"
        name="payment_method"
        className="mb-3 w-full h-10 border rounded-lg border-black"
        placeholder="Payment Method"
        value={formData.payment_method}
        onChange={handleChange}
      />
      <input
        type="number"
        name="reoccurring_limit"
        className="mb-3 w-full h-10 border rounded-lg border-black"
        placeholder="Limit"
        value={formData.reoccurring_limit}
        onChange={handleChange}
      />
      <input
        type="date"
        name="valid_to"
        className="mb-3 w-full h-10 border rounded-lg border-black"
        value={formData.valid_to}
        onChange={handleChange}
      />
      <button
        className="bg-yellow-300 p-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-yellow-500"
        // onClick={handleSubmit}
      >
        {isEditMode ? 'Save Changes' : 'Create Payment'}
      </button>
    </div>
  );
}
