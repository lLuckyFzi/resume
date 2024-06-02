import { ReactNode } from "react";

export type ProjectDataType = {
  id: number;
  name: string;
  startYear: string;
  endYear: string;
  description: string;
  iconPath: string;
};

export type ExperienceDataType = {
  id: number;
  name: string;
  description: string;
  projects: ProjectDataType[];
  startYear: string;
  endYear: string;
};

export type WorkExperienceDataType = {
  id: number;
  companyName: string;
  iconPath: string;
  startYear: number;
  endYear: number;
  location: string;
  workType: string;
  experience: ExperienceDataType[];
};

export type SkillDataType = {
  name: string;
  icon: ReactNode;
};
export type ToolsDataType = {
  name: string;
  icon: ReactNode;
};

export type EducationDataType = {
  id: number;
  startYear: number;
  endYear: number;
  type: string;
  name: string;
  major?: string;
};

export type AwardsDataType = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

export type ProfileDataType = {
  name: string;
  pictureUrl: string;
  birthday: string;
  location: string;
  email: string;
  phoneNumber: string;
  detail: string;
  skills: SkillDataType[];
  tools: ToolsDataType[];
  education: EducationDataType[];
  awards: AwardsDataType[];
  workExperience: WorkExperienceDataType[];
};
