"use client";

import React, { ReactNode } from "react";
import { Swiper as S } from "swiper/react";
import { Grid } from "antd";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Mousewheel, Pagination, FreeMode } from "swiper/modules";

const { useBreakpoint } = Grid;

function Swiper(props: {
  children: ReactNode;
  pagination: boolean;
  mousewheel: boolean;
  freeMode?: boolean;
}) {
  const { children, pagination, mousewheel, freeMode = false } = props;

  const size = useBreakpoint();

  const responsiveSliderProperty = (key: "spaceBetween" | "slidesPerView") => {
    switch (key) {
      case "spaceBetween":
        if (size.xs) {
          return 10;
        }

        if (!size.lg) {
          return 20;
        }

        return 50;
      case "slidesPerView":
        if (size.xs) {
          return 1;
        }

        if (!size.lg) {
          return 2;
        }

        if (!size.xl) {
          return 3;
        }

        return 4;
      default:
        return;
    }
  };

  return (
    <S
      spaceBetween={responsiveSliderProperty("spaceBetween")}
      slidesPerView={responsiveSliderProperty("slidesPerView")}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}
      modules={[Pagination, Mousewheel, FreeMode]}
      pagination={{ enabled: pagination, type: "progressbar" }}
      mousewheel={mousewheel}
      freeMode={freeMode}
    >
      {children}
    </S>
  );
}

export default Swiper;
