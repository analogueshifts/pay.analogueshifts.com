"use client";

import { useState, useEffect } from "react";
import { useBanks } from "@/hooks/banks";
import { useWithdrawal } from "@/hooks/withdrawal";
import Grid from "./grid";
import Cookies from "js-cookie";
import HistoryTable from "./history-table";

export default function Overview() {
  const [history, setHistory] = useState(null);
  const [banks, setBanks] = useState(null);
  const [loading, setLoading] = useState(false);

  const { getBanks } = useBanks();
  const { getHistory } = useWithdrawal();

  const token = Cookies.get("analogueshifts");

  useEffect(() => {
    if (token) {
      getHistory({
        setLoading,
        setHistory,
      });
      getBanks({
        setLoading,
        setBanks,
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-6">
      <Grid history={history} banks={banks} />
      <HistoryTable history={history} />
    </div>
  );
}
