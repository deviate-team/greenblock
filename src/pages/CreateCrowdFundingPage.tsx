import { IProjectForm } from "@/interfaces/project";
import { projectService } from "@/services/projects.services";
import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const CreateCrowdFundingPage = () => {
  const [dateValue, setDateValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const [project, setProject] = useState<IProjectForm>({
    name: "",
    description: "",
    image: "",
    time_period: {
      start: "",
      end: "",
    },
    price_by_unit: 0,
    maximum: 0,
    contract: {
      name: "",
      email: "",
      tel: "",
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
    setProject({
      ...project,
      time_period: {
        start: startDateValue,
        end: endDateValue,
      },
    });
  };

  const handleCreateOffer = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await projectService.createProject(project);
      setProject({
        name: "",
        description: "",
        image: "",
        time_period: {
          start: "",
          end: "",
        },
        price_by_unit: 0,
        maximum: 0,
        contract: {
          name: "",
          email: "",
          tel: "",
        },
      });

      setDateValue({
        startDate: null,
        endDate: null,
      })
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(message);
    }
  };

  return (
    <div className="container mx-auto lg:max-w-screen-xl p-4 font-BAI">
      <div className="max-w-xl bg-white mx-auto p-6 rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-medium mb-6">
          Create Project
        </h1>
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
              value={project.name}
              onChange={(e) => setProject({ ...project, name: e.target.value })}
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
              value={project.description}
              onChange={(e) =>
                setProject({ ...project, description: e.target.value })
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
              value={project.image}
              onChange={(e) =>
                setProject({ ...project, image: e.target.value })
              }
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
                value={project.price_by_unit}
                onChange={(e) =>
                  setProject({
                    ...project,
                    price_by_unit: e.target.valueAsNumber,
                  })
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
                value={project.maximum}
                onChange={(e) =>
                  setProject({ ...project, maximum: e.target.valueAsNumber })
                }
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="">
              <label className="block font-medium text-gray-700">
                Contract Name
              </label>
              <input
                type="text"
                id="contactName"
                placeholder="Contract Name"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                value={project.contract.name}
                onChange={(e) =>
                  setProject({
                    ...project,
                    contract: { ...project.contract, name: e.target.value },
                  })
                }
                required
              />
            </div>
            <div className="">
              <label className="block font-medium text-gray-700">
                Contract Email
              </label>
              <input
                type="text"
                id="contactEmail"
                placeholder="Contract Email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                value={project.contract.email}
                onChange={(e) =>
                  setProject({
                    ...project,
                    contract: { ...project.contract, email: e.target.value },
                  })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">
                Contract Phone
              </label>
              <input
                type="text"
                id="contactPhone"
                placeholder="Contract Phone"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                value={project.contract.tel}
                onChange={(e) =>
                  setProject({
                    ...project,
                    contract: { ...project.contract, tel: e.target.value },
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
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCrowdFundingPage;
