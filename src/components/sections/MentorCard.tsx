import config from "@/config";
import { TMentor } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface InstructorCardProps {
  mentor: TMentor;
}

const MentorCard: FC<InstructorCardProps> = ({ mentor }) => {
  const { name, photoUrl, experience, subjects } = mentor;
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="relative h-64 bg-gray-200">
        <Image
          alt="Image"
          src={`${config.file_api}/${photoUrl}`}
          width={250}
          height={250}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-2 text-center">
        <h3 className="font-bold text-[#1e6850] text-xl">{name}</h3>
        <div className="flex justify-between items-start px-1.5 mt-2.5 ">
          <div className=" justify-center my-1.5 gap-2">
            {subjects?.map((s) => (
              <Badge className=" text-primary" key={s._id} variant="outline">
                {s.name}
              </Badge>
            ))}
          </div>
          <div className="border border-gray-400 h-9 py-0.5 " />

          <div>
            <p className="font-bold text-[#0f172b] text-lg">{experience}</p>
            <p className="text-xs font-medium uppercase text-[#62748e]">
              অভিজ্ঞতা
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
