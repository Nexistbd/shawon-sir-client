"use client";
import assets from "@/assets";
import { navRoutes } from "@/lib/data";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LoginButton } from "./LoginSheet";
import { ModeToggle } from "../ui/toogle-mood";

const Header = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  return (
    <div className="w-full shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] fixed top-0 left-0 right-0 z-30 bg-white dark:bg-[#021421] px-3">
      <div className="h-16 flex items-center justify-between w-full max-w-7xl mx-auto container">
        {/* logo */}
        <Link href={"/"}>
          <Image src={assets.logo.logoSvg} alt="Logo" />
        </Link>
        <div className="flex items-center gap-5">
          <nav className="hidden lg:flex  lg:flex-wrap  gap-10">
            {navRoutes?.map((item) => {
              const isActive =
                pathname === item.route ||
                (pathname.startsWith(item.route) && item.route !== "/");

              return (
                <Link
                  key={item.title}
                  href={item.route}
                  className={`transition-all xl:text-lg ${
                    isActive
                      ? "text-green font-semibold border-b border-b-green "
                      : "text-gray-800 dark:text-[#D9E1E8] hover:text-green"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
        {/*  */}
        <div className="flex items-center gap-2.5">
          <ModeToggle />
          <LoginButton className="border-2 bg-primary border-primary text-white flex items-center gap-1.5 px-8 py-1.5 rounded-[10px] font-bold hover:bg-white hover:text-primary transition-all">
            <p>লগিন/সাইনআপ</p>
          </LoginButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
