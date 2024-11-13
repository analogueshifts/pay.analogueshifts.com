import { Check, X } from "lucide-react";

export default function Status({ status, bank }) {
  return (
    <div className="col-span-2">
      {!bank ? (
        <div
          className={`w-[115px] h-8 rounded-full flex items-center px-4 gap-1 border border-dashed ${
            status === "success"
              ? "border-[#00995152] bg-[#4CAF5014] text-[#1D9C53]"
              : status === "pending"
              ? "bg-[#FFB80014] border-[#FFB80052] text-[#F9BB26]"
              : "border-[#FF180052] bg-[#FF180014] text-[#FF1800]"
          }`}
        >
          {status === "success" && <Check className="h-max large:w-6 w-4" />}
          {status === "failed" && <X className="h-max large:w-6 w-4" />}
          {status === "pending" && (
            <div className="bg-[#FFB800] w-2 h-2 rounded-full"></div>
          )}
          <p className="large:text-base text-[13px] tablet:text-[11px] font-medium">
            {status === "success"
              ? "Paid"
              : status === "failed"
              ? "Failed"
              : "Pending"}
          </p>
        </div>
      ) : (
        <div
          className={`w-[100px] justify-center h-8 rounded-full flex items-center px-4 gap-1 border border-dashed ${
            status
              ? "border-[#00995152] bg-[#4CAF5014] text-[#1D9C53]"
              : "border-[#FF180052] bg-[#FF180014] text-[#FF1800]"
          }`}
        >
          <p className="large:text-base text-[13px] tablet:text-[11px] font-medium">
            {status ? "Active" : "Not Active"}
          </p>
        </div>
      )}
    </div>
  );
}
