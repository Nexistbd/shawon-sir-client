"use client";
import parse from "html-react-parser";
import CustomAccordion, { TAccordionItem } from "../shared/CustomAccordion";
import { TCourse } from "@/types";

const CourseAccordian = ({ course }: { course: TCourse }) => {
  const accordionItems: TAccordionItem[] = [
    {
      title: "কোর্সের বিস্তারিত",
      value: "details",
      content: <p>{parse(`${course?.details}`)}</p>,
    },
  ];
  return (
    <div>
      <CustomAccordion defaultValue="details" accordionItems={accordionItems} />
    </div>
  );
};

export default CourseAccordian;
