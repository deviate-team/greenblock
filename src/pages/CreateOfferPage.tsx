import { IOfferForm } from "@/interfaces/offer";
import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const CreateOfferPage = () => {
  const [dateValue, setDateValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const [offer, setOffer] = useState<IOfferForm>({
    name: "",
    description: "",
    image: "",
    date: {
      startDate: "",
      endDate: "",
    },
    price_per_unit: 0,
    maximum: 0,
    contact: {
      email: "",
      phone: "",
      name: "",
    },
  });

  const handleChangeDateValue = (newDateValue: DateValueType) => {
    setDateValue(newDateValue);
    const startDateValue = newDateValue?.startDate
      ? newDateValue.startDate.toString()
      : "";
    const endDateValue = newDateValue?.endDate
      ? newDateValue.endDate.toString()
      : "";
    setOffer({
      ...offer,
      date: {
        startDate: startDateValue,
        endDate: endDateValue,
      },
    });
  };

  const handleCreateOffer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(offer);
  };

  return (
    <div className="container mx-auto lg:max-w-screen-xl p-4 font-BAI">
      <div className="max-w-xl bg-white mx-auto p-6 rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-medium mb-6">Create Offer</h1>
        <form onSubmit={handleCreateOffer}>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              Project name
            </label>
            <input
              type="text"
              id="projectName"
              placeholder="Project name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={offer.name}
              onChange={(e) => setOffer({ ...offer, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              Project description
            </label>
            <textarea
              placeholder="Project description"
              cols={30}
              rows={7}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={offer.description}
              onChange={(e) =>
                setOffer({ ...offer, description: e.target.value })
              }
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              Project image
            </label>
            <input
              type="text"
              id="projectImage"
              placeholder="Project image"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={offer.image}
              onChange={(e) => setOffer({ ...offer, image: e.target.value })}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="">
              <label className="block font-medium text-gray-700 mb-2">
                Time Period
              </label>
              <Datepicker
                useRange={false}
                value={dateValue}
                onChange={handleChangeDateValue}
              />
            </div>
            <div className="">
              <label className="block font-medium text-gray-700">
                Price Per Unit
              </label>
              <input
                type="number"
                id="pricePerUnit"
                placeholder="Price Per Unit"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                value={offer.price_per_unit}
                onChange={(e) =>
                  setOffer({ ...offer, price_per_unit: e.target.valueAsNumber })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">
                Maximum Offer
              </label>
              <input
                type="number"
                id="maximumOffer"
                placeholder="Maximum Offer"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                value={offer.maximum}
                onChange={(e) =>
                  setOffer({ ...offer, maximum: e.target.valueAsNumber })
                }
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="">
              <label className="block font-medium text-gray-700">
                Contact Name
              </label>
              <input
                type="text"
                id="contactName"
                placeholder="Contact Name"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                value={offer.contact.name}
                onChange={(e) =>
                  setOffer({
                    ...offer,
                    contact: { ...offer.contact, name: e.target.value },
                  })
                }
                required
              />
            </div>
            <div className="">
              <label className="block font-medium text-gray-700">
                Contact Email
              </label>
              <input
                type="text"
                id="contactEmail"
                placeholder="Contact Email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                value={offer.contact.email}
                onChange={(e) =>
                  setOffer({
                    ...offer,
                    contact: { ...offer.contact, email: e.target.value },
                  })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">
                Contact Phone
              </label>
              <input
                type="text"
                id="contactPhone"
                placeholder="Contact Phone"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                value={offer.contact.phone}
                onChange={(e) =>
                  setOffer({
                    ...offer,
                    contact: { ...offer.contact, phone: e.target.value },
                  })
                }
                required
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-primary-color text-white font-medium px-16 rounded-lg py-2 hover:bg-opacity-90"
            >
              Create Offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOfferPage;
