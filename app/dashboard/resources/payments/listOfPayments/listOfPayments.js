import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PaymentList() {
  const [payments, setPayments] = useState([]);

  // Get Bearer token from the cookie
  const getBearerToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('analogueshifts='))
      ?.split('=')[1];
    return cookieValue || '';
  };

  // Fetch all public payments
  useEffect(() => {
    async function fetchPayments() {
      const token = getBearerToken();
      const response = await fetch('https://api.analogueshifts.com/api/tool/pay/payments', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setPayments(data);
    }
    fetchPayments();
  }, []);

  return (
    <div className="mt-5">
      {payments.map((payment, index) => (
        <div key={index} className="grid grid-cols-9 hover:bg-yellow-200 gap-4 mt-4">
          <p className="col-span-1">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGA7nerjBgCBfK9VYQAZzlp_XaFr4Njns6w&s"
              className="rounded-full"
            />
          </p>
          <p className="font-bold text-2xl col-span-7 flex justify-items-stretch text-yellow-400">
            <a href={`/payment/${payment.id}`}>{payment.title}</a>
          </p>
        </div>
      ))}
    </div>
  );
}
