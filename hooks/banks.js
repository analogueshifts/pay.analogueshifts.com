import axios from "@/lib/axios";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import { clearUserSession } from "@/configs/clear-user-session";
import { useToast } from "@/contexts/toast";

export const useBanks = () => {
  const router = useRouter();
  const { notifyUser } = useToast();

  const token = Cookies.get("analogueshifts");

  const getBanks = async ({ setLoading, setBanks }) => {
    setLoading(true);
    try {
      const response = await axios.request({
        url: "/tool/bank/accounts",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setLoading(false);
      if (response?.data?.success) {
        setBanks(response.data?.data?.accounts);
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

  const validateAccount = async ({
    setLoading,
    account_number,
    bank_code,
    setAccountName,
  }) => {
    setLoading(true);
    try {
      const response = await axios.request({
        url:
          "/tool/bank/resolve?account_number=" +
          account_number +
          "&bank_code=" +
          bank_code,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setLoading(false);
      if (response?.data?.success) {
        setAccountName(response?.data?.data?.bank_account?.account_name);
      } else {
        setAccountName("");
        notifyUser("error", response?.data?.message, "right");
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
      setAccountName("");
      if (error?.response?.status === 401) {
        clearUserSession();
      }
    }
  };

  const addBank = async ({ setLoading, accountNumber, bank, accountName }) => {
    setLoading(true);
    try {
      const response = await axios.request({
        url: "/tool/bank/account",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
        data: {
          account_name: accountName,
          account_number: accountNumber,
          bank_name: bank.name,
          bank_code: bank.code,
          bank_location: bank.country,
          IFSC: null,
          currency: bank.currency,
          type: bank.type,
        },
      });
      setLoading(false);
      if (response?.data?.success) {
        notifyUser("success", "Bank added successfuly", "right");
        router.push("/banks");
      } else {
        notifyUser("error", response?.data?.message, "right");
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

  return { getBanks, validateAccount, addBank };
};
