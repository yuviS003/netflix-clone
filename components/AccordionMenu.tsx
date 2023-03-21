import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface AccordionMenuProps {
  visible?: boolean;
}

const AccordionMenu: React.FC<AccordionMenuProps> = ({ visible }) => {
  const { data } = useCurrentUser();
  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/tem flex gap-3 items-center w-full">
          <Image
            src="/images/default-blue.png"
            alt="profile"
            width="32"
            height="0"
            className="rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline capitalize">
            {data?.name}
          </p>
        </div>
        <div className="bg-black border-t border-gray-500 h-px py-2">
          <div
            className="flex justify-center items-center text-white text-sm hover:underline"
            onClick={() => signOut()}
          >
            Sign out of Netflix
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionMenu;
