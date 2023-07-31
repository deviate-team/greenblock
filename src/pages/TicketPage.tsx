import Card from "@/components/TicketCard"

const TicketPage = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default TicketPage