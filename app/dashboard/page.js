"use client"
import UserDashboard from './component/TransactionHistory'; // Adjust path if needed

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-yellow-500 mt-5">
        User Dashboard
      </h1>
      <UserDashboard />
    </div>
  );
}
