import { useState } from 'react';

export default function ProceedToPay() {
  const [formData, setFormData] = useState({
    amount: '100',
    name: 'John Doe',
    email: 'john.doe@example.com',
    contact: '1234567890',
    description: 'Sample payment description',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  // const handleSubmit = async () => {
  //   const token = getBearerToken();

  //   const response = await fetch('https://api.analogueshifts.com/api/tool/pay/9d312d2a-5738-33d2-9b10-72ccc46ab58c', {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       amount: formData.amount ? parseFloat(formData.amount) : null, // Set amount as null if empty
  //       name: formData.name,
  //       email: formData.email,
  //       contact: formData.contact,
  //       message: formData.description, // Mapping to 'message' field
  //     }),
  //   });

  //   if (response.ok) {
  //     const result = await response.json();
  //     alert('Payment details submitted successfully!');
  //     console.log(result);
  //   } else {
  //     const error = await response.json();
  //     alert('Error submitting payment: ' + error.message);
  //   }
  // };

  return (
    <div className="mt-5">
      <input
        type="number"
        name="amount"
        className="mb-3 w-full h-10 border rounded-lg border-black"
        placeholder="amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        className="mb-3 w-full h-10 border rounded-lg border-black"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        className="mb-3 w-full h-10 border rounded-lg border-black"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="contact"
        className="mb-3 w-full h-10 border rounded-lg border-black"
        placeholder="Contact"
        value={formData.contact}
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
      <button
        className="bg-yellow-300 p-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-yellow-500"
        // onClick={handleSubmit}
      >
        Proceed to pay
      </button>
    </div>
  );
}
