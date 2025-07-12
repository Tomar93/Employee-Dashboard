import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(16);

  return (
    <div className="min-h-screen bg-[#E7ECFE] flex">
      {/* Sidebar */}
      <div className="w-[252px] h-screen bg-[#567BFF] shadow-2xl fixed left-0 top-0 flex flex-col">
        {/* Logo */}
        <div className="p-4">
          <div className="flex items-center gap-2 px-2 py-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 165 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.7306 29.6957C22.35 28.8115 19.9015 28.6755 17.6569 29.2876C16.0926 29.6957 14.5962 30.5119 13.2359 31.5321L12.2837 32.3483L12.0116 32.6204L12.6237 33.1645C12.6918 33.1645 12.6918 33.2325 12.7598 33.3005C12.8958 33.4366 13.0318 33.5046 13.2359 33.6406L13.644 33.9127L14.0521 33.5726C14.1201 33.5046 14.2561 33.3686 14.3922 33.3005C15.6164 32.2803 16.9768 31.6001 18.4051 31.2601C20.2415 30.784 22.214 30.852 24.1864 31.6001C25.8188 32.2123 29.1516 32.9605 33.1646 31.2601L33.3006 31.192L33.5046 30.988C33.5046 30.92 33.5727 30.92 33.6407 30.852C33.9808 30.4439 34.3208 30.0358 34.5929 29.5597L35.9532 27.4512L33.7767 28.6755C30.5799 30.4439 27.6553 30.7839 24.7306 29.6957Z"
                fill="white"
              />
              <path
                d="M15.4124 22.3502C17.2489 21.8741 19.2213 21.9421 21.1938 22.6903C23.3703 23.5065 28.9476 24.6628 35.2051 19.0175L36.2253 17.9972L36.2933 17.9292L36.5654 17.6571L36.4293 17.3171C36.3613 17.045 36.2253 16.7049 36.0893 16.3648L35.7492 15.4126L35.069 16.0928C35.001 16.2288 34.865 16.2968 34.729 16.4328C31.7362 19.4936 27.1112 22.6223 21.8059 20.7179C19.4254 19.8336 16.9768 19.6976 14.7323 20.3098C12.5558 20.9219 10.6513 22.0782 8.8829 23.7105V23.6425L7.86266 24.7308C7.86266 24.7988 7.79466 24.7988 7.72664 24.8668L7.52258 25.0709L7.5906 25.3429C7.65862 25.683 7.79465 26.0231 7.86266 26.3632L8.27076 27.4514L8.95092 26.5672C9.01894 26.4312 9.15497 26.3632 9.22298 26.2271C10.6513 24.9348 12.6238 23.0984 15.4124 22.3502Z"
                fill="white"
              />
              <text
                x="42"
                y="28"
                className="text-lg font-bold font-goldman text-white"
              >
                workflow
              </text>
            </svg>
          </div>
        </div>

        {/* Search */}
        <div className="px-[18px] mb-6">
          <div className="relative">
            <div className="w-[216px] h-[38px] bg-[#E7ECFE] rounded-xl shadow-lg flex items-center px-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#567BFF]"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#567BFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 20.9999L16.65 16.6499"
                  stroke="#567BFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none text-sm text-[#B5B7C0] px-2 flex-1"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-[27px] space-y-1">
          {/* Dashboard - Active */}
          <div className="h-[43px] flex items-center border-l-3 border-white/80 bg-white/16 -ml-[27px] pl-[27px]">
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12H15V22"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white font-medium">Dashboard</span>
            </div>
          </div>

          {/* Employees */}
          <div
            className="h-[43px] flex items-center cursor-pointer hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => navigate("/employees")}
          >
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white font-medium">Employees</span>
            </div>
          </div>

          {/* Attendance */}
          <div className="h-[43px] flex items-center">
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 10H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 14H8.01"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14H12.01"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 14H16.01"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 18H8.01"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18H12.01"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 18H16.01"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white font-medium">Attendance</span>
            </div>
          </div>

          {/* Tasks */}
          <div className="h-[43px] flex items-center">
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 18H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6L4 7L6 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 12L4 13L6 11"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18L4 19L6 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white font-medium">Tasks</span>
            </div>
          </div>

          {/* Settings */}
          <div className="h-[43px] flex items-center">
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.22 2H11.78C11.2496 2 10.7409 2.21071 10.3658 2.58579C9.99072 2.96086 9.78 3.46957 9.78 4V4.18C9.77964 4.53073 9.68706 4.87519 9.51154 5.17884C9.33602 5.48248 9.08374 5.73464 8.78 5.91L8.35 6.16C8.04596 6.33554 7.70108 6.42795 7.35 6.42795C6.99893 6.42795 6.65404 6.33554 6.35 6.16L6.2 6.08C5.74107 5.81526 5.19584 5.74344 4.684 5.88031C4.17217 6.01717 3.73555 6.35154 3.47 6.81L3.25 7.19C2.98526 7.64893 2.91345 8.19416 3.05031 8.706C3.18717 9.21783 3.52154 9.65445 3.98 9.92L4.13 10.02C4.43228 10.1945 4.68362 10.4451 4.85905 10.7468C5.03448 11.0486 5.1279 11.391 5.13 11.74V12.25C5.1314 12.6024 5.03965 12.949 4.86405 13.2545C4.68844 13.5601 4.43521 13.8138 4.13 13.99L3.98 14.08C3.52154 14.3456 3.18717 14.7822 3.05031 15.294C2.91345 15.8058 2.98526 16.3511 3.25 16.81L3.47 17.19C3.73555 17.6485 4.17217 17.9828 4.684 18.1197C5.19584 18.2566 5.74107 18.1847 6.2 17.92L6.35 17.84C6.65404 17.6645 6.99893 17.5721 7.35 17.5721C7.70108 17.5721 8.04596 17.6645 8.35 17.84L8.78 18.09C9.08374 18.2654 9.33602 18.5175 9.51154 18.8212C9.68706 19.1248 9.77964 19.4693 9.78 19.82V20C9.78 20.5304 9.99072 21.0391 10.3658 21.4142C10.7409 21.7893 11.2496 22 11.78 22H12.22C12.7504 22 13.2591 21.7893 13.6342 21.4142C14.0093 21.0391 14.22 20.5304 14.22 20V19.82C14.2204 19.4693 14.3129 19.1248 14.4885 18.8212C14.664 18.5175 14.9163 18.2654 15.22 18.09L15.65 17.84C15.954 17.6645 16.2989 17.5721 16.65 17.5721C17.0011 17.5721 17.346 17.6645 17.65 17.84L17.8 17.92C18.2589 18.1847 18.8042 18.2566 19.316 18.1197C19.8278 17.9828 20.2645 17.6485 20.53 17.19L20.75 16.8C21.0147 16.3411 21.0866 15.7958 20.9497 15.284C20.8128 14.7722 20.4785 14.3356 20.02 14.07L19.87 13.99C19.5648 13.8138 19.3116 13.5601 19.136 13.2545C18.9604 12.949 18.8686 12.6024 18.87 12.25V11.75C18.8686 11.3976 18.9604 11.051 19.136 10.7455C19.3116 10.4399 19.5648 10.1862 19.87 10.01L20.02 9.92C20.4785 9.65445 20.8128 9.21783 20.9497 8.706C21.0866 8.19416 21.0147 7.64893 20.75 7.19L20.53 6.81C20.2645 6.35154 19.8278 6.01717 19.316 5.88031C18.8042 5.74344 18.2589 5.81526 17.8 6.08L17.65 6.16C17.346 6.33554 17.0011 6.42795 16.65 6.42795C16.2989 6.42795 15.954 6.33554 15.65 6.16L15.22 5.91C14.9163 5.73464 14.664 5.48248 14.4885 5.17884C14.3129 4.87519 14.2204 4.53073 14.22 4.18V4C14.22 3.46957 14.0093 2.96086 13.6342 2.58579C13.2591 2.21071 12.7504 2 12.22 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white font-medium">Settings</span>
            </div>
          </div>
        </nav>

        {/* User profile */}
        <div className="p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div className="flex-1">
            <div className="text-white text-sm font-medium">Tom H.</div>
            <div className="text-[#CACACA] text-xs">Project Manager</div>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#CACACA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-[252px] flex-1 p-6">
        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Total Employees */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#656565] text-base mb-1">
                  Total Employees
                </div>
                <div className="text-[#567BFF] text-5xl font-bold mb-2">
                  142
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 19L12 5"
                      stroke="#1DB763"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12L12 5L19 12"
                      stroke="#1DB763"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#1DB763] text-sm">
                    12% from last month
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 text-[#656565]">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.3333 44.25V40.0833C33.3333 37.8732 32.4553 35.7536 30.8925 34.1908C29.3297 32.628 27.2101 31.75 25 31.75H12.5C10.2899 31.75 8.17024 32.628 6.60743 34.1908C5.04463 35.7536 4.16666 37.8732 4.16666 40.0833V44.25"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.75 23.4167C23.3524 23.4167 27.0833 19.6857 27.0833 15.0833C27.0833 10.481 23.3524 6.75 18.75 6.75C14.1476 6.75 10.4167 10.481 10.4167 15.0833C10.4167 19.6857 14.1476 23.4167 18.75 23.4167Z"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45.8333 44.2502V40.0835C45.832 38.2371 45.2174 36.4434 44.0862 34.9842C42.955 33.5249 41.3711 32.4826 39.5833 32.021"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33.3333 7.021C35.1259 7.47996 36.7147 8.52246 37.8493 9.98414C38.9838 11.4458 39.5997 13.2436 39.5997 15.0939C39.5997 16.9443 38.9838 18.742 37.8493 20.2037C36.7147 21.6654 35.1259 22.7079 33.3333 23.1668"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Active Tasks */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#656565] text-base mb-1">
                  Active Tasks
                </div>
                <div className="text-[#567BFF] text-5xl font-bold mb-2">87</div>
                <div className="flex items-center gap-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5L12 19"
                      stroke="#A40015"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 12L12 19L5 12"
                      stroke="#A40015"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#A40015] text-sm">
                    3% from last week
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 text-[#656565]">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8333 13H43.75"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.8333 25.5H43.75"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.8333 38H43.75"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.25 12.9998L8.33333 15.0832L12.5 10.9165"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.25 25.4998L8.33333 27.5832L12.5 23.4165"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.25 37.9998L8.33333 40.0832L12.5 35.9165"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Interns */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#656565] text-base mb-1">Interns</div>
                <div className="text-[#567BFF] text-5xl font-bold mb-2">24</div>
                <div className="flex items-center gap-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 19L12 5"
                      stroke="#1DB763"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12L12 5L19 12"
                      stroke="#1DB763"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#1DB763] text-sm">
                    5% from last week
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 text-[#656565]">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.8333 21.3332V33.8332M45.8333 21.3332L25 10.9165L4.16663 21.3332L25 31.7498L45.8333 21.3332Z"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 25.5V35.9167C18.75 42.1667 31.25 42.1667 37.5 35.9167V25.5"
                    stroke="#656565"
                    strokeWidth="4.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Charts section */}
        <div className="grid grid-cols-5 gap-6">
          {/* Employee Activity Chart */}
          <div className="col-span-3 bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-black">
                Employee Activity
              </h3>
              <div className="bg-[#F9FBFF] px-4 py-2 rounded-lg">
                <span className="text-xs text-[#7E7E7E]">Quarterly</span>
              </div>
            </div>

            {/* Chart */}
            <div className="flex items-end gap-3 h-64">
              {[
                { month: "Jan", height: "h-24" },
                { month: "Feb", height: "h-32" },
                { month: "Mar", height: "h-40" },
                { month: "Apr", height: "h-28" },
                { month: "May", height: "h-20" },
                { month: "Jun", height: "h-28" },
                { month: "Jul", height: "h-32" },
                { month: "Aug", height: "h-52", active: true },
                { month: "Sep", height: "h-44" },
                { month: "Oct", height: "h-36" },
                { month: "Nov", height: "h-24" },
                { month: "Dec", height: "h-40" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div className="relative">
                    {item.active && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs font-semibold">
                        35%
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black"></div>
                      </div>
                    )}
                    <div
                      className={`w-8 ${
                        item.active ? "bg-[#5932EA]" : "bg-[#F2EFFF]"
                      } rounded-lg ${item.height}`}
                    ></div>
                  </div>
                  <span
                    className={`text-xs ${
                      item.active
                        ? "font-bold text-[#4F4F4F]"
                        : "text-[#4F4F4F]"
                    }`}
                  >
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance Overview */}
          <div className="col-span-2 bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-black mb-6">
              Attendance Overview
            </h3>

            {/* Calendar header */}
            <div className="flex items-center justify-between mb-4">
              <button>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.386064 4.12332L0.438102 4.06439L3.56586 0.936638C3.81015 0.692345 4.20623 0.692345 4.45052 0.936638C4.67602 1.16214 4.69337 1.51697 4.50256 1.76237L4.45052 1.8213L2.39114 3.88117H9.63814C9.98363 3.88117 10.2637 4.16124 10.2637 4.50672C10.2637 4.82753 10.0222 5.09193 9.7111 5.12806L9.63814 5.13227H2.39114L4.45052 7.19214C4.67602 7.41765 4.69337 7.77248 4.50256 8.01788L4.45052 8.07681C4.22502 8.30231 3.87019 8.31965 3.62479 8.12885L3.56586 8.07681L0.438102 4.94905C0.212601 4.72355 0.195255 4.36872 0.386064 4.12332Z"
                    fill="#3F8CFF"
                  />
                </svg>
              </button>
              <h4 className="font-bold text-sm text-[#0A1629]">June, 2025</h4>
              <button>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1457 4.12332L10.0937 4.06439L6.9659 0.936638C6.72161 0.692345 6.32553 0.692345 6.08124 0.936638C5.85574 1.16214 5.83839 1.51697 6.0292 1.76237L6.08124 1.8213L8.14062 3.88117H0.893617C0.548135 3.88117 0.268066 4.16124 0.268066 4.50672C0.268066 4.82753 0.509554 5.09193 0.820665 5.12806L0.893617 5.13227H8.14062L6.08124 7.19214C5.85574 7.41765 5.83839 7.77248 6.0292 8.01788L6.08124 8.07681C6.30674 8.30231 6.66158 8.31965 6.90697 8.12885L6.9659 8.07681L10.0937 4.94905C10.3192 4.72355 10.3365 4.36872 10.1457 4.12332Z"
                    fill="#3F8CFF"
                  />
                </svg>
              </button>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div
                  key={day}
                  className="text-center text-xs text-[#B2B8C2] py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 42 }, (_, i) => {
                const day = i - 6; // Adjust to start from 1
                const isCurrentMonth = day >= 1 && day <= 30;
                const isSelected = day === selectedDate;
                const isDisabled = day < 1 || day > 30;

                return (
                  <button
                    key={i}
                    onClick={() => isCurrentMonth && setSelectedDate(day)}
                    className={`w-8 h-8 text-xs rounded flex items-center justify-center ${
                      isSelected
                        ? "bg-[#567BFF] text-white font-bold border border-[#0A1629]"
                        : isDisabled
                          ? "text-[#B2B8C2]"
                          : "text-[#0A1629] hover:bg-gray-100"
                    }`}
                    disabled={isDisabled}
                  >
                    {day < 1 ? day + 31 : day > 30 ? day - 30 : day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
