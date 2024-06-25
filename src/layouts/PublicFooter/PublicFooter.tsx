"use client";

import Text from "@resume/components/Text";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { motion as m } from "framer-motion";
import { Image, Tooltip } from "antd";
import Link from "next/link";
import sendMessageWhatsapp from "@resume/helper/sendMessageWhatsapp";
import dataProfile from "@resume/app/home/data/dataProfile";

const iconStyle = "w-[30px] h-[30px] hover:text-white";

const SocialMedia = [
  {
    id: 1,
    icon: <MdEmail className={iconStyle} />,
    name: "Email",
    link: "emailto:luckyfauzi2004@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className={iconStyle} />,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/luckyfauzi-fs/",
  },
  {
    id: 3,
    icon: <IoLogoWhatsapp className={iconStyle} />,
    name: "Whatsapp",
    link: sendMessageWhatsapp(
      dataProfile.phoneNumber,
      "Hello, I would like to get in touch with you!"
    ),
  },
  {
    id: 4,
    icon: <AiFillInstagram className={iconStyle} />,
    name: "Instagram",
    link: "https://www.instagram.com/_lckly/",
  },
  {
    id: 5,
    icon: <SiGithub className={iconStyle} />,
    name: "Github",
    link: "https://github.com/lLuckyFauzi",
  },
];

function PublicFooter() {
  return (
    <div className="bg-white p-5">
      <div className="bg-secondary rounded-lg px-16 max-lg:px-8">
        <div className="flex justify-between items-center w-full py-9 max-md:flex-col max-md:gap-y-6">
          <div className="flex gap-6 items-center max-md:flex-col">
            <div className="w-7">
              <Image preview={false} src="/logo/Logo 2.png" />
            </div>
            <Text className="text-white text-2xl font-light max-lg:text-lg max-sm:text-center">
              Bring ideas to life, through <b className="font-bold">Code</b> and{" "}
              <b className="font-bold">Design</b>
            </Text>
          </div>
          <div className="flex gap-x-12 max-lg:gap-x-6">
            {SocialMedia?.map((d) => {
              return (
                <Link href={d.link} key={d.id} className="text-white">
                  <m.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <m.div whileHover={{ y: [null, -8] }}>
                      <Tooltip placement="top" title={d.name}>
                        {d.icon}
                      </Tooltip>
                    </m.div>
                  </m.div>
                </Link>
              );
            })}
          </div>
        </div>
        <hr className="w-full border-white h-[1px]" />
        <div className="flex items-center justify-center py-3">
          <Text className="text-white text-sm">Lucky - 2024</Text>
        </div>
      </div>
    </div>
  );
}

export default PublicFooter;
