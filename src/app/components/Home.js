import Link from "next/link";

const Home = () => {
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
    </div>
  );
};

export default Home;
