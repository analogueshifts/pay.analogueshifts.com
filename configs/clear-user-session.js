import Cookies from "js-cookie";

export const clearUserSession = () => {
  // Remove any session-related cookies
  Cookies.remove("analogueshifts"); // Example token cookie

  // Optionally, clear localStorage/sessionStorage
  localStorage.clear();
  sessionStorage.clear();
};
