"use client";

import TextButton, { PrimaryButton } from "@resume/components/Buttons";
import Text, { CountingText } from "@resume/components/Text";
import StickySocialMedia from "./partials/StickySocialMedia";
import { Divider, FloatButton, Image, Timeline } from "antd";
import { motion as m, useInView } from "framer-motion";
import TypingText from "@resume/components/TypingText";
import handleDownload from "@resume/helper/handleDownload";
import { FaFile, FaLongArrowAltUp, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdEmail, MdLocationPin } from "react-icons/md";
import SectionHeader, { InnerHeader } from "@resume/components/Headers";
import SliderSkills from "./partials/SliderSkills";
import { Element, Link } from "react-scroll";
import { PrimaryCard } from "@resume/components/Cards";
import { useRef, useState } from "react";
import ModalAward from "./partials/ModalAward";
import WorkExperience from "./partials/WorkExperience";

import dataProfile from "./data/dataProfile";
import useEndScroll from "@resume/hooks/useEndScroll";

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [isVisible] = useEndScroll();

  const handleClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const selectedData = dataProfile?.awards.filter(
    (d) => d.id === selectedId
  )?.[0];

  const biodataRef = useRef<HTMLDivElement>(null);
  const educationViewRef = useRef<HTMLDivElement>(null);

  const inView = useInView(biodataRef, { once: false });
  const inEducationView = useInView(educationViewRef, { once: false });

  const variantAwards = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 1,
      },
    }),
  };

  return (
    <div className="overflow-x-hidden">
      {isVisible && (
        <StickySocialMedia
          isVisible={isVisible}
          phoneNumber={dataProfile.phoneNumber}
          message="Hello, I would like to get in touch with you!"
        />
      )}
      <Element name="home">
        <section
          id="home"
          className="flex items-center flex-row-reverse justify-between h-[100vh] px-[155px] max-xl:px-16 max-xl:gap-x-10 max-md:flex-col max-xl:justify-evenly max-sm:gap-y-10 bg-white"
        >
          <div className="flex gap-x-1 w-[340px] justify-center items-center relative -translate-y-12 max-sm:mt-20">
            <m.div
              initial={{ scale: 0, rotate: 180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 1.3,
              }}
              className="absolute z-50 right-[0px] top-[28px] w-[35px]"
            >
              <Image alt="box" src="/images/Box.png" preview={false} />
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 125 }}
              animate={{ opacity: 1, y: 67 }}
              transition={{ delay: 1 }}
              className="w-[100px] translate-y-[67px] relative"
            >
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute z-50 left-[-70px] top-[-65px] w-[130px]"
              >
                <Image alt="circle" src="/images/circle.png" preview={false} />
              </m.div>
              <Image
                alt="home-profile-1"
                src="/images/person-frame-2.png"
                preview={false}
              />
            </m.div>
            <m.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-[100px] relative"
            >
              <Image
                alt="home-profile-1"
                src="/images/person-frame-1.png"
                preview={false}
              />
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute z-50 right-[-70px] bottom-[-65px] w-[130px] rotate-180"
              >
                <Image alt="circle" src="/images/circle.png" preview={false} />
              </m.div>
            </m.div>
            <m.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.1,
                delay: 1.5,
              }}
              className="absolute z-50 left-[0px] bottom-[28px] w-[35px]"
            >
              <Image alt="box" src="/images/Box.png" preview={false} />
            </m.div>
          </div>
          <div className="flex flex-col gap-y-2 pr-32 max-2xl:gap-y-0 max-2xl:pr-10 max-xl:pr-5 max-sm:pr-0">
            <m.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Text className="text-3xl text-newBlack max-xl:text-base max-sm:text-center max-[440px]:text-sm">
                Hello World, I&apos;m <b className="text-primary">Lucky Fauzi</b>
              </Text>
            </m.div>
            <div className="flex items-end gap-x-2 max-sm:justify-center">
              <TypingText text="Front End Developer" />

              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.8,
                  ease: "easeIn",
                }}
              >
                <div className="w-9 h-3 bg-primary relative bottom-[7px] max-2xl:w-7 max-2xl:h-2" />
              </m.div>
            </div>
            <m.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <Text className="w-[580px] text-xl font-light text-newBlack pt-9 max-xl:w-[400px] max-xl:text-base max-2xl:pt-4 max-sm:text-center max-[440px]:text-xs max-[440px]:w-[350px]">
                I&apos;m just a person who has a goal to become a Fullstack
                Developer, Dev Ops, UI/UX Designer, and maybe an AI Engineer?
              </Text>
            </m.div>
            <div className="flex items-center gap-x-6 pt-24 max-2xl:pt-11 max-sm:flex-col max-sm:justify-center max-sm:gap-y-5 max-sm:pt-10 max-[440px]:pt-5 max-[440px]:gap-y-2">
              <m.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <Link to="biodata" smooth={true} duration={500}>
                  <TextButton
                    onClick={() => handleClick("landing")}
                    className="flex items-center p-0 text-sm text-newBlack"
                    icon={<HiOutlineMenuAlt3 className="w-5 h-5" />}
                  >
                    Explore More
                  </TextButton>
                </Link>
              </m.div>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                <Text className="text-newBlack text-sm font-light max-[440px]:text-xs">
                  Or
                </Text>
              </m.div>

              <m.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                <m.div
                  whileHover={{
                    scale: [null, 1.1],
                  }}
                >
                  <PrimaryButton
                    className="flex items-center h-10 px-4 rounded-lg max-[440px]:h-8"
                    icon={<FaFile className="w-5 h-5" />}
                    onClick={() =>
                      handleDownload("lucky_curiculum_vitae", "pdf")
                    }
                  >
                    Download CV
                  </PrimaryButton>
                </m.div>
              </m.div>
            </div>
          </div>
        </section>
      </Element>
      <Element name="biodata">
        <section
          ref={biodataRef}
          className="relative min-h-[100vh] flex flex-col gap-y-20 px-[155px] py-20 max-2xl:px-32 max-xl:px-16 overflow-hidden max-sm:pt-36 max-sm:px-16"
          id="biodata"
        >
          <div className="flex flex-col gap-y-8">
            <SectionHeader
              inView={inView}
              className="text-6xl font-bold max-2xl:text-5xl max-md:text-3xl"
            >
              Biodata
            </SectionHeader>
            <div className="flex gap-x-16 max-sm:flex-col max-sm:justify-center items-center">
              <m.div
                initial={{ scale: 0 }}
                animate={inView && { scale: 1 }}
                transition={{ delay: 1 }}
                className="w-[15%] max-[1440px]:w-[25%] max-md:w-[35%] max-sm:w-[50%]"
              >
                <Image
                  src={dataProfile.pictureUrl}
                  alt=""
                  preview={false}
                  className="object-cover"
                />
              </m.div>
              <div className="flex flex-col w-[75%] justify-between max-sm:w-full max-sm:items-center">
                <div>
                  <m.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={inView && { y: 0, opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <Text className="text-6xl font-bold text-newBlack max-2xl:text-5xl max-md:text-4xl max-sm:text-center">
                      {dataProfile?.name}
                    </Text>
                  </m.div>
                  <div className="flex flex-wrap gap-5 my-7 gap-x-8 max-sm:justify-center max-sm:items-center">
                    <m.div
                      initial={{ scale: 0 }}
                      animate={inView && { scale: 1 }}
                      transition={{ delay: 2 }}
                      className="flex items-center gap-x-3 max-xl:gap-x-2"
                    >
                      <MdEmail className="w-8 h-8 max-2xl:w-6 max-2xl:h-6 max-xl:w-4 max-xl:h-4 text-secondary" />
                      <Text className="text-xl max-2xl:text-lg max-xl:text-base text-newBlack">
                        {dataProfile.email}
                      </Text>
                    </m.div>
                    <m.div
                      initial={{ scale: 0 }}
                      animate={inView && { scale: 1 }}
                      transition={{ delay: 2.2 }}
                      className="flex items-center gap-x-3 max-xl:gap-x-2"
                    >
                      <FaPhoneAlt className="w-8 h-8 max-2xl:w-6 max-2xl:h-6 max-xl:w-4 max-xl:h-4 text-secondary" />
                      <Text className="text-xl max-2xl:text-lg max-xl:text-base text-newBlack">
                        {dataProfile.phoneNumber}
                      </Text>
                    </m.div>
                    <m.div
                      initial={{ scale: 0 }}
                      animate={inView && { scale: 1 }}
                      transition={{ delay: 2.3 }}
                      className="flex items-center gap-x-3 max-xl:gap-x-2"
                    >
                      <MdLocationPin className="w-8 h-8 max-2xl:w-6 max-2xl:h-6 max-xl:w-4 max-xl:h-4 text-secondary" />
                      <Text className="text-xl max-2xl:text-lg max-xl:text-base text-newBlack">
                        {dataProfile.location}
                      </Text>
                    </m.div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3 mt-8 max-lg:hidden">
                  <InnerHeader
                    inView={inView}
                    className="font-semibold text-2xl max-2xl:text-xl"
                  >
                    About Me
                  </InnerHeader>
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={inView && { opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    <Text className="text-newBlack font-light text-xl max-2xl:text-lg max-xl:text-base">
                      {dataProfile.detail}
                    </Text>
                  </m.div>
                </div>
              </div>
            </div>

            {/* Responsive Content */}
            <div className="flex flex-col gap-y-3 mt-8 lg:hidden max-sm:items-center max-sm:justify-center">
              <InnerHeader
                inView={inView}
                className="font-semibold text-2xl max-2xl:text-xl max-sm:text-base max-[440px]:text-sm max-[440px]:text-center"
              >
                About Me
              </InnerHeader>
              <Text className="text-newBlack font-light text-xl max-2xl:text-lg max-xl:text-base max-sm:text-sm max-[440px]:text-xs max-sm:text-center">
                {dataProfile.detail}
              </Text>
            </div>
          </div>

          <div className="flex flex-col gap-y-8 max-md:gap-y-4">
            <InnerHeader
              inView={inView}
              className="font-semibold text-2xl max-2xl:text-xl max-sm:text-base max-[440px]:text-sm max-[440px]:text-center"
            >
              Skills
            </InnerHeader>
            <div>
              <div className="flex gap-x-4 text-newBlack max-sm:gap-x-1">
                <CountingText start={0} end={1} inView={inView} />
                <m.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={inView && { x: 0, opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <Text className="font-medium text-xl max-sm:text-sm max-[440px]:text-sm max-[440px]:text-center">
                    Programming
                  </Text>
                </m.div>
              </div>
              <SliderSkills data={dataProfile.skills} />
            </div>
            <div>
              <div className="flex gap-x-4 text-newBlack max-sm:gap-x-1">
                <CountingText start={0} end={2} inView={inView} delay={1} />
                <m.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={inView && { x: 0, opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <Text className="font-medium text-xl max-sm:text-sm max-[440px]:text-sm max-[440px]:text-center">
                    Tools
                  </Text>
                </m.div>
              </div>
              <SliderSkills data={dataProfile.tools} />
            </div>
          </div>

          <div className="flex justify-between max-lg:flex-col max-lg:justify-center max-lg:items-center pb-10">
            <div
              ref={educationViewRef}
              className="flex flex-col gap-y-8 items-start w-[30%] max-lg:w-full max-lg:items-center"
            >
              <InnerHeader
                inView={inEducationView}
                delay={1}
                className="font-semibold text-2xl text-newBlack max-2xl:text-xl max-sm:text-base max-[440px]:text-sm max-[440px]:text-center"
              >
                Education
              </InnerHeader>
              <Timeline
                mode="left"
                items={dataProfile?.education?.map((d, i) => ({
                  label: (
                    <m.div
                      initial={{ opacity: 0 }}
                      animate={inEducationView && { opacity: 1 }}
                      transition={{ delay: i * 1 }}
                    >
                      <Text className="font-archivo font-bold text-newBlack text-base max-md:text-sm">
                        {d.startYear} - {d.endYear}
                      </Text>
                    </m.div>
                  ),
                  children: (
                    <m.div
                      initial={{ x: 40, opacity: 0 }}
                      animate={inEducationView && { x: 0, opacity: 1 }}
                      transition={{ delay: i * 1.5 }}
                      className="flex flex-col text-newBlack mb-36 gap-y-1"
                    >
                      <Text className="font-archivo text-base font-bold w-[200px] max-md:text-sm max-[440px]:w-full">
                        {d.type}
                      </Text>
                      <Text className="font-archivo text-base font-light w-[200px] max-md:text-sm max-[440px]:w-full">
                        {d.name}
                      </Text>
                    </m.div>
                  ),
                }))}
              />
            </div>
            <div className="flex flex-col gap-y-8 items-start w-[60%] max-lg:w-full max-lg:items-center">
              <InnerHeader
                inView={inEducationView}
                delay={1.4}
                className="font-semibold text-2xl text-newBlack max-2xl:text-xl max-sm:text-base max-[440px]:text-sm max-[440px]:text-center"
                center
              >
                Awards
              </InnerHeader>
              <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
                {dataProfile?.awards.map((d, i) => {
                  return (
                    <m.div
                      key={d.id}
                      custom={i}
                      initial="hidden"
                      animate={inEducationView && "visible"}
                      variants={variantAwards}
                    >
                      <PrimaryCard
                        key={d.id}
                        title={d.title}
                        description={d.description}
                        backdropPath={d?.images?.[0]}
                        onClick={() => setSelectedId(d.id)}
                      />
                    </m.div>
                  );
                })}
              </div>
            </div>
          </div>
          <ModalAward
            selectedData={selectedData}
            selectedId={selectedId as number}
            setSelectedId={(v) => setSelectedId(v)}
          />
        </section>
      </Element>
      <Element name="experience">
        <section
          className="relative min-h-[100vh] px-[155px] pt-32 max-2xl:px-32 max-xl:px-16 overflow-hidden max-sm:pt-10 max-sm:px-16 bg-white"
          id="experience"
        >
          <SectionHeader className="text-6xl font-bold max-2xl:text-5xl max-md:text-3xl">
            Work Experience
          </SectionHeader>
          {dataProfile.workExperience?.map((d) => {
            return (
              <div key={d.id}>
                <div className="flex justify-between mt-12 max-[975px]:flex-col">
                  <div className="flex flex-col gap-x-20 w-[25%] max-[1440px]:w-[30%] max-[975px]:w-full">
                    <div className="mt-1 flex items-center gap-x-3">
                      <div className="w-6">
                        <Image
                          preview={false}
                          alt="Company Logo"
                          src={d.iconPath}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-x-3">
                          <Text className="font-archivo text-newBlack font-extralight text-sm">
                            Since {d.startYear}
                          </Text>
                          <m.hr className="w-20 border-gray-400 max-sm:w-10" />
                          <Text className="font-archivo text-newBlack font-extralight text-sm">
                            {d.endYear}
                          </Text>
                        </div>
                        <div>
                          <Text className="font-bold text-2xl text-newBlack max-xl:text-lg">
                            {d.companyName}
                          </Text>
                          <Text className="font-light text-sm text-gray-400">
                            {d.location}, {d.workType}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[75%] max-[1440px]:w-[70%] max-[975px]:w-full">
                    <WorkExperience data={d.experience} />
                  </div>
                </div>
                <Divider />
              </div>
            );
          })}
        </section>
      </Element>
      <FloatButton.BackTop
        className="fixed right-11 bottom-56 max-sm:right-5"
        icon={<FaLongArrowAltUp className="w-5 text-primary" />}
      />
    </div>
  );
}
