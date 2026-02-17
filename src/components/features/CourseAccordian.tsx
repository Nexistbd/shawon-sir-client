"use client";
import parse from "html-react-parser";
import CustomAccordion, { TAccordionItem } from "../shared/CustomAccordion";
import { TCourse } from "@/types";
import { BookOpen, CheckCircle2, ContactRound, Settings2 } from "lucide-react";
import Image from "next/image";
import config from "@/config";

const CourseAccordian = ({ course }: { course: TCourse }) => {
  const accordionItems: TAccordionItem[] = [
    {
      title: (
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-2 rounded-lg">
            <BookOpen className="h-4 w-4 text-green-600" />
          </div>

          <h2 className="text-xl ">কোর্সের বিস্তারিত</h2>
        </div>
      ),
      value: "details",
      content: <p>{parse(`${course?.details}`)}</p>,
    },
    {
      title: (
        <div className="flex gap-4">
          <Settings2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <h2 className="text-xl">কোর্সের বৈশিষ্ট্য</h2>,
        </div>
      ),
      value: "feature",
      content: (
        <div className="space-y-3">
          {course?.feature?.map((item: string, idx: number) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: (
        <div className="flex gap-4">
          <ContactRound className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <h2 className="text-xl">ক্লাস নিচ্ছেন যারা</h2>,
        </div>
      ),
      value: "mentors",
      content: (
        <div className="space-y-3 flex flex-wrap">
          {course?.mentors?.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-3">
              <Image
                src={`${config.file_api}/${item?.mentor?.photoUrl}`}
                alt="iamge"
                width={100}
                height={100}
              />
              <div>
                <p className="tex text-muted-foreground font-bold">
                  {item?.mentor?.name}
                </p>
                <p className="tex text-muted-foreground font-bold">
                  {item?.mentor?.education}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];
  return (
    <div>
      <CustomAccordion defaultValue="details" accordionItems={accordionItems} />
    </div>
  );
};

export default CourseAccordian;
