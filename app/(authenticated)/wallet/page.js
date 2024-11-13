import Overview from "./components/overview";

export default function Page() {
  return (
    <main className="w-full flex justify-center">
      <div className="w-[calc(100%-48px)] max-w-[900px]">
        <Overview />
      </div>
    </main>
  );
}
