// // import { useEffect, useState } from "react";
// // import { useTranslation } from "react-i18next";
// // import { useLocation, useNavigate } from "react-router";

// // function TravelersDetails() {
// //   const { t } = useTranslation();
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const [flight, setFlight] = useState(null);
// //   const [currentStep, setCurrentStep] = useState(1);
// //   const [currentTravellerIndex, setCurrentTravellerIndex] = useState(0);
// //   const [totalTravellers, setTotalTravellers] = useState(0);
// //   const [travellerList, setTravellerList] = useState({ Traveller: [] });
// //   const [contactDetails, setContactDetails] = useState({
// //     Name: {
// //       Title: "Mr",
// //       NamePartList: {
// //         NamePart: ["", "", ""],
// //       },
// //     },
// //     Address: {
// //       Flat: "",
// //       BuildingName: "",
// //       BuildingNumber: "",
// //       Street: "",
// //       Locality: "",
// //       City: "",
// //       Province: "OT",
// //       Postcode: "",
// //       CountryCode: "",
// //     },
// //     MobilePhone: {
// //       InternationalCode: "",
// //       AreaCode: "",
// //       Number: "",
// //       Extension: "",
// //     },
// //     Email: "",
// //   });
// //   const [billingDetails, setBillingDetails] = useState({
// //     Name: {
// //       Title: "Mr",
// //       NamePartList: {
// //         NamePart: ["", "", ""],
// //       },
// //     },
// //     Address: {
// //       Flat: "",
// //       BuildingName: "",
// //       BuildingNumber: "",
// //       Street: "",
// //       Locality: "",
// //       City: "",
// //       Province: "OT",
// //       Postcode: "",
// //       CountryCode: "",
// //     },
// //     CreditCard: {
// //       Number: import.meta.env.VITE_CARD_NUMBER,
// //       SecurityCode: import.meta.env.VITE_CARD_SECURITYCODE,
// //       ExpiryDate: import.meta.env.VITE_CARD_EXPIRYDATE,
// //       StartDate: import.meta.env.VITE_CARD_STARTDATE,
// //       CardType: import.meta.env.VITE_CARD_CARDTYPE,
// //       IssueNumber: "0",
// //     },
// //   });
// //   const [sameAsContact, setSameAsContact] = useState(false);

// //   useEffect(() => {
// //     if (location.state && location.state.flights) {
// //       setFlight(location.state.flights);
// //     }

// //     console.log(location.state.travalers);

// //     //  travelers data
// //     if (location.state && location.state.travalers) {
// //       const travellerCount = location.state.travalers.length;
// //       setTotalTravellers(travellerCount);

// //       const initialTravellers = location.state.travalers.map(
// //         (traveler, index) => ({
// //           Age: "",
// //           Name: {
// //             Title: "Mr",
// //             NamePartList: {
// //               NamePart: [""],
// //             },
// //           },
// //           CustomSupplierParameterList: {
// //             CustomSupplierParameter: [
// //               {
// //                 Name: "DateOfBirth",
// //                 Value: "",
// //               },
// //             ],
// //           },
// //         })
// //       );
// //       setTravellerList({ Traveller: initialTravellers });
// //     }
// //   }, [location]);

// //   const OutwardTicket = location.state?.flights?.[0];
// //   const returnTicket = location.state?.flights?.[1];

// //   console.log(OutwardTicket);

// //   const handleTravellerChange = (field, value) => {
// //     const updatedTravellers = [...travellerList.Traveller];

// //     if (field === "age") {
// //       updatedTravellers[currentTravellerIndex].Age = parseInt(value) || "";
// //     } else if (field === "title") {
// //       updatedTravellers[currentTravellerIndex].Name.Title = value;
// //     } else if (field === "firstName") {
// //       updatedTravellers[currentTravellerIndex].Name.NamePartList.NamePart[0] =
// //         value;
// //     } else if (field === "dateOfBirth") {
// //       updatedTravellers[
// //         currentTravellerIndex
// //       ].CustomSupplierParameterList.CustomSupplierParameter[0].Value = value;
// //     }

// //     setTravellerList({ Traveller: updatedTravellers });
// //   };

// //   const handleContactChange = (field, value) => {
// //     setContactDetails((prev) => {
// //       const updated = { ...prev };

// //       if (field === "title") {
// //         updated.Name.Title = value;
// //       } else if (field === "firstName") {
// //         updated.Name.NamePartList.NamePart[0] = value;
// //       } else if (field === "middleName") {
// //         updated.Name.NamePartList.NamePart[1] = value;
// //       } else if (field === "lastName") {
// //         updated.Name.NamePartList.NamePart[2] = value;
// //       } else if (field === "email") {
// //         updated.Email = value;
// //       } else if (field.startsWith("address.")) {
// //         const addressField = field.split(".")[1];
// //         updated.Address[addressField] = value;
// //       } else if (field.startsWith("phone.")) {
// //         const phoneField = field.split(".")[1];
// //         updated.MobilePhone[phoneField] = value;
// //       }

// //       return updated;
// //     });
// //   };

// //   const handleBillingChange = (field, value) => {
// //     setBillingDetails((prev) => {
// //       const updated = { ...prev };

// //       if (field === "title") {
// //         updated.Name.Title = value;
// //       } else if (field === "firstName") {
// //         updated.Name.NamePartList.NamePart[0] = value;
// //       } else if (field === "middleName") {
// //         updated.Name.NamePartList.NamePart[1] = value;
// //       } else if (field === "lastName") {
// //         updated.Name.NamePartList.NamePart[2] = value;
// //       } else if (field.startsWith("address.")) {
// //         const addressField = field.split(".")[1];
// //         updated.Address[addressField] = value;
// //       } else if (field.startsWith("card.")) {
// //         const cardField = field.split(".")[1];
// //         updated.CreditCard[cardField] = value;
// //       }

// //       return updated;
// //     });
// //   };

// //   const handleSameAsContactChange = (checked) => {
// //     setSameAsContact(checked);
// //     if (checked) {
// //       setBillingDetails((prev) => ({
// //         ...prev,
// //         Name: {
// //           Title: contactDetails.Name.Title,
// //           NamePartList: {
// //             NamePart: [...contactDetails.Name.NamePartList.NamePart],
// //           },
// //         },
// //         Address: { ...contactDetails.Address },
// //       }));
// //     }
// //   };

// //   const getStepInfo = () => {
// //     if (currentStep <= totalTravellers) {
// //       return {
// //         title: `Traveller ${currentStep} Details`,
// //         stepNumber: currentStep,
// //         totalSteps: totalTravellers + 2,
// //       };
// //     } else if (currentStep === totalTravellers + 1) {
// //       return {
// //         title: "Contact Details",
// //         stepNumber: currentStep,
// //         totalSteps: totalTravellers + 2,
// //       };
// //     } else {
// //       return {
// //         title: "Billing Details",
// //         stepNumber: currentStep,
// //         totalSteps: totalTravellers + 2,
// //       };
// //     }
// //   };

// //   const handleContinue = () => {
// //     if (currentStep <= totalTravellers) {
// //       if (currentStep < totalTravellers) {
// //         setCurrentStep(currentStep + 1);
// //         setCurrentTravellerIndex(currentTravellerIndex + 1);
// //       } else {
// //         setCurrentStep(currentStep + 1);
// //       }
// //     } else if (currentStep === totalTravellers + 1) {
// //       setCurrentStep(currentStep + 1);
// //     } else {
// //       const finalData = {
// //         TravellerList: travellerList,
// //         ContactDetails: contactDetails,
// //         BillingDetails: billingDetails,
// //       };
// //       console.log(location.state.flights);
// //       console.log("Final booking data:", JSON.stringify(finalData, null, 2));
// //       navigate("/booking/SeatSelection", {
// //         state: {
// //           flights: location.state.flights,
// //           tripType: location.state.tripType,
// //           routingId: location.state.routingId,
// //           seatOption: location.state.seatOption,
// //           luggageOptions: location.state.luggageOptions,
// //           travellerDetails: finalData,
// //         },
// //       });
// //     }
// //   };

// //   const handleBack = () => {
// //     if (currentStep > 1) {
// //       if (currentStep <= totalTravellers) {
// //         setCurrentStep(currentStep - 1);
// //         setCurrentTravellerIndex(currentTravellerIndex - 1);
// //       } else {
// //         setCurrentStep(currentStep - 1);
// //       }
// //     } else {
// //       navigate(-1);
// //     }
// //   };

// //   const getCurrentTraveller = () => {
// //     if (currentStep <= totalTravellers) {
// //       return travellerList.Traveller[currentTravellerIndex] || {};
// //     }
// //     return {};
// //   };

// //   if (!flight) return <p className="text-center mt-20 font-sans">Loading...</p>;

// //   const stepInfo = getStepInfo();
// //   const currentTraveller = getCurrentTraveller();

// //   return (
// //     <div className="font-sans flex justify-center">
// //       <div className="w-full flex flex-col items-start">
// //         {/* Progress indicator */}
// //         <div className="w-full max-w-[656px] mb-6">
// //           <div className="flex items-center justify-center">
// //             <div className="w-full bg-gray-200 rounded-full h-2">
// //               <div
// //                 className="bg-[#EE5128] h-2 rounded-full transition-all duration-300"
// //                 style={{
// //                   width: `${
// //                     (stepInfo.stepNumber / stepInfo.totalSteps) * 100
// //                   }%`,
// //                 }}
// //               ></div>
// //             </div>
// //             <span className="ml-3 text-sm font-medium text-gray-600">
// //               {Math.round((stepInfo.stepNumber / stepInfo.totalSteps) * 100)}%
// //             </span>
// //           </div>
// //         </div>

// //         {/* Main Content + Booking side-by-side */}
// //         <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
// //           {/* Main Content */}
// //           <div className="max-w-[656px] w-full">
// //             {currentStep <= totalTravellers ? (
// //               // Traveller Details Steps
// //               <div className="bg-white rounded-md">
// //                 <div className="bg-[#FFE4DB] p-3 rounded-t-md">
// //                   <h2 className="font-semibold font-jakarta">
// //                     Traveller {currentStep} Details
// //                   </h2>
// //                 </div>
// //                 <div className="p-6">
// //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Title
// //                       </label>
// //                       <select
// //                         value={currentTraveller.Name?.Title || "Mr"}
// //                         onChange={(e) =>
// //                           handleTravellerChange("title", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                       >
// //                         <option value="Mr">Mr</option>
// //                         <option value="Mrs">Mrs</option>
// //                         <option value="Miss">Miss</option>
// //                         <option value="Dr">Dr</option>
// //                       </select>
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Age
// //                       </label>
// //                       <input
// //                         type="number"
// //                         value={currentTraveller.Age || ""}
// //                         onChange={(e) =>
// //                           handleTravellerChange("age", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter age"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={
// //                           currentTraveller.Name?.NamePartList?.NamePart?.[0] ||
// //                           ""
// //                         }
// //                         onChange={(e) =>
// //                           handleTravellerChange("firstName", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter name"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Date of Birth
// //                       </label>
// //                       <input
// //                         type="date"
// //                         value={
// //                           currentTraveller.CustomSupplierParameterList
// //                             ?.CustomSupplierParameter?.[0]?.Value || ""
// //                         }
// //                         onChange={(e) =>
// //                           handleTravellerChange("dateOfBirth", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ) : currentStep === totalTravellers + 1 ? (
// //               // Contact Details Step
// //               <div className="bg-white rounded-md">
// //                 <div className="bg-[#FFE4DB] p-3 rounded-t-md">
// //                   <h2 className="font-semibold font-jakarta">
// //                     Contact Details
// //                   </h2>
// //                 </div>
// //                 <div className="p-6">
// //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Title
// //                       </label>
// //                       <select
// //                         value={contactDetails.Name.Title}
// //                         onChange={(e) =>
// //                           handleContactChange("title", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                       >
// //                         <option value="Mr">Mr</option>
// //                         <option value="Mrs">Mrs</option>
// //                         <option value="Miss">Miss</option>
// //                         <option value="Dr">Dr</option>
// //                       </select>
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         First Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Name.NamePartList.NamePart[0]}
// //                         onChange={(e) =>
// //                           handleContactChange("firstName", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter first name"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Middle Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Name.NamePartList.NamePart[1]}
// //                         onChange={(e) =>
// //                           handleContactChange("middleName", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter middle name"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Last Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Name.NamePartList.NamePart[2]}
// //                         onChange={(e) =>
// //                           handleContactChange("lastName", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter last name"
// //                       />
// //                     </div>
// //                     {/* <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Company
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Address.Company}
// //                         onChange={(e) =>
// //                           handleContactChange("address.Company", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter company"
// //                       />
// //                     </div> */}
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Flat/Apartment
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Address.Flat}
// //                         onChange={(e) =>
// //                           handleContactChange("address.Flat", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter flat/apartment"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Building Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Address.BuildingName}
// //                         onChange={(e) =>
// //                           handleContactChange(
// //                             "address.BuildingName",
// //                             e.target.value
// //                           )
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter building name"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Building Number
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Address.BuildingNumber}
// //                         onChange={(e) =>
// //                           handleContactChange(
// //                             "address.BuildingNumber",
// //                             e.target.value
// //                           )
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter building number"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Street
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Address.Street}
// //                         onChange={(e) =>
// //                           handleContactChange("address.Street", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter street"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Locality
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Address.Locality}
// //                         onChange={(e) =>
// //                           handleContactChange(
// //                             "address.Locality",
// //                             e.target.value
// //                           )
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter locality"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         City
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Address.City}
// //                         onChange={(e) =>
// //                           handleContactChange("address.City", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter city"
// //                       />
// //                     </div>
// //                     {/* <div>
// // 											<label className='block text-sm font-medium mb-1'>
// // 												Province/State
// // 											</label>
// // 											<input
// // 												type='text'
// // 												value={
// // 													contactDetails.Address
// // 														.Province
// // 												}
// // 												onChange={e =>
// // 													handleContactChange(
// // 														'address.Province',
// // 														e.target.value
// // 													)
// // 												}
// // 												className='w-full border border-[#CCCCCC] rounded p-2 text-sm'
// // 												placeholder='Enter province/state'
// // 											/>
// // 										</div> */}
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Postcode
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Address.Postcode}
// //                         onChange={(e) =>
// //                           handleContactChange(
// //                             "address.Postcode",
// //                             e.target.value
// //                           )
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter postcode"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Country Code
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.Address.CountryCode}
// //                         onChange={(e) =>
// //                           handleContactChange(
// //                             "address.CountryCode",
// //                             e.target.value
// //                           )
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter country code"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         International Code
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={contactDetails.MobilePhone.InternationalCode}
// //                         onChange={(e) =>
// //                           handleContactChange(
// //                             "phone.InternationalCode",
// //                             e.target.value
// //                           )
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter international code"
// //                       />
// //                     </div>
// //                     {/* <div>
// // 											<label className='block text-sm font-medium mb-1'>
// // 												Area Code
// // 											</label>
// // 											<input
// // 												type='text'
// // 												value={
// // 													contactDetails.MobilePhone
// // 														.AreaCode
// // 												}
// // 												onChange={e =>
// // 													handleContactChange(
// // 														'phone.AreaCode',
// // 														e.target.value
// // 													)
// // 												}
// // 												className='w-full border border-[#CCCCCC] rounded p-2 text-sm'
// // 												placeholder='Enter area code'
// // 											/>
// // 										</div> */}
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Phone Number
// //                       </label>
// //                       <input
// //                         type="tel"
// //                         value={contactDetails.MobilePhone.Number}
// //                         onChange={(e) =>
// //                           handleContactChange("phone.Number", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter phone number"
// //                       />
// //                     </div>
// //                     {/* <div>
// // 											<label className='block text-sm font-medium mb-1'>
// // 												Extension
// // 											</label>
// // 											<input
// // 												type='text'
// // 												value={
// // 													contactDetails.MobilePhone
// // 														.Extension
// // 												}
// // 												onChange={e =>
// // 													handleContactChange(
// // 														'phone.Extension',
// // 														e.target.value
// // 													)
// // 												}
// // 												className='w-full border border-[#CCCCCC] rounded p-2 text-sm'
// // 												placeholder='Enter extension'
// // 											/>
// // 										</div> */}
// //                     <div className="sm:col-span-2">
// //                       <label className="block text-sm font-medium mb-1">
// //                         Email
// //                       </label>
// //                       <input
// //                         type="email"
// //                         value={contactDetails.Email}
// //                         onChange={(e) =>
// //                           handleContactChange("email", e.target.value)
// //                         }
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
// //                         placeholder="Enter email"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ) : (
// //               // Billing Details Step
// //               <div className="bg-white rounded-md">
// //                 <div className="bg-[#FFE4DB] p-3 rounded-t-md">
// //                   <h2 className="font-semibold font-jakarta">
// //                     Billing Details
// //                   </h2>
// //                 </div>
// //                 <div className="p-6">
// //                   <div className="mb-4">
// //                     <label className="flex items-center gap-2">
// //                       <input
// //                         type="checkbox"
// //                         checked={sameAsContact}
// //                         onChange={(e) =>
// //                           handleSameAsContactChange(e.target.checked)
// //                         }
// //                         className="accent-[#EE5128]"
// //                       />
// //                       <span className="text-sm">Same as contact details</span>
// //                     </label>
// //                   </div>

// //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Title
// //                       </label>
// //                       <select
// //                         value={billingDetails.Name.Title}
// //                         onChange={(e) =>
// //                           handleBillingChange("title", e.target.value)
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                       >
// //                         <option value="Mr">Mr</option>
// //                         <option value="Mrs">Mrs</option>
// //                         <option value="Miss">Miss</option>
// //                         <option value="Dr">Dr</option>
// //                       </select>
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         First Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={billingDetails.Name.NamePartList.NamePart[0]}
// //                         onChange={(e) =>
// //                           handleBillingChange("firstName", e.target.value)
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                         placeholder="Enter first name"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Middle Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={billingDetails.Name.NamePartList.NamePart[1]}
// //                         onChange={(e) =>
// //                           handleBillingChange("middleName", e.target.value)
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                         placeholder="Enter middle name"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Last Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={billingDetails.Name.NamePartList.NamePart[2]}
// //                         onChange={(e) =>
// //                           handleBillingChange("lastName", e.target.value)
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                         placeholder="Enter last name"
// //                       />
// //                     </div>
// //                     {/* <div>
// // 											<label className='block text-sm font-medium mb-1'>
// // 												Company
// // 											</label>
// // 											<input
// // 												type='text'
// // 												value={
// // 													billingDetails.Address
// // 														.Company
// // 												}
// // 												onChange={e =>
// // 													handleBillingChange(
// // 														'address.Company',
// // 														e.target.value
// // 													)
// // 												}
// // 												disabled={sameAsContact}
// // 												className='w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100'
// // 												placeholder='Enter company'
// // 											/>
// // 										</div> */}
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Flat/Apartment
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={billingDetails.Address.Flat}
// //                         onChange={(e) =>
// //                           handleBillingChange("address.Flat", e.target.value)
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                         placeholder="Enter flat/apartment"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Building Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={billingDetails.Address.BuildingName}
// //                         onChange={(e) =>
// //                           handleBillingChange(
// //                             "address.BuildingName",
// //                             e.target.value
// //                           )
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                         placeholder="Enter building name"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Building Number
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={billingDetails.Address.BuildingNumber}
// //                         onChange={(e) =>
// //                           handleBillingChange(
// //                             "address.BuildingNumber",
// //                             e.target.value
// //                           )
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                         placeholder="Enter building number"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Street
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={billingDetails.Address.Street}
// //                         onChange={(e) =>
// //                           handleBillingChange("address.Street", e.target.value)
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                         placeholder="Enter street"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Locality
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={billingDetails.Address.Locality}
// //                         onChange={(e) =>
// //                           handleBillingChange(
// //                             "address.Locality",
// //                             e.target.value
// //                           )
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                         placeholder="Enter locality"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         City
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={billingDetails.Address.City}
// //                         onChange={(e) =>
// //                           handleBillingChange("address.City", e.target.value)
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                         placeholder="Enter city"
// //                       />
// //                     </div>
// //                     {/* <div>
// // 											<label className='block text-sm font-medium mb-1'>
// // 												Province/State
// // 											</label>
// // 											<input
// // 												type='text'
// // 												value={
// // 													billingDetails.Address
// // 														.Province
// // 												}
// // 												onChange={e =>
// // 													handleBillingChange(
// // 														'address.Province',
// // 														e.target.value
// // 													)
// // 												}
// // 												disabled={sameAsContact}
// // 												className='w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100'
// // 												placeholder='Enter province/state'
// // 											/>
// // 										</div> */}
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Postcode
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={billingDetails.Address.Postcode}
// //                         onChange={(e) =>
// //                           handleBillingChange(
// //                             "address.Postcode",
// //                             e.target.value
// //                           )
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                         placeholder="Enter postcode"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">
// //                         Country Code
// //                       </label>
// //                       <input
// //                         type="text"
// //                         value={billingDetails.Address.CountryCode}
// //                         onChange={(e) =>
// //                           handleBillingChange(
// //                             "address.CountryCode",
// //                             e.target.value
// //                           )
// //                         }
// //                         disabled={sameAsContact}
// //                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
// //                         placeholder="Enter country code"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Save Details Section (only for traveller steps) */}
// //             {currentStep <= totalTravellers && (
// //               <div className="w-full bg-white rounded-md p-6 mt-6 font-sans">
// //                 <h3 className="font-semibold text-black mb-1 font-jakarta">
// //                   {t("traveller-details.save-details.title")}
// //                 </h3>
// //                 <p className="text-sm text-gray-500 mb-3">
// //                   {t("traveller-details.save-details.description")}
// //                 </p>
// //                 <label className="flex items-start gap-2">
// //                   <input
// //                     type="checkbox"
// //                     className="accent-[#EE5128] mt-[3px]"
// //                   />
// //                   <span className="text-sm">
// //                     {t("traveller-details.save-details.term")}
// //                   </span>
// //                 </label>
// //               </div>
// //             )}

// //             {/* Action Buttons */}
// //             <div className="mt-6 flex gap-4">
// //               <button
// //                 onClick={handleBack}
// //                 className="bg-gray-500 text-white px-6 py-2 rounded font-semibold font-jakarta hover:bg-gray-600 active:bg-gray-700 transition-colors duration-200"
// //               >
// //                 {currentStep === 1 ? "Cancel" : "Back"}
// //               </button>
// //               <button
// //                 onClick={handleContinue}
// //                 className="bg-[#EE5128] text-white px-6 py-2 rounded font-semibold font-jakarta hover:bg-[#d64520] active:bg-[#b83b1c] transition-colors duration-200"
// //               >
// //                 {currentStep === totalTravellers + 2
// //                   ? t("continue-booking")
// //                   : "Continue"}
// //               </button>
// //             </div>
// //           </div>

// //           {/* Booking Details Sidebar */}
// //           {location.state.tripType === "One Way" ? (
// //             <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
// //               <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
// //                 <h2 className="font-semibold text-[18px] font-jakarta">
// //                   {t("booking-details.title")}
// //                 </h2>
// //               </div>

// //               <div className="flex justify-between items-center px-6 mt-[20px]">
// //                 <div className="text-center">
// //                   <p className="text-[20px] font-bold font-jakarta">
// //                     {OutwardTicket?.departureTime}
// //                   </p>
// //                   <p className="text-xs text-gray-500 mt-1">
// //                     {OutwardTicket?.departureCity}
// //                   </p>
// //                 </div>
// //                 <div className="flex flex-col items-center relative">
// //                   <p className="text-xs text-gray-500 mb-[2px]">
// //                     {OutwardTicket?.duration}
// //                   </p>
// //                   <div className="flex items-center justify-center">
// //                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
// //                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
// //                     <span className="text-black text-sm">✈</span>
// //                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
// //                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
// //                   </div>
// //                   <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
// //                     Refundable
// //                   </div>
// //                 </div>
// //                 <div className="text-center">
// //                   <p className="text-[20px] font-bold font-jakarta">
// //                     {OutwardTicket?.arrivalTime}
// //                   </p>
// //                   <p className="text-xs text-gray-500 mt-1">
// //                     {OutwardTicket?.arrivalCity}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="flex justify-between px-6 mt-6">
// //                 <div className="text-left w-1/2 border-r pr-4">
// //                   <p className="text-sm font-semibold text-black font-jakarta">
// //                     {t("booking-details.departure")}
// //                   </p>
// //                   <p className="text-xs text-gray-500 mt-[2px]">
// //                     Thu, 06 jul, 2025
// //                   </p>
// //                 </div>
// //                 <div className="text-left w-1/2 pl-4">
// //                   <p className="text-sm font-semibold text-black font-jakarta ml-5">
// //                     {t("booking-details.landing")}
// //                   </p>
// //                   <p className="text-xs text-gray-500 mt-[2px] ml-5">
// //                     Thu, 06 jul, 2025
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
// //                 <span>{t("booking-details.policy")}</span>
// //                 <span className="ml-10">{t("booking-details.refund")}</span>
// //                 <span>{t("booking-details.reschedule")}</span>
// //               </div>
// //             </div>
// //           ) : location.state.tripType === "Round Trip" ? (
// //             <div className="flex flex-col gap-2">
// //               <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
// //                 <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
// //                   <h2 className="font-semibold text-[18px] font-jakarta">
// //                     {t("booking-details.title")} - Outward
// //                   </h2>
// //                 </div>

// //                 <div className="flex justify-between items-center px-6 mt-[20px]">
// //                   <div className="text-center">
// //                     <p className="text-[20px] font-bold font-jakarta">
// //                       {OutwardTicket?.departureTime}
// //                     </p>
// //                     <p className="text-xs text-gray-500 mt-1">
// //                       {OutwardTicket?.departureCity}
// //                     </p>
// //                   </div>
// //                   <div className="flex flex-col items-center relative">
// //                     <p className="text-xs text-gray-500 mb-[2px]">
// //                       {OutwardTicket?.duration}
// //                     </p>
// //                     <div className="flex items-center justify-center">
// //                       <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
// //                       <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
// //                       <span className="text-black text-sm">✈</span>
// //                       <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
// //                       <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
// //                     </div>
// //                     <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
// //                       Refundable
// //                     </div>
// //                   </div>
// //                   <div className="text-center">
// //                     <p className="text-[20px] font-bold font-jakarta">
// //                       {OutwardTicket?.arrivalTime}
// //                     </p>
// //                     <p className="text-xs text-gray-500 mt-1">
// //                       {OutwardTicket?.arrivalCity}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <div className="flex justify-between px-6 mt-6">
// //                   <div className="text-left w-1/2 border-r pr-4">
// //                     <p className="text-sm font-semibold text-black font-jakarta">
// //                       {t("booking-details.departure")}
// //                     </p>
// //                     <p className="text-xs text-gray-500 mt-[2px]">
// //                       Thu, 06 jul, 2025
// //                     </p>
// //                   </div>
// //                   <div className="text-left w-1/2 pl-4">
// //                     <p className="text-sm font-semibold text-black font-jakarta ml-5">
// //                       {t("booking-details.landing")}
// //                     </p>
// //                     <p className="text-xs text-gray-500 mt-[2px] ml-5">
// //                       Thu, 06 jul, 2025
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
// //                   <span>{t("booking-details.policy")}</span>
// //                   <span className="ml-10">{t("booking-details.refund")}</span>
// //                   <span>{t("booking-details.reschedule")}</span>
// //                 </div>
// //               </div>

// //               <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
// //                 <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
// //                   <h2 className="font-semibold text-[18px] font-jakarta">
// //                     {t("booking-details.title")} - Return
// //                   </h2>
// //                 </div>

// //                 <div className="flex justify-between items-center px-6 mt-[20px]">
// //                   <div className="text-center">
// //                     <p className="text-[20px] font-bold font-jakarta">
// //                       {returnTicket?.departureTime}
// //                     </p>
// //                     <p className="text-xs text-gray-500 mt-1">
// //                       {returnTicket?.departureCity}
// //                     </p>
// //                   </div>
// //                   <div className="flex flex-col items-center relative">
// //                     <p className="text-xs text-gray-500 mb-[2px]">
// //                       {returnTicket?.duration}
// //                     </p>
// //                     <div className="flex items-center justify-center">
// //                       <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
// //                       <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
// //                       <span className="text-black text-sm">✈</span>
// //                       <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
// //                       <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
// //                     </div>
// //                     <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
// //                       Refundable
// //                     </div>
// //                   </div>
// //                   <div className="text-center">
// //                     <p className="text-[20px] font-bold font-jakarta">
// //                       {returnTicket?.arrivalTime}
// //                     </p>
// //                     <p className="text-xs text-gray-500 mt-1">
// //                       {returnTicket?.arrivalCity}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <div className="flex justify-between px-6 mt-6">
// //                   <div className="text-left w-1/2 border-r pr-4">
// //                     <p className="text-sm font-semibold text-black font-jakarta">
// //                       {t("booking-details.departure")}
// //                     </p>
// //                     <p className="text-xs text-gray-500 mt-[2px]">
// //                       Thu, 06 jul, 2025
// //                     </p>
// //                   </div>
// //                   <div className="text-left w-1/2 pl-4">
// //                     <p className="text-sm font-semibold text-black font-jakarta ml-5">
// //                       {t("booking-details.landing")}
// //                     </p>
// //                     <p className="text-xs text-gray-500 mt-[2px] ml-5">
// //                       Thu, 06 jul, 2025
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
// //                   <span>{t("booking-details.policy")}</span>
// //                   <span className="ml-10">{t("booking-details.refund")}</span>
// //                   <span>{t("booking-details.reschedule")}</span>
// //                 </div>
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
// //               <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
// //                 <h2 className="font-semibold text-[18px] font-jakarta">
// //                   {t("booking-details.title")}
// //                 </h2>
// //               </div>
// //               <div className="flex justify-between items-center px-6 mt-[20px]">
// //                 Something went wrong
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default TravelersDetails;
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useLocation, useNavigate } from "react-router";

// function TravelersDetails() {
//   const { t } = useTranslation();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [flight, setFlight] = useState(null);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [currentTravellerIndex, setCurrentTravellerIndex] = useState(0);
//   const [totalTravellers, setTotalTravellers] = useState(0);
//   const [travellerList, setTravellerList] = useState({ Traveller: [] });
//   const [expandedTravellers, setExpandedTravellers] = useState(new Set([0]));
//   const [completedTravellers, setCompletedTravellers] = useState(new Set());
//   const [billingDetails, setBillingDetails] = useState({
//     Name: {
//       Title: "Mr",
//       NamePartList: {
//         NamePart: ["", "", ""],
//       },
//     },
//     Address: {
//       Flat: "",
//       BuildingName: "",
//       BuildingNumber: "",
//       Street: "",
//       Locality: "",
//       City: "",
//       Province: "OT",
//       Postcode: "",
//       CountryCode: "",
//     },
//     CreditCard: {
//       Number: import.meta.env.VITE_CARD_NUMBER,
//       SecurityCode: import.meta.env.VITE_CARD_SECURITYCODE,
//       ExpiryDate: import.meta.env.VITE_CARD_EXPIRYDATE,
//       StartDate: import.meta.env.VITE_CARD_STARTDATE,
//       CardType: import.meta.env.VITE_CARD_CARDTYPE,
//       IssueNumber: "0",
//     },
//   });
//   const [sameAsAdult1, setSameAsAdult1] = useState(false);

//   useEffect(() => {
//     if (location.state && location.state.flights) {
//       setFlight(location.state.flights);
//     }

//     console.log(location.state.travalers);

//     //  travelers data
//     if (location.state && location.state.travalers) {
//       const travellerCount = location.state.travalers.length;
//       setTotalTravellers(travellerCount);

//       const initialTravellers = location.state.travalers.map(
//         (traveler, index) => ({
//           Age: "",
//           Name: {
//             Title: "Mr",
//             NamePartList: {
//               NamePart: ["", "", ""],
//             },
//           },
//           Address: {
//             Flat: "",
//             BuildingName: "",
//             BuildingNumber: "",
//             Street: "",
//             Locality: "",
//             City: "",
//             Province: "OT",
//             Postcode: "",
//             CountryCode: "",
//           },
//           MobilePhone: {
//             InternationalCode: "",
//             AreaCode: "",
//             Number: "",
//             Extension: "",
//           },
//           Email: "",
//           CustomSupplierParameterList: {
//             CustomSupplierParameter: [
//               {
//                 Name: "DateOfBirth",
//                 Value: "",
//               },
//             ],
//           },
//         })
//       );
//       setTravellerList({ Traveller: initialTravellers });
//     }
//   }, [location]);

//   const OutwardTicket = location.state?.flights?.[0];
//   const returnTicket = location.state?.flights?.[1];

//   console.log(OutwardTicket);

//   const toggleTravellerExpansion = (index) => {
//     // Only allow clicking on completed travellers or current active traveller
//     if (completedTravellers.has(index) || index === currentTravellerIndex) {
//       setExpandedTravellers((prev) => {
//         const newSet = new Set(prev);
//         if (newSet.has(index)) {
//           newSet.delete(index);
//         } else {
//           newSet.add(index);
//         }
//         return newSet;
//       });
//     }
//   };

//   const handleTravellerChange = (
//     field,
//     value,
//     travellerIndex = currentTravellerIndex
//   ) => {
//     const updatedTravellers = [...travellerList.Traveller];

//     if (field === "age") {
//       updatedTravellers[travellerIndex].Age = parseInt(value) || "";
//     } else if (field === "title") {
//       updatedTravellers[travellerIndex].Name.Title = value;
//     } else if (field === "firstName") {
//       updatedTravellers[travellerIndex].Name.NamePartList.NamePart[0] = value;
//     } else if (field === "middleName") {
//       updatedTravellers[travellerIndex].Name.NamePartList.NamePart[1] = value;
//     } else if (field === "lastName") {
//       updatedTravellers[travellerIndex].Name.NamePartList.NamePart[2] = value;
//     } else if (field === "email") {
//       updatedTravellers[travellerIndex].Email = value;
//     } else if (field.startsWith("address.")) {
//       const addressField = field.split(".")[1];
//       updatedTravellers[travellerIndex].Address[addressField] = value;
//     } else if (field.startsWith("phone.")) {
//       const phoneField = field.split(".")[1];
//       updatedTravellers[travellerIndex].MobilePhone[phoneField] = value;
//     } else if (field === "dateOfBirth") {
//       updatedTravellers[
//         travellerIndex
//       ].CustomSupplierParameterList.CustomSupplierParameter[0].Value = value;
//     }

//     setTravellerList({ Traveller: updatedTravellers });

//     // If this is Adult 1 (index 0) and sameAsAdult1 is checked, update billing details
//     if (travellerIndex === 0 && sameAsAdult1) {
//       updateBillingFromAdult1();
//     }
//   };

//   const handleBillingChange = (field, value) => {
//     setBillingDetails((prev) => {
//       const updated = { ...prev };

//       if (field === "title") {
//         updated.Name.Title = value;
//       } else if (field === "firstName") {
//         updated.Name.NamePartList.NamePart[0] = value;
//       } else if (field === "middleName") {
//         updated.Name.NamePartList.NamePart[1] = value;
//       } else if (field === "lastName") {
//         updated.Name.NamePartList.NamePart[2] = value;
//       } else if (field.startsWith("address.")) {
//         const addressField = field.split(".")[1];
//         updated.Address[addressField] = value;
//       } else if (field.startsWith("card.")) {
//         const cardField = field.split(".")[1];
//         updated.CreditCard[cardField] = value;
//       }

//       return updated;
//     });
//   };

//   const updateBillingFromAdult1 = () => {
//     const adult1 = travellerList.Traveller[0];
//     if (adult1) {
//       setBillingDetails((prev) => ({
//         ...prev,
//         Name: {
//           Title: adult1.Name.Title,
//           NamePartList: {
//             NamePart: [...adult1.Name.NamePartList.NamePart],
//           },
//         },
//         Address: { ...adult1.Address },
//       }));
//     }
//   };

//   const handleSameAsAdult1Change = (checked) => {
//     setSameAsAdult1(checked);
//     if (checked) {
//       updateBillingFromAdult1();
//     }
//   };

//   const getStepInfo = () => {
//     if (currentStep <= totalTravellers) {
//       return {
//         title: `Traveller ${currentStep} Details`,
//         stepNumber: currentStep,
//         totalSteps: totalTravellers + 1, // Removed contact details step
//       };
//     } else {
//       return {
//         title: "Billing Details",
//         stepNumber: currentStep,
//         totalSteps: totalTravellers + 1, // Removed contact details step
//       };
//     }
//   };

//   const handleContinue = () => {
//     if (currentStep <= totalTravellers) {
//       // Mark current traveller as completed
//       setCompletedTravellers(
//         (prev) => new Set([...prev, currentTravellerIndex])
//       );

//       if (currentStep < totalTravellers) {
//         // Collapse current traveller and expand next one
//         setExpandedTravellers((prev) => {
//           const newSet = new Set(prev);
//           newSet.delete(currentTravellerIndex);
//           newSet.add(currentTravellerIndex + 1);
//           return newSet;
//         });
//         setCurrentStep(currentStep + 1);
//         setCurrentTravellerIndex(currentTravellerIndex + 1);
//       } else {
//         // Collapse last traveller and go to billing details
//         setExpandedTravellers((prev) => {
//           const newSet = new Set(prev);
//           newSet.delete(currentTravellerIndex);
//           return newSet;
//         });
//         setCurrentStep(currentStep + 1);
//       }
//     } else {
//       // Final step - billing details completed
//       const finalData = {
//         TravellerList: travellerList,
//         BillingDetails: billingDetails,
//         // Use Adult 1 details as contact details
//         ContactDetails: travellerList.Traveller[0] || {},
//       };
//       console.log(location.state.flights);
//       console.log("Final booking data:", JSON.stringify(finalData, null, 2));
//       navigate("/booking/SeatSelection", {
//         state: {
//           flights: location.state.flights,
//           tripType: location.state.tripType,
//           routingId: location.state.routingId,
//           seatOption: location.state.seatOption,
//           luggageOptions: location.state.luggageOptions,
//           travellerDetails: finalData,
//         },
//       });
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       if (currentStep <= totalTravellers) {
//         // Expand previous traveller and collapse current one
//         setExpandedTravellers((prev) => {
//           const newSet = new Set(prev);
//           if (currentTravellerIndex > 0) {
//             newSet.delete(currentTravellerIndex);
//             newSet.add(currentTravellerIndex - 1);
//           }
//           return newSet;
//         });
//         setCurrentStep(currentStep - 1);
//         setCurrentTravellerIndex(currentTravellerIndex - 1);
//       } else {
//         // Going back from billing to last traveller
//         setExpandedTravellers((prev) => {
//           const newSet = new Set(prev);
//           newSet.add(totalTravellers - 1);
//           return newSet;
//         });
//         setCurrentStep(currentStep - 1);
//       }
//     } else {
//       navigate(-1);
//     }
//   };

//   const getCurrentTraveller = () => {
//     if (currentStep <= totalTravellers) {
//       return travellerList.Traveller[currentTravellerIndex] || {};
//     }
//     return {};
//   };

//   if (!flight) return <p className="text-center mt-20 font-sans">Loading...</p>;

//   const stepInfo = getStepInfo();
//   const currentTraveller = getCurrentTraveller();

//   return (
//     <div className="font-sans flex justify-center">
//       <div className="w-full flex flex-col items-start">
//         {/* Progress indicator */}
//         <div className="w-full max-w-[656px] mb-6">
//           <div className="flex items-center justify-center">
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div
//                 className="bg-[#EE5128] h-2 rounded-full transition-all duration-300"
//                 style={{
//                   width: `${
//                     (stepInfo.stepNumber / stepInfo.totalSteps) * 100
//                   }%`,
//                 }}
//               ></div>
//             </div>
//             <span className="ml-3 text-sm font-medium text-gray-600">
//               {Math.round((stepInfo.stepNumber / stepInfo.totalSteps) * 100)}%
//             </span>
//           </div>
//         </div>

//         {/* Main Content + Booking side-by-side */}
//         <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
//           {/* Main Content */}
//           <div className="max-w-[656px] w-full">
//             {currentStep <= totalTravellers ? (
//               <>
//                 {/* All Travellers with Accordion */}
//                 {travellerList.Traveller.map((traveller, index) => {
//                   const isCompleted = completedTravellers.has(index);
//                   const isCurrent =
//                     index === currentTravellerIndex &&
//                     currentStep <= totalTravellers;
//                   const isClickable = isCompleted || isCurrent;

//                   return (
//                     <div key={index} className="bg-white rounded-md mb-4">
//                       <div
//                         className={`bg-[#FFE4DB] p-3 rounded-t-md flex justify-between items-center ${
//                           isClickable
//                             ? "cursor-pointer hover:bg-[#fdd5c7]"
//                             : "cursor-not-allowed opacity-60"
//                         }`}
//                         onClick={() =>
//                           isClickable && toggleTravellerExpansion(index)
//                         }
//                       >
//                         <h2 className="font-semibold font-jakarta">
//                           {`${index < 2 ? "Adult" : "Child"} ${index + 1}`}
//                           {isCompleted && (
//                             <span className="ml-2 text-green-600 text-sm">
//                               ✓ Completed
//                             </span>
//                           )}
//                           {isCurrent && (
//                             <span className="ml-2 text-blue-600 text-sm">
//                               • Current
//                             </span>
//                           )}
//                         </h2>
//                         <div className="flex items-center gap-2">
//                           {traveller.Name?.NamePartList?.NamePart?.[0] && (
//                             <span className="text-sm text-gray-600">
//                               {traveller.Name.NamePartList.NamePart[0]}{" "}
//                               {traveller.Name.NamePartList.NamePart[2]}
//                             </span>
//                           )}
//                           {isClickable && (
//                             <span
//                               className={`transform transition-transform duration-200 ${
//                                 expandedTravellers.has(index)
//                                   ? "rotate-180"
//                                   : ""
//                               }`}
//                             >
//                               ▼
//                             </span>
//                           )}
//                         </div>
//                       </div>

//                       {expandedTravellers.has(index) && (
//                         <div className="p-6">
//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Title
//                               </label>
//                               <select
//                                 value={traveller.Name?.Title || "Mr"}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "title",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                               >
//                                 <option value="Mr">Mr</option>
//                                 <option value="Mrs">Mrs</option>
//                                 <option value="Miss">Miss</option>
//                                 <option value="Dr">Dr</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Age
//                               </label>
//                               <input
//                                 type="number"
//                                 value={traveller.Age || ""}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "age",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter age"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 First Name
//                               </label>
//                               <input
//                                 type="text"
//                                 value={
//                                   traveller.Name?.NamePartList?.NamePart?.[0] ||
//                                   ""
//                                 }
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "firstName",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter first name"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Middle Name
//                               </label>
//                               <input
//                                 type="text"
//                                 value={
//                                   traveller.Name?.NamePartList?.NamePart?.[1] ||
//                                   ""
//                                 }
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "middleName",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter middle name"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Last Name
//                               </label>
//                               <input
//                                 type="text"
//                                 value={
//                                   traveller.Name?.NamePartList?.NamePart?.[2] ||
//                                   ""
//                                 }
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "lastName",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter last name"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Date of Birth
//                               </label>
//                               <input
//                                 type="date"
//                                 value={
//                                   traveller.CustomSupplierParameterList
//                                     ?.CustomSupplierParameter?.[0]?.Value || ""
//                                 }
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "dateOfBirth",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Flat/Apartment
//                               </label>
//                               <input
//                                 type="text"
//                                 value={traveller.Address?.Flat || ""}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "address.Flat",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter flat/apartment"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Building Name
//                               </label>
//                               <input
//                                 type="text"
//                                 value={traveller.Address?.BuildingName || ""}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "address.BuildingName",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter building name"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Building Number
//                               </label>
//                               <input
//                                 type="text"
//                                 value={traveller.Address?.BuildingNumber || ""}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "address.BuildingNumber",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter building number"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Street
//                               </label>
//                               <input
//                                 type="text"
//                                 value={traveller.Address?.Street || ""}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "address.Street",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter street"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Locality
//                               </label>
//                               <input
//                                 type="text"
//                                 value={traveller.Address?.Locality || ""}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "address.Locality",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter locality"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 City
//                               </label>
//                               <input
//                                 type="text"
//                                 value={traveller.Address?.City || ""}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "address.City",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter city"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Postcode
//                               </label>
//                               <input
//                                 type="text"
//                                 value={traveller.Address?.Postcode || ""}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "address.Postcode",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter postcode"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Country Code
//                               </label>
//                               <input
//                                 type="text"
//                                 value={traveller.Address?.CountryCode || ""}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "address.CountryCode",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter country code"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 International Code
//                               </label>
//                               <input
//                                 type="text"
//                                 value={
//                                   traveller.MobilePhone?.InternationalCode || ""
//                                 }
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "phone.InternationalCode",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter international code"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium mb-1">
//                                 Phone Number
//                               </label>
//                               <input
//                                 type="tel"
//                                 value={traveller.MobilePhone?.Number || ""}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "phone.Number",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter phone number"
//                               />
//                             </div>
//                             <div className="sm:col-span-2">
//                               <label className="block text-sm font-medium mb-1">
//                                 Email
//                               </label>
//                               <input
//                                 type="email"
//                                 value={traveller.Email || ""}
//                                 onChange={(e) =>
//                                   handleTravellerChange(
//                                     "email",
//                                     e.target.value,
//                                     index
//                                   )
//                                 }
//                                 className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
//                                 placeholder="Enter email"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}

//                 {/* Save Details Section (only for traveller steps) */}
//                 <div className="w-full bg-white rounded-md p-6 mt-6 font-sans">
//                   <h3 className="font-semibold text-black mb-1 font-jakarta">
//                     {t("traveller-details.save-details.title")}
//                   </h3>
//                   <p className="text-sm text-gray-500 mb-3">
//                     {t("traveller-details.save-details.description")}
//                   </p>
//                   <label className="flex items-start gap-2">
//                     <input
//                       type="checkbox"
//                       className="accent-[#EE5128] mt-[3px]"
//                     />
//                     <span className="text-sm">
//                       {t("traveller-details.save-details.term")}
//                     </span>
//                   </label>
//                 </div>
//               </>
//             ) : (
//               // Billing Details Step (removed contact details step)
//               <div className="bg-white rounded-md">
//                 <div className="bg-[#FFE4DB] p-3 rounded-t-md">
//                   <h2 className="font-semibold font-jakarta">
//                     Billing Details
//                   </h2>
//                 </div>
//                 <div className="p-6">
//                   <div className="mb-4">
//                     <label className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={sameAsAdult1}
//                         onChange={(e) =>
//                           handleSameAsAdult1Change(e.target.checked)
//                         }
//                         className="accent-[#EE5128]"
//                       />
//                       <span className="text-sm">Same as Adult 1 details</span>
//                     </label>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium mb-1">
//                         Flat/Apartment
//                       </label>
//                       <input
//                         type="text"
//                         value={billingDetails.Address.Flat}
//                         onChange={(e) =>
//                           handleBillingChange("address.Flat", e.target.value)
//                         }
//                         disabled={sameAsAdult1}
//                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
//                         placeholder="Enter flat/apartment"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">
//                         Building Name
//                       </label>
//                       <input
//                         type="text"
//                         value={billingDetails.Address.BuildingName}
//                         onChange={(e) =>
//                           handleBillingChange(
//                             "address.BuildingName",
//                             e.target.value
//                           )
//                         }
//                         disabled={sameAsAdult1}
//                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
//                         placeholder="Enter building name"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">
//                         Building Number
//                       </label>
//                       <input
//                         type="text"
//                         value={billingDetails.Address.BuildingNumber}
//                         onChange={(e) =>
//                           handleBillingChange(
//                             "address.BuildingNumber",
//                             e.target.value
//                           )
//                         }
//                         disabled={sameAsAdult1}
//                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
//                         placeholder="Enter building number"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">
//                         Street
//                       </label>
//                       <input
//                         type="text"
//                         value={billingDetails.Address.Street}
//                         onChange={(e) =>
//                           handleBillingChange("address.Street", e.target.value)
//                         }
//                         disabled={sameAsAdult1}
//                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
//                         placeholder="Enter street"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">
//                         Locality
//                       </label>
//                       <input
//                         type="text"
//                         value={billingDetails.Address.Locality}
//                         onChange={(e) =>
//                           handleBillingChange(
//                             "address.Locality",
//                             e.target.value
//                           )
//                         }
//                         disabled={sameAsAdult1}
//                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
//                         placeholder="Enter locality"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">
//                         City
//                       </label>
//                       <input
//                         type="text"
//                         value={billingDetails.Address.City}
//                         onChange={(e) =>
//                           handleBillingChange("address.City", e.target.value)
//                         }
//                         disabled={sameAsAdult1}
//                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
//                         placeholder="Enter city"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">
//                         Postcode
//                       </label>
//                       <input
//                         type="text"
//                         value={billingDetails.Address.Postcode}
//                         onChange={(e) =>
//                           handleBillingChange(
//                             "address.Postcode",
//                             e.target.value
//                           )
//                         }
//                         disabled={sameAsAdult1}
//                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
//                         placeholder="Enter postcode"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">
//                         Country Code
//                       </label>
//                       <input
//                         type="text"
//                         value={billingDetails.Address.CountryCode}
//                         onChange={(e) =>
//                           handleBillingChange(
//                             "address.CountryCode",
//                             e.target.value
//                           )
//                         }
//                         disabled={sameAsAdult1}
//                         className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
//                         placeholder="Enter country code"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Action Buttons */}
//             <div className="mt-6 flex gap-4">
//               <button
//                 onClick={handleBack}
//                 className="bg-gray-500 text-white px-6 py-2 rounded font-semibold font-jakarta hover:bg-gray-600 active:bg-gray-700 transition-colors duration-200"
//               >
//                 {currentStep === 1 ? "Cancel" : "Back"}
//               </button>
//               <button
//                 onClick={handleContinue}
//                 className="bg-[#EE5128] text-white px-6 py-2 rounded font-semibold font-jakarta hover:bg-[#d64520] active:bg-[#b83b1c] transition-colors duration-200"
//               >
//                 {currentStep === totalTravellers + 1
//                   ? t("continue-booking")
//                   : "Continue"}
//               </button>
//             </div>
//           </div>

//           {/* Booking Details Sidebar */}
//           {location.state.tripType === "One Way" ? (
//             <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
//               <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
//                 <h2 className="font-semibold text-[18px] font-jakarta">
//                   {t("booking-details.title")}
//                 </h2>
//               </div>

//               <div className="flex justify-between items-center px-6 mt-[20px]">
//                 <div className="text-center">
//                   <p className="text-[20px] font-bold font-jakarta">
//                     {OutwardTicket?.departureTime}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">
//                     {OutwardTicket?.departureCity}
//                   </p>
//                 </div>
//                 <div className="flex flex-col items-center relative">
//                   <p className="text-xs text-gray-500 mb-[2px]">
//                     {OutwardTicket?.duration}
//                   </p>
//                   <div className="flex items-center justify-center">
//                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                     <span className="text-black text-sm">✈</span>
//                     <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                     <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                   </div>
//                   <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
//                     Refundable
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-[20px] font-bold font-jakarta">
//                     {OutwardTicket?.arrivalTime}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">
//                     {OutwardTicket?.arrivalCity}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex justify-between px-6 mt-6">
//                 <div className="text-left w-1/2 border-r pr-4">
//                   <p className="text-sm font-semibold text-black font-jakarta">
//                     {t("booking-details.departure")}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-[2px]">
//                     Thu, 06 jul, 2025
//                   </p>
//                 </div>
//                 <div className="text-left w-1/2 pl-4">
//                   <p className="text-sm font-semibold text-black font-jakarta ml-5">
//                     {t("booking-details.landing")}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-[2px] ml-5">
//                     Thu, 06 jul, 2025
//                   </p>
//                 </div>
//               </div>

//               <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
//                 <span>{t("booking-details.policy")}</span>
//                 <span className="ml-10">{t("booking-details.refund")}</span>
//                 <span>{t("booking-details.reschedule")}</span>
//               </div>
//             </div>
//           ) : location.state.tripType === "Round Trip" ? (
//             <div className="flex flex-col gap-2">
//               <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
//                 <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
//                   <h2 className="font-semibold text-[18px] font-jakarta">
//                     {t("booking-details.title")} - Outward
//                   </h2>
//                 </div>

//                 <div className="flex justify-between items-center px-6 mt-[20px]">
//                   <div className="text-center">
//                     <p className="text-[20px] font-bold font-jakarta">
//                       {OutwardTicket?.departureTime}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {OutwardTicket?.departureCity}
//                     </p>
//                   </div>
//                   <div className="flex flex-col items-center relative">
//                     <p className="text-xs text-gray-500 mb-[2px]">
//                       {OutwardTicket?.duration}
//                     </p>
//                     <div className="flex items-center justify-center">
//                       <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                       <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                       <span className="text-black text-sm">✈</span>
//                       <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                       <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                     </div>
//                     <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
//                       Refundable
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-[20px] font-bold font-jakarta">
//                       {OutwardTicket?.arrivalTime}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {OutwardTicket?.arrivalCity}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex justify-between px-6 mt-6">
//                   <div className="text-left w-1/2 border-r pr-4">
//                     <p className="text-sm font-semibold text-black font-jakarta">
//                       {t("booking-details.departure")}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-[2px]">
//                       Thu, 06 jul, 2025
//                     </p>
//                   </div>
//                   <div className="text-left w-1/2 pl-4">
//                     <p className="text-sm font-semibold text-black font-jakarta ml-5">
//                       {t("booking-details.landing")}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-[2px] ml-5">
//                       Thu, 06 jul, 2025
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
//                   <span>{t("booking-details.policy")}</span>
//                   <span className="ml-10">{t("booking-details.refund")}</span>
//                   <span>{t("booking-details.reschedule")}</span>
//                 </div>
//               </div>

//               <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
//                 <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
//                   <h2 className="font-semibold text-[18px] font-jakarta">
//                     {t("booking-details.title")} - Return
//                   </h2>
//                 </div>

//                 <div className="flex justify-between items-center px-6 mt-[20px]">
//                   <div className="text-center">
//                     <p className="text-[20px] font-bold font-jakarta">
//                       {returnTicket?.departureTime}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {returnTicket?.departureCity}
//                     </p>
//                   </div>
//                   <div className="flex flex-col items-center relative">
//                     <p className="text-xs text-gray-500 mb-[2px]">
//                       {returnTicket?.duration}
//                     </p>
//                     <div className="flex items-center justify-center">
//                       <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                       <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                       <span className="text-black text-sm">✈</span>
//                       <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
//                       <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
//                     </div>
//                     <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
//                       Refundable
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-[20px] font-bold font-jakarta">
//                       {returnTicket?.arrivalTime}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {returnTicket?.arrivalCity}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex justify-between px-6 mt-6">
//                   <div className="text-left w-1/2 border-r pr-4">
//                     <p className="text-sm font-semibold text-black font-jakarta">
//                       {t("booking-details.departure")}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-[2px]">
//                       Thu, 06 jul, 2025
//                     </p>
//                   </div>
//                   <div className="text-left w-1/2 pl-4">
//                     <p className="text-sm font-semibold text-black font-jakarta ml-5">
//                       {t("booking-details.landing")}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-[2px] ml-5">
//                       Thu, 06 jul, 2025
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
//                   <span>{t("booking-details.policy")}</span>
//                   <span className="ml-10">{t("booking-details.refund")}</span>
//                   <span>{t("booking-details.reschedule")}</span>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
//               <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
//                 <h2 className="font-semibold text-[18px] font-jakarta">
//                   {t("booking-details.title")}
//                 </h2>
//               </div>
//               <div className="flex justify-between items-center px-6 mt-[20px]">
//                 Something went wrong
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TravelersDetails;
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";

function TravelersDetails() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [flight, setFlight] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentTravellerIndex, setCurrentTravellerIndex] = useState(0);
  const [totalTravellers, setTotalTravellers] = useState(0);
  const [travellerList, setTravellerList] = useState({ Traveller: [] });
  const [expandedTravellers, setExpandedTravellers] = useState(new Set([0]));
  const [completedTravellers, setCompletedTravellers] = useState(new Set());
  const [billingCompleted, setBillingCompleted] = useState(false);
  const [billingExpanded, setBillingExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [billingDetails, setBillingDetails] = useState({
    Name: {
      Title: "Mr",
      NamePartList: {
        NamePart: ["", "", ""],
      },
    },
    Address: {
      Company: "",
      Flat: "",
      BuildingName: "",
      BuildingNumber: "",
      Street: "",
      Locality: "",
      City: "",
      Province: "OT",
      Postcode: "",
      CountryCode: "",
    },
    CreditCard: {
      Number: import.meta.env.VITE_CARD_NUMBER,
      SecurityCode: import.meta.env.VITE_CARD_SECURITYCODE,
      ExpiryDate: import.meta.env.VITE_CARD_EXPIRYDATE,
      StartDate: import.meta.env.VITE_CARD_STARTDATE,
      CardType: import.meta.env.VITE_CARD_CARDTYPE,
      IssueNumber: "0",
    },
  });
  const [sameAsAdult1, setSameAsAdult1] = useState(false);

  useEffect(() => {
    if (location.state && location.state.flights) {
      setFlight(location.state.flights);
    }

    console.log(location.state.travalers);

    //  travelers data
    if (location.state && location.state.travalers) {
      const travellerCount = location.state.travalers.length;
      setTotalTravellers(travellerCount);

      const initialTravellers = location.state.travalers.map(
        (traveler, index) => ({
          Age: "",
          Name: {
            Title: "Mr",
            NamePartList: {
              NamePart: ["", "", ""],
            },
          },
          Address: {
            Company: "",
            Flat: "",
            BuildingName: "",
            BuildingNumber: "",
            Street: "",
            Locality: "",
            City: "",
            Province: "OT",
            Postcode: "",
            CountryCode: "",
          },
          MobilePhone: {
            InternationalCode: "",
            AreaCode: "",
            Number: "",
            Extension: "",
          },
          Email: "",
          CustomSupplierParameterList: {
            CustomSupplierParameter: [
              {
                Name: "DateOfBirth",
                Value: "",
              },
            ],
          },
        })
      );
      setTravellerList({ Traveller: initialTravellers });
    }
  }, [location]);

  const OutwardTicket = location.state?.flights?.[0];
  const returnTicket = location.state?.flights?.[1];

  console.log(OutwardTicket);

  const toggleTravellerExpansion = (index) => {
    // Only allow clicking on completed travellers or current active traveller
    if (completedTravellers.has(index) || index === currentTravellerIndex) {
      setExpandedTravellers((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    }
  };

  const toggleBillingExpansion = () => {
    if (billingCompleted || currentStep === totalTravellers + 1) {
      setBillingExpanded(!billingExpanded);
    }
  };

  const handleTravellerChange = (
    field,
    value,
    travellerIndex = currentTravellerIndex
  ) => {
    const updatedTravellers = [...travellerList.Traveller];

    if (field === "age") {
      updatedTravellers[travellerIndex].Age = parseInt(value) || "";
    } else if (field === "title") {
      updatedTravellers[travellerIndex].Name.Title = value;
    } else if (field === "firstName") {
      updatedTravellers[travellerIndex].Name.NamePartList.NamePart[0] = value;
    } else if (field === "middleName") {
      updatedTravellers[travellerIndex].Name.NamePartList.NamePart[1] = value;
    } else if (field === "lastName") {
      updatedTravellers[travellerIndex].Name.NamePartList.NamePart[2] = value;
    } else if (field === "email") {
      updatedTravellers[travellerIndex].Email = value;
    } else if (field.startsWith("address.")) {
      const addressField = field.split(".")[1];
      updatedTravellers[travellerIndex].Address[addressField] = value;
    } else if (field.startsWith("phone.")) {
      const phoneField = field.split(".")[1];
      updatedTravellers[travellerIndex].MobilePhone[phoneField] = value;
    } else if (field === "dateOfBirth") {
      updatedTravellers[
        travellerIndex
      ].CustomSupplierParameterList.CustomSupplierParameter[0].Value = value;
    }

    setTravellerList({ Traveller: updatedTravellers });

    // If this is Adult 1 (index 0) and sameAsAdult1 is checked, update billing details
    if (travellerIndex === 0 && sameAsAdult1) {
      updateBillingFromAdult1();
    }
  };

  const handleBillingChange = (field, value) => {
    setBillingDetails((prev) => {
      const updated = { ...prev };

      if (field === "title") {
        updated.Name.Title = value;
      } else if (field === "firstName") {
        updated.Name.NamePartList.NamePart[0] = value;
      } else if (field === "middleName") {
        updated.Name.NamePartList.NamePart[1] = value;
      } else if (field === "lastName") {
        updated.Name.NamePartList.NamePart[2] = value;
      } else if (field.startsWith("address.")) {
        const addressField = field.split(".")[1];
        updated.Address[addressField] = value;
      } else if (field.startsWith("card.")) {
        const cardField = field.split(".")[1];
        updated.CreditCard[cardField] = value;
      }

      return updated;
    });
  };

  const updateBillingFromAdult1 = () => {
    const adult1 = travellerList.Traveller[0];
    if (adult1) {
      setBillingDetails((prev) => ({
        ...prev,
        Name: {
          Title: adult1.Name.Title,
          NamePartList: {
            NamePart: [...adult1.Name.NamePartList.NamePart],
          },
        },
        Address: { ...adult1.Address },
      }));
    }
  };

  const handleSameAsAdult1Change = (checked) => {
    setSameAsAdult1(checked);
    if (checked) {
      updateBillingFromAdult1();
    }
  };

  const getStepInfo = () => {
    if (currentStep <= totalTravellers) {
      return {
        title: `Traveller ${currentStep} Details`,
        stepNumber: currentStep,
        totalSteps: totalTravellers + 1, // Removed contact details step
      };
    } else {
      return {
        title: "Billing Details",
        stepNumber: currentStep,
        totalSteps: totalTravellers + 1, // Removed contact details step
      };
    }
  };

  const handleContinue = () => {
    if (currentStep <= totalTravellers) {
      // Mark current traveller as completed
      setCompletedTravellers(
        (prev) => new Set([...prev, currentTravellerIndex])
      );

      if (currentStep < totalTravellers) {
        // Collapse current traveller and expand next one
        setExpandedTravellers((prev) => {
          const newSet = new Set(prev);
          newSet.delete(currentTravellerIndex);
          newSet.add(currentTravellerIndex + 1);
          return newSet;
        });
        setCurrentStep(currentStep + 1);
        setCurrentTravellerIndex(currentTravellerIndex + 1);
      } else {
        // Collapse last traveller and go to billing details
        setExpandedTravellers((prev) => {
          const newSet = new Set(prev);
          newSet.delete(currentTravellerIndex);
          return newSet;
        });
        setCurrentStep(currentStep + 1);
        setBillingExpanded(true);
      }
    } else {
      // Final step - billing details completed
      setBillingCompleted(true);
      setBillingExpanded(false);

      const finalData = {
        TravellerList: travellerList,
        BillingDetails: billingDetails,
        // Use Adult 1 details as contact details
        ContactDetails: travellerList.Traveller[0] || {},
      };
      console.log(location.state.flights);
      console.log("Final booking data:", JSON.stringify(finalData, null, 2));
      navigate("/booking/SeatSelection", {
        state: {
          flights: location.state.flights,
          tripType: location.state.tripType,
          routingId: location.state.routingId,
          seatOption: location.state.seatOption,
          luggageOptions: location.state.luggageOptions,
          travellerDetails: finalData,
        },
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      if (currentStep <= totalTravellers) {
        // Expand previous traveller and collapse current one
        setExpandedTravellers((prev) => {
          const newSet = new Set(prev);
          if (currentTravellerIndex > 0) {
            newSet.delete(currentTravellerIndex);
            newSet.add(currentTravellerIndex - 1);
          }
          return newSet;
        });
        setCurrentStep(currentStep - 1);
        setCurrentTravellerIndex(currentTravellerIndex - 1);
      } else {
        // Going back from billing to last traveller
        setBillingExpanded(false);
        setExpandedTravellers((prev) => {
          const newSet = new Set(prev);
          newSet.add(totalTravellers - 1);
          return newSet;
        });
        setCurrentStep(currentStep - 1);
      }
    } else {
      navigate(-1);
    }
  };

  const getCurrentTraveller = () => {
    if (currentStep <= totalTravellers) {
      return travellerList.Traveller[currentTravellerIndex] || {};
    }
    return {};
  };

  if (!flight) return <p className="text-center mt-20 font-sans">Loading...</p>;

  const stepInfo = getStepInfo();
  const currentTraveller = getCurrentTraveller();
  const outwordPrice = location.state?.outwordPrice || 0;
  const returnPrice = location.state?.returnPrice || 0;
  const currency = location.state?.currency || "INR"; // fallback currency
  const tripType = location.state?.tripType || "OneWay";
  const totalPrice = outwordPrice + returnPrice;

  return (
    <div className="font-sans flex justify-center">
      <div className="w-full flex flex-col items-start">
        {/* Progress indicator */}
        <div className="w-full max-w-[656px] mb-6">
          <div className="flex items-center justify-center">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#EE5128] h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    (stepInfo.stepNumber / stepInfo.totalSteps) * 100
                  }%`,
                }}
              ></div>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-600">
              {Math.round((stepInfo.stepNumber / stepInfo.totalSteps) * 100)}%
            </span>
          </div>
        </div>

        {/* Main Content + Booking side-by-side */}
        <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
          {/* Main Content */}
          <div className="max-w-[656px] w-full">
            {/* All Travellers with Accordion */}
            {travellerList.Traveller.map((traveller, index) => {
              const isCompleted = completedTravellers.has(index);
              const isCurrent =
                index === currentTravellerIndex &&
                currentStep <= totalTravellers;
              const isClickable = isCompleted || isCurrent;

              return (
                <div key={index} className="bg-white rounded-md mb-4">
                  <div
                    className={`bg-[#FFE4DB] p-3 rounded-t-md flex justify-between items-center ${
                      isClickable
                        ? "cursor-pointer hover:bg-[#fdd5c7]"
                        : "cursor-not-allowed opacity-60"
                    }`}
                    onClick={() =>
                      isClickable && toggleTravellerExpansion(index)
                    }
                  >
                    <h2 className="font-semibold font-jakarta">
                      {`${index < 2 ? "Adult" : "Child"} ${index + 1}`}
                      {isCompleted && (
                        <span className="ml-2 text-green-600 text-sm">
                          ✓ Completed
                        </span>
                      )}
                      {isCurrent && (
                        <span className="ml-2 text-blue-600 text-sm">
                          • Current
                        </span>
                      )}
                    </h2>
                    <div className="flex items-center gap-2">
                      {traveller.Name?.NamePartList?.NamePart?.[0] && (
                        <span className="text-sm text-gray-600">
                          {traveller.Name.NamePartList.NamePart[0]}{" "}
                          {traveller.Name.NamePartList.NamePart[2]}
                        </span>
                      )}
                      {isClickable && (
                        <span
                          className={`transform transition-transform duration-200 ${
                            expandedTravellers.has(index) ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      )}
                    </div>
                  </div>

                  {expandedTravellers.has(index) && (
                    <div className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Title
                          </label>
                          <select
                            value={traveller.Name?.Title || "Mr"}
                            onChange={(e) =>
                              handleTravellerChange(
                                "title",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                          >
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Dr">Dr</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Age
                          </label>
                          <input
                            type="number"
                            value={traveller.Age || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "age",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter age"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            value={
                              traveller.Name?.NamePartList?.NamePart?.[0] || ""
                            }
                            onChange={(e) =>
                              handleTravellerChange(
                                "firstName",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Middle Name
                          </label>
                          <input
                            type="text"
                            value={
                              traveller.Name?.NamePartList?.NamePart?.[1] || ""
                            }
                            onChange={(e) =>
                              handleTravellerChange(
                                "middleName",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter middle name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            value={
                              traveller.Name?.NamePartList?.NamePart?.[2] || ""
                            }
                            onChange={(e) =>
                              handleTravellerChange(
                                "lastName",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter last name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            value={
                              traveller.CustomSupplierParameterList
                                ?.CustomSupplierParameter?.[0]?.Value || ""
                            }
                            onChange={(e) =>
                              handleTravellerChange(
                                "dateOfBirth",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Company
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Company || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Company",
                                e.target.value
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter company"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Flat/Apartment
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Flat || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Flat",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter flat/apartment"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Building Name
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.BuildingName || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.BuildingName",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter building name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Building Number
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.BuildingNumber || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.BuildingNumber",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter building number"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Street
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Street || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Street",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter street"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Locality
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Locality || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Locality",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter locality"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.City || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.City",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter city"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Province/State
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Province || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Province",
                                e.target.value
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter province/state"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Postcode
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.Postcode || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.Postcode",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter postcode"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Country Code
                          </label>
                          <input
                            type="text"
                            value={traveller.Address?.CountryCode || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "address.CountryCode",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter country code"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            International Code
                          </label>
                          <input
                            type="text"
                            value={
                              traveller.MobilePhone?.InternationalCode || ""
                            }
                            onChange={(e) =>
                              handleTravellerChange(
                                "phone.InternationalCode",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter international code"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={traveller.MobilePhone?.Number || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "phone.Number",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter phone number"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            value={traveller.Email || ""}
                            onChange={(e) =>
                              handleTravellerChange(
                                "email",
                                e.target.value,
                                index
                              )
                            }
                            className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Billing Details Section */}
            <div className="bg-white rounded-md mb-4">
              <div
                className={`bg-[#FFE4DB] p-3 rounded-t-md flex justify-between items-center ${
                  billingCompleted || currentStep === totalTravellers + 1
                    ? "cursor-pointer hover:bg-[#fdd5c7]"
                    : "cursor-not-allowed opacity-60"
                }`}
                onClick={toggleBillingExpansion}
              >
                <h2 className="font-semibold font-jakarta">
                  Billing Details
                  {billingCompleted && (
                    <span className="ml-2 text-green-600 text-sm">
                      ✓ Completed
                    </span>
                  )}
                  {currentStep === totalTravellers + 1 && !billingCompleted && (
                    <span className="ml-2 text-blue-600 text-sm">
                      • Current
                    </span>
                  )}
                </h2>
                <div className="flex items-center gap-2">
                  {billingDetails.Name?.NamePartList?.NamePart?.[0] && (
                    <span className="text-sm text-gray-600">
                      {billingDetails.Name.NamePartList.NamePart[0]}{" "}
                      {billingDetails.Name.NamePartList.NamePart[2]}
                    </span>
                  )}
                  {(billingCompleted ||
                    currentStep === totalTravellers + 1) && (
                    <span
                      className={`transform transition-transform duration-200 ${
                        billingExpanded ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  )}
                </div>
              </div>

              {billingExpanded && (
                <div className="p-6">
                  <div className="mb-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={sameAsAdult1}
                        onChange={(e) =>
                          handleSameAsAdult1Change(e.target.checked)
                        }
                        className="accent-[#EE5128]"
                      />
                      <span className="text-sm">Same as Adult 1 details</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Title */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Title
                      </label>
                      <select
                        value={billingDetails.Name?.Title || "Mr"}
                        onChange={(e) =>
                          handleBillingChange("title", e.target.value)
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                      >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                      </select>
                    </div>

                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={
                          billingDetails.Name?.NamePartList?.NamePart?.[0] || ""
                        }
                        onChange={(e) =>
                          handleBillingChange("firstName", e.target.value)
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter first name"
                      />
                    </div>

                    {/* Middle Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        value={
                          billingDetails.Name?.NamePartList?.NamePart?.[1] || ""
                        }
                        onChange={(e) =>
                          handleBillingChange("middleName", e.target.value)
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter middle name"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={
                          billingDetails.Name?.NamePartList?.NamePart?.[2] || ""
                        }
                        onChange={(e) =>
                          handleBillingChange("lastName", e.target.value)
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter last name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address.Company}
                        onChange={(e) =>
                          handleBillingChange("address.Company", e.target.value)
                        }
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                        placeholder="Enter company"
                      />
                    </div>
                    {/* Flat/Apartment */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Flat/Apartment
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address.Flat}
                        onChange={(e) =>
                          handleBillingChange("address.Flat", e.target.value)
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter flat/apartment"
                      />
                    </div>

                    {/* Building Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Building Name
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address.BuildingName}
                        onChange={(e) =>
                          handleBillingChange(
                            "address.BuildingName",
                            e.target.value
                          )
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter building name"
                      />
                    </div>

                    {/* Building Number */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Building Number
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address.BuildingNumber}
                        onChange={(e) =>
                          handleBillingChange(
                            "address.BuildingNumber",
                            e.target.value
                          )
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter building number"
                      />
                    </div>

                    {/* Street */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Street
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address.Street}
                        onChange={(e) =>
                          handleBillingChange("address.Street", e.target.value)
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter street"
                      />
                    </div>

                    {/* Locality */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Locality
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address.Locality}
                        onChange={(e) =>
                          handleBillingChange(
                            "address.Locality",
                            e.target.value
                          )
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter locality"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address.City}
                        onChange={(e) =>
                          handleBillingChange("address.City", e.target.value)
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter city"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Province/State
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address.Province}
                        onChange={(e) =>
                          handleBillingChange(
                            "address.Province",
                            e.target.value
                          )
                        }
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                        placeholder="Enter province/state"
                      />
                    </div>
                    {/* Postcode */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Postcode
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address.Postcode}
                        onChange={(e) =>
                          handleBillingChange(
                            "address.Postcode",
                            e.target.value
                          )
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter postcode"
                      />
                    </div>

                    {/* Country Code */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Country Code
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Address.CountryCode}
                        onChange={(e) =>
                          handleBillingChange(
                            "address.CountryCode",
                            e.target.value
                          )
                        }
                        disabled={sameAsAdult1}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter country code"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Save Details Section (only for traveller steps) */}
            {currentStep <= totalTravellers && (
              <div className="w-full bg-white rounded-md p-6 mt-6 font-sans">
                <h3 className="font-semibold text-black mb-1 font-jakarta">
                  {t("traveller-details.save-details.title")}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {t("traveller-details.save-details.description")}
                </p>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#EE5128] mt-[3px]"
                  />
                  <span className="text-sm">
                    {t("traveller-details.save-details.term")}
                  </span>
                </label>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={handleBack}
                className="bg-gray-500 text-white px-6 py-2 rounded font-semibold font-jakarta hover:bg-gray-600 active:bg-gray-700 transition-colors duration-200"
              >
                {currentStep === 1 ? "Cancel" : "Back"}
              </button>
              <button
                onClick={handleContinue}
                className="bg-[#EE5128] text-white px-6 py-2 rounded font-semibold font-jakarta hover:bg-[#d64520] active:bg-[#b83b1c] transition-colors duration-200"
              >
                {currentStep === totalTravellers + 1
                  ? t("continue-booking")
                  : "Continue"}
              </button>
            </div>
          </div>

          {/* Booking Details Sidebar */}
          {location.state.tripType === "One Way" ? (
            <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
              <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                <h2 className="font-semibold text-[18px] font-jakarta">
                  {t("booking-details.title")}
                </h2>
              </div>

              <div className="flex justify-between items-center px-6 mt-[20px]">
                <div className="text-center">
                  <p className="text-[20px] font-bold font-jakarta">
                    {OutwardTicket?.departureTime}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {OutwardTicket?.departureCity}
                  </p>
                </div>
                <div className="flex flex-col items-center relative">
                  <p className="text-xs text-gray-500 mb-[2px]">
                    {OutwardTicket?.duration}
                  </p>
                  <div className="flex items-center justify-center">
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                    <span className="text-black text-sm">✈</span>
                    <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                  </div>
                  <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                    Refundable
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[20px] font-bold font-jakarta">
                    {OutwardTicket?.arrivalTime}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {OutwardTicket?.arrivalCity}
                  </p>
                </div>
              </div>

              <div className="flex justify-between px-6 mt-6">
                <div className="text-left w-1/2 border-r pr-4">
                  <p className="text-sm font-semibold text-black font-jakarta">
                    {t("booking-details.departure")}
                  </p>
                  <p className="text-xs text-gray-500 mt-[2px]">
                    Thu, 06 jul, 2025
                  </p>
                </div>
                <div className="text-left w-1/2 pl-4">
                  <p className="text-sm font-semibold text-black font-jakarta ml-5">
                    {t("booking-details.landing")}
                  </p>
                  <p className="text-xs text-gray-500 mt-[2px] ml-5">
                    Thu, 06 jul, 2025
                  </p>
                </div>
              </div>

              <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
                <span>{t("booking-details.policy")}</span>
                <span className="ml-10">{t("booking-details.refund")}</span>
                <span>{t("booking-details.reschedule")}</span>
              </div>
            </div>
          ) : location.state.tripType === "Round Trip" ? (
            <div className="flex flex-col gap-2">
              <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
                <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                  <h2 className="font-semibold text-[18px] font-jakarta">
                    {t("booking-details.title")} - Outward
                  </h2>
                </div>

                <div className="flex justify-between items-center px-6 mt-[20px]">
                  <div className="text-center">
                    <p className="text-[20px] font-bold font-jakarta">
                      {OutwardTicket?.departureTime}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {OutwardTicket?.departureCity}
                    </p>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <p className="text-xs text-gray-500 mb-[2px]">
                      {OutwardTicket?.duration}
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="text-black text-sm">✈</span>
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    </div>
                    <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                      Refundable
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[20px] font-bold font-jakarta">
                      {OutwardTicket?.arrivalTime}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {OutwardTicket?.arrivalCity}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between px-6 mt-6">
                  <div className="text-left w-1/2 border-r pr-4">
                    <p className="text-sm font-semibold text-black font-jakarta">
                      {t("booking-details.departure")}
                    </p>
                    <p className="text-xs text-gray-500 mt-[2px]">
                      Thu, 06 jul, 2025
                    </p>
                  </div>
                  <div className="text-left w-1/2 pl-4">
                    <p className="text-sm font-semibold text-black font-jakarta ml-5">
                      {t("booking-details.landing")}
                    </p>
                    <p className="text-xs text-gray-500 mt-[2px] ml-5">
                      Thu, 06 jul, 2025
                    </p>
                  </div>
                </div>

                <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
                  <span>{t("booking-details.policy")}</span>
                  <span className="ml-10">{t("booking-details.refund")}</span>
                  <span>{t("booking-details.reschedule")}</span>
                </div>
              </div>

              <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
                <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                  <h2 className="font-semibold text-[18px] font-jakarta">
                    {t("booking-details.title")} - Return
                  </h2>
                </div>

                <div className="flex justify-between items-center px-6 mt-[20px]">
                  <div className="text-center">
                    <p className="text-[20px] font-bold font-jakarta">
                      {returnTicket?.departureTime}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {returnTicket?.departureCity}
                    </p>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <p className="text-xs text-gray-500 mb-[2px]">
                      {returnTicket?.duration}
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="text-black text-sm">✈</span>
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    </div>
                    <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                      Refundable
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[20px] font-bold font-jakarta">
                      {returnTicket?.arrivalTime}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {returnTicket?.arrivalCity}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between px-6 mt-6">
                  <div className="text-left w-1/2 border-r pr-4">
                    <p className="text-sm font-semibold text-black font-jakarta">
                      {t("booking-details.departure")}
                    </p>
                    <p className="text-xs text-gray-500 mt-[2px]">
                      Thu, 06 jul, 2025
                    </p>
                  </div>
                  <div className="text-left w-1/2 pl-4">
                    <p className="text-sm font-semibold text-black font-jakarta ml-5">
                      {t("booking-details.landing")}
                    </p>
                    <p className="text-xs text-gray-500 mt-[2px] ml-5">
                      Thu, 06 jul, 2025
                    </p>
                  </div>
                </div>

                <div className="flex justify-around mt-6 text-sm font-medium font-jakarta">
                  <span>{t("booking-details.policy")}</span>
                  <span className="ml-10">{t("booking-details.refund")}</span>
                  <span>{t("booking-details.reschedule")}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-[377px] w-full h-[280px] bg-white rounded-[12px]">
              <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                <h2 className="font-semibold text-[18px] font-jakarta">
                  {t("booking-details.title")}
                </h2>
              </div>
              <div className="flex justify-between items-center px-6 mt-[20px]">
                Something went wrong
              </div>
            </div>
          )}
          <div className="w-full lg:w-[600px]">
            <div className="bg-white rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] min-h-[240px]">
              <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                <h2 className="text-[18px] font-semibold text-black font-jakarta">
                  Price Summary
                </h2>
              </div>

              <div className="px-6 py-5 text-sm text-gray-800 font-jakarta space-y-4">
                {/* Departure */}
                <div className="flex justify-between">
                  <span>Departure Flight</span>
                  <span className="font-medium">
                    {currency} {parseFloat(outwordPrice || 0).toFixed(2)}
                  </span>
                </div>

                {/* Return Flight – Reserved space even if not visible */}
                <div
                  className={`flex justify-between ${
                    tripType === "Round Trip"
                      ? ""
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span>Return Flight</span>
                  <span className="font-medium">
                    {currency} {parseFloat(returnPrice || 0).toFixed(2)}
                  </span>
                </div>

                {/* Total */}
                <div className="border-t border-gray-300 pt-4 flex justify-between text-base font-semibold text-black">
                  <span>Total</span>
                  <span>
                    {currency} {parseFloat(totalPrice || 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Popup Button */}
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-[#EE5128] text-white px-5 py-2 rounded font-semibold hover:bg-[#d64520] transition"
            >
              Popup
            </button>
          </div>

          {/* Popup Modal */}
          {showPopup && (
            <div className="fixed inset-0 z-50 backdrop-blur-md bg-white/5 flex items-center justify-center">
              <div className="bg-white w-[90%] max-w-md rounded-xl p-6 text-center shadow-lg">
                <h3 className="text-lg font-bold text-orange-600 mb-3">
                  Duplicate Booking Alert
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  It looks like you've entered the same flight and traveler
                  details again. Please confirm before proceeding to avoid
                  duplicate bookings.
                </p>
                <p className="text-sm text-gray-600">
                  If you've already booked but haven't received your tickets,
                  contact our support team.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TravelersDetails;
