import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: "Active" | "Inactive";
}

const mockEmployees: Employee[] = [
  {
    id: 1,
    name: "Darrell Steward",
    email: "kenzi.lawson@example.com",
    role: "Web Designer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 2,
    name: "Albert Flores",
    email: "georgia.young@example.com",
    role: "Marketing Coordinator",
    department: "Operations",
    status: "Active",
  },
  {
    id: 3,
    name: "Ralph Edwards",
    email: "deanna.curtis@example.com",
    role: "Software Tester",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: 4,
    name: "Bessie Cooper",
    email: "jessica.hanson@example.com",
    role: "Ethical Hacker",
    department: "Engineering",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Ronald Richards",
    email: "tim.jennings@example.com",
    role: "UI/UX Designer",
    department: "Engineering",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Devon Lane",
    email: "bill.sanders@example.com",
    role: "President of Sales",
    department: "Manning",
    status: "Active",
  },
  {
    id: 7,
    name: "Wade Warren",
    email: "willie.jennings@example.com",
    role: "Software Developer",
    department: "HSEQ",
    status: "Active",
  },
  {
    id: 8,
    name: "Dianne Russell",
    email: "michael.mitc@example.com",
    role: "Team Leader",
    department: "IT",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Arlene McCoy",
    email: "tanya.hill@example.com",
    role: "Web Designer",
    department: "Maintenance",
    status: "Active",
  },
  {
    id: 10,
    name: "Leslie Alexander",
    email: "alma.lawson@example.com",
    role: "Project Manager",
    department: "Maintenance",
    status: "Active",
  },
  {
    id: 11,
    name: "Robert Fox",
    email: "nathan.roberts@example.com",
    role: "Scrum Master",
    department: "HSEQ",
    status: "Active",
  },
];

export function EmployeeList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    fullName: "",
    email: "",
    role: "",
    department: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const filteredEmployees = mockEmployees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const validateEmployeeForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!newEmployee.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!newEmployee.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(newEmployee.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!newEmployee.role) {
      newErrors.role = "Role is required";
    }

    if (!newEmployee.department) {
      newErrors.department = "Department is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddEmployee = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmployeeForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Employee added successfully:", newEmployee);

      // Reset form and close modal
      setNewEmployee({
        fullName: "",
        email: "",
        role: "",
        department: "",
      });
      setShowAddModal(false);

      // Show success message (in a real app, you'd update the employee list)
      alert("Employee added successfully!");
    } catch (error) {
      setErrors({ general: "Failed to add employee. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setNewEmployee({
      fullName: "",
      email: "",
      role: "",
      department: "",
    });
    setErrors({});
  };

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
          {/* Dashboard */}
          <div
            className="h-[43px] flex items-center cursor-pointer hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => navigate("/dashboard")}
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

          {/* Employees - Active */}
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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[#567BFF] text-3xl font-bold">Employees</h1>

          <div className="flex items-center gap-6">
            {/* Add Employee Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-[#567BFF] text-white px-4 py-2 rounded-md flex items-center gap-2 font-medium hover:bg-[#567BFF]/90 transition-colors"
            >
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
                  d="M19 8V14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 11H16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add an employee
            </button>

            {/* Search and Sort */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-[216px] h-[38px] bg-white rounded-lg shadow-lg flex items-center px-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="#656565"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.9999 20.9999L16.6499 16.6499"
                      stroke="#656565"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search employees"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm text-[#656565] px-2 flex-1"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="w-[154px] h-[38px] bg-white rounded-lg shadow-lg flex items-center px-3">
                  <span className="text-sm text-[#656565] flex-1">
                    Sort by: <span className="font-bold">{sortBy}</span>
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 6.75L9 11.25L13.5 6.75"
                      stroke="#656565"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <button className="bg-[#567BFF] text-white px-2 py-1 rounded-md text-sm font-medium hover:bg-[#567BFF]/90 transition-colors">
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Employee Table */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          {/* Table Headers */}
          <div className="grid grid-cols-12 gap-4 mb-5 text-[#656565] text-base font-normal">
            <div className="col-span-2">Name</div>
            <div className="col-span-3">Email</div>
            <div className="col-span-2">Role</div>
            <div className="col-span-2">Department</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-2">Actions</div>
          </div>

          {/* Employee Rows */}
          <div className="space-y-4">
            {filteredEmployees.map((employee) => (
              <div
                key={employee.id}
                className="grid grid-cols-12 gap-4 items-center py-1"
              >
                <div className="col-span-2 text-black text-base">
                  {employee.name}
                </div>
                <div className="col-span-3 text-black text-base">
                  {employee.email}
                </div>
                <div className="col-span-2 text-black text-base">
                  {employee.role}
                </div>
                <div className="col-span-2 text-black text-base">
                  {employee.department}
                </div>
                <div className="col-span-1">
                  <span
                    className={`px-3 py-1 rounded text-sm font-medium border ${
                      employee.status === "Active"
                        ? "bg-[#1DB763]/20 text-[#1DB763] border-[#1DB763]"
                        : "bg-[#A40015]/20 text-[#A40015] border-[#A40015]"
                    }`}
                  >
                    {employee.status}
                  </span>
                </div>
                <div className="col-span-2 flex items-center gap-3">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 4H4.5C3.96957 4 3.46086 4.21071 3.08579 4.58579C2.71071 4.96086 2.5 5.46957 2.5 6V20C2.5 20.5304 2.71071 21.0391 3.08579 21.4142C3.46086 21.7893 3.96957 22 4.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V13"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 2.50023C19.3978 2.1024 19.9374 1.87891 20.5 1.87891C21.0626 1.87891 21.6022 2.1024 22 2.50023C22.3978 2.89805 22.6213 3.43762 22.6213 4.00023C22.6213 4.56284 22.3978 5.1024 22 5.50023L12.5 15.0002L8.5 16.0002L9.5 12.0002L19 2.50023Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 6H21.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.5 6V20C19.5 21 18.5 22 17.5 22H7.5C6.5 22 5.5 21 5.5 20V6"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.5 6V4C8.5 3 9.5 2 10.5 2H14.5C15.5 2 16.5 3 16.5 4V6"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Employee Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-[458px] shadow-2xl">
            <h2 className="text-[#567BFF] text-xl font-semibold mb-8">
              Add New Employee
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-workflow-text-primary font-medium text-base mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full px-3 py-2 pr-14 border border-workflow-border-light rounded-md bg-white text-workflow-placeholder placeholder:text-workflow-placeholder focus:outline-none focus:ring-2 focus:ring-workflow-primary focus:border-workflow-primary"
                />
              </div>

              <div>
                <label className="block text-workflow-text-primary font-medium text-base mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-3 py-2 pr-14 border border-workflow-border-light rounded-md bg-white text-workflow-placeholder placeholder:text-workflow-placeholder focus:outline-none focus:ring-2 focus:ring-workflow-primary focus:border-workflow-primary"
                />
              </div>

              <div className="flex gap-15">
                <div className="flex-1">
                  <label className="block text-workflow-text-primary font-medium text-base mb-1.5">
                    Role
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2 border border-[#BFBFBF] rounded-md bg-white text-[#656565] appearance-none focus:outline-none focus:ring-2 focus:ring-workflow-primary focus:border-workflow-primary">
                      <option>Select role</option>
                      <option>Web Designer</option>
                      <option>Software Developer</option>
                      <option>Project Manager</option>
                      <option>UI/UX Designer</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="#656565"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-workflow-text-primary font-medium text-base mb-1.5">
                    Department
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2 border border-[#BFBFBF] rounded-md bg-white text-[#656565] appearance-none focus:outline-none focus:ring-2 focus:ring-workflow-primary focus:border-workflow-primary">
                      <option>Select department</option>
                      <option>Engineering</option>
                      <option>Operations</option>
                      <option>Human Resources</option>
                      <option>IT</option>
                      <option>Maintenance</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="#656565"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-[#567BFF] text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-[#567BFF]/90 transition-colors"
                >
                  Add Employee
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="bg-[#E7ECFE] text-workflow-text-primary px-4 py-2 rounded-md font-medium text-sm hover:bg-[#E7ECFE]/80 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
