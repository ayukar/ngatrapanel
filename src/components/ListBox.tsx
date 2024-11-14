"use client"
import React from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';

type Props = {
    options : any[]
}

const ListBox = ({options}: Props) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="w-72 mx-auto mt-20 relative">
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        {({ open }) => (
          <>
            <ListboxButton className="w-full py-2 px-4 text-center bg-gray-200 rounded-lg shadow-md focus:outline-none">
              {selectedOption.name}
            </ListboxButton>

            <Transition
              as={Fragment}
              show={open}
              enter="transition ease-in-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in-out duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <ListboxOptions
                className="absolute z-10 mt-1 w-full py-1 bg-white shadow-lg rounded-lg max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {options.map((option) => (
                  <ListboxOption key={option.id} value={option}>
                    {({ active, selected }) => (
                      <div
                        className={`${
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                        } cursor-pointer select-none relative py-2 px-4 flex items-center justify-start gap-x-2`}
                      >
                        {option.name}
                        {selected && (
                          <span className=" inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.293 5.293a1 1 0 011.414 1.414L9 14.414l-4.707-4.707a1 1 0 111.414-1.414L9 11.586l7.293-7.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  )
}

export default ListBox