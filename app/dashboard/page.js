"use client"
import React, { useState, useEffect } from 'react';

const DashboardOverview = () => {
  // Simulated user data
  const [tokenBalance, setTokenBalance] = useState(520); // in tokens
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Purchase', amount: 100, date: '2024-09-15' },
    { id: 2, type: 'Sale', amount: 300, date: '2024-09-13' },
    { id: 3, type: 'Purchase', amount: 50, date: '2024-09-12' }
  ]);

  useEffect(() => {
    // Optionally, fetch live data here
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

        {/* Token Balance Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Token Balance</h2>
          <p className="text-4xl font-bold text-green-600">{tokenBalance} Tokens</p>
        </div>

        {/* Recent Transactions Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <ul className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="py-4 flex justify-between">
                <div>
                  <p className="text-lg font-medium">
                    {transaction.type}: <span className="text-green-600">{transaction.amount} Tokens</span>
                  </p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <span
                  className={`${
                    transaction.type === 'Purchase'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  } text-sm px-2 py-1 rounded-full`}
                >
                  {transaction.type}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Buy Energy</h3>
            <p className="text-gray-600">Browse energy listings and buy tokens from producers.</p>
            <a
              href="/dashboard/consumer/browse-energy"
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Go to Marketplace
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Sell Energy</h3>
            <p className="text-gray-600">List your energy for sale and set your price.</p>
            <a
              href="/dashboard/producer/input-energy"
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              List Energy
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
            <p className="text-gray-600">Update your profile details and account settings.</p>
            <a
              href="/profile/settings"
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Update Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
