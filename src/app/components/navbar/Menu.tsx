"use client";

import { useRouter } from "next/navigation";

const Menu = () => {
  const router = useRouter();
  return (
    <div className=" w-full hidden md:block">
      <div className="flex items-center justify-around">
        <p
          onClick={() => router.push("/about")}
          className="capitalize  text-sm cursor-pointer px-3 hover:text-orange-400 transition"
        >
          about
        </p>
        <p className="capitalize  text-sm cursor-pointer px-3 hover:text-orange-400 transition">
          product
        </p>
        <p className="capitalize  text-sm cursor-pointer px-3 hover:text-orange-400 transition">
          resources
        </p>
        <p className="capitalize  text-sm cursor-pointer px-3 hover:text-orange-400 transition">
          event
        </p>
        <p className="capitalize  text-sm cursor-pointer px-3 hover:text-orange-400 transition">
          blog
        </p>
        <p className="capitalize  text-sm cursor-pointer px-3 hover:text-orange-400 transition">
          contact
        </p>
      </div>
    </div>
  );
};

export default Menu;
