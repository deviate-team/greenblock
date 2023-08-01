import TicketCard from "@/components/TicketCard"
import { Ticket } from "@/mocks/ticket.test"

const TicketPage = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {Ticket.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    )
}

export default TicketPage