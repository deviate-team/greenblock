import { formatDate } from "@/hooks/format";
import { projects } from "@/mocks/project.test";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <div className="container lg:max-w-screen-xl mx-auto p-4 space-y-6 font-BAI">
      <h1 className="text-2xl font-BAI font-medium text-center">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((data) => (
          <Link
            to={`/projects/${data._id}`}
            key={data._id}
            className="bg-white rounded-xl flex  h-full shadow-lg"
          >
            <img
              src={data.image}
              alt=""
              className="w-1/2 rounded-l-xl object-cover"
            />
            <div className="p-4 w-full space-y-3">
              <h1 className="text-xl font-bold">{data.project_name}</h1>
              <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#064420" d="M10.5 16a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11ZM23 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3H5Zm18 7c-1.456 0-2.608-.198-3.521-.513c.432-.7.68-1.375.82-1.92a6.391 6.391 0 0 0 .193-1.196c.002-.04.004-.076.004-.107l.001-.042V21a4.484 4.484 0 0 0-1.145-3h8.241A2.406 2.406 0 0 1 30 20.406S30 25 23 25Z"/></svg>
              <p>{data.owner}</p>
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
                  {formatDate(data.time_period.start)} -{" "}
                  {formatDate(data.time_period.end)}
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
                <p>${data.price_by_unit}</p>
              </div>
              <div className="w-full h-3 border border-primary-color rounded-lg">
                <div className="h-full bg-primary-color w-1/2 rounded-lg"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
