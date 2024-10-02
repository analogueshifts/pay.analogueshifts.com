import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import NavigationPage from '@/app/resources/payments/page';

export default function UserDashboard() {
  const [balanceVisible, setBalanceVisible] = useState(false); // Balance visibility
  const [activeTab, setActiveTab] = useState('transactionHistory'); // Manage active tab

  // Placeholder for dynamic data
  const user = {
    name: "Aleshinloye Olamilekan",
    walletId: "80xxxxx192",
    walletBalance: "50,000 NGN", // Replace with actual balance data
  };

  // Toggle wallet balance visibility
  const toggleBalanceVisibility = () => {
    setBalanceVisible(!balanceVisible);
  };

  // Conditional rendering based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case 'transactionHistory':
        return <TransactionHistory />;
      case 'payments':
        return <Payments />;
      case 'subscriptions':
        return <Subscriptions />;
      default:
        return <TransactionHistory />;
    }
  };

  return (
    <div className="m-6 mt-11">
      {/* User Information */}
      <div className="border-b-2 border-dashed border-slate-400 pb-3">
        <div className="m-2 mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGA7nerjBgCBfK9VYQAZzlp_XaFr4Njns6w&s"
            alt="User Avatar"
            className="w-11 rounded-full"
          />
          <p className="text-yellow-400 font-bold text-[30px]">
            {user.name}
          </p>
          <p className="text-yellow-400 font-bold text-[25px]">
            {user.walletId}
          </p>

          {/* Wallet Balance with Toggle */}
          <div className="flex items-center">
            <p className="text-black font-bold text-[20px]">
              Wallet Balance: {balanceVisible ? user.walletBalance : '•••••••'}
            </p>
            <button onClick={toggleBalanceVisibility} className="ml-2">
              {balanceVisible ? (
                <FaEyeSlash className="text-gray-500" /> // Eye-slash for hidden
              ) : (
                <FaEye className="text-gray-500" /> // Eye for visible
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-yellow-300 flex justify-between items-center w-full mt-4">
        <ul className="flex items-center gap-4">
          <li className={`hover:text-yellow-500 ${activeTab === 'transactionHistory' ? 'text-yellow-600' : ''}`}>
            <button onClick={() => setActiveTab('transactionHistory')}>
              Transaction History
            </button>
          </li>
          <li className={`hover:text-yellow-500 ${activeTab === 'payments' ? 'text-yellow-600' : ''}`}>
            <button onClick={() => setActiveTab('payments')}>
              Payments
            </button>
          </li>
          <li className={`hover:text-yellow-500 ${activeTab === 'subscriptions' ? 'text-yellow-600' : ''}`}>
            <button onClick={() => setActiveTab('subscriptions')}>
              Subscriptions
            </button>
          </li>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="mt-5">
        {renderContent()}
      </div>
    </div>
  );
}

// Components for the different sections (replace with actual content)
function TransactionHistory() {
  return (
    <NavigationPage />
  );
}

function Payments() {
  return (
    <NavigationPage />
  );
}

function Subscriptions() {
  return (
    <NavigationPage />
  );
}
