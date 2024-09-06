"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/hooks/auth"; // Import useAuth hook
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const { validateApp } = useAuth(); // Destructure methods from useAuth
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const tokenFromUrl = searchParams.get("token");

  useEffect(() => {
    validateApp({ tokenFromUrl }); // Validate app on mount
  }, []);

  return <div>{loading ? <p>Loading...</p> : <p>Welcome back!</p>}</div>;
}
