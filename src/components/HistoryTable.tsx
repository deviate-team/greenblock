import { ITransactionItem } from "@/interfaces/transaction"
import { NavigateFunction, useNavigate } from "react-router-dom"

const HistoryTable = ({ history }: { history: ITransactionItem }) => {

    const navigate: NavigateFunction = useNavigate()

    const handleViewDetail = () => {
        navigate(`/history-detail/${history._id}`)
    }
    return (
        <tbody>
            <tr className="bg-white border-b font-BAI">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {history._id}
                </th>
                <td className="px-6 py-4">
                    {history.type}
                </td>
                <td className="px-6 py-4">
                    {history.user.username}
                </td>
                <td className="px-6 py-4">
                    {history.total_price.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                    {history.status}
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => handleViewDetail()} className="font-medium text-primary-color hover:underline">View</button>
                </td>
            </tr>
        </tbody>
    )
}

export default HistoryTable