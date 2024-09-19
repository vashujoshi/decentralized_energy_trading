"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HomePage = () => {
  // Simulated dynamic data
  const [energyTraded, setEnergyTraded] = useState(120000); // in kWh
  const [carbonOffset, setCarbonOffset] = useState(5000); // in tons
  const [tokenPrice, setTokenPrice] = useState(0.05); // in USD
  const [energyPrice, setEnergyPrice] = useState(0.12); // in USD/kWh

  useEffect(() => {
    // Simulating live data updates
    const interval = setInterval(() => {
      setEnergyTraded((prev) => prev + Math.floor(Math.random() * 100));
      setCarbonOffset((prev) => prev + Math.floor(Math.random() * 10));
      setTokenPrice((prev) => (Math.random() * 0.01 + 0.05).toFixed(4));
      setEnergyPrice((prev) => (Math.random() * 0.02 + 0.12).toFixed(4));
    }, 5000); // Updates every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Powering a Greener Future</h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">Buy and sell renewable energy seamlessly. Empower the grid of tomorrow.</p>
          <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            {/* Register as Consumer */}
            <Link href="/auth/register" className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-200 w-full sm:w-auto text-center block">
              Register as Consumer
            </Link>
            {/* Register as Producer */}
            <Link href="/auth/register" className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-200 w-full sm:w-auto text-center block">
              Register as Producer
            </Link>
          </div>
        </div>
      </section>

       {/* Features Section */}
       <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl">Decentralized Trading</h3>
              <p className="mt-2">Peer-to-peer energy trading with no intermediaries.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl">Blockchain Security</h3>
              <p className="mt-2">Transparency and security with blockchain technology.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl">Real-Time Tracking</h3>
              <p className="mt-2">Monitor energy production and consumption in real time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl">Sustainability</h3>
              <p className="mt-2">Reduce carbon footprint with renewable energy.</p>
            </div>
          </div>
        </div>
      </section>

 {/* How It Works Section */}
 <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl">Step 1</h3>
              <p className="mt-2">Producers upload energy data.</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl">Step 2</h3>
              <p className="mt-2">Consumers browse and buy energy tokens.</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl">Step 3</h3>
              <p className="mt-2">Secure blockchain transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Energy Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Platform Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Total Energy Traded</h3>
              <p className="text-4xl font-bold">{energyTraded} kWh</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Carbon Offset</h3>
              <p className="text-4xl font-bold">{carbonOffset} tons</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Current Token Price</h3>
              <p className="text-4xl font-bold">${tokenPrice} / token</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Current Energy Price</h3>
              <p className="text-4xl font-bold">${energyPrice} / kWh</p>
            </div>
          </div>
        </div>
      </section>


      {/* Live Pricing Widget */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Live Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Current Token Value</h3>
              <p className="text-5xl font-bold">${tokenPrice}</p>
              <span className="text-sm text-gray-500">Updated every 5 seconds</span>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Energy Price</h3>
              <p className="text-5xl font-bold">${energyPrice} / kWh</p>
              <span className="text-sm text-gray-500">Updated every 5 seconds</span>
            </div>
          </div>
        </div>
      </section>

   {/* CTA Banner */}
   <section className="bg-green-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Join the decentralized energy revolution today!</h2>
          <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <button className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-200 w-full sm:w-auto">
              Register Now
            </button>
          </div>
        </div>
      </section>



      {/* Footer (Optional) */}
      <footer className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Decentralized Energy Trading Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
