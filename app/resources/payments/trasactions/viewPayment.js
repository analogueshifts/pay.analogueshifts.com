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

  // Handle End Payment (dummy function)
  const handleEndPayment = () => {
    alert('Payment ended successfully!');
  };

  // Redirect to payment page (dummy function)
  const proceedToPay = () => {
    alert('Redirecting to the payment page...');
  };

  // Redirect to edit page with query parameters (dummy function)
  const editPayment = () => {
    alert('Redirecting to the edit payment page...');
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
