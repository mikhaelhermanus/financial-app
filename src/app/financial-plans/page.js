'use client'
import { useState, useEffect } from "react";
import FinancialCard from "../components/FinancialCard";
import ExpenseModal from "../components/ExpenseModal";
const dummyFinancialPlans = [
  {
    id: 1,
    name: "Tabungan Pernikahan",
    targetAmount: 100000000,
    savedAmount: 25000000,
    deadline: "2025-12-31",
  },
  {
    id: 2,
    name: "Tabungan S2",
    targetAmount: 75000000,
    savedAmount: 15000000,
    deadline: "2024-08-01",
  },
  {
    id: 3,
    name: "Dana Darurat",
    targetAmount: 50000000,
    savedAmount: 30000000,
    deadline: "2024-12-31",
  },
];

const expenses = [
  { id: 1, name: "Makan Siang", amount: 50000 },
  { id: 2, name: "Transportasi", amount: 20000 },
  { id: 3, name: "Langganan Netflix", amount: 150000 },
];

const FinancialPlans = () => {
  const financialPlans = dummyFinancialPlans;
  // const [financialPlans, setFinancialPlans] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/financial-plans", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         const data = await response.json();
//         setFinancialPlans(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to fetch financial plans:", error);
//         setLoading(false);
//       }
//     };

//     fetchPlans();
//   }, []);

//   if (loading) {
//     return <div className="text-center mt-20 text-gray-700">Loading...</div>;
//   }

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="py-4 px-6 bg-white shadow-md">
      <h1 className="text-xl font-bold text-gray-800">Financial Dashboard</h1>
    </header>

    {/* Financial Plans Slider */}
    <section className="mt-6 px-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Financial Plans</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {dummyFinancialPlans.map((plan) => (
          <div key={plan.id} className="min-w-[280px]">
            <FinancialCard plan={plan} />
          </div>
        ))}
      </div>
    </section>
    {isModalOpen && (
        <ExpenseModal
          expenses={expenses}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default FinancialPlans;
