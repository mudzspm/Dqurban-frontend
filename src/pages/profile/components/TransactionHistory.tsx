import TransactionRow from "./TransactionRow"

type TransactionHistoryProps = {
    transactionsList: any[]; 
    setTransactionDetailsView: React.Dispatch<React.SetStateAction<boolean>>
}

// export const TransactionHistory = () => {
    export const TransactionHistory =({ transactionsList, setTransactionDetailsView }: TransactionHistoryProps) => {
       
        
    return (
        <div className="mt-4">
<div className="flex justify-between">
            <p className="font-medium text-[20px]">Rekod Transaksi</p>
<p className="items-center flex gap-1 text-sm">
    {/* <span>
        <img src='filter.svg' alt="" />
    </span>
    Filter */}
</p>
</div>

            <div className="mt-8 overflow-x-auto lg:overflow-visible">
            {transactionsList.map((transaction, index) => (
                    <TransactionRow
                        key={index}
                        transaction={transaction}
                        setTransactionDetailsView={setTransactionDetailsView}
                    />
                ))}
            </div>
        </div>
    )
}