import TicketCard from "@/components/TicketCard"
import { ITicketData } from "@/interfaces/ticket"
import { IUserProfile } from "@/interfaces/user"
import { ticketService } from "@/services/ticket.services"
import { userService } from "@/services/user.services"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const TicketPage = () => {
  const [Ticket, setTicket] = useState<ITicketData[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [limitPage, setLimitPage] = useState<number>(1)
  const [user, setUser] = useState<IUserProfile | null>(null)

  const navigate = useNavigate()

  const fetchTicketList = async (page: number): Promise<void> => {
    try {
      const response = await ticketService.getTicketList(page.toString());
      setTicket(response.data.tickets);
      setLimitPage(response.data.totalPages);
    } catch (error) {
      const message = (error as Error).message
      throw new Error(message)
    }
  }

  const fetchUser = async (): Promise<void> => {
    try {
      const response = await userService.getUserProfile();
      setUser(response.data);
    } catch (error) {
      const message = (error as Error).message
      throw new Error(message)
    }
  }

  const nextPage = (): void => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    fetchTicketList(currentPage)
    fetchUser()
  }, [currentPage])

  const renderPaginationLinks = () => {
    const links = []

    if (currentPage > 1) {
      links.push(
        <button
          className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          onClick={prevPage}
        >
          <svg
            className="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
      )
    }

    for (let page = 1; page <= limitPage; page++) {
      links.push(
        <button
          key={page}
          className={`rounded px-4 py-2 hover:bg-gray-100 ${currentPage === page ? "bg-gray-200" : ""
            }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      )
    }

    if (currentPage < limitPage) {
      links.push(
        <button
          key="next"
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          onClick={nextPage}
        >
          <svg
            className="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      )
    }

    return links
  }

  const handleLink = (path: string): void => {
    navigate(path)
  }

  return (
    <div className="container lg:max-w-screen-xl mx-auto space-y-6 font-BAI ">
      <div className="relative overflow-hidden w-full max-h-96 bg-fixed mb-10">
        <img
          src="/tuk-tuk.jpg"
          alt="Hero Image"
          className="w-full h-full bg-opacity-5"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
      </div>
      <div className="container mx-auto my-8 text-center font-IBM">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center flex justify-center space-x-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Ticket
          </span>
          <div>
            is now AVAILABLE
          </div>
        </h1>
        <p className="text-gray-500 mx-12 mt-4">Go green and support your local community by choosing eco-friendly local
          transportation today! Embrace emission-free electric bikes, scooters,
          and cars for a cleaner and healthier commute. Act now and be part of the
          movement towards a more sustainable future!</p>
      </div>

      {user?.role === "provider" && (
        <div className="flex justify-center container mx-auto items-center object-center">
          <button
            onClick={() => handleLink("/create-ticket")}
            className=" bg-primary-color p-2 rounded text-white px-5"
          >
            Create
          </button>
        </div>
      )}
      <div className="flex justify-center mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {Ticket.map((ticket) => (
            <TicketCard key={ticket._id} ticket={ticket} />
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-end pb-2 mx-auto container">
        <nav className="flex items-center text-gray-600">
          {renderPaginationLinks()}
        </nav>
      </div>
    </div>
  )
}

export default TicketPage;