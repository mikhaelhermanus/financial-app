'use client'
import { useState } from "react";

export default function ExpenseModal({ expenses, onClose }) {

    const [position, setPosition] = useState("bottom"); // bottom, middle, top
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Default ke bulan saat ini

    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const handleDrag = (e) => {
        const dragY = e.touches[0].clientY;

        if (dragY < window.innerHeight / 3) {
            setPosition("top");
        } else if (dragY < window.innerHeight / 1.5) {
            setPosition("middle");
        } else {
            setPosition("bottom");
        }
    };

    const getPositionStyle = () => {
        switch (position) {
            case "top":
                return "top-0 h-screen";
            case "middle":
                return "top-[40vh] h-[60vh]";
            case "bottom":
                return "top-[80vh] h-[20vh]";
            default:
                return "top-[80vh] h-[20vh]";
        }
    };
    return (
        <div
            className={`fixed inset-x-0 bg-white rounded-t-2xl shadow-lg transition-all duration-300 overflow-hidden ${getPositionStyle()}`}
        >
            {/* Drag Indicator */}
            <div
                className="w-12 h-3.5 bg-gray-300 rounded-full mx-auto my-2 cursor-pointer"
                onTouchMove={handleDrag}
            />

            {/* Header */}
            <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-800">Expenses</h2>
            </div>

            <div className="mt-2 flex overflow-x-auto space-x-3 scrollbar-hide">
                {months.map((month, index) => (
                    <button
                        key={month}
                        className={`px-4 py-2 text-sm rounded-lg ${selectedMonth === index
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-600"
                            }`}
                        onClick={() => setSelectedMonth(index)}
                    >
                        {month}
                    </button>
                ))}
            </div>

            {/* Scrollable Content */}
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
        </div>
    );
}
