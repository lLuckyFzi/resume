"use client";

import { IconButton } from "@resume/components/Buttons";
import { Divider } from "antd";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion as m } from "framer-motion";
import sendMessageWhatsapp from "@resume/helper/sendMessageWhatsapp";

function StickySocialMedia(props: {
  phoneNumber: string;
  message: string;
  isVisible: boolean;
}) {
  const { message, phoneNumber } = props;

  const whatsappUrl = sendMessageWhatsapp(phoneNumber, message);

  return (
    <div className="fixed left-12 top-[42%] flex flex-col items-center gap-y-7 max-xl:gap-y-4 max-xl:left-4 max-sm:gap-y-2 max-sm:hidden z-[98]">
      <m.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <m.div whileHover={{ scale: [null, 1.5] }}>
          <IconButton
            href="https://www.linkedin.com/in/luckyfauzi-fs/"
            icon={
              <FaLinkedin className="w-10 h-10 text-secondary max-sm:w-8 max-sm:h-8 max-xl:w-6 max-xl:h-6" />
            }
          />
        </m.div>
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.6,
        }}
      >
        <Divider type="vertical" className="border-secondary" />
      </m.div>
      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <m.div whileHover={{ scale: [null, 1.5] }}>
          <IconButton
            href={whatsappUrl}
            icon={
              <IoLogoWhatsapp className="w-10 h-10 text-secondary max-sm:w-8 max-sm:h-8 max-xl:w-6 max-xl:h-6" />
            }
          />
        </m.div>
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.6,
        }}
      >
        <Divider type="vertical" className="border-secondary" />
      </m.div>
      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4 }}
      >
        <m.div whileHover={{ scale: [null, 1.5] }}>
          <IconButton
            href="https://www.instagram.com/_lckly/"
            icon={
              <AiFillInstagram className="w-10 h-10 text-secondary max-sm:w-8 max-sm:h-8 max-xl:w-6 max-xl:h-6" />
            }
          />
        </m.div>
      </m.div>
    </div>
  );
}

export default StickySocialMedia;
