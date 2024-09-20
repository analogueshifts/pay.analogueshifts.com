import { useRouter } from 'next/router';

export default function PaymentDetails() {
  const router = useRouter();

  const paymentDetails = {
    title: 'Lorem Ipsum',
    description: 'Lorem Ipsum',
    amount: 5000,
    min_amount: 5000,
    max_amount: 5000,
    limit: 1,
    validity_period: '2024-09-18',
  };

  // Get Bearer token from the cookie
  const getBearerToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('analogueshifts='))
      ?.split('=')[1];
    return cookieValue || '';
  };

  // Handle End Payment (DELETE request)
  const handleEndPayment = async () => {
    const token = getBearerToken();

    const response = await fetch('https://api.analogueshifts.com/api/tool/pay/9d312d2a-5738-33d2-9b10-72ccc46ab58c', {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Payment ended successfully!');
    } else {
      const error = await response.json();
      alert('Error ending payment: ' + error.message);
    }
  };

  // Redirect to payment page
  const proceedToPay = () => {
    // Replace the URL with your actual payment page link
    router.push('@/components/resources/payments/makePayment');
  };

  // Redirect to edit page with query parameters
  const editPayment = () => {
    router.push({
      pathname: '@/components/resources/payments/createPayment',
      query: {
        title: paymentDetails.title,
        description: paymentDetails.description,
        amount: paymentDetails.amount,
        min_amount: paymentDetails.min_amount,
        max_amount: paymentDetails.max_amount,
        limit: paymentDetails.limit,
        validity_period: paymentDetails.validity_period,
      },
    });
  };

  return (
    <div className="mt-5">
      <div className="mb-5 space-y-4">
        <p>
          <span className="font-bold text-[20px]">Title:</span> {paymentDetails.title}
        </p>
        <p>
          <span className="font-bold text-[20px]">Description:</span> {paymentDetails.description}
        </p>
        <p>
          <span className="font-bold text-[20px]">Amount:</span> {paymentDetails.amount} NGN
        </p>
        <p>
          <span className="font-bold text-[20px]">Min-Amount:</span> {paymentDetails.min_amount} NGN
        </p>
        <p>
          <span className="font-bold text-[20px]">Max-Amount:</span> {paymentDetails.max_amount} NGN
        </p>
        <p>
          <span className="font-bold text-[20px]">Limit:</span> {paymentDetails.limit}
        </p>
        <p>
          <span className="font-bold text-[20px]">Validity-Period:</span> {paymentDetails.validity_period}
        </p>
      </div>
      <div className="space-x-16">
        <button
          className="bg-yellow-300 p-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-yellow-500"
          onClick={proceedToPay}
        >
          Proceed to pay
        </button>

        <button
          className="bg-yellow-300 p-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-yellow-500"
          onClick={editPayment}
        >
          Edit Payment
        </button>

        <button
          className="bg-red-600 p-3 rounded-full font-semibold hover:bg-red-400 hover:text-red-500"
          onClick={handleEndPayment}
        >
          End Payments
        </button>
      </div>
    </div>
  );
}
