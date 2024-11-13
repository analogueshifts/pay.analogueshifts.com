import { useEffect, useState } from "react";
import Status from "./status";
import WithdrawalDetails from "./withdrawal-details";
import { Skeleton } from "@/components/ui/skeleton";

export default function HistoryTable({ history }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (history) {
      setData(history?.data);
    }
  }, [history]);

  return (
    <div className="w-full h-max border overflow-hidden border-[#EFEFEF] bg-white rounded-2xl">
      {history ? (
        <>
          {" "}
          <div className="w-full large:py-8 py-7 tablet:py-5 bg-white flex items-center px-10">
            <h3 className="text-[#292929] font-semibold large:text-xl text-[17px] tablet:text-xs">
              Your withdrawal history
            </h3>
          </div>
          {history?.total > 0 ? (
            <div className="w-full table-scrollbar overflow-x-auto">
              <div className="h-max  w-full tablet:min-w-[950px] min-w-[1100px] flex flex-col">
                <div className="w-full bg-[#F8FBFC] h-[49px] px-10 grid items-center grid-cols-8 gap-3">
                  <p className="text-[#656565] font-medium large:text-lg text-sm tablet:text-xs">
                    Currency
                  </p>
                  <p className="text-[#656565] font-medium large:text-lg text-sm tablet:text-xs">
                    Amount
                  </p>
                  <p className="text-[#656565] font-medium large:text-lg text-sm tablet:text-xs">
                    Charges
                  </p>
                  <p className="text-[#656565] font-medium large:text-lg text-sm tablet:text-xs">
                    Status
                  </p>
                  <p className="text-[#656565] col-span-2 font-medium large:text-lg text-sm tablet:text-xs">
                    Reference
                  </p>
                  <p className="text-[#656565] font-medium large:text-lg text-sm tablet:text-xs">
                    Action
                  </p>
                </div>
                {data?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full border-b bg-white large:py-8 py-7 tablet:py-5 h-max  px-10 grid items-center grid-cols-8 gap-3"
                    >
                      <p className="text-[#292929] font-medium large:text-lg text-sm tablet:text-xs">
                        {item?.currency}
                      </p>
                      <p className="text-[#292929] font-medium large:text-lg text-sm tablet:text-xs">
                        {item?.amount}
                      </p>
                      <p className="text-[#292929] font-medium large:text-lg text-sm tablet:text-xs">
                        {item?.charges}
                      </p>

                      <Status status={item?.status} />
                      <p className="text-[#292929] col-span-2 font-medium large:text-lg text-sm tablet:text-xs">
                        {item?.reference}
                      </p>
                      <WithdrawalDetails />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="w-full h-32 flex justify-center items-center">
              <h3 className="text-[#292929] font-semibold large:text-lg text-sm tablet:text-[13px]">
                No record
              </h3>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-[128px] rounded-2xl">
          <Skeleton className={"w-full h-full"} />
        </div>
      )}
    </div>
  );
}
