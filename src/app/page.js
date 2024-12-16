import Image from "next/image";
// import Home from "./components/Home";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Welcome to Financial Planner
        </h1>
        <p className="text-white text-sm sm:text-lg mb-6">
          Manage your financial goals easily and effectively.
        </p>
        <Link href="/financial-plans">
          <p className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100">
            View Financial Plans
          </p>
        </Link>
      </div>
    </div>

    
  //   <div className="min-h-screen flex flex-col justify-between bg-gray-100">
  //   {/* Slide Cards */}
  //   <div className="py-6 px-4">
  //     <h1 className="text-xl font-bold mb-4">My Finances</h1>
  //     <div className="flex space-x-4 overflow-x-scroll scrollbar-hide md:overflow-auto md:space-x-6 md:flex-wrap">
  //       <div className="w-64 bg-white rounded-lg shadow-md p-4 md:w-80">
  //         <h2 className="text-lg font-semibold">Saved Money</h2>
  //         <p className="text-gray-600 mt-2">$10,000</p>
  //       </div>
  //       <div className="w-64 bg-white rounded-lg shadow-md p-4 md:w-80">
  //         <h2 className="text-lg font-semibold">Financial Target</h2>
  //         <p className="text-gray-600 mt-2">80% of $50,000</p>
  //       </div>
  //     </div>
  //   </div>

  //   {/* Expense List */}
  //   <div className="bg-white p-4 rounded-t-2xl shadow-lg md:mx-auto md:w-1/2">
  //     <h2 className="text-lg font-semibold mb-4">Expenses</h2>
  //     <ul>
  //       <li className="flex justify-between py-2 border-b">
  //         <span>Groceries</span>
  //         <span className="font-bold">$150</span>
  //       </li>
  //       <li className="flex justify-between py-2 border-b">
  //         <span>Transport</span>
  //         <span className="font-bold">$50</span>
  //       </li>
  //       <li className="flex justify-between py-2">
  //         <span>Utilities</span>
  //         <span className="font-bold">$120</span>
  //       </li>
  //     </ul>
  //   </div>

  //   {/* Bottom Navigation */}
  //   <div className="fixed bottom-0 w-full bg-white border-t shadow-md md:hidden">
  //     <div className="flex justify-around py-4">
  //       <button className="flex flex-col items-center">
  //         <span>🏠</span>
  //         <span className="text-xs mt-1">Home</span>
  //       </button>
  //       <button className="flex flex-col items-center">
  //         <span>📊</span>
  //         <span className="text-xs mt-1">Financial</span>
  //       </button>
  //       <button className="flex flex-col items-center">
  //         <span>👤</span>
  //         <span className="text-xs mt-1">Profile</span>
  //       </button>
  //     </div>
  //   </div>
  // </div>
  );
}
