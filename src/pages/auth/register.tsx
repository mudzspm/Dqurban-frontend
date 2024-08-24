import { AuthAPI } from '@/api/auth';
// import { signupDto } from '@/api/dtos/auth';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState, useRef, useEffect } from 'react';
import RegisterValidationSchema from './validationSchemas/register';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '@/components/Loader';
// import { Code } from 'lucide-react';
//@ts-ignore
import { getCountries } from '../../context/actions/countryActions';
//@ts-ignore
import { getStates } from '../../context/actions/stateActions';
//@ts-ignore
import { getRegions, clearRegions } from '../../context/actions/regionActions';
import { RootState, AppDispatch } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const countryCodes = [
  // { code: '62', label: 'Indonesia (+62)' },
  // { code: '60', label: 'Malaysia (+60)' },
  // { code: '63', label: 'Philippines (+63)' },
  // { code: '234', label: 'Nigeria (+234)' },

  { code: '62', label: '(+62)' },
  { code: '60', label: '(+60)' },
  { code: '63', label: '(+63)' },
  { code: '234', label: '(+234)' },
   
  
];

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('60'); // Default to Malaysia
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      phone_no: '',
      ic_number: '',
      password: '',
      country_id: 0,
      state_id: 0,
      region_id: 0,
      address: ''
    },
    validationSchema: RegisterValidationSchema,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      if (!captchaValue) {
        toast.error('Sila lengkapkan reCAPTCHA');
        return;
      }

      setLoading(true);
      try {
        const modifiedValues = {
          ...values,
          phone_no: `${selectedCountryCode}${values.phone_no}`
        };
        const response = await AuthAPI.signup(modifiedValues);
        console.log(response);
        if (response.data) {
          toast.success('Pengguna berjaya mendaftar!');
          // const data = response.data;
          // localStorage.setItem('user', JSON.stringify(data));
          localStorage.setItem('registerauthToken', response.token);
          localStorage.setItem('lastResendTime', new Date().getTime().toString());
          navigate('/otp');
        }
      } catch (e: any) {
        toast.error(e?.response?.data?.message);
        toast.error(e?.response?.data?.error);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setCaptchaValue('');
      } finally {
        setLoading(false);
      }
    }
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCaptchaChange = (value: any) => {
    setCaptchaValue(value);
  };

  const handleCountryCodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryCode(event.target.value);
  };

  // ============= end ==========



  
//@ts-ignore
  const [country, setCountry] = useState('');
  //@ts-ignore
  const [state, setState] = useState('');
  //@ts-ignore
  const [region, setRegion] = useState('');

  interface Country {
    id: number;
    name: string;
  }

  interface State {
    id: number;
    name: string;
  }

  interface Region {
    id: number;
    name: string;
  }

  const [countryList, setCountryList] = useState<Country[]>([]);
  const [stateList, setStateList] = useState<State[]>([]);
  const [regionList, setRegionList] = useState<Region[]>([]);

  const dispatch: AppDispatch = useDispatch();
  const { countries } = useSelector((state: RootState) => state.countryReducer);
  const { states } = useSelector((state: RootState) => state.stateReducer);
  const { regions } = useSelector((state: RootState) => state.regionReducer);
  
  

 

  const handleCountryChange = (e: any) => {
    formik.setFieldValue('country_id', e.target.value);
    setCountry(e.target.value);
    setState('');
    setRegion('');
    setStateList([]);
    setRegionList([]);
    dispatch(clearRegions());
    dispatch(getStates(e.target.value));
  };

  const handleStateChange = (e: any) => {
    formik.setFieldValue('state_id', e.target.value);
    setState(e.target.value);
    setRegion('');
    setRegionList([]);
    dispatch(getRegions(e.target.value));
  };

  const handleRegionChange = (e: any) => {
    formik.setFieldValue('region_id', e.target.value);
    setRegion(e.target.value);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    setCountryList(countries);
    setStateList(states);
    setRegionList(regions);
  }, [countries, states, regions]);




  

  // const handleSignUp = () => {
  //   const country_id = country;
  //   const state_id = state;
  //   const region_id = region;
    
  // if (!country_id) {
  //     toast.error("Sila pilih negara");
  //     return;
  // }
  // if (!state_id) {
  //     toast.error("Sila pilih negeri");
  //     return;
  // }
  // if (!region_id) {
  //     toast.error("Sila pilih daerah");
  //     return;
  // }
  
  
  //   const payload = { country_id, state_id, region_id };
  //   dispatch(signUpAction(payload));
  // };

  
  
  

  return (
    <>
      <section className='w-full overflow-hidden'>
        <div>
          <img
            src='Desktop.svg'
            alt='Qurban'
            className='w-[0%] md:w-full mt-[90px] md:mt-0'
          />
          <img src='phone.svg' alt='Wooden Hands' className='md:hidden w-[436px] h-[941px] overflow-hidden' />
        </div>

        <div className='m-auto md:absolute top-0 lg:ml-32 lg:mt-2 absolute lg:w-[456px] md:w-[379px] md:mt-0 mt-[4rem] py-10 px-3 md:px-0 md:py-0 mr-[30px] ml-[24px] bg-[#f8f7f7] rounded-sm md:bg-transparent'>
        <div className='flex flex-col items-center justify-center text-center'>
          <img src='artboard.svg' alt='Art' className='h-[40px] hidden lg:block' />
          <img src='Artboard 33 copy 6 2.svg' alt='Art' className='block md:block  lg:hidden ' />

          <Link to='/signup' className='text-[1.75rem] text-[#1A1A1A] font-bold lg:ml-0 md:ml-0 ml-14'>
            Pendaftaran Akaun
          </Link>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <p className='mt-2 text-xs font-normal'> Nama penuh</p>
            <div className='relative mt-2 w-[101%]'>
              <input
                type='text'
                className='text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none'
                placeholder='Masukkan nama penuh'
                value={formik.values.fullname}
                onChange={formik.handleChange}
                name='fullname'
                onBlur={() => formik.setTouched({ fullname: true, ...formik.touched })}
                autoComplete='off'
              />
            </div>
            {formik.errors['fullname'] && formik.touched.fullname && <div className='mt-2 mb-2 text-[#ED4337] text-xs'>{formik.errors.fullname}</div>}

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='w-full lg:w-[44%]'>
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
                      className='text-sm bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 md:w-[101%] w-[95%] h-[2.932rem] rounded-tr-[0.438rem] rounded-br-[0.438rem] border-none no-spinner'
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

              <div className='w-full lg:w-[50%]'>
                <label className='block text-xs font-normal mt-3'>No. KP / Pasport</label>
                <div className='lg:mt-2'>
                  <input
                    type='text'
                    className='text-sm bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none'
                    placeholder='Masukkan No. KP / Pasport tanpa dash (-)'
                    value={formik.values.ic_number}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (/^\d{0,12}$/.test(inputValue)) {
                        formik.handleChange(e);
                      }
                    }}
                    onBlur={() => formik.setTouched({ ic_number: true, ...formik.touched })}
                    name='ic_number'
                    autoComplete='off'
                  />
                  {formik.errors['ic_number'] && formik.touched.ic_number && <div className='mt-2 mb-2 text-[#ED4337] text-xs'>{formik.errors.ic_number}</div>}
                </div>
              </div>
            </div>

                      {/* ============= country start =========== */}
          <div className='flex'>
            <div className="lg:w-[49%] w-[48%] ">
            <label className="block text-gray-700 text-xs mb-2" htmlFor="country">
            Negara
            </label>
            <select
              id="country"
              className="text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none"
              value={formik.values.country_id}
              onChange={handleCountryChange}
            >
              <option value="">Sila Pilih</option>
              {countryList.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:w-[49%] w-[48%] ml-2">
            <label className="block text-gray-700 text-xs mb-2" htmlFor="state">
            Negeri
            </label>
            <select
              id="state"
              className="text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none"
              value={formik.values.state_id}
              onChange={handleStateChange}
            >
              <option value="">Sila Pilih</option>
              {stateList.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          </div>


          <div className="">
            <label className="block text-gray-700 text-xs mb-2" htmlFor="region">
            Daerah
            </label>
            <select
              id="region"
              className="text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none"
              value={formik.values.region_id}
              onChange={handleRegionChange}
            >
              <option value="">Sila Pilih</option>
              {regionList.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>


          <p className='mt-2 text-xs font-normal'> Alamat</p>
            <div className='relative mt-2 w-[101%]'>
              <input
                type='text'
                className='text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none'
                placeholder='Enter Alamat'
                value={formik.values.address}
                onChange={formik.handleChange}
                name='address'
                onBlur={() => formik.setTouched({ address: true, ...formik.touched })}
                autoComplete='off'
              />
            </div>
            {formik.errors['address'] && formik.touched.address && <div className='mt-2 mb-2 text-[#ED4337] text-xs'>{formik.errors.address}</div>}

            

            <div className='md:flex gap-5'>
              <div className='md:w-3/5'>
                <label className='block text-xs font-normal mt-3'>E-mel</label>
                <div className='relative lg:mt-2 w-[102%] lg:w-[168%]'>
                  <input
                    type='email'
                    className='text-sm bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none'
                    placeholder='E-mel anda'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name='email'
                    onBlur={() => formik.setTouched({ email: true, ...formik.touched })}
                    autoComplete='off'
                  />
                  {formik.errors['email'] && formik.touched.email && <div className='mt-2 mb-2 text-[#ED4337] text-xs'>{formik.errors.email}</div>}
                </div>
              </div>
            </div>

            <label className='block text-xs font-normal mt-3'>Masukkan kata laluan baru</label>
            <div className='relative mt-2 w-[101%]'>
              <input
                type={showPassword ? 'text' : 'password'}
                className='text-sm bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none'
                placeholder='Masukkan kata laluan baru'
                value={formik.values.password}
                onChange={formik.handleChange}
                name='password'
                onBlur={() => formik.setTouched({ password: true, ...formik.touched })}
                autoComplete='off'
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
                onClick={togglePasswordVisibility}
              >
                {/* {showPassword ? 'eye.png' : 'hidden.png'} */}

                <img
        src={showPassword ? 'eye.png' : 'hidden.png'}
        alt={showPassword ? 'Hide Password' : 'Show Password'}
        
        style={{ cursor: 'pointer' }}
      />

              </button>
            </div>
            {formik.errors['password'] && formik.touched.password && <div className='mt-2 mb-2 text-[#ED4337] text-xs'>{formik.errors.password}</div>}

            <div className='mt-4 mb-4'>
              <ReCAPTCHA ref={recaptchaRef} sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' onChange={handleCaptchaChange} />
            </div>

         
            <Button
            disabled={!formik.isValid}
            size='xxl'
              variant='register'
              style={{
                backgroundImage:
                  'linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)',
              }}
              type='submit'
              >
                {loading ? <Loader loading={false} /> : ''}

            
             Hanter
            </Button>
          </form>






          <p className='mt-5 text-center text-sm'>
            Dah ada akaun?{' '}
            <Link to='/login' className='text-[#1A1A1A]'>
              Log Masuk sini
            </Link>
          </p>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

export default Register;
