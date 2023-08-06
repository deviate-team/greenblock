import { formatDate, formatTime } from "@/hooks/format"
import { ITransactionItem } from "@/interfaces/transaction"
import { IUserProfile } from "@/interfaces/user"
import { userService } from "@/services/user.services"
import { useEffect, useState } from "react"

const TicketReceipt = ({ transaction }: { transaction: ITransactionItem }) => {

    const [user, setUser] = useState<IUserProfile>();

    const fetchUser = async () => {
        try {
            const { data } = await userService.getUserProfile();
            setUser(data);
        }
        catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-96 h-full mx-auto z-10 bg-primary-color rounded-3xl">
                <div className="flex flex-col">
                    <div className="bg-white relative drop-shadow-2xl rounded-3xl p-4 m-4 font-BAI">
                        <div className="flex-none sm:flex">
                            <div className="relative h-32 w-32 sm:mb-0 mb-3 hidden">
                                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" w-32 h-32 object-cover rounded-2xl" />
                                <a href="#"
                                    className="absolute -right-2 bottom-2 -ml-3 text-white p-1 text-xs bg-primary-color hover:bg-primary-hover-color font-medium tracking-wider rounded-full transition ease-in duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="h-4 w-4">
                                        <path
                                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div className="flex-auto justify-evenly">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center  my-1">
                                        <span className="mr-3 rounded-full bg-white w-8 h-8">
                                            <img src={transaction.user.imageProfile} className="h-8 p-1" />
                                        </span>
                                        <h2 className="font-medium">{transaction.ticket.title}</h2>
                                    </div>
                                </div>
                                <div className="border-b border-dashed my-5"></div>
                                <div className="flex items-center mb-5 p-5 text-sm">
                                    <div className="flex flex-col">
                                        <span className="text-sm">Ticket Name</span>
                                        <div className="font-semibold">{transaction.ticket.title}</div>

                                    </div>
                                    <div className="flex flex-col ml-auto">
                                        <span className="text-sm">Ticket Description</span>
                                        <div className="font-semibold">{transaction.ticket.description}</div>
                                    </div>
                                </div>
                                <div className="flex items-center mb-8 px-5 text-center">
                                    <div className="flex flex-col text-sm">
                                        <span className="">Booking Date</span>
                                        <div className="font-semibold">{formatDate(transaction.ticket.date)}</div>
                                    </div>
                                    <div className="flex flex-col mx-auto text-sm">
                                        <span className="">Booking Time</span>
                                        <div className="font-semibold">{formatTime(transaction.createdAt)}</div>

                                    </div>
                                    <div className="flex flex-col text-sm">
                                        <span className="">Type</span>
                                        <div className="font-semibold">{transaction.type}</div>

                                    </div>
                                </div>
                                <div className="flex items-center mb-4 mt-4 px-5 text-center">
                                    <div className="flex flex-col text-sm">
                                        <span className="">Status</span>
                                        <div className="font-semibold text-primary-color">{transaction.status}</div>
                                    </div>
                                    <div className="flex flex-col mx-auto text-sm">
                                        <span className="">Departs</span>
                                        <div className="font-semibold">{formatTime(transaction.ticket.depart_time)}</div>

                                    </div>
                                    <div className="flex flex-col text-sm">
                                        <span className="">Arrived</span>
                                        <div className="font-semibold">{formatTime(transaction.ticket.arrive_time)}</div>

                                    </div>
                                </div>
                                <div className="border-b border-dashed my-5 pt-5">
                                    <div className="absolute rounded-full w-5 h-5 bg-primary-color -mt-2 -left-2"></div>
                                    <div className="absolute rounded-full w-5 h-5 bg-primary-color -mt-2 -right-2"></div>
                                </div>
                                <div className="flex items-center px-5 pt-3 text-sm text-center">
                                    <div className="flex flex-col">
                                        <span className="">Passanger</span>
                                        <div className="font-semibold">{user?.firstName} {user?.lastName}</div>

                                    </div>
                                    <div className="flex flex-col mx-auto">
                                        <span className="">Quantity</span>
                                        <div className="font-semibold">{transaction.quantity} Seat</div>

                                    </div>
                                    <div className="flex flex-col">
                                        <span className="">Price</span>
                                        <div className="font-semibold">{transaction.total_price} ฿</div>

                                    </div>
                                </div>
                                <div className="flex flex-col py-5  justify-center text-sm ">
                                    <h6 className="font-bold text-center">Boarding Pass</h6>

                                    <div className="barcode h-14 w-0 inline-block mt-4 relative left-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TicketReceipt