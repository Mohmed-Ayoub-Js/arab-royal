import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, GiftTopIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { SparklesCore } from '../ui/sparkles'
import { SparklesPreview } from './Sparkel'
import { GiftIcon, Shield, ShoppingBagIcon, Smile } from 'lucide-react'

const features = [
  {
    name: 'الجوائز',
    description:
      "نقدم جوائز ومكافآت لأعضاء خادمنا، فهم يستحقون ذلك حقاً!",
    icon: <GiftIcon /> ,
  },
  {
    name: 'الفعاليات',
    description:
   " نقدم جوائز ومكافآت خياليه يوميه لأعضاء خادمنا، فهم يستحقون ذلك حقاً!",
    icon: <Smile />,
  },
  {
    name: 'إشراف متميّز',
    description:
    "إدارتنا متواجدة على مدار الساعة. نهدف إلى تكوين مجتمع آمن وبيئة نظيفة للأعضاء!",
    icon: <Shield />,
  },
  {
    name: 'شوب (قريبا)',
    description:
   "سيتوفر قريب متجر كامل بخادمنا ! بمعنى سيكون هناك منتجات مثل النيترو وخدمات التصميم واشياء اكثر",
    icon: <ShoppingBagIcon />,
  },
]

export default function Feature() {
  return (
    <SparklesPreview >
    <div className="bg-black py-24 sm:py-32 mb-[100px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            ArabRoyal Server
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
           مميزات سيرفر عرب رويال
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            سيرفر عرب رويال هو سيرفر للمحادثة العامة وقضاء وقت ممتع مع الاخذ بعين الاعتبار الظوابط الشرعية
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-100">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-100">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </SparklesPreview>
  )
}
