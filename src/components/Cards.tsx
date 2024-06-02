"use client";

import { Card, Image } from "antd";
import React, { ReactNode } from "react";
import Text from "./Text";

import { motion as m } from "framer-motion";

export default function TagCard(props: { name: string; icon: ReactNode }) {
  const { name, icon } = props;

  return (
    <Card bordered={false} className="shadow-2xl cursor-grab p-0">
      <div className="flex items-center gap-x-3 py-5 px-5 max-xl:gap-x-2">
        {icon}
        <Text className="text-newBlack text-xl max-xl:text-base max-lg:text-base max-md:text-sm">
          {name || "Tag"}
        </Text>
      </div>
    </Card>
  );
}

export function PrimaryCard(props: {
  title: string;
  description: string;
  backdropPath: string;
  onClick: () => void;
}) {
  const { title, description, backdropPath, onClick } = props;

  return (
    <m.div whileHover={{ scale: [null, 1.1] }} onClick={onClick}>
      <div className="relative shadow-lg cursor-pointer max-lg:w-56 h-60 overflow-hidden">
        <span className="bg-gradient-to-t from-white from-30% to-transparent absolute top-0 left-0 right-0 bottom-0 z-50" />
        <Image src={backdropPath} preview={false} alt="" className="" />
        <div className="absolute bottom-2 left-2 z-[99] p-3 flex flex-col gap-y-1 text-newBlack max-xl:p-1">
          <Text className="text-sm font-bold font-archivo max-xl:text-xs">
            {title}
          </Text>
          <Text className="text-xs font-thin font-archivo max-xl:text-[10]">
            {description}
          </Text>
        </div>
      </div>
    </m.div>
  );
}
