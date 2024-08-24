import transactionIcon from '../icons/transaction.png';

type InstallmentProps = {
    complete: boolean
}

const Installment = ({ complete }: InstallmentProps) => {
    return (
        <div className="bg-[#F7F8FA] flex justify-between p-6 mt-4 rounded-[7px]">
            <div className='flex gap-4'>
                <img src={transactionIcon} className='w-[109px] h-[109px]' />
                <div className='flex flex-col gap-3'>
                    <p className='text-[15px]'>ID: XK3-6J</p>
                    <p className='text-xl font-medium'>Qurban  Cattle / portion</p>
                    <div className='flex gap-4 items-center'>
                        <div className='rounded-[26px] px-2.5 py-[0.156rem] text-white bg-[#53AFBE] text-xs'>12 months</div>
                        <span className='text-xs text-[#A3A3A3]'>Due date : 03 March 2024</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-xs text-[#A3A3A3]'>{complete ? "Paid" : "Current Bill"}</p>
                <p className='text-3xl font-medium'>RM 3000.00</p>
                <button className={`${!complete ? 'bg-[#C1272D] hover:bg-[#C1272D]' : 'bg-[#A3A3A38A] hover:bg-[#A3A3A38A] '} w-40 py-2 px-4 text-white rounded-sm text-sm`}>Pay Now</button>
            </div>
        </div>
    )
}

export default Installment