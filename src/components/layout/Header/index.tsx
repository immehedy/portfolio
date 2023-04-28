import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="z-50 right-0 top-0 py-4 px-8">
      <ul className="text-gray-300 font-semibold flex justify-end gap-8">
        <li>
          {" "}
          <Link href="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          {" "}
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
