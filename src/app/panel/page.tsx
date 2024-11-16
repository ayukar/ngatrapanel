"use client"
import React, { useState } from "react";
import {
  AiOutlineSetting,
  AiOutlineTeam,
  AiOutlineCreditCard,
  AiOutlineSkin,
  AiOutlineUser,
  AiOutlineGlobal,
  AiOutlineQuestionCircle,
  AiOutlineApi,
} from "react-icons/ai";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Data untuk sidebar
  const sidebarItems = [
    { name: "General settings", href: "#", icon: <AiOutlineSetting size={20} /> },
    { name: "Providers", href: "#", icon: <AiOutlineTeam size={20} /> },
    { name: "Payment methods", href: "#", icon: <AiOutlineCreditCard size={20} /> },
    { name: "Design", href: "#", icon: <AiOutlineSkin size={20} /> },
    { name: "Managers", href: "#", icon: <AiOutlineUser size={20} /> },
    { name: "Language", href: "#", icon: <AiOutlineGlobal size={20} /> },
    { name: "Support and FAQ", href: "#", icon: <AiOutlineQuestionCircle size={20} /> },
    { name: "API", href: "#", icon: <AiOutlineApi size={20} /> },
  ];

  // Data untuk konten utama
  const mainContentItems = [
    {
      title: "Custom Registration Fields",
      description: "Added fields: 0",
      action: null,
    },
    {
      title: "Services settings",
      description: "",
      action: null,
    },
    {
      title: "Services updates",
      description: "Active",
      action: <span className="text-green-500">Active</span>,
    },
    {
      title: "Fast order",
      description: "Active",
      action: <span className="text-green-500">Active</span>,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-white border-r transition-all duration-300`}
      >
        <div className="px-4 py-4 flex justify-between items-center">
          <button
            className="rounded-md bg-blue-100 p-2 text-blue-600 hover:bg-blue-200"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "<<" : ">>"}
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 rounded-md px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <span>{item.icon}</span>
                  {isSidebarOpen && <span>{item.name}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">General settings</h1>
          {/* User Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 rounded-md border px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src="https://via.placeholder.com/24"
                alt="User Avatar"
                className="h-6 w-6 rounded-full"
              />
              <span>User Name</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg">
                <button
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                  onClick={() => alert("Logout")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        <section className="mt-6">
          <div className="mb-4 rounded-lg border bg-white p-6">
            <h2 className="text-lg font-bold text-gray-800">Save 10% from commission</h2>
            <p className="text-sm text-gray-500">
              Enable to automatically save on transactions.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-700">Toggle Option</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            {mainContentItems.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border bg-white p-6 flex items-center justify-between"
              >
                <div>
                  <span className="text-gray-800">{item.title}</span>
                  {item.description && (
                    <p className="text-sm text-gray-500">{item.description}</p>
                  )}
                </div>
                {item.action}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
