import { redirect } from 'next/navigation';
// import Home from "./components/Home";
import Link from "next/link";
export default function Home() {
  redirect('/login');
  // return (
  //   <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center px-4">
  //     <div className="text-center">
  //       <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
  //         Welcome to Financial Planner
  //       </h1>
  //       <p className="text-white text-sm sm:text-lg mb-6">
  //         Manage your financial goals easily and effectively.
  //       </p>
  //       <Link href="/financial-plans">
  //         <p className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100">
  //           View Financial Plans
  //         </p>
  //       </Link>
  //     </div>
  //   </div>
  // );
}
