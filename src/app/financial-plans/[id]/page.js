import React from 'react'
import Header from '@/app/components/Header'
const financialPlan =
{
  id: 1,
  name: "Tabungan Pernikahan",
  target_amount: 100000000,
  saved_amount: 25000000,
  deadline: "2025-12-31",
}



export default function financialPlanDetail() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Detail Financial Plan" />

      <div className="p-4 max-w-4xl mx-auto">
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">{financialPlan.name}</h2>
          <div className="space-y-2">
            <p>
              <strong>Target Jumlah:</strong> Rp{' '}
              {financialPlan.target_amount.toLocaleString()}
            </p>
            <p>
              <strong>Jumlah Tersimpan:</strong> Rp{' '}
              {financialPlan.saved_amount.toLocaleString()}
            </p>
            <p>
              <strong>Deadline:</strong>{' '}
              {financialPlan.deadline
                ? new Date(financialPlan.deadline).toLocaleDateString()
                : 'Tidak ada deadline'}
            </p>
          </div>
        </div>

        {/* Input untuk menabung */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Tambah Tabungan</h3>
          <form>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Jumlah
            </label>
            <input
              type="number"
              placeholder="Masukkan jumlah tabungan"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
