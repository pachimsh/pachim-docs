import { Disclosure } from '@headlessui/react'
import Link from "next/link";
import {ChevronDownIcon, ChevronLeftIcon, MinusSmallIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";
import {checkSidebarItemIsActive} from "../helpers";
import {navigation} from "../pages/_sidebar";

export default function Sidebar() {
    const { asPath } = useRouter();
    const route = asPath.split('#')[0];

    const printCategoryChildren = (item , index) => {
        return (
            <div key={index} className="text-gray-600 hover:text-gray-700 rounded-md font-medium">
                {
                    (item?.children && item.children.length)
                    ? (
                        <>
                            <Disclosure defaultOpen={( item?.open || checkSidebarItemIsActive(item , route)) ?? false}>
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
