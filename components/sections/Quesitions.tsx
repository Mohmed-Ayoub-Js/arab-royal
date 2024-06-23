import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Quesitions = () => {
  return (
    <div className=" p-10 flex items-center flex-col w-full">
        <h1 className=" text-5xl font-extrabold">
            الاسألة الشائعة
        </h1>
<Accordion type="single" collapsible className=" w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>السؤال الاول</AccordionTrigger>
    <AccordionContent>
     جواب
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>السؤال الثاني</AccordionTrigger>
    <AccordionContent>
      جواب
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  )
}

export default Quesitions  