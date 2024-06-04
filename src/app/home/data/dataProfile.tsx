import { ProfileDataType } from "@resume/Types/DataProfile";
import { BsFiletypeScss } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiCss3,
  SiFlutter,
  SiGithub,
  SiGitlab,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const iconStyle =
  "text-secondary w-10 h-10 max-xl:w-8 max-xl:h-8 max-lg:w-5 max-lg:h-5";

const dataProfile: ProfileDataType = {
  name: "Lucky Fauzi",
  pictureUrl: "/images/profile-picture-person.png",
  birthday: "26 August 2004",
  location: "Indonesia, Bandung",
  email: "luckyfauzi2004@gmail.com",
  phoneNumber: "+62895632035020",
  detail:
    "I am an ambitious person in terms of technology, especially in IT or Software Engineering. And I can be a dependable partner in a team or in individual because I have wonderful experience in software engineering as Front End Developer or Mobile Developer and I already have a certificate degree as a Junior Programmer. I have goals to become a Fullstack Engineer, UI/UX Design, Logo Design, until now I still more learning about something new from the materials.",
  skills: [
    {
      name: "React Js",
      icon: <RiReactjsLine className={iconStyle} />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript className={iconStyle} />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript className={iconStyle} />,
    },
    {
      name: "HTML",
      icon: <SiHtml5 className={iconStyle} />,
    },
    {
      name: "CSS",
      icon: <SiCss3 className={iconStyle} />,
    },
    {
      name: "SCSS",
      icon: <BsFiletypeScss className={iconStyle} />,
    },
    {
      name: "React Native",
      icon: <TbBrandReactNative className={iconStyle} />,
    },
    {
      name: "Next Js",
      icon: <SiNextdotjs className={iconStyle} />,
    },
    {
      name: "React Testing Library",
      icon: <RiReactjsLine className={iconStyle} />,
    },
    {
      name: "Jest",
      icon: <SiJest className={iconStyle} />,
    },
    {
      name: "Node Js",
      icon: <SiNodedotjs className={iconStyle} />,
    },
    {
      name: "Mysql",
      icon: <GrMysql className={iconStyle} />,
    },
    {
      name: "Flutter",
      icon: <SiFlutter className={iconStyle} />,
    },
    {
      name: "Tailwind Css",
      icon: <SiTailwindcss className={iconStyle} />,
    },
    {
      name: "Graphql",
      icon: <SiGraphql className={iconStyle} />,
    },
    {
      name: "Github",
      icon: <SiGithub className={iconStyle} />,
    },
    {
      name: "Gitlab",
      icon: <SiGitlab className={iconStyle} />,
    },
  ],
  tools: [
    {
      name: "Visual Studio Code",
      icon: <SiVisualstudiocode className={iconStyle} />,
    },
    {
      name: "Figma",
      icon: <FaFigma className={iconStyle} />,
    },
    {
      name: "Adobe Illustrator",
      icon: <SiAdobeillustrator className={iconStyle} />,
    },
    {
      name: "Adobe Premiere Pro",
      icon: <SiAdobepremierepro className={iconStyle} />,
    },
  ],
  education: [
    {
      id: 1,
      startYear: 2010,
      endYear: 2011,
      type: "Elementary School",
      name: "Cibiru Soreang",
    },
    {
      id: 2,
      startYear: 2017,
      endYear: 2020,
      type: "Junior High School",
      name: "One Soreang",
    },
    {
      id: 3,
      startYear: 2020,
      endYear: 2023,
      type: "Vocational High School",
      name: "Yadika Soreang",
      major: "Software Engineer Major",
    },
  ],
  awards: [
    {
      id: 1,
      title: "2nd place UI/UX Design",
      description:
        "Participated in a competition called IT Fair held by the university.",
      images: ["/images/ui-ux-design.jpg"],
    },
    {
      id: 2,
      title: "Junior Programmer",
      description:
        "Certificate of competition as a Junior Programmer in a test with a professional certification body.",
      images: ["/images/lsp-front.jpg", "/images/lsp-back.jpg"],
    },
    {
      id: 3,
      title: "Programming Industry Class",
      description: "Implemented and completed the industrial class program",
      images: ["/images/nusantech-1.jpg", "/images/nusantech-2.jpg"],
    },
    {
      id: 4,
      title: "General English",
      description:
        "has successfully completed English lessons and received a certificate with an A grade",
      images: ["/images/general-english.jpg"],
    },
  ],
  workExperience: [
    {
      id: 1,
      companyName: "Nusantara Technology",
      startYear: 2021,
      endYear: 2024,
      location: "Bandung",
      workType: "Remote",
      iconPath: "/logo/nusantech.png",
      webCompanyPath: "https://nusantech.com/id",
      experience: [
        {
          id: 1,
          name: "QA (Quality Assurance)",
          description:
            "Participate to help being a QA on a website called Nusa LMS. Nusa LMS is an education website for learning about technology",
          projects: [],
          startYear: "Nov 2021 ",
          endYear: "May 2022",
        },
        {
          id: 2,
          name: "Teaching Assistant (Nusa Development Program)",
          description:
            "Monitoring students who participate with the NDP program as A Teaching Assistance, for instance teach students who need additional class and assess students assignments.",
          projects: [],
          startYear: "Nov 2022",
          endYear: "Des 2023",
        },
        {
          id: 3,
          name: "Front End Developer",
          description:
            "Participate to help being a Front end developer in many projects at local or international level",
          startYear: "Feb 2022",
          endYear: "May 2024",
          projects: [
            {
              id: 1,
              iconPath: "/logo/ndp.png",
              name: "NDP (Nusa Development Program)",
              startYear: "Feb 2022",
              endYear: "May 2022",
              description:
                "NDP (Nusa Development Program) is a website company for providing information about education. And helping any participant to upgrade skills in programming.",
            },
            {
              id: 2,
              iconPath: "/logo/beyond.png",
              name: "Beyond Run",
              startYear: "Nov 2022",
              endYear: "May 2023",
              description:
                "Beyond run is a website for virtual and offline running events. Using Next Js  and Typescript to develop the website.",
            },
            {
              id: 3,
              iconPath: "/logo/ldx.png",
              name: "LDX",
              startYear: "May 2023",
              endYear: "July 2023",
              description:
                "LDX is a Project website from Japan for importing and exporting a product globally. Participate to be a testing using React Testing Library",
            },
            {
              id: 4,
              iconPath: "/logo/baton.png",
              name: "Baton Handover System",
              startYear: "Aug 2023",
              endYear: "May 2024",
              description:
                "Is a website product for handling resignee to resign from the company and will be recap and made as a PDF report. Using Next js, Typescript and tailwind to develop the website",
            },
            {
              id: 5,
              iconPath: "/logo/jcm.png",
              name: "JCM (Joint Creaditing Mechanism)",
              startYear: "Nov 2023",
              endYear: "Feb 2023",
              description:
                "Is a website company for sharing information about cooperation between Indonesia and Japan. JCM is an initiative of the Government of Japan that encourages Japanese private organizations to invest in low-carbon development activities in Indonesia through incentives.",
            },
            {
              id: 6,
              iconPath: "/logo/wrtc.png",
              name: "We Run The City",
              startYear: "March 2024",
              endYear: "May 2024",
              description:
                "We Run The City is a website for virtual running events in the Padang area of Indonesia, which is a child website of Beyond Run. Using Next Js and Typescript to develop the website.",
            },
          ],
        },
        {
          id: 4,
          name: "Mobile Developer",
          description:
            "Participate to help being a Front end developer in many projects at local or international level",
          startYear: "Feb 2024",
          endYear: "May 2024",
          projects: [
            {
              id: 1,
              iconPath: "/logo/fastrent.png",
              name: "Fastrent",
              startYear: "Feb 2024",
              endYear: "May 2024",
              description:
                "Fastrent project from singapore is an application mobile for global rent of general items. Participate using React native to develop the app.",
            },
          ],
        },
      ],
    },
  ],
};

export default dataProfile;
