"use client";
import { useEffect, useState } from "react";
import WithdrawalDetails from "../../wallet/components/withdrawal-details";
import { Skeleton } from "@/components/ui/skeleton";
import { useBanks } from "@/hooks/banks";
import Cookies from "js-cookie";
import Status from "../../wallet/components/status";
import { Trash } from "lucide-react";

export default function BanksTable() {
  const { getBanks } = useBanks();
  const [data, setData] = useState(null);
  const token = Cookies.get("analogueshifts");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      getBanks({
        setLoading,
        setBanks: setData,
      });
    }
  }, []);

  return (
    <div className="w-full h-max border overflow-hidden border-[#EFEFEF] bg-white rounded-2xl">
      {data ? (
        <>
          {" "}
          <div className="w-full large:py-8 py-7 tablet:py-5 bg-white flex items-center px-10">
            <h3 className="text-[#292929] font-semibold large:text-xl text-[17px] tablet:text-[15px]">
              List of Banks
            </h3>
          </div>
          {data?.length > 0 ? (
            <div className="w-full table-scrollbar overflow-x-auto">
              <div className="h-max  w-full tablet:min-w-[950px] min-w-[1100px] flex flex-col">
                <div className="w-full bg-[#F8FBFC] h-[49px] px-10 grid items-center grid-cols-13 gap-3">
                  <p className="text-[#656565] col-span-3 font-medium large:text-lg text-sm tablet:text-xs">
                    Account Name
                  </p>
                  <p className="text-[#656565] col-span-2 font-medium large:text-lg text-sm tablet:text-xs">
                    Account Number
                  </p>
                  <p className="text-[#656565] font-medium col-span-3 large:text-lg text-sm tablet:text-xs">
                    Bank Name
                  </p>
                  <p className="text-[#656565] col-span-2 font-medium large:text-lg text-sm tablet:text-xs">
                    Date added
                  </p>
                  <p className="text-[#656565] col-span-2 font-medium large:text-lg text-sm tablet:text-xs">
                    Status
                  </p>
                  <p className="text-[#656565] font-medium large:text-lg text-sm tablet:text-xs">
                    Action
                  </p>
                </div>
                {data?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full border-b bg-white large:py-8 py-7 tablet:py-5 h-max  px-10 grid items-center grid-cols-13 gap-3"
                    >
                      <p className="text-[#292929] font-medium col-span-3 large:text-lg text-sm tablet:text-xs">
                        {item?.account_name}
                      </p>
                      <p className="text-[#292929] font-medium col-span-2 large:text-lg text-sm tablet:text-xs">
                        {item?.account_number}
                      </p>
                      <p className="text-[#292929] font-medium col-span-3 large:text-lg text-sm tablet:text-xs">
                        {item?.bank_name}
                      </p>

                      <p className="text-[#292929] col-span-2 font-medium large:text-lg text-sm tablet:text-xs">
                        {new Date(item?.created_at)?.toLocaleDateString()}
                      </p>
                      <Status bank={true} status={item?.is_active} />
                      <button className="bg-none outline-none flex font-medium large:text-lg text-sm tablet:text-xs items-center gap-1 text-red-600">
                        <Trash className=" w-4 h-4" /> Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="w-full h-32 flex justify-center items-center">
              <h3 className="text-[#292929] font-semibold large:text-lg text-sm tablet:text-[13px]">
                No Bank Added
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
