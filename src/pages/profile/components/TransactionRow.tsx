import { ChevronRight } from 'lucide-react';
// import transactionIcon from '../icons/transaction.png';
import { SERVER_URL } from "../../../constant/ServerUrl";
// import { formatDate } from '../../../lib/utils.js';
// @ts-ignore
import { gettransactionsById } from '../../../context/actions/transactionsByIdActions.js';
import { AuthContext } from "../../../context/auth.tsx";
import { useContext } from "react";
import {  AppDispatch } from '../../../store';
import { useDispatch,  } from 'react-redux';

type TransactionRowProps = {
    transaction: any;  // Adjust this type according to the actual transaction object structure
    setTransactionDetailsView: React.Dispatch<React.SetStateAction<boolean>>;
}

const TransactionRow = ({ transaction, setTransactionDetailsView }: TransactionRowProps) => {
    const token  = useContext(AuthContext).token;
    const dispatch: AppDispatch = useDispatch();

    const handleTransactionClick = () => {
        dispatch(gettransactionsById(transaction.id, token));
        setTransactionDetailsView(true);
    };
    return (
        <>
        <div className="flex pb-4 border-b-[#E6E6E6] border-b-[1.5px] mt-4">
            <div className='lg:w-[25%] mr-[70px] lg:mr-[0px]'>
                <div className='flex gap-4'>
                    <img className='h-[60px] w-[80px]' src={SERVER_URL + transaction?.packageDetails.subPackageImage} />
                    <div>
                        <p className='text-[18px] font-medium mb-2'>Pembayaran</p>
                        <p className='text-xs text-[#A3A3A3]'>{transaction.date}</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-[25%] mr-[50px] lg:mr-[0px] flex justify-center'>
                <div>
                    <p className='text-[18px] font-medium mb-2'>
                    {transaction?.packageDetails?.packageType?.toLowerCase() === "waqf" ? "Sadaqah" : transaction?.packageDetails?.packageType}


                        {/* {transaction?.packageDetails?.packageType} */}
                        </p>
                    <p className='text-xs text-[#A3A3A3]'>ID: {transaction?.order_id}</p>
                </div>
            </div>
            <div className='lg:w-[25%] mr-[30px] lg:mr-[0px] flex justify-center'>
                <div>
                    <p className='text-[18px] font-medium mb-2'>{transaction?.packageName}</p>
                    <p className='text-xs text-[#A3A3A3]'>
  {transaction?.packageDetails?.packageType === 'WAQF' ? '' : transaction?.packageDetails?.animalName}
</p>
                </div>
            </div>
            <div className='lg:w-[25%] lg:mr-[0px] flex justify-center gap-4'>
                <div>
                    <p className='text-[18px] font-medium mb-2'><span className='text-sm'>
                        </span>  {transaction.amount}</p>
                    <p className='text-xs text-[#A3A3A3]'>{transaction?.payment_status}</p>
                </div>
                <div className='flex items-center'>
                    <ChevronRight className='cursor-pointer' onClick={handleTransactionClick} />
                </div>
            </div>
        </div>
            </>
    )
}

export default TransactionRow
