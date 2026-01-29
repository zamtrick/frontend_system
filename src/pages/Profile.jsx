import React, { useState, useEffect } from "react";
import { UserPen, X } from "lucide-react";

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-100 text-sm">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium text-black text-right">{value}</span>
  </div>
);

const Profile = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Employee state
  const [employee, setEmployee] = useState({
    employee_id: "EMP-00123",
    department: "IT Department",
    position: "IT Staff",
    email: "john.doe@company.com",
    phone_number: "09058878315",
    location: "Calbiga Branch",
    employment_type: "Full Time",
    points: 150,
    full_name: "Pat",
  });

  // Modal inputs state
  const [formData, setFormData] = useState({ ...employee });
  const [errors, setErrors] = useState({}); // For validation

  // Load employee data from localStorage on mount
  useEffect(() => {
    const storedEmployee = localStorage.getItem("employee");
    if (storedEmployee) {
      setEmployee(JSON.parse(storedEmployee));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.full_name.trim()) newErrors.full_name = "Full Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone_number.trim()) newErrors.phone_number = "Phone number is required";
    else if (!/^\d{7,15}$/.test(formData.phone_number.replace(/[-\s]/g, "")))
      newErrors.phone_number = "Invalid phone number";

    if (!formData.employee_id.trim()) newErrors.employee_id = "Employee ID is required";
    if (!formData.department.trim()) newErrors.department = "Department is required";
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.employment_type.trim())
      newErrors.employment_type = "Employment Type is required";

    if (formData.points === "" || formData.points < 0)
      newErrors.points = "Points must be 0 or more";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save changes to state and localStorage
  const handleSave = () => {
    if (!validate()) return; // Stop if invalid
    setEmployee({ ...formData });
    localStorage.setItem("employee", JSON.stringify(formData));
    setIsEditOpen(false);
  };

  // Render input with error
  const renderInput = (name, type = "text", placeholder = "") => (
    <div>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`border rounded-xl px-3 py-2 w-full focus:outline-none focus:ring-2 ${
          errors[name] ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-yellow-400"
        }`}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <section className="h-screen bg-white max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-16 md:pt-10 pb-24 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="hidden md:block mb-4 flex-shrink-0">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">My Profile</h1>
        <p className="mt-1 text-gray-500">
          Manage your personal information and preferences
        </p>
      </div>

      <section className="flex flex-1 flex-col lg:flex-row gap-5 lg:gap-12 overflow-hidden">
        <section className="flex-1 flex flex-col gap-5 sm:gap-8 overflow-y-auto">
          <section className="rounded-3xl bg-white border border-gray-100 p-4 sm:p-6 lg:p-8 shadow-sm flex-shrink-0 cursor-pointer">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6 relative">
                Personal Information
                <span className="absolute -bottom-2 left-0 h-1 w-14 sm:w-16 bg-yellow-400 rounded-full"></span>
              </h2>
              <UserPen
                className="mb-4 sm:mb-6 cursor-pointer text-yellow-400 hover:text-yellow-500"
                onClick={() => {
                  setFormData({ ...employee });
                  setErrors({});
                  setIsEditOpen(true);
                }}
              />
            </div>

            <InfoRow label="Employee ID" value={employee.employee_id} />
            <InfoRow label="Department" value={employee.department} />
            <InfoRow label="Position" value={employee.position} />
            <InfoRow label="Email" value={employee.email} />
            <InfoRow label="Phone Number" value={employee.phone_number} />
            <InfoRow label="Location" value={employee.location} />
            <InfoRow label="Employment Type" value={employee.employment_type} />
            <InfoRow label="Points" value={employee.points} />
          </section>
        </section>
      </section>

      {/* Edit Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-lg overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setIsEditOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-2">
              <UserPen size={20} />
              Edit Profile
            </h2>

            {/* Editable Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {renderInput("full_name", "text", "Full Name")}
              {renderInput("email", "email", "Email Address")}
              {renderInput("phone_number", "text", "Phone Number")}
              {renderInput("location", "text", "Location")}
              {renderInput("employee_id", "text", "Employee ID")}
              {renderInput("department", "text", "Department")}
              {renderInput("position", "text", "Position")}
              {renderInput("employment_type", "text", "Employment Type")}
              {renderInput("points", "number", "Points")}
            </div>

            <button
              onClick={handleSave}
              className="mt-5 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-xl hover:bg-yellow-500 transition w-full"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
