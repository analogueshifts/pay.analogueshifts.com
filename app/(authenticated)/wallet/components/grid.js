"use client";
import { useUser } from "@/contexts/user";
import Image from "next/image";
import Money from "@/public/images/guest-layout/money.svg";
import { Skeleton } from "@/components/ui/skeleton";

export default function Grid({ history, banks }) {
  const { user } = useUser();

  return (
    <div className="w-full grid grid-cols-2 tablet:grid-cols-1 xl:grid-cols-3 gap-3 items-center">
      {user ? (
        <div className="col-span-1 h-[128px] border border-[#EFEFEF] rounded-2xl bg-white py-[17px] px-[25px] flex flex-col gap-[17px]">
          <div className="w-full flex items-center gap-[6px]">
            <Image
              className="min-w-6 min-h-6 tablet:min-w-4 tablet:min-h-4"
              src={Money}
              alt=""
            />{" "}
            <p className="font-medium large:text-lg text-base tablet:text-sm text-[#656565]">
              Account balance
            </p>
          </div>
          <h1 className="text-[#292929] font-bold text-4xl tablet:text-3xl">
            ${user?.balance}
          </h1>
        </div>
      ) : (
        <div className="col-span-1 h-[128px] border border-[#EFEFEF] rounded-2xl bg-white ">
          <Skeleton className="w-full h-full rounded-2xl" />
        </div>
      )}
      {banks ? (
        <div className="col-span-1 h-[128px] border border-[#EFEFEF] rounded-2xl bg-white py-[17px] px-[25px] flex flex-col gap-[17px]">
          <div className="w-full flex items-center gap-[6px]">
            <Image
              className="min-w-6 min-h-6 tablet:min-w-4 tablet:min-h-4"
              src={Money}
              alt=""
            />{" "}
            <p className="font-medium large:text-lg text-base tablet:text-sm text-[#656565]">
              Number of banks
            </p>
          </div>
          <h1 className="text-[#292929] font-bold text-4xl tablet:text-3xl">
            {banks?.length}
          </h1>
        </div>
      ) : (
        <div className="col-span-1 h-[128px] border border-[#EFEFEF] rounded-2xl bg-white ">
          <Skeleton className="w-full h-full rounded-2xl" />
        </div>
      )}
      {history ? (
        <div className="col-span-1 h-[128px] border border-[#EFEFEF] rounded-2xl bg-white py-[17px] px-[25px] flex flex-col gap-[17px]">
          <div className="w-full flex items-center gap-[6px]">
            <Image
              className="min-w-6 min-h-6 tablet:min-w-4 tablet:min-h-4"
              src={Money}
              alt=""
            />{" "}
            <p className="font-medium large:text-lg text-base tablet:text-sm text-[#656565]">
              Number of transactions
            </p>
          </div>
          <h1 className="text-[#292929] font-bold text-4xl tablet:text-3xl">
            {history?.total}
          </h1>
        </div>
      ) : (
        <div className="col-span-1 h-[128px] border border-[#EFEFEF] rounded-2xl bg-white ">
          <Skeleton className="w-full h-full rounded-2xl" />
        </div>
      )}
    </div>
  );
}
