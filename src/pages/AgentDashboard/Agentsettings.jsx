// import React, { useState, useEffect } from "react";
// import IconDelete from "../../assets/images/agentdashboard/delete.png";
// import IconEdit from "../../assets/images/agentdashboard/edit.png";
// import IconLogin from "../../assets/images/agentdashboard/history.png";
// import Icon2Step from "../../assets/images/agentdashboard/tick.png";
// import ProfileImage from "../../assets/images/agentdashboard/Ellipse3539.png";

// const SettingsPage = () => {
//   const [activeTab, setActiveTab] = useState("Account Management");

//   const [userData, setUserData] = useState({
//     firstName: "John",
//     lastName: "Brevis",
//     email: "johnbrevis@gmail.com",
//     password: "************",
//     profileImage: ProfileImage,
//     lastLogin: "May 10, 2025, 10:49 AM",
//   });

//   const [editingEmail, setEditingEmail] = useState(false);
//   const [editingPassword, setEditingPassword] = useState(false);
//   const [tempEmail, setTempEmail] = useState(userData.email);
//   const [tempPassword, setTempPassword] = useState("");

//   useEffect(() => {
//     document.body.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
//   }, []);

//   const handleChange = (key, value) => {
//     setUserData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSaveEmail = () => {
//     setUserData((prev) => ({ ...prev, email: tempEmail }));
//     setEditingEmail(false);
//   };

//   const handleSavePassword = () => {
//     if (tempPassword.trim()) {
//       setUserData((prev) => ({ ...prev, password: "************" }));
//       setTempPassword("");
//       setEditingPassword(false);
//     }
//   };

//   const tabs = [
//     "Account Management",
//     "Billing Info",
//     "Commission Preferences",
//     "Notification Settings",
//     "Regional Preferences",
//   ];

//   const renderTabContent = () => {
//     if (activeTab === "Account Management") {
//       return (
//         <div className="mt-8">
//           <div className="mb-8 flex items-center">
//             <img
//               src={userData.profileImage}
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover"
//             />
//             <div className="ml-6 text-sm text-gray-600">
//               <span className="text-black font-medium cursor-pointer mr-2">
//                 Remove
//               </span>
//               <span className="text-red-500 font-medium cursor-pointer">
//                 Upload
//               </span>
//               <div className="mt-1">
//                 We support PNGs JPEGs and GIFs under 2MB
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-[26px] mb-6">
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-black mb-2">
//                 First Name
//               </label>
//               <input
//                 value={userData.firstName}
//                 onChange={(e) => handleChange("firstName", e.target.value)}
//                 className="w-full border border-gray-300 rounded px-4 py-2"
//                 type="text"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-black mb-2">
//                 Last Name
//               </label>
//               <input
//                 value={userData.lastName}
//                 onChange={(e) => handleChange("lastName", e.target.value)}
//                 className="w-full border border-gray-300 rounded px-4 py-2"
//                 type="text"
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div className="flex justify-between mb-6 items-start">
//             <div className="w-[466px]">
//               <label className="block text-sm font-medium text-black mb-2">
//                 Email
//               </label>
//               {editingEmail ? (
//                 <div className="flex gap-2">
//                   <input
//                     value={tempEmail}
//                     onChange={(e) => setTempEmail(e.target.value)}
//                     className="w-full border border-gray-300 rounded px-4 py-2"
//                     type="email"
//                   />
//                   <button
//                     onClick={handleSaveEmail}
//                     className="cursor-pointer text-sm text-white bg-[#F05A28] px-3 py-1 rounded"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => {
//                       setEditingEmail(false);
//                       setTempEmail(userData.email);
//                     }}
//                     className="cursor-pointer text-sm text-white bg-gray-500 px-3 py-1 rounded"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               ) : (
//                 <input
//                   value={userData.email}
//                   disabled
//                   className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-200 cursor-not-allowed"
//                   type="email"
//                 />
//               )}
//             </div>
//             {!editingEmail && (
//               <button
//                 onClick={() => setEditingEmail(true)}
//                 className="cursor-pointer bg-[#F05A28] w-[145px] h-[36px] mt-[24px] text-white text-sm font-medium rounded flex items-center justify-center gap-2"
//               >
//                 <img src={IconEdit} alt="Edit" className="w-4 h-4" /> Change
//                 Email
//               </button>
//             )}
//           </div>

//           {/* Password */}
//           <div className="flex justify-between mb-10 items-start">
//             <div className="w-[466px]">
//               <label className="block text-sm font-medium text-black mb-2">
//                 Password
//               </label>
//               {editingPassword ? (
//                 <div className="flex gap-2">
//                   <input
//                     value={tempPassword}
//                     onChange={(e) => setTempPassword(e.target.value)}
//                     className="w-full border border-gray-300 rounded px-4 py-2"
//                     type="password"
//                     placeholder="Enter new password"
//                   />
//                   <button
//                     onClick={handleSavePassword}
//                     className="cursor-pointer text-sm text-white bg-[#F05A28] px-3 py-1 rounded"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => {
//                       setEditingPassword(false);
//                       setTempPassword("");
//                     }}
//                     className="cursor-pointer text-sm text-white bg-gray-500 px-3 py-1 rounded"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               ) : (
//                 <input
//                   value={userData.password}
//                   disabled
//                   className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-200 cursor-not-allowed"
//                   type="password"
//                 />
//               )}
//             </div>
//             {!editingPassword && (
//               <button
//                 onClick={() => setEditingPassword(true)}
//                 className="cursor-pointer bg-[#F05A28] w-[195px] h-[38px] mt-[24px] text-white text-sm font-medium rounded flex items-center justify-center gap-2"
//               >
//                 <img src={IconEdit} alt="Edit" className="w-4 h-4" /> Change
//                 Password
//               </button>
//             )}
//           </div>

//           <hr className="border-t border-gray-200 mb-10" />

//           {/* Info Rows */}
//           <div className="flex flex-col gap-8 w-[964px]">
//             <div className="flex justify-between items-start">
//               <div className="flex gap-4">
//                 <img src={Icon2Step} alt="2-step" className="w-5 h-5 mt-1" />
//                 <div>
//                   <div className="font-bold text-sm text-black">
//                     2 - Step Verifications
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     Add an additional layer of security to your account during
//                     login
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-between items-start">
//               <div className="flex gap-4">
//                 <img src={IconLogin} alt="login" className="w-5 h-5 mt-1" />
//                 <div>
//                   <div className="font-bold text-sm text-black">
//                     Login History
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     Last Login: {userData.lastLogin}
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={() => alert("Opening Activity Log...")}
//                 className="cursor-pointer bg-[#F05A28] w-[169px] h-[38px] text-white text-sm font-medium rounded"
//               >
//                 View Activity Log
//               </button>
//             </div>

//             <div className="flex justify-between items-start">
//               <div className="flex gap-4">
//                 <img src={IconDelete} alt="delete" className="w-5 h-5 mt-1" />
//                 <div>
//                   <div className="font-bold text-sm text-black">
//                     Delete My Account
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     Permanently delete the account and remove access
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={() =>
//                   confirm("Are you sure you want to delete your account?")
//                 }
//                 className="cursor-pointer bg-[#F05A28] w-[169px] h-[38px] text-white text-sm font-medium rounded"
//               >
//                 Delete Account
//               </button>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="text-sm text-gray-600 pt-10">
//         {activeTab} content coming soon.
//       </div>
//     );
//   };

//   return (
//     <div className="w-full px-[62px] pt-[60px] pb-[40px] font-['Plus Jakarta Sans'] ">
//       <div className="flex space-x-10 border-b border-gray-200 mb-[48px]">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`cursor-pointer text-sm font-medium pb-3 h-[44px] ${
//               activeTab === tab
//                 ? "border-b-2 border-[#F05A28] text-black"
//                 : "text-gray-500"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       {renderTabContent()}
//     </div>
//   );
// };

// export default SettingsPage;
import React, { useState, useEffect } from "react";
import IconDelete from "../../assets/images/agentdashboard/delete.png";
import IconEdit from "../../assets/images/agentdashboard/edit.png";
import IconLogin from "../../assets/images/agentdashboard/history.png";
import Icon2Step from "../../assets/images/agentdashboard/tick.png";
import ProfileImage from "../../assets/images/agentdashboard/Ellipse3539.png";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Account Management");

  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Brevis",
    email: "johnbrevis@gmail.com",
    password: "************",
    profileImage: ProfileImage,
    lastLogin: "May 10, 2025, 10:49 AM",
  });

  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [tempEmail, setTempEmail] = useState(userData.email);
  const [tempPassword, setTempPassword] = useState("");

  useEffect(() => {
    document.body.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
  }, []);

  const handleChange = (key, value) => {
    setUserData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveEmail = () => {
    setUserData((prev) => ({ ...prev, email: tempEmail }));
    setEditingEmail(false);
  };

  const handleSavePassword = () => {
    if (tempPassword.trim()) {
      setUserData((prev) => ({ ...prev, password: "************" }));
      setTempPassword("");
      setEditingPassword(false);
    }
  };

  const tabs = [
    "Account Management",
    "Billing Info",
    "Commission Preferences",
    "Notification Settings",
    "Regional Preferences",
  ];

  const renderTabContent = () => {
    if (activeTab === "Account Management") {
      return (
        <div className="mt-8">
          <div className="mb-8 flex items-center flex-col sm:flex-row">
            <img
              src={userData.profileImage}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="ml-0 sm:ml-6 mt-4 sm:mt-0 text-sm text-gray-600 text-center sm:text-left">
              <span className="text-black font-medium cursor-pointer mr-2">
                Remove
              </span>
              <span className="text-red-500 font-medium cursor-pointer">
                Upload
              </span>
              <div className="mt-1">
                We support PNGs JPEGs and GIFs under 2MB
              </div>
            </div>
          </div>

          <div className="flex gap-[26px] mb-6 flex-col sm:flex-row">
            <div className="flex-1">
              <label className="block text-sm font-medium text-black mb-2">
                First Name
              </label>
              <input
                value={userData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
                type="text"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-black mb-2">
                Last Name
              </label>
              <input
                value={userData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
                type="text"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex justify-between mb-6 items-start flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="w-full sm:w-[466px]">
              <label className="block text-sm font-medium text-black mb-2">
                Email
              </label>
              {editingEmail ? (
                <div className="flex gap-2 flex-col sm:flex-row">
                  <input
                    value={tempEmail}
                    onChange={(e) => setTempEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    type="email"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveEmail}
                      className="cursor-pointer text-sm text-white bg-[#F05A28] px-3 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditingEmail(false);
                        setTempEmail(userData.email);
                      }}
                      className="cursor-pointer text-sm text-white bg-gray-500 px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <input
                  value={userData.email}
                  disabled
                  className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-200 cursor-not-allowed"
                  type="email"
                />
              )}
            </div>
            {!editingEmail && (
              <button
                onClick={() => setEditingEmail(true)}
                className="cursor-pointer bg-[#F05A28] w-full sm:w-[145px] h-[36px] mt-0 sm:mt-[24px] text-white text-sm font-medium rounded flex items-center justify-center gap-2"
              >
                <img src={IconEdit} alt="Edit" className="w-4 h-4" /> Change
                Email
              </button>
            )}
          </div>

          {/* Password */}
          <div className="flex justify-between mb-10 items-start flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="w-full sm:w-[466px]">
              <label className="block text-sm font-medium text-black mb-2">
                Password
              </label>
              {editingPassword ? (
                <div className="flex gap-2 flex-col sm:flex-row">
                  <input
                    value={tempPassword}
                    onChange={(e) => setTempPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    type="password"
                    placeholder="Enter new password"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSavePassword}
                      className="cursor-pointer text-sm text-white bg-[#F05A28] px-3 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditingPassword(false);
                        setTempPassword("");
                      }}
                      className="cursor-pointer text-sm text-white bg-gray-500 px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <input
                  value={userData.password}
                  disabled
                  className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-200 cursor-not-allowed"
                  type="password"
                />
              )}
            </div>
            {!editingPassword && (
              <button
                onClick={() => setEditingPassword(true)}
                className="cursor-pointer bg-[#F05A28] w-full sm:w-[195px] h-[38px] mt-0 sm:mt-[24px] text-white text-sm font-medium rounded flex items-center justify-center gap-2"
              >
                <img src={IconEdit} alt="Edit" className="w-4 h-4" /> Change
                Password
              </button>
            )}
          </div>

          <hr className="border-t border-gray-200 mb-10" />

          {/* Info Rows */}
          <div className="flex flex-col gap-8 w-full max-w-[964px]">
            <div className="flex justify-between items-start flex-col sm:flex-row gap-4 sm:gap-0">
              <div className="flex gap-4">
                <img src={Icon2Step} alt="2-step" className="w-5 h-5 mt-1" />
                <div>
                  <div className="font-bold text-sm text-black">
                    2 - Step Verifications
                  </div>
                  <div className="text-sm text-gray-600">
                    Add an additional layer of security to your account during
                    login
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-start flex-col sm:flex-row gap-4 sm:gap-0">
              <div className="flex gap-4">
                <img src={IconLogin} alt="login" className="w-5 h-5 mt-1" />
                <div>
                  <div className="font-bold text-sm text-black">
                    Login History
                  </div>
                  <div className="text-sm text-gray-600">
                    Last Login: {userData.lastLogin}
                  </div>
                </div>
              </div>
              <button
                onClick={() => alert("Opening Activity Log...")}
                className="cursor-pointer bg-[#F05A28] w-full sm:w-[169px] h-[38px] text-white text-sm font-medium rounded"
              >
                View Activity Log
              </button>
            </div>

            <div className="flex justify-between items-start flex-col sm:flex-row gap-4 sm:gap-0">
              <div className="flex gap-4">
                <img src={IconDelete} alt="delete" className="w-5 h-5 mt-1" />
                <div>
                  <div className="font-bold text-sm text-black">
                    Delete My Account
                  </div>
                  <div className="text-sm text-gray-600">
                    Permanently delete the account and remove access
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  confirm("Are you sure you want to delete your account?")
                }
                className="cursor-pointer bg-[#F05A28] w-full sm:w-[169px] h-[38px] text-white text-sm font-medium rounded"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="text-sm text-gray-600 pt-10">
        {activeTab} content coming soon.
      </div>
    );
  };

  return (
    <div className="w-full px-4 sm:px-[62px] pt-8 sm:pt-[60px] pb-[40px] font-['Plus Jakarta Sans']">
      {/* Mobile Tab Navigation - Horizontal Scroll */}
      <div className="sm:hidden mb-6">
        <div className="flex overflow-x-auto space-x-6 border-b border-gray-200 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer text-sm font-medium whitespace-nowrap flex-shrink-0 pb-2 ${
                activeTab === tab
                  ? "border-b-2 border-[#F05A28] text-black"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Tab Navigation */}
      <div className="hidden sm:flex space-x-10 border-b border-gray-200 mb-[48px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer text-sm font-medium pb-3 h-[44px] ${
              activeTab === tab
                ? "border-b-2 border-[#F05A28] text-black"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderTabContent()}
    </div>
  );
};

export default SettingsPage;
