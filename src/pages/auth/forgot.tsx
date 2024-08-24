import { useState } from 'react'; // Import useState hook
import axios from 'axios'; // Import Axios
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer ,toast} from 'react-toastify';
import { SERVER_URL } from '@/constant/ServerUrl';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '@/context/auth';

const Forgot = () => {
    const [email, setEmail] = useState(''); // State variable for email input value
    const navigation = useNavigate();
    // const { setToken } = useContext(AuthContext)
    // Function to handle form submission
    const handleSubmit = async () => {
        try {
            // Make a POST request using Axios
            const response = await axios.post(`${SERVER_URL}api/auth/forget-password`, { email });
            debugger;
            toast.success(response?.data?.message)
            setEmail("")
            // Update state or handle response as needed
            if (response.data) {
                // const data = response.data;
                // localStorage.setItem('user', JSON.stringify(data));
                localStorage.setItem('forgottoken', response.data.token)
                // setToken(response.data.token) 
                localStorage.setItem('lastResendTime', new Date().getTime().toString());
                  navigation('/reset-password');      
              }
        } catch (error:any) {
            toast.error(error?.response?.data?.message);
        }
    };

    return (
        <section className=' gap-2 overflow-hidden w-full'>
            {/* image section ------------------------------ */}

            <div
                // className='relative h-screen'
                // style={{
                //     backgroundImage:
                //         'linear-gradient(180.05deg, rgba(0, 173, 185, 0.64) 42.88%, rgba(8, 64, 89, 0.64) 99.96%)',
                // }}
            >
                <img
                    src='Desktop.svg'
                    alt='Qurban'
                    className='w-[0] md:w-full mt-[90px] md:mt-0 '
                />
                 <img src='phone.svg' alt='Wooden Hands' className='md:hidden w-[436px] h-[941px] overflow-hidden' />
            </div>

            {/* Form section ------------------------- */}

            <div className='m-auto md:absolute top-0 lg:ml-32 lg:mt-44 absolute lg:w-[456px] md:w-[379px] w-[333px] mt-[4rem] md:mt-24 mr-[30px] ml-9 bg-[#f8f7f7] rounded-sm md:bg-transparent'>
                <img src='artboard.svg' alt='Art' className='ml-[130px] m-auto md:m-0 md:ml-[22rem] lg:m-0 lg:ml-28 hidden lg:block'/>
                <img src='Artboard 33 copy 6 2.svg' alt='Art' className='block md:block md:mt-0 md:ml-18 md:mb-5 lg:hidden ml-28 mb-6' />
                <p className='lg:mt-[3.688rem] mt-5 text-[1.75rem] text-[#1A1A1A] font-bold text-center md:-ml-24'>
                Lupa Kata Laluan
                </p>
                
                <p className='mt-[1.938rem] text-xs font-normal mr-[18rem]'>E-mel</p>
                <input
                    name='email'
                    placeholder='Sila masukkan  e-mel anda'
                    type='text'
                    autoComplete='off'
                    className='mt-2 bg-[#F2F2F2] 
py-2.5 pr-2 pl-2.5 w-[20.625rem] h-[2.932rem] rounded-[0.438rem] border-none text-sm'
                    value={email} // Bind value to state variable
                    onChange={(e) => setEmail(e.target.value)} // Update state on change
                />

                <div className='mt-8'>
                    <Button className='w-[329px]'
                        size='xl'
                        variant='login'
                        style={{
                            backgroundImage:
                                'linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)',
                        }}
                        onClick={handleSubmit} // Call handleSubmit function on button click
                    >
                        Hantar
                    </Button>
                </div>
                <div className='mt-7'>
                    <hr className='w-[22.5rem] border-1 bg-[#E5E5E5] md:ml-0 lg:ml-0' />
                </div>

                <div className='mt-1 text-center lg:text-left lg:ml-24'>
                    <p className='text-xs text-[#1A1A1A]'>
                        Tiada akaun?{' '}
                        <Link to='/signup' className='text-[#000] font-semibold text-xs'>
                            {' '}
                            Daftarlah sekarang
                        </Link>
                    </p>
                    <p className='lg:mt-28 md:mt-20 mt-20 py-10 text-xs lg:text-[#666] text-black'>
                        © DigitalQurban2024
                    </p>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};
export default Forgot; 
