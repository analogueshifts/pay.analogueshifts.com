import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarMenuLink({ item, click }) {
  const pathname = usePathname();

  // This function will be used to determine if the menu is active
  const active = () => {
    return pathname === item.path;
  };

  return (
    <Link
      href={item.path}
      onClick={click}
      className={`w-full large:h-16 h-12 large:rounded-3xl rounded-2xl flex items-center gap-3 large:gap-[21px] px-[23px] ${
        active() ? "bg-amber/10" : "bg-transparent"
      }`}
    >
      <div className="h-4 w-4 large:h-6 large:w-6">
        <item.icon size={"100%"} color={active() ? "#FFB800" : "#7C7C7C"} />
      </div>
      <p
        className={`large:text-lg text-sm font-normal ${
          active() ? "text-amber" : "text-neutral200 truncate"
        }`}
      >
        {item.title}
      </p>
    </Link>
  );
}
