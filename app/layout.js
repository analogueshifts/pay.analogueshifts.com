import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/contexts/user";
import { ToastProvider } from "@/contexts/toast";
import ToastMessage from "@/components/application/toast-message";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "AnalogueShifts Payment Gateway",
  description: "AnalogueShifts Payment Gateway",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        property="og:image"
        content="https://pay.analogueshifts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpay.3200bbd6.png&w=3840&q=75"
      />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://pay.analogueshifts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.79a82f19.png&w=1080&q=75"
      />
      <body className={plusJakartaSans.className}>
        <UserProvider>
          <ToastProvider>
            <ToastMessage />
            {children}
          </ToastProvider>
        </UserProvider>
      </body>
    </html>
  );
}
