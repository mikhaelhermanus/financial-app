import React from 'react'
import FinancialCard from '../FinancialCard'


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

export default function FinancialPlan() {
  return (
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
  )
}
