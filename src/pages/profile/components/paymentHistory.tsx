import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { RootState, AppDispatch } from "../store";
// @ts-ignore
import { paynowinstallment } from "../../../context/actions/installationPaynowActions";
import { useContext } from "react";
import { SERVER_URL } from "../../../constant/ServerUrl";
import { AuthContext } from "../../../context/auth.tsx";
import { formatDate } from '../../../lib/utils.ts';
interface PaymentHistoryProps {
  // @ts-ignore
  orderDetails: any[]; // Replace `any[]` with the type of your `orderDetails` array elements
}

const PaymentHistory: React.FC<PaymentHistoryProps> = ({ orderDetails }) => {
  const token = useContext(AuthContext).token;
  const dispatch: AppDispatch = useDispatch();
  const { paynow } = useSelector(
    (state: RootState) => state.installationPaynowReducer
  );
  const [isLoading, setIsLoading] = useState(false);
  if (paynow != "" || paynow.length != 0) {
    window.location.href = paynow;
  }

  let paidTotal = 0;
  let unpaidTotal = 0;
  // @ts-ignore
  orderDetails.installments.forEach((installment) => {
    if (installment.status === "PAID") {
      paidTotal += parseFloat(installment.total_payable);
    } else {
      unpaidTotal += parseFloat(installment.total_payable);
    }
  });

  const handlePayNow = async (installmentid: string) => {
    setIsLoading(true);
    try {
      // @ts-ignore
      const response = await dispatch(
        // @ts-ignore
        paynowinstallment(orderDetails?.id, installmentid, "false", token)
      );
      console.log("Payment success:", response);
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  // @ts-ignore
  const handlePayAll = async () => {
    setIsLoading(true);
    try {
      // @ts-ignore
      const response = await dispatch(
        // @ts-ignore
        paynowinstallment(orderDetails?.id, 0, "true", token)
      );
      console.log("Payment success:", response);
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Assuming placeOrder action needs parameters or payload
    dispatch(paynowinstallment()); // Adjust this according to your action requirements
  }, [dispatch]);

  return (
    <div className="mx-auto border rounded-lg p-6 text-center shadow-xl">
      {/* <div
        key={
          // @ts-ignore
          orderDetails.id
        }
        className="flex items-center mb-4 bg-gray-100 rounded-md px-2 py-2"
      >
        <img
          src={`${
            // @ts-ignore
            SERVER_URL
          }${orderDetails?.package?.package?.pkg_image}`}
          // @ts-ignore
          alt="img"
          className="w-28 h-auto"
        />
        <div className="ml-2">
          <p className="text-start">
            ID:{" "}
            {
              // @ts-ignore
              orderDetails.order_id
            }
          </p>
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold py-2">
              {
                // @ts-ignore
                orderDetails?.package?.package?.pkg_type
              }
            </h1>
            <p className="ml-3 font-semibold text-2xl">
              {
                // @ts-ignore
                orderDetails?.package?.animal?.name
              }
            </p>
          </div>
          <div className="flex items-center pt-2"> */}
            {/* <p className="bg-[#00ADB9] text-white px-3 rounded-xl">{orderDetails.package.package.pkg_type}</p> */}
            {/* <p className="ml-3 text-gray-400">
              Due date:{" "}
              {new Date(
                // @ts-ignore
                orderDetails.package.package.closing_date
              ).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="text-right pt-4 ml-auto">
          <p className="mb-2 mr-10 text-xs text-gray-400">Current Bill</p>
          <p className="mb-4 mr-2 font-bold text-xl">
            RM {unpaidTotal.toFixed(2)}
          </p> */}
          {/* <button className="bg-[#C1272D] hover:bg-[#c1272ce6] text-white py-2 px-9 rounded-md shadow-md">
                            Pay now
                        </button> */}
          {/* <button
            className="bg-[#C1272D] hover:bg-[#c1272ce6] text-white py-2 px-9 rounded-md shadow-md"
            onClick={() => handlePayAll()}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Pay All"}
          </button>
        </div>
      </div> */}

      {/* ======= RM start =========== */}

      <div className="flex w-full">
        <div className="border-green-400 border w-[48%] bg-[#A7E0EA] rounded-md py-2 px-2 ">
          <p className="text-[#00ADB9] text-xs text-start pb-1">Terima Bayaran</p>
          <p className="font-semibold text-3xl text-[#00ADB9] text-start">
            RM {paidTotal.toFixed(2)}
          </p>
        </div>

        <div className="border-green-400 border w-[48%] bg-[#A7E0EA] rounded-md py-3 px-2 ml-10">
          <p className="text-[#00ADB9] text-xs text-start mb-1">Baki Bayaran</p>
          <p className="font-semibold text-3xl text-start text-[#00ADB9]">
            RM {unpaidTotal.toFixed(2)}
          </p>
        </div>
      </div>

      {/* ============== RM End ========== */}
      {/* ========== ongoing ========= */}
      {
          // @ts-ignore
  orderDetails?.installments?.filter(
    // @ts-ignore
    (installment) => installment.status.toLowerCase() !== "paid"
  ).length > 0 && (
    <>
      <h1 className="font-semibold mt-12 text-2xl text-start mb-4">Sedang di proses</h1>
      </>
  )
}
    
      {
        // @ts-ignore
        orderDetails?.installments
          .filter(
            // @ts-ignore
            (installment) => installment.status.toLowerCase() !== "paid"
          )
          .map(
            (
              // @ts-ignore
              installments,index
            ) => (
              <div
                key={
                  // @ts-ignore
                  orderDetails?.id
                }
                className="flex items-center mb-4 bg-gray-100 rounded-md px-2 py-2"
              >
                <img
                  src={`${
                    // @ts-ignore
                    SERVER_URL
                    // @ts-ignore
                  }${orderDetails?.package?.package?.pkg_image}`}
                  alt="img"
                  className="w-28 h-auto"
                />
                <div className="ml-2">
                  <p className="text-start">
                    ID:{" "}
                    {
                      // @ts-ignore
                      orderDetails.order_id
                    }
                  </p>
                  <div className="flex items-center">
                    <h1 className="text-2xl font-semibold py-2">
                      {
                        // @ts-ignore
                        orderDetails?.package?.package?.pkg_type.toLowerCase() ==="waqf" ? "Sadaqah" : orderDetails?.package?.package?.pkg_type
                      }
                    </h1>
                    <p className="ml-3 font-semibold text-2xl">
                      {
                        // @ts-ignore
                        orderDetails?.package?.animal?.name
                      }
                    </p>
                  </div>
                  <div className="flex items-center pt-2">
                    {/* <p className="bg-[#00ADB9] text-white px-3 rounded-xl">{orderDetails.package.package.pkg_type}</p> */}
                    <p className="ml-3 text-gray-400">
                      Due date:{" "}
                      {formatDate(installments.due_date)}
                    </p>
                    <p className="ml-3 text-gray-400">
                      Status:{" "}
                      {installments.status ==="PENDING" ? "Sedang diproses" : installments.status}
                    </p>
                  </div>
                </div>
                <div className="text-right pt-4 ml-auto">
                  <p className="mb-2 mr-10 text-xs text-gray-400">
                  Bil Semasa
                  </p>
                  <p className="mb-4 mr-9 font-bold text-xl">
                    RM {parseFloat(installments.total_payable).toFixed(2)}
                  </p>
                  {/* <button className="bg-[#C1272D] hover:bg-[#c1272ce6] text-white py-2 px-9 rounded-md shadow-md">
                            Pay now
                        </button> */}
                  <button
                    className={`${
                        index !== 0
                          ? 'bg-[#A3A3A3] text-white'
                          : 'bg-[#C1272D] hover:bg-[#c1272ce6] text-white'
                      } py-2 px-9 rounded-md shadow-md`}
                    onClick={() => handlePayNow(installments.id)}
                    disabled={isLoading || index !== 0}
                  >
                    {isLoading ? "Processing..." : "Bayar Sekarang"}
                  </button>
                </div>
              </div>
            )
          )
      }
      


      {/* =========== competed ========= */}
      {
          // @ts-ignore
  orderDetails?.installments?.filter(
    // @ts-ignore
    (installment) => installment.status.toLowerCase() === "paid"
  ).length > 0 && (
    <>
      <h1 className="font-semibold mt-12 text-2xl text-start mb-4"> Selesai  </h1>
      </>
  )
}
      
      {
        // @ts-ignore
        orderDetails?.installments
        // @ts-ignore
          .filter((installment) => installment.status.toLowerCase() === "paid")
          // @ts-ignore
          .map((installments) => (
            <div
              key={
                // @ts-ignore
                orderDetails.id
              }
              className="flex items-center mb-4 bg-gray-100 rounded-md px-2 py-2"
            >
              <img
                src={`${
                  // @ts-ignore
                  SERVER_URL
                  // @ts-ignore
                }${orderDetails?.package?.package?.pkg_image}`}
                alt="img"
                className="w-28 h-auto"
              />
              <div className="ml-2">
                <p className="text-start">
                  ID:{" "}
                  {
                    // @ts-ignore
                    orderDetails.order_id
                  }
                </p>
                <div className="flex items-center">
                  <h1 className="text-2xl font-semibold py-2">
                    {
                      // @ts-ignore
                      orderDetails?.package?.package?.pkg_type.toLowerCase() ==="waqf" ? "Sadaqah" : orderDetails?.package?.package?.pkg_type
                    }
                  </h1>

                  <p className="ml-3 font-semibold text-2xl">
                    {
                      // @ts-ignore
                      orderDetails?.package?.animal?.name
                    }
                  </p>
                </div>
                <div className="flex items-center pt-2">
                  {/* <p className="bg-[#00ADB9] text-white px-3 rounded-xl">{orderDetails.package.package.pkg_type}</p> */}
                  <p className="ml-3 text-gray-400">
                    Due date:{" "}
                    {formatDate(installments.due_date)}
                  </p>
                  <p className="ml-3 text-gray-400">
                      Status:{" "}
                      {installments.status ==="PAID" ? "Terima Bayaran" : installments.status}
                    </p>
                </div>
              </div>
              <div className="text-right pt-4 ml-auto">
                <p className="mb-2 mr-10 text-xs text-gray-400">Bil Semasa</p>
                <p className="mb-4 mr-9 font-bold text-xl">
                  RM { parseFloat(installments.total_payable).toFixed(2)}
                </p>
                <button
                  className="bg-green-700  text-white py-2 px-9 rounded-md shadow-md"
                  disabled
                >
                  Terima Bayaran
                </button>
              </div>
            </div>
          ))
      }
    </div>
  );
};

export default PaymentHistory;

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // @ts-ignore
// import { Button } from '../../../components/ui/button.tsx';
// // @ts-ignore
// import { placeOrder } from '../../../context/actions/installationPaynowActions';
// // @ts-ignore
// import { RootState, AppDispatch } from '../store.ts';

// interface PaymentHistoryProps {
//     orderDetails: any[]; // Replace `any[]` with the type of your `orderStatusHistory` array elements
// }

// const PaymentHistory: React.FC<PaymentHistoryProps> = ({ orderDetails }) => {
//     const dispatch: AppDispatch = useDispatch();
//     const { paynow,loading, error } = useSelector((state: RootState) => state.masterPackagesReducer);
// console.log("orderDetails");
// console.log(orderDetails);
//     useEffect(() => {
//         dispatch(placeOrder());
//       }, [dispatch]);

//     return (
//         <div className="mx-auto border rounded-lg p-6 text-center shadow-xl">
//             <div className="flex items-center mb-4">
//                 <img src="animal.svg" alt="img" className="w-28 h-auto" />
//                 <div className="ml-2">
//                     <p className='text-start'>ID: XK3-6J</p>
//                     <div className="flex items-center">
//                         <h1 className="text-2xl font-semibold py-2">Qurban</h1>
//                         <p className='ml-3 font-semibold text-2xl'>Buffalo</p>
//                     </div>
//                     <div className="flex items-center pt-2">
//                         {/* <p className="bg-[#00ADB9] text-white px-3 rounded-xl">6 Months</p> */}
//                         <p className="ml-3 text-gray-400">Due date: 10 April 2024</p>
//                     </div>
//                 </div>
//                 <div className="text-right pt-4 ml-auto">
//                 <p className="mb-2 mr-14 text-xs text-gray-400">Current Bill</p>
//                 <p className="mb-4 mr-1 font-bold text-xl">RM 1000.00</p>
//                 <button className="bg-[#C1272D] hover:bg-[#c1272ce6] text-white py-2 px-9 rounded-md shadow-md">
//                     Pay All
//                 </button>
//             </div>
//             </div>

//             {/* ======= RM start =========== */}

//             <div className='flex w-full'>
//                 <div className='border-green-400 border w-[48%] bg-[#A7E0EA] rounded-md py-2 px-2 '>
//                 <p className='text-[#00ADB9] text-xs text-start pb-1'>Paid</p>
//                 <p className='font-semibold text-3xl text-[#00ADB9] text-start'>RM 3000.00</p>
//                 </div>

//                 <div className='border-green-400 border w-[48%] bg-[#A7E0EA] rounded-md py-3 px-2 ml-10'>
//                 <p className='text-[#00ADB9] text-xs text-start mb-1'>Balance</p>
//                 <p className='font-semibold text-3xl text-start text-[#00ADB9]'>RM 3000.00</p>
//                 </div>
//             </div>

//              {/* ============== RM End ========== */}

//                 <h1 className='font-semibold mt-12 text-2xl text-start mb-4'>Ongoing</h1>
//              <div className="flex items-center mb-4 bg-gray-100 rounded-md px-2 py-2">
//                 <img src="animal.svg" alt="img" className="w-28 h-auto" />
//                 <div className="ml-2">
//                     <p className='text-start'>ID: XK3-6J</p>
//                     <div className="flex items-center">
//                         <h1 className="text-2xl font-semibold py-2">Qurban</h1>
//                         <p className='ml-3 font-semibold text-2xl'>Buffalo / Portion</p>
//                     </div>
//                     <div className="flex items-center pt-2">
//                         <p className="bg-[#00ADB9] text-white px-3 rounded-xl">6 Months</p>
//                         <p className="ml-3 text-gray-400">Due date: 10 April 2024</p>
//                     </div>
//                 </div>
//                 <div className="text-right pt-4 ml-auto">
//                 <p className="mb-2 mr-14 text-xs text-gray-400">Current Bill</p>
//                 <p className="mb-4 mr-1 font-bold text-xl">RM 1000.00</p>
//                 <button className="bg-[#C1272D] hover:bg-[#c1272ce6] text-white py-2 px-9 rounded-md shadow-md">
//                     Pay now
//                 </button>
//             </div>
//             </div>

//             <div className="flex items-center mb-4 bg-gray-100 rounded-md px-2 py-2">
//                 <img src="animal.svg" alt="img" className="w-28 h-auto" />
//                 <div className="ml-2">
//                     <p className='text-start'>ID: XK3-6J</p>
//                     <div className="flex items-center">
//                         <h1 className="text-2xl font-semibold py-2">Qurban</h1>
//                         <p className='ml-3 font-semibold text-2xl'>Buffalo / Portion</p>
//                     </div>
//                     <div className="flex items-center pt-2">
//                         <p className="bg-[#00ADB9] text-white px-3 rounded-xl">6 Months</p>
//                         <p className="ml-3 text-gray-400">Due date: 10 April 2024</p>
//                     </div>
//                 </div>
//                 <div className="text-right pt-4 ml-auto">
//                 <p className="mb-2 mr-14 text-xs text-gray-400">Current Bill</p>
//                 <p className="mb-4 mr-1 font-bold text-xl">RM 1000.00</p>
//                 <button className="bg-[#C1272D] hover:bg-[#c1272ce6] text-white py-2 px-9 rounded-md shadow-md">
//                     Pay now
//                 </button>
//             </div>
//             </div>

//             {/* ========== Ongoing End =========== */}

//             <h1 className='font-semibold mt-12 text-2xl text-start mb-4'>Completed</h1>
//             <div className="flex items-center mb-4 bg-gray-100 rounded-md px-2 py-2">
//                 <img src="animal.svg" alt="img" className="w-28 h-auto" />
//                 <div className="ml-2">
//                     <p className='text-start'>ID: XK3-6J</p>
//                     <div className="flex items-center">
//                         <h1 className="text-2xl font-semibold py-2">Qurban</h1>
//                         <p className='ml-3 font-semibold text-2xl'>Buffalo / Portion</p>
//                     </div>
//                     <div className="flex items-center pt-2">
//                         <p className="bg-[#00ADB9] text-white px-3 rounded-xl">6 Months</p>
//                         <p className="ml-3 text-gray-400">Due date: 10 April 2024</p>
//                     </div>
//                 </div>
//                 <div className="text-right pt-4 ml-auto">
//                 <p className="mb-2 mr-14 text-xs text-gray-400">Current Bill</p>
//                 <p className="mb-4 mr-1 font-bold text-xl">RM 1000.00</p>
//                 <button className="bg-[#C1272D] hover:bg-[#c1272ce6] text-white py-2 px-9 rounded-md shadow-md">
//                     Pay now
//                 </button>
//             </div>
//             </div>

//             <div className="flex items-center mb-4 bg-gray-100 rounded-md px-2 py-2">
//                 <img src="animal.svg" alt="img" className="w-28 h-auto" />
//                 <div className="ml-2">
//                     <p className='text-start'>ID: XK3-6J</p>
//                     <div className="flex items-center">
//                         <h1 className="text-2xl font-semibold py-2">Qurban</h1>
//                         <p className='ml-3 font-semibold text-2xl'>Buffalo / Portion</p>
//                     </div>
//                     <div className="flex items-center pt-2">
//                         <p className="bg-[#00ADB9] text-white px-3 rounded-xl">6 Months</p>
//                         <p className="ml-3 text-gray-400">Due date: 10 April 2024</p>
//                     </div>
//                 </div>
//                 <div className="text-right pt-4 ml-auto">
//                 <p className="mb-2 mr-14 text-xs text-gray-400">Current Bill</p>
//                 <p className="mb-4 mr-1 font-bold text-xl">RM 1000.00</p>
//                 <button className="bg-[#C1272D] hover:bg-[#c1272ce6] text-white py-2 px-9 rounded-md shadow-md">
//                     Pay now
//                 </button>
//             </div>
//             </div>

//         </div>
//     );
// };

// export default PaymentHistory;
