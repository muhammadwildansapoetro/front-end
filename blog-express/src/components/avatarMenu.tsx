import { IUser } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const AvatarMenu = ({
  user,
  onSignOut,
}: {
  user: IUser | null;
  onSignOut: () => void;
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={toggleDropdown}
        className="flex cursor-pointer items-center"
      >
        <div className="relative h-10 w-10">
          <Image
            src={user?.avatar || ""}
            alt={user?.username || "author"}
            fill
            priority
            className="rounded-full border border-black"
          />
        </div>
        <div className="ms-2 min-w-0 flex-1 max-sm:hidden">
          <p className="truncate text-sm font-medium text-gray-900">
            {user?.username}
          </p>
          <p className="truncate text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md border border-gray-300 bg-white shadow-lg">
          <ul className="py-1">
            <li>
              <button
                onClick={() => router.push("/profile")}
                className="text block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={onSignOut}
                className="block w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-300 hover:text-gray-900"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
