// import orderReceivedIcon from '../icons/completedOrder.svg';
import processing_order  from '../icons/processing_order.svg';
import order_received  from '../icons/order_received.svg';
import  order_execution from '../icons/order_execution.svg';
import order_complete from '../icons/order_complete.svg';
import orderIcon from '../icons/completedOrder.svg';

type connectorProps = {
    activeStep: number
}

const TrackingConnector = ({ activeStep }: connectorProps) => {
    return (
        <div>
            <div className="flex items-center min-h-[120px] ml-0 lg:ml-4">
                <div className={`w-full lg:w-[44px] h-[40px] rounded-[14px] flex justify-center items-center bg-[#00ADB9] relative`}>
                    <img src={processing_order} className='w-[20px]' />
                    <span className='text-[0.55rem] lg:text-xs absolute top-12 left-[2px]'>Pesanan Diterima</span>
                </div>
                <div className={`w-[150px] border-b border-b-[#00ADB9]`}>
                </div>
                <div className={`w-full lg:w-[44px] h-[40px] rounded-[14px] relative flex justify-center items-center ${activeStep < 1 ? 'bg-[#D9D9D9]' : 'bg-[#00ADB9]'}`}>
                    <img src={activeStep < 1 ? orderIcon : order_received} className='w-[20px]' />

                    <span className='text-[0.55rem] lg:text-xs absolute top-12 left-[2px] '>Pesanan Sedang Diproses</span>
                </div>
                <div className={`w-[150px] border-b ${activeStep == 0 ? 'border-b-[#E6E8EB]' : 'border-b-[#00ADB9]'}`}>
                </div>
                <div className={`w-full lg:w-[44px] h-[40px] rounded-[14px] relative flex justify-center items-center ${activeStep < 2 ? 'bg-[#D9D9D9]' : 'bg-[#00ADB9]'}`}>
                    <img src={activeStep < 2 ? orderIcon : order_execution} className='w-[20px]' />
                    <span className='text-[0.55rem] lg:text-xs  absolute top-12 left-[2px] '>Pesanan Pelaksana</span>
                </div>
                <div className={`w-[150px] border-b ${activeStep == 0 ? 'border-b-[#E6E8EB]' : 'border-b-[#00ADB9]'}`}>
                </div>
                <div className={`w-full lg:w-[44px] h-[40px] rounded-[14px] relative flex justify-center items-center ${activeStep < 3 ? 'bg-[#D9D9D9]' : 'bg-[#00ADB9]'}`}>
                    <img src={activeStep < 3 ? orderIcon : order_complete} className='w-[20px]' />
                    <span className='text-[0.55rem] lg:text-xs  absolute top-12 left-[2px] '> Pesanan Selesai</span>
                </div>
            </div>
        </div>
    )
}

export default TrackingConnector