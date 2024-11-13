import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileDropdown({ user, handleLogout }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="[&[data-state=open]>img]:rotate-180 [&[data-state=closed]>img]:rotate-0 duration-200 flex h-10 items-center outline-none focus-visible:outline-none ">
        <div className="w-10 mr-2 relative h-10 rounded-full  flex items-center justify-center">
          <Avatar className="w-full h-full">
            <AvatarImage
              className="object-cover"
              src={user?.user_profile?.avatar}
              alt="Profile"
            />
            <AvatarFallback className="bg-tremor-background-darkYellow text-white text-sm font-bold ">
              {user?.email.slice(0, 1)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="bg-cyangreen w-2.5 h-2.5 rounded-full absolute left-[27px] top-[30px]"></div>
        </div>
        <div className="flex flex-col mr-[11px]">
          <p className="text-xs font-bold text-black leading-[21px]">
            {user?.user_profile?.first_name} {user?.user_profile?.last_name}
          </p>
          <p className="font-normal text-[10px] text-[#656565] leading-[17px] text-start">
            {user?.user_type}
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="hidden"></DropdownMenuContent>
    </DropdownMenu>
  );
}
