import TrackingConnector from "./TrackingConnector";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { formatDate } from '../../../lib/utils';


type trackingCardProps = {
    setShowOrderDetails: React.Dispatch<React.SetStateAction<boolean>>,
    ongoing: string
}

const TrackingCard = ({ setShowOrderDetails }: trackingCardProps) => {
    const {OrdersList} = useSelector((state: RootState) => state?.orderReducer);
   
    if (!Array.isArray(OrdersList) || OrdersList.length === 0) {
        return (
            <div className="p-5 bg-[#F7F8FA] mt-8">
                <p>Tiada pesanan tersedia.</p>
            </div>
        );
    }
    if (OrdersList.length === 0) {
        return (
            <div className="p-5 bg-[#F7F8FA] mt-8">
                <p>Tiada pesanan tersedia.</p>
            </div>
        );
    }
    const mapStatusToStep = (status :any) => {
        switch (status) {
            case "ORDER_RECEIVED":
                return 1;
            case "ORDER_IN_PROGRESS":
                return 2;
            case "ORDER_SHIPPED":
                return 3;
            case "ORDER_COMPLETED":
                return 4;
            default:
                return 0; // Default to 0 if status is unknown
        }
    };

    return (
        <div className="p-5 bg-[#F7F8FA] mt-8">   
         {OrdersList && OrdersList.map((order: any) => (
        
        <div key={order.id}>

            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <span className="font-bold text-[10px] lg:text-[20px]">ID Pesanan : {order.order_id}</span>
                    <div className="w-0 h-[44px] border-r-solid border-r-[1.5px] border-r-black"></div>
                    <span className="font-bold text-[10px] lg:text-[20px]"> 
                         {order?.package?.package?.pkg_type?.toLowerCase() != "waqf" && ` ${order.package?.animal?.name}`}
                                                                             {  order?.package?.package?.pkg_type?.toLowerCase() === "waqf" ? " Sadaqah" :  " "+  order?.package?.package?.pkg_type}
                                                                             {  " "+ order.package?.package?.name}</span>
                                                                {/* <span className="font-bold text-[20px]">{order.animal.package_type + " "+ order.animal.animal_type} </span> */}
                </div>
                <div className="flex gap-4 items-center">
                   
                    <div className={`px-4  py-2 ${order.payment_status === 'PAYMENT_SUCCESS' ? 'bg-green-500' : order.payment_status === 'PAYMENT_FAILED' ? 'bg-red-500' : 'bg-yellow-500'} text-white px-2 py-1 rounded-sm mt-4`}>
                           <span className="text-[14px] font-bold text-black">
                                {order.payment_status === 'PAYMENT_SUCCESS' ? 'Telah Bayat' : order.payment_status === 'PAYMENT_FAILED' ? 'Gagal' : 'Belum Selesai'}
                            </span>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 mt-4 items-center text-[#525252] text-[14px]">
                <span className="text-[12px]">
                Pesanan dimasukkan {formatDate(order.created_at)}
                </span>
                <div className="w-0 h-[15px] border-r-solid border-r border-r-black"></div>
                <span className="text-[12px]">
                {order.address}
                </span>
                <div className="w-0 h-[15px] border-r-solid border-r border-r-black"></div>
                <span className="text-[12px]">
                Kuantiti: {order.total_portions}  {order?.package?.package?.pkg_type?.toLowerCase() === "waqf" ? "Unit" :  order.package?.animal?.portion === 1 ? "Unit" : "bahagian"} 
                </span>
                <div className="w-0 h-[15px] border-r-solid border-r border-r-black"></div>
                <span className="text-[12px]">
                Kaedah Bayaran: {order.installment_option ==true ? "Ansuran" : "Penuh Kaedah Bayararan"}
                </span>
                <span className="font-bold text-[10px] lg:text-[20px]">
                        RM  {order.price}
                    </span>
            </div>
            <div className="px-4 py-2 bg-[#FFFEFE] mt-4">
                {/* <div className="flex gap-2 items-center">
                    <span className="font-medium text-[16px]">Ready for distribution</span>
                    <span className="text-[14px] text-[#525252]">16/06/2024</span>
                </div> */}

                <div className="mt-4">
                    <TrackingConnector activeStep={mapStatusToStep(order.order_status)}  />
                </div>
            </div>
            <div className="flex justify-end cursor-pointer">
                <p className="text-[#53AFBE] text-xs mt-4" onClick={() =>
                    {
                    localStorage.setItem("orderdetail", JSON.stringify(order))
                    setShowOrderDetails(true)}}>Lihat butiran pesanan</p>
            </div>
            </div>  
              ))}  
        </div>
    )
}

export default TrackingCard;
