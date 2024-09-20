import Link from 'next/link';
import Image from 'next/image';

export default function NavigationPage() {
  return (
    <div className="mt-5">
      {/* Create Payment */}
      <div className="grid grid-cols-9 gap-4">
        <p className="col-span-1">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGA7nerjBgCBfK9VYQAZzlp_XaFr4Njns6w&s"
            className="rounded-full"
          />
        </p>
        <p className="font-bold text-2xl col-span-7 flex justify-items-stretch text-yellow-400">
          <Link href="/resources/payments/createPayments/Page">
            <a>Create Payment</a>
          </Link>
        </p>
      </div>

      {/* Pay a Biller */}
      <div className="grid grid-cols-9 gap-4 mt-4">
        <p className="col-span-1">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGA7nerjBgCBfK9VYQAZzlp_XaFr4Njns6w&s"
            className="rounded-full"
          />
        </p>
        <p className="font-bold text-2xl col-span-7 flex justify-items-stretch text-yellow-400">
          <Link href="/dashboard/resources/payments/makePayments">
            <a>Pay a Biller</a>
          </Link>
        </p>
      </div>

      {/* View Existing Payments */}
      <div className="grid grid-cols-9 gap-4 mt-4">
        <p className="col-span-1">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGA7nerjBgCBfK9VYQAZzlp_XaFr4Njns6w&s"
            className="rounded-full"
          />
        </p>
        <p className="font-bold text-2xl col-span-7 flex justify-items-stretch text-yellow-400">
          <Link href="/dashboard/resources/payments/listOfPayments">
            <a>View Existing Payments</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
