import CrowdFundingCard from "@/components/CrowdFundingCard"
import InvestStep from "@/components/InvestStep"
import Loading from "@/components/Loading"
import { InvestStepConstants } from "@/constants/step"
import { IProject } from "@/interfaces/project"
import { projectService } from "@/services/projects.services"
import { useEffect, useState } from "react"
import { Stepper, initTE } from "tw-elements"
initTE({ Stepper })

const CrowdFundingPage = () => {
  const [projects, setProjects] = useState<IProject[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [investStep, setInvestStep] = useState<number>(1)


  const fetchProjects = async () => {
    try {
      const { data } = await projectService.getProjects()
      setProjects(data)
      setLoading(false)
    } catch (error) {
      const message = (error as Error).message
      setLoading(false)
      throw new Error(message)
    }
  }

  const handleSelectedInvestStep = (step: number) => {
    setInvestStep(step)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  if (loading) return <Loading />

  return (
    <div className="container lg:max-w-screen-xl mx-auto space-y-6 font-BAI">
      <section>
        <div className="relative overflow-hidden w-screen max-h-96 bg-fixed" >
          <img
            src="/green_coin.jpg"
            alt="Hero Image"
            className="w-full h-full bg-opacity-5"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>

        </div>
        <div className="container mx-auto my-8 text-center font-IBM">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center flex justify-center space-x-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Crowd
            </span>
            <div>
              Funding
            </div>
          </h1>
          <p className="text-gray-500 mx-12 mt-4">Drive sustainability and profitability for your small business through
            our Crowd Funding on Carbon Project! Offer carbon reduction projects
            and attract funding to earn valuable carbon credits for sale. Join now
            and make a real impact in the fight against climate change!</p>
        </div>

        <h3 className="text-2xl font-BAI font-medium text-center text-primary-color mt-10 mx-20">
          How to invest
          <InvestStep selectInvestmentState={handleSelectedInvestStep} />

          <div className="mt-10">
            {investStep === 1 && InvestStepConstants[0]}
            {investStep === 2 && InvestStepConstants[1]}
            {investStep !== 1 && investStep !== 2 && InvestStepConstants[2]}
          </div>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20 mx-10">
          {projects.map((data) => (
            <CrowdFundingCard key={data._id} project={data} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default CrowdFundingPage
