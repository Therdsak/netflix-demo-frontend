"use client";
import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goHome = () => {
    router.push("/");
  };

  return {
    goBack,
    goHome,
  };
};
