import Loading from "@/components/Loading";
import TicketReceipt from "@/components/TicketReceipt";
import { ITransactionItem } from "@/interfaces/transaction";
import { transactionService } from "@/services/transaction.services";
import { useEffect, useState } from "react";

const HistoryDetailPage = () => {
    const [transaction, setTransaction] = useState<ITransactionItem>()

    const fetchTransactionById = async () => {
        const transactionId = window.location.pathname.split("/")[2]
        const transactionById = await transactionService.getTransactionById(transactionId)
        setTransaction(transactionById.data)
    }

    useEffect(() => {
        fetchTransactionById()
    }, []);
    return (
        <div>
            {transaction ? (
                <TicketReceipt transaction={transaction} />
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default HistoryDetailPage