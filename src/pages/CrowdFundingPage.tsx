import Loading from "@/components/Loading";
import ProgressBar from "@/components/ProgressBar";
import { formatDate } from "@/hooks/format";
import { IProject } from "@/interfaces/project";
import { projectService } from "@/services/projects.services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Stepper,
  initTE,
} from "tw-elements";
initTE({ Stepper });

const CrowdFundingPage = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProjects = async () => {
    try {
      const { data } = await projectService.getProjects();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      const message = (error as Error).message;
      setLoading(false);
      throw new Error(message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="container lg:max-w-screen-xl mx-auto p-4 space-y-6 font-BAI">
      <section>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Crowd</span> Funding</h1>
        <p className="text-xl font-BAI font-medium text-center text-gray-600">
          Drive sustainability and profitability for your small business through our Crowd Funding on Carbon Project! Offer carbon reduction projects and attract funding to earn valuable carbon credits for sale. Join now and make a real impact in the fight against climate change!</p>

        <h3 className="text-2xl font-BAI font-medium text-center text-primary-color mt-10">How to invest</h3>
        <ul
          data-te-stepper-init
          className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
          <li
            data-te-stepper-step-ref
            data-te-stepper-step-active
            className="w-[4.5rem] flex-auto">
            <div
              data-te-stepper-head-ref
              className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
              <span
                data-te-stepper-head-icon-ref
                className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                1
              </span>
              <span
                data-te-stepper-head-text-ref
                className="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                step1
              </span>
            </div>
            <div
              data-te-stepper-content-ref
              className="text-center text-gray-700 absolute w-full p-4 transition-all duration-500 ease-in-out">
              Add money to your e-pocket
            </div>
          </li>

          <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
            <div
              data-te-stepper-head-ref
              className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
              <span
                data-te-stepper-head-icon-ref
                className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                2
              </span>
              <span
                data-te-stepper-head-text-ref
                className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                step2
              </span>
            </div>
            <div
              data-te-stepper-content-ref
              className="text-center text-gray-700 absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
              Pick project you interested
            </div>
          </li>

          <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
            <div
              data-te-stepper-head-ref
              className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
              <span
                data-te-stepper-head-icon-ref
                className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                3
              </span>
              <span
                data-te-stepper-head-text-ref
                className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                step3
              </span>
            </div>
            <div
              data-te-stepper-content-ref
              className="text-center absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out text-gray-700">
              Done the payment
            </div>
          </li>
        </ul>
      </section>
      <section className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
          {projects.map((data) => (
            <Link
              to={`/crowdfunding/${data._id}`}
              key={data._id}
              className="bg-white rounded-xl flex  h-full shadow-lg"
            >
              <img
                src={data.image}
                alt=""
                className="w-1/2 rounded-l-xl object-cover"
              />
              <div className="p-4 w-full space-y-3">
                <h1 className="text-xl font-bold">{data.name}</h1>
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#064420"
                      d="M10.5 16a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11ZM23 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3H5Zm18 7c-1.456 0-2.608-.198-3.521-.513c.432-.7.68-1.375.82-1.92a6.391 6.391 0 0 0 .193-1.196c.002-.04.004-.076.004-.107l.001-.042V21a4.484 4.484 0 0 0-1.145-3h8.241A2.406 2.406 0 0 1 30 20.406S30 25 23 25Z"
                    />
                  </svg>
                  <p>{data.contract.name}</p>
                </div>
                <div className="flex space-x-2 items-center">
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
                    {formatDate(data.start_date)} - {" "}
                    {formatDate(data.end_date)}
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
                    Share : <span>{data?.max_shares}</span>
                  </p>
                </div>
                <ProgressBar
                  maximumValue={data.max_shares}
                  currentAmount={data.balance}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CrowdFundingPage;
