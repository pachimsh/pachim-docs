import { Disclosure } from '@headlessui/react'
import Link from "next/link";
import {ChevronDownIcon, ChevronLeftIcon, MinusSmallIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";
import _ from "lodash";

const navigation = [
    { name: 'آموزش ویدیویی', href: '#' },
    {
        name: 'شروع مستندات',
        open : true,
        children: [
            { name: 'معرفی پَچیم', href: '/getting-started/introduction' },
        ],
    },
    {
        name: 'حساب کاربری',
        children: [
            { name: 'حساب کاربری شما', href: '/accounts/your-account' },
            { name: 'حلقه همکاران', href: '/accounts/circles' },
            { name: 'مدیریت مخزن‌ها', href: '/accounts/source-control' },
            { name: 'کلید‌های SSH', href: '/accounts/ssh' },
            { name: 'دستورالعمل‌های کمکی', href: '/accounts/help-instructions' },
            // { name: 'تگ‌ها', href: '#' },
        ],
    },
    {
        name: 'سرورها',
        children: [
            { name: 'تهیه سرور', href: '/servers/providers' },
            { name: 'انواع سرورها', href: '/servers/types' },
            { name: 'مدیریت', href: '/servers/managment' },
            { name: 'دسترسی ROOT / امنیت', href: '#' },
            { name: 'کلید‌های SSH / دسترسی Git', href: '#' },
            { name: 'دیتابیس‌ها', href: '#' },
            { name: 'PHP', href: '#' },
            { name: 'احرازهویت Composer', href: '#' },
            { name: 'توزیع بار', href: '#' },
            { name: 'قالب Nginx', href: '#' },
            { name: 'پشتیبانی گیری دیتابیس', href: '#' },
            { name: 'ماینتور سرور', href: '#' },
            { name: 'سرپرست', href: '/servers/supervisor' },
            { name: 'کش‌ها', href: '#' },
            { name: 'شبکه', href: '#' },
            { name: 'زمانبدی (Scheduler)', href: '#' },
            { name: 'دستور پخت', href: '#' },
        ],
    },
    {
        name: 'سایت‌ها',
        children: [
            { name: 'موارد پایه', href: '#' },
            { name: 'استقرارها', href: '#' },
            { name: 'اجرای کامند', href: '#' },
            { name: 'احرازهویت Composer', href: '#' },
            { name: 'صف‌ها', href: '#' },
            { name: 'قوانین امنیتی', href: '#' },
            { name: 'گواهی SSL', href: '#' },
            { name: 'ایزوله سازی کاربر', href: '#' },
            { name: 'دستور پخت', href: '#' },
        ],
    },
]

export default function Sidebar() {
    const { asPath } = useRouter();
    const route = asPath.split('#')[0];

    const checkItemIsActive = (item) => {
        if(item?.href === route) {
            return true;
        }

        return !!(item?.children && _.find(_.flattenDeep(item.children), ['href', route]));
    }



    const printCategoryChildren = (item , index) => {
        return (
            <div key={index} className="text-gray-600 hover:text-gray-700 rounded-md font-medium">
                {
                    (item?.children && item.children.length)
                    ? (
                        <>
                            <Disclosure defaultOpen={( item?.open || checkItemIsActive(item)) ?? false}>
                                {({ open }) => (
                                    /* Use the `open` state to conditionally change the direction of an icon. */
                                    <>
                                        <Disclosure.Button>
                                            <div className={`${open ? "text-sky-800" : ""}`}>
                                                {
                                                    open
                                                        ? <ChevronDownIcon className="w-3 h-3 ml-2 inline-block" />
                                                        : <ChevronLeftIcon className="w-3 h-3 ml-2 inline-block" />
                                                }
                                                {item?.name}
                                            </div>
                                            {/*<ChevronRightIcon className={open ? 'rotate-90 transform' : ''} />*/}
                                        </Disclosure.Button>
                                        <Disclosure.Panel>
                                            <div className="space-y-3 mt-3 pr-4 border-r border-gray-500 mr-6">
                                                { item?.children.map(printCategoryChildren)}
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </>
                    )
                    : (
                        <div className={`${route === item.href ? 'font-bold text-sky-700' : ''} flex items-center`}>
                            <MinusSmallIcon className="w-3 h-3 ml-2" />
                            <Link href={item?.href}>
                                <a>{item?.name}</a>
                            </Link>
                        </div>
                    )
                }

            </div>
        )
    }


    return (
        <div className="flex-grow mt-5 flex flex-col">
            <nav className="flex-1 px-2 space-y-3 pb-24">
                { navigation.map(printCategoryChildren) }
            </nav>
        </div>
    )
}
