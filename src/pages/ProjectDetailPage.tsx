import { formatDate } from "@/hooks/format";
import { IProject } from "@/interfaces/project";
import { projects } from "@/mocks/project.test";
import { projectService } from "@/services/projects.services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const [offerValue, setOfferValue] = useState<number>(10);
  const [project, setproject] = useState<IProject>();
  const { id } = useParams<{ id: string }>();

  const handleIncrease = () => {
    setOfferValue(offerValue + 1);
  };

  const handleDecrease = () => {
    if (offerValue === 0) return;
    setOfferValue(offerValue - 1);
  };

  const handleBuy = () => {
    alert("Buy Success");
  };

  const fetchProject = async () => {
    try {
      const { data } = await projectService.getProject(id as string);
      setproject(data);
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(message);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <div className="container lg:max-w-screen-lg mx-auto p-4 font-BAI">
      <div className="h-60 md:h-72 relative rounded-2xl bg-red-100">
        <div className="block h-full relative">
          <img
            src={project?.image}
            alt=""
            className="h-full absolute object-cover rounded-2xl object-center w-full"
          />
        </div>
      </div>
      <div className="space-y-4 mt-6 px-2 md:px-6 lg:px-8">
        <h1 className="text-4xl">{project?.name}</h1>
        <p className="text-lg font-medium">By {project?.contract.name}</p>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#064420"
              d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7l-.8 1.3Z"
            />
          </svg>
          <p>
            Date :{" "}
            <span>
              {formatDate(project?.time_period.start as string)} -{" "}
              {formatDate(project?.time_period.end as string)}
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#064420"
              strokeWidth="2"
              d="M16 16c0-1.105-3.134-2-7-2s-7 .895-7 2s3.134 2 7 2s7-.895 7-2ZM2 16v4.937C2 22.077 5.134 23 9 23s7-.924 7-2.063V16M9 5c-4.418 0-8 .895-8 2s3.582 2 8 2M1 7v5c0 1.013 3.582 2 8 2M23 4c0-1.105-3.1-2-6.923-2c-3.824 0-6.923.895-6.923 2s3.1 2 6.923 2S23 5.105 23 4Zm-7 12c3.824 0 7-.987 7-2V4M9.154 4v10.166M9 9c0 1.013 3.253 2 7.077 2C19.9 11 23 10.013 23 9"
            />
          </svg>
          <p>
            Price Per Unit : <span>${project?.price_by_unit}</span>
          </p>
        </div>
        <div>
          <p className="text-lg font-medium mb-2">Contact</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g id="evaPeopleFill0">
                  <g id="evaPeopleFill1">
                    <path
                      id="evaPeopleFill2"
                      fill="#064420"
                      d="M9 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm8 2a3 3 0 1 0-3-3a3 3 0 0 0 3 3Zm4 7a1 1 0 0 0 1-1a5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"
                    />
                  </g>
                </g>
              </svg>
              <p>
                Name : <span>{project?.contract.name}</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#064420"
                  fillRule="evenodd"
                  d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"
                />
              </svg>
              <p>
                Email : <span>{project?.contract.email}</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#064420"
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <p>
                Tel : <span>{project?.contract.tel}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-medium text-lg">Description</p>
          <p className="mt-2">{project?.description}</p>
        </div>
      </div>
      <div className="text-center mt-8 space-y-4">
        <div className="flex gap-8 justify-center items-center">
          <button
            onClick={handleDecrease}
            className=" p-1 rounded-full bg-white shadow-md"
          >
            <img src="/minus_icon.svg" alt="" className="w-4" />
          </button>
          <p className="text-3xl font-medium">{offerValue}</p>
          <button
            onClick={handleIncrease}
            className=" p-1 rounded-full bg-white shadow-md"
          >
            <img src="/plus_icon.svg" alt="" className="w-4" />
          </button>
        </div>
        <button
          onClick={handleBuy}
          className="bg-primary-color text-white font-medium px-16 rounded-lg py-2 hover:bg-opacity-90"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
