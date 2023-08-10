import Loading from "@/components/Loading";
import TicketReceipt from "@/components/TicketReceipt";
import { ITransactionItem } from "@/interfaces/transaction";
import { transactionService } from "@/services/transaction.services";
import { useEffect, useState } from "react";
const HistoryDetailPage = () => {
    const [transaction, setTransaction] = useState<ITransactionItem>();
    const transactionId = window.location.pathname.split("/")[2]

    const fetchTransactionById = async (id: string | undefined) => {
        const transactionById = await transactionService.getTransactionById(id)
        setTransaction(transactionById.data)
    }

    useEffect(() => {
        fetchTransactionById(transactionId)
    }, [transactionId]);
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

export default HistoryDetailPage;