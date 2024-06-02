"use client";

import Text from "@resume/components/Text";
import { Image, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Link as LinkButtonScroll } from "react-scroll";

import { motion as m } from "framer-motion";
import { twMerge } from "tailwind-merge";

const { Header } = Layout;

const menuNavigation = [
  {
    key: "home",
    label: "Home",
  },
  {
    key: "biodata",
    label: "Biodata",
  },
  {
    key: "experience",
    label: "Experience",
  },
];

function PublicHeader() {
  const [isInvinsible, setIsInvinsible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsInvinsible(true);
    } else {
      setIsInvinsible(false);
    }
  };

  // Scroll to the top of the page on initial load
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Header
      className={twMerge(
        "flex justify-between items-center w-full h-16 px-40 max-xl:px-10 transition duration-500",
        isInvinsible ? "bg-white shadow-lg" : "bg-white"
      )}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div className="w-7 flex items-center">
        <Image preview={false} src="/logo/Logo.png" />
      </div>
      <div className="flex gap-x-20 h-14 items-center max-md:gap-x-10 max-[460px]:gap-x-5 max-[355px]:hidden">
        {menuNavigation?.map((d, index) => (
          <m.div
            key={d.key}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index - 0.2 }}
          >
            <m.div
              initial={{ fontWeight: 400 }}
              whileHover={{ fontWeight: 700 }}
            >
              <LinkButtonScroll
                activeClass="active-menu"
                to={d.key}
                spy={true}
                smooth={true}
                duration={500}
                className="max-sm:text-base max-[460px]:text-sm"
              >
                {d.label}
              </LinkButtonScroll>
            </m.div>
          </m.div>
        ))}
      </div>
    </Header>
  );
}

export default PublicHeader;
