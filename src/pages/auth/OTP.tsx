
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { SERVER_URL } from '../../constant/ServerUrl';
import { useFormik } from 'formik';

const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const authToken = localStorage.getItem('registerauthToken');
  const [tokenvalue, setToken] = useState(authToken);
  const [canResend, setCanResend] = useState(true);
  const [countdown, setCountdown] = useState(59);
  const inputRefs = useRef([]);
  const [showElements, setshowElements] = useState(false);

  const countryCodes = [
    { code: '60', label: '(+60)' },
    { code: '62', label: '(+62)' },
    { code: '63', label: '(+63)' },
    { code: '234', label: '(+234)' },
  ];

  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].code);
  const formik = useFormik({
    initialValues: {
      phone_no: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    //@ts-ignore
    inputRefs.current[0].focus();
  }, []);

  //@ts-ignore
  const handleOTPChange = (index, value) => {
    const updatedOTP = [...otp];

    if (!isNaN(value) || value === '') {
      updatedOTP[index] = value;
      setOTP(updatedOTP);
    }

    if (value === '' && index > 0) {
      //@ts-ignore
      inputRefs.current[index - 1].focus();
    }

    if (value !== '' && index < otp.length - 1) {
      //@ts-ignore
      inputRefs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    const lastResendTime = localStorage.getItem('lastResendTime');
    if (lastResendTime) {
      const now = new Date().getTime();
      const elapsedTime = now - parseInt(lastResendTime, 10);
      if (elapsedTime < 60000) {
        setCanResend(false);
        setCountdown(59 - Math.floor(elapsedTime / 1000));
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              setCanResend(true);
              return 59;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }
  }, []);

  const handleSubmitOTP = async () => {
    if (otp.includes('')) {
      toast.error('Sila masukkan semua digit OTP.');
    } else {
      try {
        const otpString = otp.join('');
        const response = await axios.post(
          SERVER_URL + 'api/auth/verify-otp',
          { otp: otpString },
          {
            headers: {
              Authorization: `Bearer ${tokenvalue}`,
            },
          }
        );
        if (response.data.success) {
          toast.success('OTP berjaya disahkan.');
          setTimeout(() => {
            navigate('/signin');
          }, 3000);
        } else {
          toast.error('OTP tidak sah. Sila cuba lagi.');
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
        toast.error(
          'Ralat berlaku semasa mengesahkan OTP. Sila cuba sebentar lagi.'
        );
      }
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) {
      toast.error('Sila tunggu selama 1 minit sebelum menghantar semula OTP');
      return;
    }
    try {
      const response = await axios.post(
        `${SERVER_URL}api/auth/signup/resend-otp`,
        {},
        {
          headers: {
            Authorization: `Bearer ${tokenvalue}`,
          },
        }
      );
      toast.success(response?.data?.message);
      setToken(response.data.token);

      const now = new Date().getTime();
      localStorage.setItem('lastResendTime', now.toString());
      setCanResend(false);
      setCountdown(59);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanResend(true);
            return 59;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error('Error resending OTP:', error);
      //@ts-ignore
      toast.error(error.response?.data?.error || 'Ralat semasa menghantar semula OTP.');
    }
  };

  const handleCountryCodeChange = (event :any) => {
    setSelectedCountryCode(event.target.value);
  };

  const handleKeyDown = (event :any) => {
    if (event.key === 'e' || event.key === 'E' || event.key === '+' || event.key === '-') {
      event.preventDefault();
    }
  };

  const handleChangePhoneNumClick = () => {
    setshowElements(true);
  };

  // debugger;
  const handleCopyPhone = async () => {
    try {
      const response = await axios.post(
        `${SERVER_URL}api/auth/signup/resend-otp`,
        { phone_no: `${selectedCountryCode}${formik.values.phone_no}` },
        {
          headers: {
            Authorization: `Bearer ${tokenvalue}`,
          },
        }
      );
      setshowElements(false);
     setToken(response.data.token);

      const now = new Date().getTime();
      localStorage.setItem('lastResendTime', now.toString());
      setCanResend(false);
      setCountdown(59);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanResend(true);
            return 59;
          }
          return prev - 1;
        });
      }, 1000);
      toast.success('Telefon nombor berjaya disimpan.');
    } catch (error) {
      console.error('Error saving phone number:', error);
      toast.error('Ralat berlaku semasa menyimpan nombor telefon. Sila cuba sebentar lagi.');
    }
  };

  return (
    <section className='w-full overflow-hidden'>
      <div className=''>
        <img src='Desktop.svg' alt='Qurban' className='w-[0%] md:w-full mt-[90px] md:mt-0' />
        <img src='phone.svg' alt='Wooden Hands' className='md:hidden w-[436px] h-[941px] overflow-hidden' />
      </div>

      <div className='m-auto md:absolute top-0 lg:ml-32 lg:mt-44 absolute lg:w-[661px] md:mt-0 py-10 md:py-0 mr-[30px] ml-[24px] bg-[#f8f7f7] rounded-sm md:bg-transparent'>
        <img src='artboard.svg' alt='Art' className='ml-[130px] m-auto md:m-0 md:ml-[22rem] lg:m-0 lg:ml-40 hidden lg:block'/>
        <img src='Artboard 33 copy 6 2.svg' alt='Art' className='block md:block md:ml-18 md:mb-5 md:mt-16 lg:hidden ml-28 mb-6' />
        <p className='text-[1.75rem] text-[#1A1A1A] font-bold md:mr-[25rem] lg:mr-0 ml-16 mt-7 m-auto lg:ml-[3rem]'>Sahkan akaun anda</p>
        <p className='text-xs text-[#000] md:mr-[24rem] lg:mr-[18rem] ml-2 m-auto justify-center text-center'> Sila semak SMS untuk OTP</p>

        {showElements === false && (
          <div id='otp' className='flex flex-row justify-center text-center mt-9 md:mr-[24rem] lg:mr-[18rem]'>
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                className={`font-bold text-2xl border-[#E4E4E7] h-[3.375rem] w-[3.125rem] text-center form-control focus:ring-black focus-within:border-[#000] ${
                  index === 0 ? 'rounded-l-[0.375rem]' : index === 5 ? 'rounded-r-[0.375rem]' : ''
                }`}
                type='text'
                //@ts-ignore
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
        )}

        {showElements && (
          <>
            <div className='w-[44%] ml-9'>
              <label className='block text-xs font-normal mt-3'>Telefon Bimbit</label>
              <div className='relative lg:mt-2'>
                <div className='flex items-center'>
                  <select
                    className='text-sm bg-[#F2F2F2] py-2.5 pr-3 pl-2.5 pt-[14px] text-[#808080] h-[2.932rem] rounded-tl-[0.438rem] rounded-bl-[0.438rem]'
                    style={{ fontSize: '0.875rem' }}
                    value={selectedCountryCode}
                    onChange={handleCountryCodeChange}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type='number'
                    className='text-sm bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 md:w-[101%] h-[2.932rem] rounded-tr-[0.438rem] rounded-br-[0.438rem] border-none no-spinner'
                    placeholder='193456789'
                    value={formik.values.phone_no}
                    onChange={formik.handleChange}
                    name='phone_no'
                    autoComplete='off'
                    onKeyDown={handleKeyDown}
                    style={{
                      appearance: 'textfield',
                      WebkitAppearance: 'none',
                      MozAppearance: 'textfield',
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {showElements === false && (
          <div className='mt-[1.3125rem] text-center md:mr-[24rem] lg:mr-[18rem]'>
            <p className='text-xs text-[#1A1A1A]'>
              Tidak menerima kod?{' '}
              <button className="text-xs text-[#1A1A1A] font-bold" onClick={handleResendOtp} disabled={!canResend}>
                Hantar semula kod {countdown < 59 && !canResend && `(${countdown}s)`}
              </button>
            </p>
          </div>
        )}

        <div className='mt-[1.3125rem] text-center md:mr-[24rem] lg:mr-[18rem]'>
          <p className='text-xs text-[#1A1A1A]'>
            Tidak menerima kod?{' '}
            <button className="text-xs text-[#1A1A1A] font-bold" onClick={handleChangePhoneNumClick}>
            Sila tukar no. telefon bimbit. {countdown < 59 && !canResend && `(${countdown}s)`}
            </button>
          </p>
        </div>

        {showElements && (
          <div className='mt-4'>
            {/* Hidden button and label */}
            <Button
              size='xl'
              variant='login'
              style={{ backgroundImage: 'linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)' }}
              onClick={handleCopyPhone} // Updated to use handleCopyPhone
            >
              Hantar
            </Button>
          </div>
        )}

        {showElements === false && (
          <div className='mt-9 mr-4 justify-center text-center md:mr-[24rem]'>
            <Button size='xl' variant='login' style={{ backgroundImage: 'linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)' }} onClick={handleSubmitOTP}>
              Hantar OTP
            </Button>
          </div>
        )}

        <div className='mt-7'>
          <hr className='w-[22.5rem] border-1 bg-[#E5E5E5]' />
        </div>

        <div className='mt-7 md:mt-4 text-center'>
          <Link to='/signup' className='text-xs text-[#1A1A1A] flex justify-center items-center gap-[0.563rem] md:ml-[-20rem]'>
            <span>
              <img src='arrowleft.svg' alt='' />{' '}
            </span>
            kembali ke pendaftaran{' '}
          </Link>
          <p className='lg:mt-24 md:mt-12 mt-12 text-xs lg:text-[#666] text-black md:w-[53%]'>©DigitalQurban2024</p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default OTP;
