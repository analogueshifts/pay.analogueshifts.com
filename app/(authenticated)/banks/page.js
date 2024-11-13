import BanksTable from "./components/banks-table";

export default function Page() {
  return (
    <main className="w-full flex justify-center">
      <div className="w-[calc(100%-48px)] max-w-[900px]">
        <BanksTable />
      </div>
    </main>
  );
}
