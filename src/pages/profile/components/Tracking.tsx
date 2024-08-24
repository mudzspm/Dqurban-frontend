import TrackingCard from './TrackingCard.tsx'
import OrderDetails from './OrderDetails.tsx';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { getAnimalInventory } from '../../../context/actions/orderactions.js';
// Type as `any` during import
// @ts-ignore
import * as OrderActions from '../../../context/actions/orderactions.js';

// Assign the specific function as `any`
const getAnimalInventory: any = OrderActions.getAnimalInventory;

import { AuthContext } from "../../../context/auth.tsx";
import { useContext } from "react";
// type TrackingProps = {
//     profileData: userProfile,
//     setProfile: React.Dispatch<React.SetStateAction<userProfile>>
// }

const Tracking = () => {
    const token  = useContext(AuthContext);
    const [selectedTrackingType, setSelectedTrackingType] = useState('ONGOING');
    const [showOrderDetails, setShowOrderDetails] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch data when the component mounts with order_type=ONGOING
        dispatch(getAnimalInventory(selectedTrackingType,token));
    }, [dispatch]);

    const handleTrackingTypeChange = (type :any) => {
        let orderType = "";
        let installmentOption = false;
        // let sortOrder = 'asc';
debugger;
        if (type === 'true') {
            installmentOption = true;
            // sortOrder = 'desc';
        } else if (type === 'ONGOING' || type === 'COMPLETED' || type === 'CANCELLED') {
            orderType = type;
            installmentOption = false;
            // sortOrder = 'asc';
        }

        setSelectedTrackingType(type);
        dispatch(getAnimalInventory(orderType, token, installmentOption));
       
    };
    return (
        !showOrderDetails ?
            <div className='bg-white w-full lg:p-10 shadow-xl border border-solid rounded-sm  mb-2'>
                <div className="bg-gradient-to-r from-[#00ADB9] to-[#5ed1da] h-[190px] flex justify-center flex-col gap-2 rounded-[12px] pl-4">
                    <p className='text-[#fff] font-bold text-[36px]'>Jejak</p>
                    <p className='text-[#fff] text-[14px]'>Anda boleh melihat progres pesanan anda di sini</p>
                </div>
                <div className='flex gap-2 bg-[#E6E8EB] p-[5px] rounded-[7px] w-[80%] lg:w-[72%] mt-8 cursor-pointer'>
                    <div className={`p-[10px] w-[50%] rounded-[4px] ${selectedTrackingType === 'ONGOING' ? 'bg-[#00ADB9] text-white font-bold' : 'bg-[#E6E8EB]'}`} onClick={() => handleTrackingTypeChange('ONGOING')}>
                        <span className='text-[14px]'>Bayaran Penuh</span>
                    </div>
                    <div className={`p-[10px] w-[50%] rounded-[4px] ${selectedTrackingType === 'CANCELLED' ? 'bg-[#00ADB9] text-white font-bold' : 'bg-[#E6E8EB]'}`} onClick={() => handleTrackingTypeChange('CANCELLED')}>
                        <span className='text-[14px]'>Dibatalkan</span>
                    </div>
                    <div className={`p-[10px] w-[50%] rounded-[4px] ${selectedTrackingType === 'COMPLETED' ? 'bg-[#00ADB9] text-white font-bold' : 'bg-[#E6E8EB]'}`} onClick={() => handleTrackingTypeChange('COMPLETED')}>
                        <span className='text-[14px]'>Telah Selesai</span>
                    </div>
                    <div className={`p-[10px] w-[50%] rounded-[4px] ${selectedTrackingType === 'true' ? 'bg-[#00ADB9] text-white font-bold ' : 'bg-[#0F405A] text-white'}`} onClick={() => handleTrackingTypeChange('true')}>
                        <span className='text-[14px]'>Bayaran Ansuran</span>
                    </div>
                </div>

                <div>
                    <div className='mt-4'>
                        <TrackingCard setShowOrderDetails={setShowOrderDetails} ongoing={selectedTrackingType} />
                    </div>                   
                </div>
            </div>
            : <OrderDetails setShowOrderDetails={setShowOrderDetails} />
    )
}

export default Tracking
