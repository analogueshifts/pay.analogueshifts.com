import { Suspense } from "react";
import Dashboard from "./components/validate";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}
