import axios from "@/lib/axios";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import { clearUserSession } from "@/configs/clear-user-session";
import { useToast } from "@/contexts/toast";

export const useWithdrawal = () => {
  const router = useRouter();
  const { notifyUser } = useToast();

  const token = Cookies.get("analogueshifts");

  const getHistory = async ({ setLoading, setHistory }) => {
    setLoading(true);
    try {
      const response = await axios.request({
        url: "/tool/bank/withdraw/history",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setLoading(false);
      if (response?.data?.success) {
        setHistory(response.data?.data?.history);
      }
    } catch (error) {
      setLoading(false);
      notifyUser(
        "error",
        error?.response?.data?.message ||
          error?.response?.data?.data?.message ||
          error?.message ||
          "Something went wrong",
        "right"
      );
      if (error?.response?.status === 401) {
        clearUserSession();
      }
    }
  };

  return { getHistory };
};
