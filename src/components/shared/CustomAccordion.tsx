import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FC, JSX, ReactNode } from "react";

export type TAccordionItem = {
  title: string | JSX.Element;
  content: ReactNode;
  value: string;
};

type TCustomAccordionProps = {
  defaultValue?: string;
  accordionItems: TAccordionItem[];
};

const CustomAccordion: FC<TCustomAccordionProps> = ({
  defaultValue,
  accordionItems,
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={defaultValue}
    >
      {accordionItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="transition-all data-[state=open]:font-bold">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
