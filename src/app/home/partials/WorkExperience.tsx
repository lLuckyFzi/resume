import { ProjectDataType } from "@resume/Types/DataProfile";
import Text from "@resume/components/Text";
import { Collapse, Image } from "antd";
import React from "react";

interface ExperienceDataType {
  id: number;
  name: string;
  description: string;
  projects: ProjectDataType[];
  startYear: string;
  endYear: string;
}

interface LabelProps {
  name: string;
  start: string;
  end: string;
}
interface ChildrenProps {
  description: string;
  projects: ProjectDataType[];
}

const LabelComponent = (props: LabelProps) => {
  const { end, name, start } = props;

  return (
    <div>
      <Text className="font-medium text-xl text-newBlack max-xl:text-lg max-sm:text-sm">
        {name || "Name"}
      </Text>
      <Text className="text-gray-400 text-sm font-light max-sm:text-xs">
        {start || "Start Date"} – {end || "End Date"}
      </Text>
    </div>
  );
};

const ChildrenComponent = (props: ChildrenProps) => {
  const { description, projects } = props;

  const hasProjects = projects?.length > 0;

  return (
    <div>
      <Text className="font-normal text-sm text-newBlack max-sm:text-xs font-archivo">
        {description || "Description"}
      </Text>
      {hasProjects && (
        <div className="pl-10 max-sm:pl-5">
          <Collapse
            accordion={true}
            bordered={false}
            items={projects?.map((d) => ({
              key: d.id,
              label: (
                <div className={d.iconPath && "flex gap-x-5 items-center"}>
                  {d.iconPath && (
                    <div className="w-8">
                      <Image
                        preview={false}
                        alt="Project Icon"
                        src={d.iconPath}
                      />
                    </div>
                  )}
                  <LabelComponent
                    name={d.name}
                    start={d.startYear}
                    end={d.endYear}
                  />
                </div>
              ),
              children: (
                <Text className="font-normal text-sm text-newBlack max-sm:text-xs font-archivo">
                  {d.description || "Description"}
                </Text>
              ),
            }))}
          />
        </div>
      )}
    </div>
  );
};

function WorkExperience(props: { data: ExperienceDataType[] }) {
  const { data } = props;

  const mostExperience = data
    ?.filter((d) => d.projects.length > 3)?.[0]
    ?.id.toString();

  return (
    <Collapse
      bordered={false}
      accordion={true}
      items={data?.map((d) => ({
        key: d.id,
        label: (
          <LabelComponent name={d.name} start={d.startYear} end={d.endYear} />
        ),
        children: (
          <ChildrenComponent
            projects={d.projects}
            description={d.description}
          />
        ),
      }))}
      defaultActiveKey={[mostExperience]}
    />
  );
}

export default WorkExperience;
