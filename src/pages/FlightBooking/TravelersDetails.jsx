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
  const [contactDetails, setContactDetails] = useState({
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
      Province: "",
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
  });
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
      Province: "",
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
  const [sameAsContact, setSameAsContact] = useState(false);

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
              NamePart: [""],
            },
          },
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

  const handleTravellerChange = (field, value) => {
    const updatedTravellers = [...travellerList.Traveller];

    if (field === "age") {
      updatedTravellers[currentTravellerIndex].Age = parseInt(value) || "";
    } else if (field === "title") {
      updatedTravellers[currentTravellerIndex].Name.Title = value;
    } else if (field === "firstName") {
      updatedTravellers[currentTravellerIndex].Name.NamePartList.NamePart[0] =
        value;
    } else if (field === "dateOfBirth") {
      updatedTravellers[
        currentTravellerIndex
      ].CustomSupplierParameterList.CustomSupplierParameter[0].Value = value;
    }

    setTravellerList({ Traveller: updatedTravellers });
  };

  const handleContactChange = (field, value) => {
    setContactDetails((prev) => {
      const updated = { ...prev };

      if (field === "title") {
        updated.Name.Title = value;
      } else if (field === "firstName") {
        updated.Name.NamePartList.NamePart[0] = value;
      } else if (field === "middleName") {
        updated.Name.NamePartList.NamePart[1] = value;
      } else if (field === "lastName") {
        updated.Name.NamePartList.NamePart[2] = value;
      } else if (field === "email") {
        updated.Email = value;
      } else if (field.startsWith("address.")) {
        const addressField = field.split(".")[1];
        updated.Address[addressField] = value;
      } else if (field.startsWith("phone.")) {
        const phoneField = field.split(".")[1];
        updated.MobilePhone[phoneField] = value;
      }

      return updated;
    });
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

  const handleSameAsContactChange = (checked) => {
    setSameAsContact(checked);
    if (checked) {
      setBillingDetails((prev) => ({
        ...prev,
        Name: {
          Title: contactDetails.Name.Title,
          NamePartList: {
            NamePart: [...contactDetails.Name.NamePartList.NamePart],
          },
        },
        Address: { ...contactDetails.Address },
      }));
    }
  };

  const getStepInfo = () => {
    if (currentStep <= totalTravellers) {
      return {
        title: `Traveller ${currentStep} Details`,
        stepNumber: currentStep,
        totalSteps: totalTravellers + 2,
      };
    } else if (currentStep === totalTravellers + 1) {
      return {
        title: "Contact Details",
        stepNumber: currentStep,
        totalSteps: totalTravellers + 2,
      };
    } else {
      return {
        title: "Billing Details",
        stepNumber: currentStep,
        totalSteps: totalTravellers + 2,
      };
    }
  };

  const handleContinue = () => {
    if (currentStep <= totalTravellers) {
      if (currentStep < totalTravellers) {
        setCurrentStep(currentStep + 1);
        setCurrentTravellerIndex(currentTravellerIndex + 1);
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === totalTravellers + 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalData = {
        TravellerList: travellerList,
        ContactDetails: contactDetails,
        BillingDetails: billingDetails,
      };

      console.log("Final booking data:", JSON.stringify(finalData, null, 2));

      navigate("/booking/SeatSelection", {
        state: {
          flight,
          travellerDetails: finalData,
          flights: location.state.flights,
          tripType: location.state.tripType,
          routingId: location.state.routingId,
          seatOption: location.state.seatOption,
          luggageOptions: location.state.luggageOptions,
        },
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      if (currentStep <= totalTravellers) {
        setCurrentStep(currentStep - 1);
        setCurrentTravellerIndex(currentTravellerIndex - 1);
      } else {
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
            {currentStep <= totalTravellers ? (
              // Traveller Details Steps
              <div className="bg-white rounded-md">
                <div className="bg-[#FFE4DB] p-3 rounded-t-md">
                  <h2 className="font-semibold font-jakarta">
                    Traveller {currentStep} Details
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Title
                      </label>
                      <select
                        value={currentTraveller.Name?.Title || "Mr"}
                        onChange={(e) =>
                          handleTravellerChange("title", e.target.value)
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
                        value={currentTraveller.Age || ""}
                        onChange={(e) =>
                          handleTravellerChange("age", e.target.value)
                        }
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                        placeholder="Enter age"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        value={
                          currentTraveller.Name?.NamePartList?.NamePart?.[0] ||
                          ""
                        }
                        onChange={(e) =>
                          handleTravellerChange("firstName", e.target.value)
                        }
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                        placeholder="Enter name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={
                          currentTraveller.CustomSupplierParameterList
                            ?.CustomSupplierParameter?.[0]?.Value || ""
                        }
                        onChange={(e) =>
                          handleTravellerChange("dateOfBirth", e.target.value)
                        }
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : currentStep === totalTravellers + 1 ? (
              // Contact Details Step
              <div className="bg-white rounded-md">
                <div className="bg-[#FFE4DB] p-3 rounded-t-md">
                  <h2 className="font-semibold font-jakarta">
                    Contact Details
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Title
                      </label>
                      <select
                        value={contactDetails.Name.Title}
                        onChange={(e) =>
                          handleContactChange("title", e.target.value)
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
                        First Name
                      </label>
                      <input
                        type="text"
                        value={contactDetails.Name.NamePartList.NamePart[0]}
                        onChange={(e) =>
                          handleContactChange("firstName", e.target.value)
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
                        value={contactDetails.Name.NamePartList.NamePart[1]}
                        onChange={(e) =>
                          handleContactChange("middleName", e.target.value)
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
                        value={contactDetails.Name.NamePartList.NamePart[2]}
                        onChange={(e) =>
                          handleContactChange("lastName", e.target.value)
                        }
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                        placeholder="Enter last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        value={contactDetails.Address.Company}
                        onChange={(e) =>
                          handleContactChange("address.Company", e.target.value)
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
                        value={contactDetails.Address.Flat}
                        onChange={(e) =>
                          handleContactChange("address.Flat", e.target.value)
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
                        value={contactDetails.Address.BuildingName}
                        onChange={(e) =>
                          handleContactChange(
                            "address.BuildingName",
                            e.target.value
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
                        value={contactDetails.Address.BuildingNumber}
                        onChange={(e) =>
                          handleContactChange(
                            "address.BuildingNumber",
                            e.target.value
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
                        value={contactDetails.Address.Street}
                        onChange={(e) =>
                          handleContactChange("address.Street", e.target.value)
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
                        value={contactDetails.Address.Locality}
                        onChange={(e) =>
                          handleContactChange(
                            "address.Locality",
                            e.target.value
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
                        value={contactDetails.Address.City}
                        onChange={(e) =>
                          handleContactChange("address.City", e.target.value)
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
                        value={contactDetails.Address.Province}
                        onChange={(e) =>
                          handleContactChange(
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
                        value={contactDetails.Address.Postcode}
                        onChange={(e) =>
                          handleContactChange(
                            "address.Postcode",
                            e.target.value
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
                        value={contactDetails.Address.CountryCode}
                        onChange={(e) =>
                          handleContactChange(
                            "address.CountryCode",
                            e.target.value
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
                        value={contactDetails.MobilePhone.InternationalCode}
                        onChange={(e) =>
                          handleContactChange(
                            "phone.InternationalCode",
                            e.target.value
                          )
                        }
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                        placeholder="Enter international code"
                      />
                    </div>
                    {/* <div>
                      <label className="block text-sm font-medium mb-1">
                        Area Code
                      </label>
                      <input
                        type="text"
                        value={contactDetails.MobilePhone.AreaCode}
                        onChange={(e) =>
                          handleContactChange("phone.AreaCode", e.target.value)
                        }
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                        placeholder="Enter area code"
                      />
                    </div> */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={contactDetails.MobilePhone.Number}
                        onChange={(e) =>
                          handleContactChange("phone.Number", e.target.value)
                        }
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                        placeholder="Enter phone number"
                      />
                    </div>
                    {/* <div>
                      <label className="block text-sm font-medium mb-1">
                        Extension
                      </label>
                      <input
                        type="text"
                        value={contactDetails.MobilePhone.Extension}
                        onChange={(e) =>
                          handleContactChange("phone.Extension", e.target.value)
                        }
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                        placeholder="Enter extension"
                      />
                    </div> */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={contactDetails.Email}
                        onChange={(e) =>
                          handleContactChange("email", e.target.value)
                        }
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Billing Details Step
              <div className="bg-white rounded-md">
                <div className="bg-[#FFE4DB] p-3 rounded-t-md">
                  <h2 className="font-semibold font-jakarta">
                    Billing Details
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={sameAsContact}
                        onChange={(e) =>
                          handleSameAsContactChange(e.target.checked)
                        }
                        className="accent-[#EE5128]"
                      />
                      <span className="text-sm">Same as contact details</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Title
                      </label>
                      <select
                        value={billingDetails.Name.Title}
                        onChange={(e) =>
                          handleBillingChange("title", e.target.value)
                        }
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                      >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Name.NamePartList.NamePart[0]}
                        onChange={(e) =>
                          handleBillingChange("firstName", e.target.value)
                        }
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Name.NamePartList.NamePart[1]}
                        onChange={(e) =>
                          handleBillingChange("middleName", e.target.value)
                        }
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter middle name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={billingDetails.Name.NamePartList.NamePart[2]}
                        onChange={(e) =>
                          handleBillingChange("lastName", e.target.value)
                        }
                        disabled={sameAsContact}
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
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter company"
                      />
                    </div>
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
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter flat/apartment"
                      />
                    </div>
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
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter building name"
                      />
                    </div>
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
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter building number"
                      />
                    </div>
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
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter street"
                      />
                    </div>
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
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter locality"
                      />
                    </div>
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
                        disabled={sameAsContact}
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
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter province/state"
                      />
                    </div>
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
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter postcode"
                      />
                    </div>
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
                        disabled={sameAsContact}
                        className="w-full border border-[#CCCCCC] rounded p-2 text-sm disabled:bg-gray-100"
                        placeholder="Enter country code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

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
                {currentStep === totalTravellers + 2
                  ? t("continue-booking")
                  : "Continue"}
              </button>
            </div>
          </div>

          {/* Booking Details Sidebar */}
          <div className="flex flex-col gap-6 w-full lg:max-w-[360px] order-1 lg:order-2">
            {/* Booking Details - First on mobile */}
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
                      {/* {flight.departureTime} */}
                      {OutwardTicket.departureTime}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {OutwardTicket.departureCity}
                    </p>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <p className="text-xs text-gray-500 mb-[2px]">
                      {OutwardTicket.duration}
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="text-black text-sm">✈</span>
                      <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                      <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    </div>
                    <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                      {OutwardTicket.class}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[20px] font-bold font-jakarta">
                      {/* {flight.arrivalTime} */}
                      {OutwardTicket?.arrivalTime}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {OutwardTicket.arrivalCity}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between px-6 mt-6">
                  <div className="text-left w-1/2 border-r pr-4">
                    <p className="text-sm font-semibold text-black font-jakarta m">
                      {t("booking-details.departure")}
                    </p>
                    <p className="text-xs text-gray-500 mt-[2px]">
                      {OutwardTicket?.departureDate.split("-")[0]}
                    </p>
                  </div>
                  <div className="text-left w-1/2 pl-4">
                    <p className="text-sm font-semibold text-black font-jakarta ml-5">
                      {t("booking-details.landing")}
                    </p>
                    <p className="text-xs text-gray-500 mt-[2px] ml-5">
                      {OutwardTicket?.arrivalDate.split("-")[0]}
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
              <div className="flex flex-col gap-6">
                <div className="max-w-[377px] w-full min-h-[280px] bg-white rounded-[12px] pb-4">
                  <div className="bg-[#FFE4DB] p-3 rounded-t-[12px]">
                    <h2 className="font-semibold text-[18px] font-jakarta">
                      {t("booking-details.title")}
                    </h2>
                  </div>

                  <div className="flex justify-between items-center px-6 mt-[20px]">
                    <div className="text-center">
                      <p className="text-[20px] font-bold font-jakarta">
                        {/* {flight.departureTime} */}
                        {OutwardTicket?.departureTime}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {OutwardTicket.departureCity}
                      </p>
                    </div>
                    <div className="flex flex-col items-center relative">
                      <p className="text-xs text-gray-500 mb-[2px]">
                        {OutwardTicket.duration}
                      </p>
                      <div className="flex items-center justify-center">
                        <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                        <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                        <span className="text-black text-sm">✈</span>
                        <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                        <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                      </div>
                      <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                        {OutwardTicket.class}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[20px] font-bold font-jakarta">
                        {/* {flight.arrivalTime} */}
                        {OutwardTicket?.arrivalTime}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {OutwardTicket.arrivalCity}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between px-6 mt-6">
                    <div className="text-left w-1/2 border-r pr-4">
                      <p className="text-sm font-semibold text-black font-jakarta m">
                        {t("booking-details.departure")}
                      </p>
                      <p className="text-xs text-gray-500 mt-[2px]">
                        {OutwardTicket?.departureDate.split("-")[0]}
                      </p>
                    </div>
                    <div className="text-left w-1/2 pl-4">
                      <p className="text-sm font-semibold text-black font-jakarta ml-5">
                        {t("booking-details.landing")}
                      </p>
                      <p className="text-xs text-gray-500 mt-[2px] ml-5">
                        {OutwardTicket?.arrivalDate.split("-")[0]}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center px-6 mt-[20px]">
                    <div className="text-center">
                      <p className="text-[20px] font-bold font-jakarta">
                        {/* {flight.departureTime} */}
                        {returnTicket?.departureTime}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {returnTicket.departureCity}
                      </p>
                    </div>
                    <div className="flex flex-col items-center relative">
                      <p className="text-xs text-gray-500 mb-[2px]">
                        {returnTicket.duration}
                      </p>
                      <div className="flex items-center justify-center">
                        <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                        <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                        <span className="text-black text-sm">✈</span>
                        <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                        <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                      </div>
                      <div className="mt-[6px] bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                        {returnTicket.class}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[20px] font-bold font-jakarta">
                        {/* {flight.arrivalTime} */}
                        {returnTicket?.arrivalTime}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {returnTicket.arrivalCity}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between px-6 mt-6">
                    <div className="text-left w-1/2 border-r pr-4">
                      <p className="text-sm font-semibold text-black font-jakarta m">
                        {t("booking-details.departure")}
                      </p>
                      <p className="text-xs text-gray-500 mt-[2px]">
                        {returnTicket?.departureDate.split("-")[0]}
                      </p>
                    </div>
                    <div className="text-left w-1/2 pl-4">
                      <p className="text-sm font-semibold text-black font-jakarta ml-5">
                        {t("booking-details.landing")}
                      </p>
                      <p className="text-xs text-gray-500 mt-[2px] ml-5">
                        {returnTicket?.arrivalDate.split("-")[0]}
                      </p>
                    </div>
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
                  Some thing error
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelersDetails;
