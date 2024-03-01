import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { InfoIcon, ChatLeftIcon, BellIcon, ArrowDownIcon, CompanyIcon } from '@/svgs';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'My Work', href: '#', current: false },
  { name: 'Messages', href: '#', current: false },
  { name: 'Employers', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
  { name: 'Log Out', href: '#', current: false },
];

const NavBar = () => {
  return (
    <Disclosure as="nav" className="fixed z-20 w-full bg-white md:fixed">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-[4.6rem]">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-[#7070FF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? <XMarkIcon className="block w-6 h-6" aria-hidden="true" /> : <Bars3Icon className="block w-6 h-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="items-center flex-shrink-0 hidden md:flex lg:flex">
                  <CompanyIcon className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="mr-4 text-gray-400 bg-white">
                  <InfoIcon className="w-4 h-4" aria-hidden="true" />
                </button>
                <button type="button" className="mr-4 text-gray-400 bg-white ">
                  <ChatLeftIcon className="w-4 h-4" aria-hidden="true" />
                </button>
                <button type="button" className="mr-4 text-gray-400 bg-white">
                  <BellIcon className="w-4 h-4" aria-hidden="true" />
                </button>
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center text-sm bg-white rounded-full focus:outline-none">
                    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <p className="mx-2 text-slate-500">James Bond</p>
                    <ArrowDownIcon className="w-4 h-4" aria-hidden="true" />
                  </Menu.Button>
                  <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as="a" href={item.href} className={`${item.current ? 'bg-[#7070FF] text-white' : 'text-[#5E5E6F] hover:bg-[#7070FF] hover:text-white'} block rounded-md px-3 py-2 text-base font-medium`}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
