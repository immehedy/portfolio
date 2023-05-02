import Link from "next/link";
import React from "react";
import { ImHome, ImBlogger } from "react-icons/im";
import { SiPreact } from "react-icons/si";
import { GiRead } from "react-icons/gi";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();
  return (
    <div className="absolute z-50 left-0 right-0 bottom-8 py-4 px-8 hidden md:block">
      <ul className="w-[250px] mx-auto bg-[#A7727D] font-semibold flex gap-4 justify-center  text-gray-600 py-2 rounded-lg">
        <li className="">
          {" "}
          <Link href="/">
            <ImHome
              className={`${
                pathname === "/"
                  ? "mt-[-30px] p-1 bg-[#F5EBE0] rounded-b-full text-[50px]"
                  : "text-[30px] hover:mt-[-30px] hover:p-1 hover:bg-[#F5EBE0] hover:rounded-b-full hover:text-[50px] delay-150 hover:-translate-y-1 duration-300"
              }`}
            />
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/about">
            <GiRead
              className={`${
                pathname === "/about"
                  ? "mt-[-30px] p-1 bg-[#F5EBE0] rounded-b-full text-[50px]"
                  : "text-[30px] hover:mt-[-30px] hover:p-1 hover:bg-[#F5EBE0] hover:rounded-b-full hover:text-[50px] delay-150 hover:-translate-y-1 duration-300"
              }`}
            />
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/skills">
            <SiPreact
              className={`${
                pathname === "/skills"
                  ? "mt-[-30px] p-1 bg-[#F5EBE0] rounded-b-full text-[50px]"
                  : "text-[30px] hover:mt-[-30px] hover:p-1 hover:bg-[#F5EBE0] hover:rounded-b-full hover:text-[50px] delay-150 hover:-translate-y-1 duration-300"
              }`}
            />
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/blog">
            <ImBlogger
              className={`${
                pathname === "/blog"
                  ? "mt-[-30px] p-1 bg-[#F5EBE0] rounded-b-full text-[50px]"
                  : "text-[30px] hover:mt-[-30px] hover:p-1 hover:bg-[#F5EBE0] hover:rounded-b-full hover:text-[50px] delay-150 hover:-translate-y-1 duration-300"
              }`}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
