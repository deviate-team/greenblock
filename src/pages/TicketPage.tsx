import TicketCard from "@/components/TicketCard"


const TicketPage = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
            </div>
        </div>
    )
}

export default TicketPage