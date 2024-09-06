"use client";
import axios from "@/lib/axios";
import Cookies from "js-cookie";
import { clearUserSession } from "@/configs/clear-user-session";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user";
import { useToast } from "@/contexts/toast";

export const useAuth = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const { setMessage, setToast, setPosition } = useToast();

  const notifyUser = (toast, message, position) => {
    setToast(toast);
    setMessage(message);
    setPosition(position);

    setTimeout(() => {
      setMessage("");
      setToast("");
      setPosition("right");
    }, 3000);
  };

  const validateApp = async ({ tokenFromUrl }) => {
    let RedirectionLink = Cookies.get("RedirectionLink");
    try {
      if (tokenFromUrl) {
        const response = await axios.get("/app/callback/" + tokenFromUrl);

        if (response.data?.success) {
          Cookies.set("analogueshifts", response.data?.data.token);
          getUser({
            layout: "authenticated",
            setLoading: (v) => {},
            token: response.data?.data.token || "",
          });
          notifyUser("success", "Validation successful", "right");
          window.location.href = RedirectionLink || "/";
        }
      }
    } catch (error) {
      notifyUser("error", error.message || "Invalid Request", "right");
      router.push(RedirectionLink || "/");
      console.log(error);
    }
  };

  const getUser = async ({ setLoading, layout, token }) => {
    setLoading(true);
    try {
      const response = await axios.get("/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setUser(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error?.response?.status === 401 && layout !== "guest") {
        clearUserSession();
      }
    }
  };

  const logout = () => {
    Cookies.remove("analogueshifts");
    clearUserSession();
    router.push("/");
  };

  return {
    validateApp,
    getUser,
    logout,
    notifyUser,
  };
};
