import { useEffect, useState } from 'react';
import profileIcon from './icons/profile.svg';
import selectedProfileIcon from './icons/selectedProfile.svg';
import trackingIcon from './icons/tracking.svg';
import selectedTrackingIcon from './icons/selectedTracking.svg';
import transactionIcon from './icons/transaction.svg';
import selectedTransactionIcon from './icons/transactionSelected.svg';
import helpLine from './icons/helpLine.svg';
import selectedHelpLine from './icons/selectedHelpLine.svg'
// import policy from './icons/policy.svg';
// import selectedPolicy from './icons/selectedPolicy.svg';
import ProfileForm from './components/ProfileForm';
import Organization from './components/Organization';
import Tracking from './components/Tracking';
import Transaction from './components/Transaction';
import Policy from './components/Policy';
import HelpLine from './components/HelpLine';
import { UsersAPI } from '@/api/user';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
import PolicyDetail from '../profile/components/policyDetail';
const Profile = () => {
    const [selected, setSelected] = useState(1);
    const [user, setUser] = useState({ userData: { name: '', country: {}, region: {}, state: {}, bank_name: '', account_no:'',image : '', FamilyMembers: [], email: '', address: '', phone: '', icNumber: '' }, favoriteParticipants: [] })

    const fetchUser = async () => {
        const response = await UsersAPI.getUser()
        if (response.data.data) {
            const data = response.data.data;
            // debugger;
            setUser({
                userData: {
                    name: data.fullname,
                    email: data.email,
                    icNumber: data.ic_number,
                    address: data.address,
                    phone: data.phone_no,
                    country: data.country,
                    region: data.region,
                    state: data.state,
                    bank_name: data.bank_name,
                    account_no: data.account_no,
                    FamilyMembers: data.FamilyMembers,
                    image:data.image
                },
                favoriteParticipants: data.FamilyMembers?.length > 0 ? data.FamilyMembers?.map((mem :any) => ({ id:mem.id, name: mem.fullname, icNumber: mem.ic_number })) : []
            });
        }
    }

    useEffect(() => {
    if (selected === 0) {
        fetchUser();
    }
}, [selected]);
    
    const tabClassName = (index: number) => `flex gap-2 p-3 cursor-pointer text-[14px] min-w-250px ${selected == index ? 'bg-[#00ADB9] text-[#fff] rounded-[6px]' : 'bg-#fff text-[#525252BF]'}`

    return (<>
    <div className='bg-[#E3F4F6] h-[50px] w-full'>

    </div>
        <section className="justify-center gap-[40px] relative 2xl:px-52 xl:px-32 lg:px-24 md:px-12 px-6 lg:flex min-h-[100vh]">
            <div className='mt-[12rem] md:ml-12 md:block'>
                <p className='text-[#525252] text-[14px] mb-4'>General</p>
                <div className={tabClassName(0)} onClick={() => setSelected(0)}>
                    <img src={selected == 0 ? selectedProfileIcon : profileIcon} />
                    <p>Profil</p>
                </div>
                <div className={tabClassName(5)} onClick={() => setSelected(5)}>
                    <img src={selected == 5 ? selectedTrackingIcon : trackingIcon} />
                    <p>Organisasi</p>
                </div>
                <div className={tabClassName(1)} onClick={() => setSelected(1)}>
                    <img src={selected == 1 ? selectedTrackingIcon : trackingIcon} />
                    <p>Jejak</p>
                </div>
                <div className={tabClassName(2)} onClick={() => setSelected(2)}>
                    <img src={selected == 2 ? selectedTransactionIcon : transactionIcon} />
                    <p>Transaksi</p>
                </div>
                <div className='mt-4'>
                    <p className='font-medium'>Lagi</p>
                </div>
                {/* <div className={`${tabClassName(3)} mt-2`} onClick={() => setSelected(3)}>
                    <img src={selected == 3 ? selectedPolicy : policy} />
                    <p>Policy</p>
                </div> */}
                <div className={tabClassName(4)} onClick={() => setSelected(4)}>
                    <img src={selected == 4 ? selectedHelpLine : helpLine} />
                    <p>Soalan Lazim (F.A.Q) </p>
                </div>
            </div>
            <div className='mt-[6rem] mb-[10rem]  overflow-x-auto lg:overflow-visible'>
                
                {
                //@ts-ignore
                selected == 0 && <ProfileForm profileData={user} setProfile={setUser} fetchUser={fetchUser} />}
                {selected == 5 && <Organization />}
                {selected == 1 && <Tracking />}
                {selected == 2 && <Transaction />}
                {selected ==3 && <PolicyDetail />}
                {selected == 3 && <Policy />}
                {selected == 4 && <HelpLine />}
            </div>
            {/* <ToastContainer /> */}
        </section>
    </>
    );
};

export default Profile;
