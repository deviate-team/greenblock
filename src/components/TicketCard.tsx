import { formatTime, formatTimestamp } from "@/hooks/format"
import { ITicket } from "@/interfaces/ticket"

const TicketCard = ({ ticket }: { ticket: ITicket }) => {
    return (
        <div className="p-10 font-BAI">
            <div className="max-w-full bg-white flex flex-col rounded overflow-hidden shadow-lg">
                <div className="flex flex-row items-center flex-nowrap bg-gray-100 p-2">
                    <img width="24" height="24" src="https://img.icons8.com/material/24/000000/bus--v2.png" />
                    <h1 className="ml-2 uppercase font-bold text-gray-500">departure</h1>
                    <p className="ml-2 font-normal text-gray-500">{formatTimestamp(ticket.date)}</p>
                </div>
                <div className="mt-2 flex justify-start bg-white p-2">
                    <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
                        <img width="12" height="12" src="https://img.icons8.com/material/24/000000/bus--v2.png" />
                        <p className="font-normal text-sm ml-1 text-gray-500">Economy</p>
                    </div>
                </div>
                <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                    <div className="flex flex-row place-items-center p-2">
                        <img src="https://static.vecteezy.com/system/resources/previews/000/511/437/original/travel-tourism-logo-isolated-on-white-background-vector.jpg" className=" w-14 h-14" />
                        <div className="flex flex-col ml-2">
                            <p className="text-xs text-gray-500 font-bold">{ticket.provider.name}</p>
                        </div>
                    </div>

                    <div className="flex flex-col p-2">
                        <p className="font-bold">{formatTime(ticket.depart_time)}</p>
                        <p className="text-gray-500"><span className="font-bold">Market Street</span></p>
                    </div>
                    <div className="flex flex-col flex-wrap p-2">
                        <p className="font-bold">{formatTime(ticket.arrive_time)}</p>
                        <p className="text-gray-500"><span className="font-bold">Los Angeles Police Department</span></p>
                    </div>
                </div>
                <div className="mt-4 bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
                    <div className="flex mx-6 py-4 flex-row flex-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-10 p-2 mx-2 self-center bg-gray-400 rounded-full text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                        </svg>
                        <div className="text-sm mx-2 flex flex-col">
                            <p className="">Standard Ticket</p>
                            <p className="font-bold">{ticket.standard_price} ฿</p>
                            <p className="text-xs text-gray-500">Price per adult</p>
                        </div>
                        <button className="w-32 h-11 rounded flex border-solid border bg-white mx-2 justify-center place-items-center"><div className="">Book</div></button>
                    </div>
                    <div className="md:border-l-2 mx-6 md:border-dotted flex flex-row py-4 mr-6 flex-wrap">
                        <svg className="w-12 h-10 p-2 mx-2 self-center bg-green-800 rounded-full fill-current text-white" viewBox="0 0 64 64" pointerEvents="all" aria-hidden="true" role="presentation"><path d="M62.917 38.962C59.376 53.71 47.207 64 31.833 64a31.93 31.93 0 01-21.915-8.832l-5.376 5.376a2.65 2.65 0 01-1.874.789A2.685 2.685 0 010 58.668V40a2.687 2.687 0 012.667-2.667h18.666A2.687 2.687 0 0124 40a2.645 2.645 0 01-.793 1.877L17.5 47.58a21.244 21.244 0 0032.665-4.414 33.706 33.706 0 002.208-4.873 1.292 1.292 0 011.25-.96h8a1.342 1.342 0 011.333 1.337.738.738 0 01-.041.293M64 24a2.687 2.687 0 01-2.667 2.668H42.667A2.687 2.687 0 0140 24a2.654 2.654 0 01.793-1.877l5.749-5.746a21.336 21.336 0 00-32.706 4.457 33.224 33.224 0 00-2.208 4.873 1.293 1.293 0 01-1.25.96H2.085A1.342 1.342 0 01.752 25.33v-.293C4.334 10.247 16.626 0 32 0a32.355 32.355 0 0122.041 8.832l5.419-5.376a2.644 2.644 0 011.872-.789A2.685 2.685 0 0164 5.333z"></path></svg>
                        <div className="text-sm mx-2 flex flex-col">
                            <p>Business Ticket</p>
                            <p className="font-bold">{ticket.business_price} ฿</p>
                            <p className="text-xs text-gray-500">Price per adult</p>
                        </div>
                        <button className="w-32 h-11 rounded flex border-solid border text-white bg-green-800 mx-2 justify-center place-items-center"><div className="">Book</div></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketCard