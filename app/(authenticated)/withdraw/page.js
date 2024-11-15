import Form from "./components/form";

export default function Page() {
  return (
    <main className="w-full flex justify-center">
      <div className="large:w-[780px] w-[70%] tablet:w-[calc(100%-48px)] flex flex-col">
        <h2 className="large:text-4xl text-3xl font-bold text-shadowDark">
          Withdraw funds
        </h2>
        <p className="large:leading-[64px] text-sm mt-2 large:mt-0 font-normal large:text-lg text-neutral200 mb-6">
          Withdraw money to your account. Don&lsquo;t have an account? go to Add
          Bank now to add one.
        </p>
        <Form />
      </div>
    </main>
  );
}
