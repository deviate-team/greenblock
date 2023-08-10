import { ICreateOffer } from "@/interfaces/offer";
import { IProject } from "@/interfaces/project";
import { offerService } from "@/services/offer.services";
import { projectService } from "@/services/projects.services";
import React, { useEffect, useState } from "react";

const CreateOffer = () => {
    const [offer, setOffer] = useState<ICreateOffer>({
        name: '',
        description: '',
        project_id: '',
        price_per_kg: 0,
        image_path: '',
        avaliable: 0
    });
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [project, setProject] = useState<IProject[]>([]);
    const [selectedProject, setSelectedProject] = useState<string>('');

    const handleDropdownChange = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleDropdownClick = (id: string, name: string) => {
        setSelectedProject(name);
        setOffer({ ...offer, project_id: id });
        setDropdownOpen(!dropdownOpen);
    }

    const fetchProject = async () => {
        try {
            const response = await projectService.getProjects();
            setProject(response.data);
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    }

    const handleCreateOffer = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            await offerService.createOffer(offer);
            setOffer({
                name: '',
                description: '',
                project_id: '',
                price_per_kg: 0,
                image_path: '',
                avaliable: 0
            });
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    };

    useEffect(() => {
        fetchProject()
    }, []);

    return (
        <div className="container mx-auto lg:max-w-screen-xl p-4 font-BAI">
            <div className="max-w-xl bg-white mx-auto p-6 rounded-lg shadow-md">
                <h1 className="text-center text-3xl font-medium mb-6">
                    Create Offer
                </h1>
                <form onSubmit={handleCreateOffer}>
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">
                            Offer name
                        </label>
                        <input
                            type="text"
                            placeholder="Offer name"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                            value={offer.name}
                            onChange={(e) => setOffer({ ...offer, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">
                            Offer description
                        </label>
                        <textarea
                            placeholder="Offer description"
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
                            Offer image
                        </label>
                        <input
                            type="text"
                            id="OfferImage"
                            placeholder="Offer image"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                            value={offer.image_path}
                            onChange={(e) =>
                                setOffer({ ...offer, image_path: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full lg:w-1/2 px-3">
                            <label className="block font-medium text-gray-700">
                                Offer Price Per Kg
                            </label>
                            <input
                                type="number"
                                id="OfferImage"
                                placeholder="Offer price per kg"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                                value={offer.price_per_kg}
                                onChange={(e) =>
                                    setOffer({ ...offer, price_per_kg: parseInt(e.target.value) })
                                }
                                required
                            />
                        </div>
                        <div className="w-full lg:w-1/2 px-3">
                            <label className="block font-medium text-gray-700 mb-3">
                                Offer Project
                            </label>
                            <button onClick={() => handleDropdownChange()} className="text-white bg-primary-color hover:bg-primary-hover-color font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">{selectedProject === '' ? 'Selected Project' : selectedProject} <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
                            </button>
                            <div className={`z-10 ${!dropdownOpen && 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                                <ul className="text-sm text-gray-700 dark:text-gray-200">
                                    {project.map((item, index) => (
                                        <li key={index}>
                                            <button onClick={() => handleDropdownClick(item._id, item.name)} type="button" className="block w-full text-left text-green-700 px-4 py-2 hover:bg-green-100">{item.name}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <label className="block font-medium text-gray-700">
                            Offer Avaliable
                        </label>
                        <input
                            type="text"
                            id="OfferImage"
                            placeholder="Offer image"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-500"
                            value={offer.avaliable}
                            onChange={(e) =>
                                setOffer({ ...offer, avaliable: parseInt(e.target.value) })
                            }
                            required
                        />
                    </div>
                    <div className="text-center mt-4">
                        <button
                            type="submit"
                            className="bg-primary-color text-white font-medium px-16 rounded-lg py-2 hover:bg-opacity-90 w-full"
                        >
                            Create Offer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateOffer;
