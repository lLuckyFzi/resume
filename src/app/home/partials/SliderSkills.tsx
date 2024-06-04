import TagCard from "@resume/components/Cards";
import Swiper from "@resume/components/Swiper";
import React, { ReactNode, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { motion as m, useInView } from "framer-motion";

function SliderSkills(props: { data: { name: string; icon: ReactNode }[] }) {
  const { data } = props;

  const swiperSkillsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(swiperSkillsRef, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
  };

  return (
    <div ref={swiperSkillsRef}>
      <Swiper pagination={true} mousewheel={true}>
        {data?.map((d, i) => (
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
        ))}
      </Swiper>
    </div>
  );
}

export default React.memo(SliderSkills);
