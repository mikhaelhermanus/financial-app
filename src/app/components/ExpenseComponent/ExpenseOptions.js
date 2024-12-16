import React, {useState} from 'react'

export default function ExpenseOptions() {
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
    return (
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
    )
}
