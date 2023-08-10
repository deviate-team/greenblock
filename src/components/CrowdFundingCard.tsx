import { formatDate } from '@/hooks/format'
import { IProject } from '@/interfaces/project'
import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const CrowdFundingCard = ({ project }: { project: IProject }) => {
    return (
        <div>
            <div className='hidden md:flex'>
                <Link
                    to={`/crowdfunding/${project._id}`}
                    key={project._id}
                    className="bg-white rounded-xl flex  h-full shadow-lg"
                >
                    <img
                        src={project.image}
                        alt=""
                        className="w-1/2 rounded-l-xl object-cover"
                    />
                    <div className="p-4 w-full space-y-3 mx-4">
                        <h1 className="text-xl font-bold">{project.name}</h1>
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
                            <p>{project.contact.name}</p>
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
                            <div>
                                <p>
                                    {formatDate(project.start_date)} -{' '}
                                    {formatDate(project.end_date)}
                                </p>
                            </div>
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
                                Share : <span>{project?.max_shares}</span>
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#064420" className="w-6 h-6">
                                <path fillRule="evenodd" d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 013.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 00-4.392-4.392 49.422 49.422 0 00-7.436 0A4.756 4.756 0 003.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 101.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 013.01-3.01c1.19-.09 2.392-.135 3.605-.135zm-6.97 6.22a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 004.392 4.392 49.413 49.413 0 007.436 0 4.756 4.756 0 004.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 00-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 01-3.01 3.01 47.953 47.953 0 01-7.21 0 3.256 3.256 0 01-3.01-3.01 47.759 47.759 0 01-.1-1.759L6.97 15.53a.75.75 0 001.06-1.06l-3-3z" clipRule="evenodd" />
                            </svg>
                            <p>
                                <span>{project?.estimated_outcome} Retail(s)CC</span>
                            </p>
                        </div>
                        <ProgressBar
                            maximumValue={project.max_shares}
                            currentAmount={project.balance}
                        />
                    </div>
                </Link>
            </div>
            <div className='flex md:hidden justify-center'>
                <Link to={`/crowdfunding/${project._id}`} key={project._id}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={project.image} alt='project-image' />
                        <div className="px-6 py-4 space-y-6">
                            <div className="font-bold text-xl mb-2">{project.name}</div>
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
                                <p>{project.contact.name}</p>
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
                                <div>
                                    <p>
                                        {formatDate(project.start_date)} -{' '}
                                        {formatDate(project.end_date)}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className='flex space-x-2'>
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
                                        Share : <span>{project?.max_shares}</span>
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#064420" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 013.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 00-4.392-4.392 49.422 49.422 0 00-7.436 0A4.756 4.756 0 003.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 101.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 013.01-3.01c1.19-.09 2.392-.135 3.605-.135zm-6.97 6.22a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 004.392 4.392 49.413 49.413 0 007.436 0 4.756 4.756 0 004.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 00-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 01-3.01 3.01 47.953 47.953 0 01-7.21 0 3.256 3.256 0 01-3.01-3.01 47.759 47.759 0 01-.1-1.759L6.97 15.53a.75.75 0 001.06-1.06l-3-3z" clipRule="evenodd" />
                                    </svg>

                                    <p>
                                        <span>{project?.estimated_outcome} Retail(s)CC</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 pt-4 pb-6">
                            <ProgressBar
                                maximumValue={project.max_shares}
                                currentAmount={project.balance}
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default CrowdFundingCard