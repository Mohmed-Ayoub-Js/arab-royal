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
    <AccordionTrigger>متى ينفتح التقديم؟</AccordionTrigger>
    <AccordionContent>
    التقديم مفتوح حاليا انضم وقدم لدخول ادارة خادمنا
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>هل توجد جوائز ل الي يدعم السيرفر ب بوست؟</AccordionTrigger>
    <AccordionContent>
    نعم ! جوائز ورتب خياليه مثل رتبة بوستر و داعم للسيرفر باوامر خاصه ادخل وادعم واستكشف 
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  )
}

export default Quesitions  