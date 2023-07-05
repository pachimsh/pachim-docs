import {Fragment, useState} from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {ArrowPathIcon, FaceFrownIcon, GlobeAmericasIcon} from '@heroicons/react/24/outline'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import {debounce} from "lodash";
import {useRouter} from "next/router";

export default function SearchBox({ setShowSearchBox }) {
    const [query, setQuery] = useState('')
    const [searchLoading , setSearchLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const router = useRouter();

    const sendSearchRequestQuery = async (query) => {
        try {
            setSearchLoading(true);
            let res = await fetch(`/api/search?q=${query}`);
            let { results } = await res.json();
            setSearchResults(results ?? [])
        } catch (e) {
            setSearchResults([]);
        }

        setSearchLoading(false);
    }

    const searchHandler = debounce(async (e) => {
        setQuery(e.target.value)
        if(e.target.value !== "") {
            await sendSearchRequestQuery(e.target.value);
        } else {
            setSearchResults([]);
        }
    }, 400);

    const goToDocumentPage = async (path) => {
        setShowSearchBox(false);
        await router.push(path);
    }

    return (
        <Transition.Root show={true} as={Fragment} afterLeave={() => setQuery('')} appear>
            <Dialog as="div" className="relative z-50" onClose={setShowSearchBox}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                            <Combobox>
                                <div className="relative">
                                    <MagnifyingGlassIcon
                                        className="pointer-events-none absolute top-3.5 right-4 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <Combobox.Input
                                        className="h-12 w-full border-0 bg-transparent pr-11 pl-4 outline-none text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                                        placeholder="جستجو..."
                                        onChange={searchHandler}
                                    />
                                </div>

                                {query === '' && !searchLoading && (
                                    <div className="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                                        <GlobeAmericasIcon className="mx-auto h-10 w-10 text-gray-400" aria-hidden="true" />
                                        <p className="mt-4 font-semibold text-gray-900">عنوان مورد نظر خود را وارد کنید</p>
                                        <p className="mt-2 text-gray-500">
                                           دسترسی سریع به مستندات پچیم
                                        </p>
                                    </div>
                                )}

                                {searchLoading && (
                                    <div className="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                                        <ArrowPathIcon className="mx-auto h-8 w-8 text-gray-400 animate-spin" aria-hidden="true" />
                                        <p className="mt-4 text-gray-500">در حال جستجو لطفا کمی منتظر بمانید</p>
                                    </div>
                                ) }

                                {searchResults.length > 0 && !searchLoading && (
                                    <Combobox.Options static className="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2">
                                        {searchResults.map(({ item } , index) => (
                                            <div key={index}>
                                                <Combobox.Option
                                                    key={item.id}
                                                    value={item}
                                                    className={({ active }) => `cursor-default select-none px-4 py-2 ${active && 'bg-gray-100'}`}
                                                >
                                                    <div className="text-base flex items-center rtl group" onClick={() => goToDocumentPage(item?.path)}>
                                                        <span>{item?.meta?.title}</span>
                                                    </div>
                                                </Combobox.Option>
                                            </div>
                                        ))}
                                    </Combobox.Options>
                                )}

                                {query !== '' && searchResults.length === 0 && !searchLoading && (
                                    <div className="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                                        <FaceFrownIcon className="mx-auto h-10 w-10 text-gray-400" aria-hidden="true" />
                                        <p className="mt-4 font-semibold text-gray-900">متاسفانه نتیجه‌ای یافت نشد</p>
                                        <p className="mt-2 text-gray-500">نتوانستیم همچین چیزی پیدا کنیم، مجددا با عنوان دیگری تلاش کنید</p>
                                    </div>
                                )}
                            </Combobox>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
