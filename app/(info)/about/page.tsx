import DiscordButton from "@/components/global/DiscordButton";

const About = () => {
  return (
    <div className="p-5 m-4 flex justify-start items-start flex-col mt-[75px]">
      <h1 className="text-4xl font-extrabold">
        اهلاً بكم في سـيرفر ArabRoyal
      </h1>
      <h3 className="text-2xl font-bold mt-4">
        من نحن ؟
      </h3>
      <p>
        عرب رويال هو خادم تم انشاؤه وتطويره بواسطة عرب بهدف مساعدة بعضهم البعض والتعرف على أصدقاء جدد وليكون مركزاً لتجمع مستخدمين الديسكورد العرب تم تأسيسه في عام 2023 كمجتمع ودعم فني لمستخدمين ديسكورد العرب بهدف مساعدتهم في حل المشاكل وتوفير الجوائز والفعاليات والمساعدة لهم بشكل يومي ويتطلع السيرفر لنشر العاب وتصاميم واشياء من صنع عربي بلندر لتطوير السيرفر !
      </p>
      <h3 className="text-2xl font-bold mt-4">
        المميزات المقدمة
      </h3>
      <p className="mb-5">
        فائدة دخول للخادم هي الاستفادة من الجوائز والاصدقاء والنظام الذي بداخله مثل : نظام بوستات  ومسابقة صور وغيرها. والكثير من الفعاليات المستمرة في السـيرفر
      </p>
      <div className="p-4 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-2">إرشادات الديسكورد</h3>
        <div>
          <p>إرشادات الديسكورد</p>
          <p>
            يرجى العلم أنه عند ذكر "لنا" أو "نحن" فإن المقصود Discord Inc. وليس الديسكورد العربي وهذه نسخة مترجمة من إرشادات المجتمع الخاصة بـ Discord.
          </p>
          <p>
            تم إنشاء الديسكورد ليكون مكانًا حيث يكون التواصل سهلاً وبناء العلاقات على نحو أصيل. لذا، هناك إرشادات للمجتمع تضمن أن كل شخص يجد مكانًا يناسبه على منصة الديسكورد.
          </p>

          <p>
            <strong>الاحترام والأمان:</strong>
          </p>
          <ol className="list-decimal list-inside">
            <li>
              <strong>الاحترام واجب على الجميع:</strong>
              <ul className="list-disc list-inside">
                <li>
                  يجب على المستخدمين التعامل بالاحترام مع بعضهم البعض وعدم الترويج أو المشاركة في أفعال مؤذية أو مهينة.
                </li>
                <li>
                  يُحظر التمييز أو التحريض على الكراهية بناءً على الديانة أو الجنسية أو الطبقة الاجتماعية أو أي صفة شخصية أخرى.
                </li>
              </ul>
            </li>

            <li>
              <strong>العنف والتهديدات:</strong>
              <ul className="list-disc list-inside">
                <li>
                  يمنع التهديد بأي نوع من العنف أو المشاركة في تصرفات تحرض على العنف أو التهديد بالكشف عن معلومات شخصية (Doxxing).
                </li>
              </ul>
            </li>

            <li>
              <strong>المحتوى العنيف والمحتوى المحرم شرعا:</strong>
              <ul className="list-disc list-inside">
                <li>
                  اي محتوى يخالف الشريعة الاسلامية ممنوع ، من صور نساء كاسيات عاريات ، موسيقى ، الدعوة الى الظلال والشرك
                </li>
                <li>
                  نحن مجتمع مسلم
                </li>
                <li></li>
              </ul>
            </li>

            <li>
              <strong>السلوك والأنشطة غير المقبولة:</strong>
              <ul className="list-disc list-inside">
                <li>
                  يمنع استخدام الديسكورد لأغراض السبام أو إرسال رسائل غير مرغوب فيها أو التلاعب بتجربة الآخرين.
                </li>
                <li>
                  يمنع تنظيم أو المشاركة في أنشطة خطيرة مثل التجارة بالبشر أو تسهيل بيع السلع الممنوعة.
                </li>
              </ul>
            </li>
          </ol>

          <p>
            للمزيد من التفاصيل حول إرشادات الديسكورد، يرجى زيارة <a href="https://discord.com/guidelines">صفحة الإرشادات الرسمية للديسكورد</a>.
          </p>
        </div>
      </div>
      <DiscordButton title="نرحب بانضمامك معنا" />
      <p className="mt-4">
        قبل ان تنضم الى اي مكان في العالم تحلى بالظوابط الشرعية الاسلامية 
      </p>
    </div>
  );
};

export default About;
