'use client'
import { useState } from "react";
import ExpenseOptions from "./ExpenseComponent/ExpenseOptions";
import ExpenseList from "./ExpenseComponent/ExpenseList";
export default function ExpenseModal({ expenses, onClose }) {

    const [position, setPosition] = useState("bottom"); // bottom, middle, top


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

            <ExpenseOptions />
            {/* Scrollable Content */}
            <ExpenseList expenses={expenses} />
        </div>
    );
}
