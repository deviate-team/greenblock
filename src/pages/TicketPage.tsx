import TicketCard from "@/components/TicketCard"
import { ITicket } from "@/interfaces/ticket"
import { ticketService } from "@/services/ticket.services"
import { useEffect, useState } from "react"

const TicketPage = () => {

    const [Ticket, setTicket] = useState<ITicket[]>([])

    const fetchTicket = async (): Promise<void> => {
        try {
            const response = await ticketService.getTickets();
            setTicket(response.data);
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    }

    useEffect(() => {
        fetchTicket();
    }, [])
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {Ticket.map((ticket, index) => (
                    <TicketCard key={index} ticket={ticket} />
                ))}
            </div>
        </div>
    )
}

export default TicketPage