import HistoryTable from "@/components/HistoryTable"
import { ITransactionItem } from "@/interfaces/transaction"
import { transactionService } from "@/services/transaction.services"
import { useEffect, useState } from "react"

const HistoryPage = () => {
    const [transactions, setTransactions] = useState<ITransactionItem[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [limitPage, setLimitPage] = useState<number>(1);

    const fetchTransactions = async (page: number): Promise<void> => {
        try {
            const response = await transactionService.getTransactions(page.toString())
            setTransactions(response.data.transactions)
            setLimitPage(response.data.totalPages - 1)
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

    useEffect(() => {
        fetchTransactions(currentPage)
    }, [currentPage])

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto mt-10">
                <table className="w-full text-sm text-gray-500 text-center">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Ticket ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ticket Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ticket Owner
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ticket Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ticket Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {transactions.map((transaction: ITransactionItem) => (
                        <HistoryTable history={transaction} key={transaction._id} />
                    ))}
                </table>
            </div>
            <div className="mt-7 flex justify-end pb-2 mx-auto container">
                <nav className="flex items-center text-gray-600">
                    {renderPaginationLinks()}
                </nav>
            </div>
        </div>
    )
}

export default HistoryPage