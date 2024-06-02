"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PageRoot() {
  const router = useRouter();
  const currentPathname = usePathname();

  useEffect(() => {
    const lastVisitedPathname = localStorage.getItem("lastVisitedPathname");

    if (lastVisitedPathname === currentPathname) {
      localStorage.removeItem("lastVisitedPathname");
      router.push("/home");
    } else {
      localStorage.setItem("lastVisitedPathname", currentPathname);
      router.push(currentPathname);
    }
  }, []);

  return <></>;
}
