import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function PaymentDetail() {
  const router = useRouter();
  const { paymentId } = router.query;
  const [payment, setPayment] = useState(null);

  // Get Bearer token from the cookie
  const getBearerToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('analogueshifts='))
      ?.split('=')[1];
    return cookieValue || '';
  };

  // Fetch the individual payment data
  useEffect(() => {
    async function fetchPaymentDetail() {
      const token = getBearerToken();
      const response = await fetch(`https://api.analogueshifts.com/api/tool/pay/${paymentId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setPayment(data);
    }

    if (paymentId) {
      fetchPaymentDetail();
    }
  }, [paymentId]);

  if (!payment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-5">
      <h1 className="text-3xl font-bold text-yellow-400">Payment Detail</h1>
      <p><strong>Title:</strong> {payment.title}</p>
      <p><strong>Description:</strong> {payment.description}</p>
      <p><strong>Amount:</strong> {payment.amount} NGN</p>
      <p><strong>Min Amount:</strong> {payment.min_amount} NGN</p>
      <p><strong>Max Amount:</strong> {payment.max_amount} NGN</p>
      <p><strong>Limit:</strong> {payment.reoccurring_limit}</p>
      <p><strong>Valid Until:</strong> {new Date(payment.valid_to).toLocaleDateString()}</p>
    </div>
  );
}
