import Link from "next/link";
const FinancialCard = ({ plan }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <h3 className="text-base font-semibold text-gray-800">{plan.name}</h3>
            <p className="text-sm text-gray-600">
                <strong>Target:</strong> Rp {plan.targetAmount.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">
                <strong>Saved:</strong> Rp {plan.savedAmount.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">
                <strong>Deadline:</strong> {new Date(plan.deadline).toLocaleDateString()}
            </p>
            <progress
                className="w-full h-2 rounded-full bg-gray-200 mt-2"
                value={(plan.savedAmount / plan.targetAmount) * 100}
                max="100"
            />
            <p className="text-xs text-gray-500 mt-1">
                {(plan.savedAmount / plan.targetAmount * 100).toFixed(2)}% completed
            </p>
            <Link href={`/financial-plans/${plan.id}`}>
              <p className="text-blue-500 hover:underline">Lihat Detail</p>
            </Link>
        </div>
    );
};

export default FinancialCard;
