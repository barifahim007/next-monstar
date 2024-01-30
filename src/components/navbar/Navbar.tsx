import About from "@/app/about/page";
import Blog from "@/app/blog/page";
import Contact from "@/app/contact/page";
import Love from "@/app/love/page";
import News from "@/app/news/page";
import Link from "next/link";
import React from "react";
const navItem = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Love",
    href: "/love",
  },
  {
    name: "News",
    href: "/news",
  },
];

const Navbar = () => {
  return (
    <div className="bg-sky-500   p-5">
      {navItem.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            className="mx-3 text-2xl hover:text-red-500"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
