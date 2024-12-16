'use client'
import { useRouter } from 'next/navigation';

export default function Header({ title }) {
  const router = useRouter();

  return (
    <div className="flex items-center p-4 bg-white shadow-md">
      <button
        onClick={() => router.back()}
        className="p-2 rounded-full hover:bg-gray-100"
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <h1 className="ml-4 text-lg font-semibold">{title}</h1>
    </div>
  );
}
