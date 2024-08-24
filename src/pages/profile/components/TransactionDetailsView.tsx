import { ChevronLeft } from "lucide-react";

type TransactionDetailsProps = {
    setTransactionDetailsView: React.Dispatch<React.SetStateAction<boolean>>
}
import { RootState } from '../../../store';
import {  useSelector } from 'react-redux';
import { SERVER_URL } from "../../../constant/ServerUrl";
import { formatDateWithTime} from '../../../lib/utils.js';
import { Link } from 'react-router-dom';

const TransactionDetailsView = ({ setTransactionDetailsView }: TransactionDetailsProps) => {

    const { TransactionsDetail } = useSelector((state: RootState) => state.transactionsByIdReducer);
// console.log(TransactionsDetail);
//     const invoiceData = {
//         invoiceNumber: 'INV00001',
//         invoiceDate: '03/03/2024',
//         customer: {
//             name: 'Khadijah Binti Mohd Amim',
//             address: '10, Jalan Tangsi, Tasik Perdana, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
//             email: 'khadijahamim@gmail.com',
//             contactNumber: '+60 19-23456789',
//         },
//         paymentDetails: {
//             paymentDate: '03/03/2024',
//             paymentMethod: 'Online Banking - MayBank Berhad',
//             status: 'Received',
//         },
//         orderDetails: [
//             { description: 'Qurban Cattle / Portion', netPrice: 850.00, qty: 7 },
//             { description: 'Qurban Buffalo / Portion', netPrice: 850.00, qty: 7 },
//         ],
//     };

//     const getTotal = () => {
//         return invoiceData.orderDetails.reduce((total, item) => total + item.netPrice * item.qty, 0);
//     };
    return (
        <div className='bg-white lg:w-[850px] p-10 shadow-xl border border-solid rounded-[0.813rem]  mb-2'>

            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center cursor-pointer" onClick={() => setTransactionDetailsView(false)}>
                    <ChevronLeft size={16} color="#00ADB9" />
                    <p className="text-[#00ADB9] text-[12px]">
                    Kembali
                    </p>
                </div>
                {/* <p className="text-[#C1272D] text-[12px]">
    <Link to="/receipt" style={{ color: 'inherit', textDecoration: 'none' }}>Muat Turun Resit (PDF)</Link>
</p> */}
{TransactionsDetail?.paymentDetails?.status === "Telah Bayar" && (
        <p className="text-[#C1272D] text-[12px]">
          <Link to="/receipt" style={{ color: 'inherit', textDecoration: 'none' }}>
             Resit (PDF)
          </Link>
        </p>
      )}

            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Bayaran</h2>
                <p>{TransactionsDetail.invoiceNumber}</p>
                {/* <p className="text-[#A3A3A3]">Tarikh invois: {formatDate(TransactionsDetail.paymentDate)}</p>    */}
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Pelanggan</h2>
                <div className="flex gap-6 justify-between">
                    <div className="w-[60%]">
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Nama</p>
                            <p>{TransactionsDetail.customer?.name}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Alamat</p>
                            <p>
                                {TransactionsDetail.customer?.address}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">E-mel</p>
                            <p className="break-words">{TransactionsDetail.customer?.email}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Nombor telefon</p>
                            <p>{TransactionsDetail.customer?.contactNumber}</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Tarikh pembayaran</p>
                            <p> {formatDateWithTime(TransactionsDetail.paymentDetails?.paymentDate)} </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Kaedah Pembayaran</p>
                            <p>
                           {TransactionsDetail.paymentDetails?.method}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Status</p>
                            <p>{TransactionsDetail?.paymentDetails?.status}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">No. Resit</p>
                            <p>{TransactionsDetail?.receiptNo}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">Maklumat-maklumat Pesanan</h2>
                <div className="overflow-x-auto lg:overflow-visible">
                <table className="min-w-full divide-y divide-gray-200 mb-4 mt-4">
                    <thead className="bg-[#F7F8FA]">
                        <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        gambar
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Harga tetap
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status.
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Jumlah
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                            <tr >
                                <td className="px-6 py-4 whitespace-nowrap">
                                   <img className="h-[60px] w-[100px]" src= {SERVER_URL +TransactionsDetail.transaction?.image} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                {TransactionsDetail.transaction?.order_id}
                                <br></br>
                                {/* {TransactionsDetail.orderDetails?.order_id} */}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                {TransactionsDetail.transaction?.netPrice}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                {TransactionsDetail.paymentDetails?.status}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                {TransactionsDetail.transaction?.total}
                                </td>
                            </tr>
                        
                    </tbody>
                </table>
                </div>
                <div className="text-right text-xl font-medium">
                Jumlah: <span className="ml-4 text-[16px]"></span> {TransactionsDetail.total}
                </div>
            </div>
        </div>
    )
}

export default TransactionDetailsView;
