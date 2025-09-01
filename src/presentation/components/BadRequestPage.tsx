"use client"
import Link from "next/link";
import { useNavigation } from "@/presentation/hooks/useNavigation";

const BadRequestPage = () => {
  const { goBack } = useNavigation();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-4">400</h1>
      <p className="text-xl mb-6 text-center text-primary">
        Oops! เราเข้าใจคำขอของคุณไม่ได้ กรุณาลองใหม่อีกครั้ง
      </p>
      <button
        onClick={goBack}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mb-4"
      >
        Go Back
      </button>
      <Link href="/" className="text-red-400 underline">
        กลับไปยังหน้าแรก
      </Link>
    </div>
  );
};

export default BadRequestPage;
