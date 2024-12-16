'use client'
import { useState, useEffect } from "react";
import FinancialCard from "../components/FinancialCard";
import ExpenseModal from "../components/ExpenseModal";
import FinancialPlan from "../components/FinancialPlansComponent/FinancialPlan";

const expenses = [
  { id: 1, name: "Makan Siang", amount: 50000 },
  { id: 2, name: "Transportasi", amount: 20000 },
  { id: 3, name: "Langganan Netflix", amount: 150000 },
];

const FinancialPlans = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="py-4 px-6 bg-white shadow-md">
      <h1 className="text-xl font-bold text-gray-800">Financial Dashboard</h1>
    </header>

    {/* Financial Plans Slider */}
   <FinancialPlan/>
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
