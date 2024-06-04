import TagCard from "@resume/components/Cards";
import Swiper from "@resume/components/Swiper";
import { useInView, motion as m } from "framer-motion";
import React, { ReactNode, useRef } from "react";
import { SwiperSlide } from "swiper/react";

function SliderSoftware(props: { data: { name: string; icon: ReactNode }[] }) {
  const { data } = props;

  const swiperSoftwareRef = useRef<HTMLDivElement>(null);
  const inView = useInView(swiperSoftwareRef, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  return (
    <div ref={swiperSoftwareRef}>
      <Swiper pagination={true} mousewheel={true}>
        {data?.map((d, i) => {
          return (
            <SwiperSlide className="py-5" key={d.name}>
              <m.div
                custom={i}
                initial="hidden"
                animate={inView && "visible"}
                variants={variants}
              >
                <TagCard name={d.name} icon={d.icon} />
              </m.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default React.memo(SliderSoftware);
