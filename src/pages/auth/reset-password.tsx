import { useState,useRef,useEffect } from 'react'; 
import axios from 'axios'; 
import { Button } from '@/components/ui/button';
import { Link,useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {  toast,ToastContainer } from 'react-toastify';
import { SERVER_URL } from '@/constant/ServerUrl';
// import { AuthContext } from '../../context/auth.tsx';
// import { useContext } from 'react';

const ResetPassword = () => {
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 
    // const location = useLocation();
    // const token = location.search.substring(1);
    const navigation = useNavigate();
    const [otp, setOTP] = useState(['', '', '', '', '', '']);
    // const [otpResent, setOtpResent] = useState(false);
    const inputRefs = useRef([]);
    // const token = useContext(AuthContext).token;
    const forgottoken = localStorage.getItem('forgottoken');
  const [tokenvalue,settoken]=useState(forgottoken);
  const [canResend, setCanResend] = useState(true);

    useEffect(() => {
      // Focus on the first input field when component mounts
        // @ts-ignore    
      inputRefs.current[0].focus();
    }, []);
  
    useEffect(() => {
        // debugger;
        // Check if 1 minute has passed since the last resend
        const lastResendTime = localStorage.getItem('lastResendTime');
        if (lastResendTime) {
            const now = new Date().getTime();
            const elapsedTime = now - parseInt(lastResendTime, 10);
            if (elapsedTime < 60000) {
                setCanResend(false);
                setTimeout(() => setCanResend(true), 60000 - elapsedTime);
            }
        }
    }, []);

    const handleOTPChange = (index:any, value:any) => {
      const updatedOTP = [...otp];
  
      if (!isNaN(value) || value === '') {
        updatedOTP[index] = value;
        setOTP(updatedOTP);
      }
  
      // Move to the previous input box if the current box is empty and Backspace is pressed
      if (value === '' && index > 0) {
        // @ts-ignore
  
        inputRefs.current[index - 1].focus();
      }
  
      // Move to the next input box automatically
      if (value !== '' && index < otp.length - 1) {
        // @ts-ignore
        inputRefs.current[index + 1].focus();
      }
    };

    const handleSubmit = async () => {
        if (otp.includes('')) {
            toast.error('Sila masukkan semua digit OTP.');
            return
          } 
          const otpString = otp.join('');
        try {
            const response = await axios.post(
                `${SERVER_URL}api/auth/reset-password`,
                {   otp:otpString,
                    password,
                    confirmPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${tokenvalue}`,
                    },
                }
            );
            // debugger;
            toast.success(response?.data?.data);
            setPassword('');
            setConfirmPassword('');
            navigation('/signin');
            // console.log(response.data); 
        } catch (error:any) {
            // debugger;
            toast.error(error.response.data.error);
        }
    };

    const handleResendOtp = async () => {
        // debugger;
        if (!canResend) {
            toast.error('Sila tunggu selama 1 minit sebelum menghantar semula OTP');
            return;
        }
        try {
            const response = await axios.post(
                `${SERVER_URL}api/auth/forget-password/resend-otp`, 
                {}, // Empty body
                {
                    headers: {
                        Authorization: `Bearer ${tokenvalue}`,
                    },
                }
            );
            toast.success(response?.data?.message);
            settoken(response.data.token);
                      
            // Reset timer
            const now = new Date().getTime();
            localStorage.setItem('lastResendTime', now.toString());
            setCanResend(false);
            setTimeout(() => setCanResend(true), 60000);

        } catch (error:any) {
            // debugger;
            toast.error(error.response.data.error);
        }
    };

    return (
        <section className=' overflow-hidden w-full'>
            <div
                className=''
                // style={{
                //     backgroundImage:
                //         'linear-gradient(180.05deg, rgba(0, 173, 185, 0.64) 42.88%, rgba(8, 64, 89, 0.64) 99.96%)',
                // }}
            >
                <img src='Desktop.svg' alt='Qurban' className='w-[0%] md:w-full mt-[90px] md:mt-0' />
                <img src='phone.svg' alt='Wooden Hands' className='md:hidden w-[436px] h-[941px] overflow-hidden' />
            </div>
          
            <div className='m-auto md:absolute top-0 lg:ml-32 lg:mt-48 absolute md:mt-0 mt-[4rem] py-10 md:py-0 mr-[30px] ml-[24px] bg-[#f8f7f7] rounded-sm md:bg-transparent'>
                
                <img src='artboard.svg' alt='Art' className='ml-[130px] m-auto md:m-0 lg:m-0 md:ml-32 hidden lg:block lg:ml-inherit' />
                <img src='Artboard 33 copy 6 2.svg' alt='Art' className='block md:block md:mt-0 md:ml-18 md:mb-5 lg:hidden ml-16 mb-6' />
                <p className='lg:mt-[3.688rem] lg:text-[1.20rem] ml-12 lg:mr-[0px] my-5 text-[#1A1A1A] font-bold '>Menetapkan semula kata laluan</p>
                
                <p className='text-xs text-[#000] md:mr-[24rem] lg:mr-[0px] ml-2 m-auto justify-center text-center'> Sila semak SMS untuk OTP</p>

                <div id='otp' className='flex flex-row justify-center text-center mt-9 md:mr-[24rem] lg:mr-[0px]'>
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleOTPChange(index, e.target.value)}
              className={`font-bold text-2xl  border-[#E4E4E7] h-[3.375rem] w-[3.125rem] text-center form-control focus:ring-black focus-within:border-[#000] ${
                index === 0 ? 'rounded-l-[0.375rem]' : index === 5 ? 'rounded-r-[0.375rem]' : ''
              }`}
              type='text'
              // @ts-ignore
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <p className='lg:mt-[1rem] text-xs font-normal mr-[280px]'>Kata laluan</p>
                <input
                    name='password'
                    placeholder='Masukkan kata laluan anda'
                    type='password'
                    autoComplete='new-password'
                    className='mt-2 bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 lg:w-[22.625rem] w-[21.6rem] h-[2.932rem] rounded-[0.438rem] border-none text-sm'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className='lg:mt-[1.938rem] mt-4 text-xs font-normal mr-60'>Sahkan Kata Laluan</p>
                <input
                    name='confirmPassword'
                    placeholder='Taip semula kata laluan'
                    type='password'
                    autoComplete='new-password'
                    className='mt-2 bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 lg:w-[22.625rem] w-[21.6rem] h-[2.932rem] rounded-[0.438rem] border-none text-sm'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                
                <div className='mt-[1.3125rem] text-center md:mr-[24rem] lg:mr-[0px]'>
          <p className='text-xs text-[#1A1A1A]'>
            Tidak menerima kod?{' '}
            {/* <button className="text-xs text-[#1A1A1A] font-bold" onClick={handleResendOTP} disabled={otpResent}>
              Hantar semula kod
            </button> */}

<button className="text-xs text-[#1A1A1A] font-bold" onClick={handleResendOtp}>
             Hantar semula kod
            </button>
          </p>
        </div>
                <div className='mt-8'>
               
                    <Button
                        size='xl'
                        variant='login'
                        style={{
                            backgroundImage:
                                'linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)',
                        }}
                        onClick={handleSubmit}
                    >
                        Menetapkan semula kata laluan
                    </Button>
                </div>
                <div className='mt-7 md:mt-3 ml-[2%]'>
                    <hr className=' border-1 bg-[#E5E5E5] w-[21rem] ' />
                </div>
                <div className='mt-1 text-center '>
                
                    <p className='md:mr-80 lg:mr-40 text-xs text-[#1A1A1A]'>
                        {/* No account?{' '} */}
                        <Link to='/signin' className='text-[#000] font-semibold text-xs lg:mr-[-117]'>
                        Log Masuk sekarang
                        </Link>
                    </p>
                    
                    <p className='lg:mt-16 md:mt-1 mt-12 md:mr-80 lg:mr-16 text-xs lg:text-[#666] text-black'>© DigitalQurban2024</p>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default ResetPassword;
