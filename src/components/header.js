import {Popover, Transition} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import {Fragment} from "react";
import Logo from "./icons/logo";
import Link from "next/link";


const resources = [
    {
        name: 'پچّیم چیست',
        href: `${process.env.PACHIM_MAIN_SITE}/#what-is-pachim`,
    },
    {
        name: 'قیمت‌ها',
        href: `${process.env.PACHIM_MAIN_SITE}/#pricing`,
    },
    {
        name: 'مستندات',
        href: '/',
        className: 'hidden lg:inline-block'
    },
    {
        name: 'قوانین و مقررات',
        href: `${process.env.PACHIM_MAIN_SITE}/terms`,
        className: 'hidden lg:inline-block'
    }
]

export default function Header() {

    return (
        <Popover className="relative bg-white border-b-2 border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6">
                    <div className="flex justify-start items-center">
                        <Link href={`${process.env.PACHIM_MAIN_SITE}`}>
                            <a>
                                <Logo className={`w-48 md:w-64`} />
                            </a>
                        </Link>
                        <nav className="hidden md:flex space-x-10 space-x-reverse mr-10">
                            {resources.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                >
                                    <a className={`text-base font-medium text-gray-500 hover:text-gray-900 ${item?.className}`}>{item.name}</a>
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>

                    <div className="hidden md:flex items-center justify-end">
                        <a href={`${process.env.PACHIM_USER_APP_SITE}/auth/login`} target="_blank">
                            <span className="mr-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700">ورود به پنل پچّیم</span>
                        </a>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Logo className={`w-48 md:w-64`} />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>

                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-3 gap-y-4 gap-x-8">
                                {resources.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                    >
                                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">{item.name}</a>
                                    </Link>
                                ))}
                            </div>
                            <div>
                                <Link href={`${process.env.PACHIM_USER_APP_SITE}/auth/register`}>
                                    <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700">ایجاد حساب کاربری</a>
                                </Link>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    در پچیم اکانت دارید؟{' '}
                                    <Link href={`${process.env.PACHIM_USER_APP_SITE}/auth/login`} >
                                        <a className="text-sky-600 hover:text-sky-500">ورود</a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
