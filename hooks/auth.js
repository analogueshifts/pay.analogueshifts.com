import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user";

import Cookies from "js-cookie";
import { clearUserSession } from "@/configs/clear-user-session";
import { useToast } from "@/contexts/toast";

export const useAuth = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const { notifyUser } = useToast();

  const token = Cookies.get("analogueshifts");

  const validateApp = async ({ appToken }) => {
    let RedirectionLink = Cookies.get("RedirectionLink");
    try {
      const response = await axios.request({
        url: "/app/callback/" + appToken,
        method: "GET",
      });
      if (response.data?.success) {
        Cookies.set("analogueshifts", response.data?.data.token);
        notifyUser("success", "success");
        window.location.href = RedirectionLink || "/";
      }
    } catch (error) {
      notifyUser("error", error.messsage || "Invalid Request");
      router.push(RedirectionLink || "/");
    }
  };

  const getUser = async ({ setLoading, layout }) => {
    setLoading(true);
    try {
      const response = await axios.request({
        url: "/user",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setUser(response.data?.user);
      console.log(response.data.user);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error?.response?.status === 401 && layout !== "guest") {
        clearUserSession();
      }
    }
  };

  const logout = async ({ setLoading }) => {
    Cookies.remove("analogueshifts");
    window.location.href = "/";
  };

  return {
    validateApp,
    logout,
    getUser,
  };
};
