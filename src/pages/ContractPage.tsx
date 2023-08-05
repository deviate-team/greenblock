import { Team } from "@/constants/team"

const ContractPage = () => {
    return (
        <div>
            <section className="bg-white text-gray-800">
                <div className="container p-4 mx-auto space-y-16 sm:p-10">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold leadi sm:text-5xl font-IBM">Meet our team</h3>
                        <p className="max-w-2xltext-gray-400 font-BAI">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        {Team.map((member, index) => (
                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex" key={index}>
                                <a href="#">
                                    <img className="w-full md:w-72 h-72 md:rounded-lg sm:rounded-none sm:rounded-l-lg object-cover" src={member.image} alt="Avatar" />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900">
                                        <a href="#">{member.name}</a>
                                    </h3>
                                    <span className="text-gray-500">{member.position}</span>
                                    <ul className="flex space-x-4 sm:mt-3">
                                        <li>
                                            <a href={member.facebook_link} className="text-gray-500 hover:text-gray-900">
                                                <img src="/facebook.svg" className="w-5 h-5" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={member.instagram_link} className="text-gray-500 hover:text-gray-900">
                                                <img src="/instagram.svg" className="w-5 h-5" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={member.github_link} className="text-gray-500 hover:text-gray-900">
                                                <img src="/github.svg" className="w-5 h-5" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContractPage