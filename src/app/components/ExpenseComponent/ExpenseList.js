import React from 'react'

export default function ExpenseList({ expenses }) {
    return (
        <div className="p-4 h-full overflow-y-auto">
            {expenses.length > 0 ? (
                <ul className="space-y-3">
                    {expenses.map((expense) => (
                        <li
                            key={expense.id}
                            className="flex justify-between items-center border-b pb-2"
                        >
                            <span className="text-gray-700">{expense.name}</span>
                            <span className="text-gray-600">
                                Rp {expense.amount.toLocaleString()}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 text-center mt-4">No expenses available.</p>
            )}
        </div>
    )
}
