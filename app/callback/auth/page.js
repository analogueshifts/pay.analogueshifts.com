"use client"
import { Suspense } from "react";
import Home from "./components/validate";

export default function Page() {
  return (
    <Suspense fallback={<p></p>}>
        <Home />
    </Suspense>
  );
}