import { useState, useEffect } from 'react';
// import { useContext } from "react";
// import { AuthContext } from "../../../context/auth.tsx";
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import { getCountries } from '../../../context/actions/countryActions';
// @ts-ignore
import { getStates } from '../../../context/actions/stateActions';
// @ts-ignore
import { getRegions, clearRegions } from '../../../context/actions/regionActions';
import { RootState, AppDispatch } from '../../../store';
// @ts-ignore
import { signUpAction } from "../../../context/actions/signUpAction"
// @ts-ignore
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
 
 
import ReCAPTCHA from 'react-google-recaptcha';

const SignUpSection = () => {

  const backgroundStyles: React.CSSProperties = {
    // backgroundImage: `url('Desktop.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    /* Additional background properties */
    minHeight: '100vh', // Example: Set minimum height to full viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [region, setRegion] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    role: 'SUPPLIER',
    fullname: '',
    email: '',
    phone_no: '',
    ic_number: '',
    password: ''
  });

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
  const {  error, signUpData } = useSelector((state: RootState) => state.signUpReducer);
  const [selectedCountryCode, setSelectedCountryCode] = useState('60'); 

  useEffect(() => {
    if (error) {
      toast.error(error);
    } else if (signUpData !=null) {
      toast.success("Penbekal berjaya mendaftar dengan jayanya di Maaly.");
    }
  }, [error, signUpData]);

  const handleCountryChange = (e: any) => {
    setCountry(e.target.value);
    setState('');
    setRegion('');
    setStateList([]);
    setRegionList([]);
    dispatch(clearRegions());
    dispatch(getStates(e.target.value));
  };

  const handleStateChange = (e: any) => {
    setState(e.target.value);
    setRegion('');
    setRegionList([]);
    dispatch(getRegions(e.target.value));
  };

  const handleRegionChange = (e: any) => {
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

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaToken(value);
  };

  const handleSignUp = () => {
    const { role, fullname, email, phone_no, ic_number, password } = formData;
    const country_id = country;
    const state_id = state;
    const region_id = region;

    // if (!fullname) {
    //   toast.error("Please enter the full name");
    //   return;
    // }
    // if (!email) {
    //   toast.error("Please enter the email");
    //   return;
    // }
    // if (!phone_no) {
    //   toast.error("Please enter the phone number");
    //   return;
    // }
    // if (!ic_number) {
    //   toast.error("Please enter the IC number");
    //   return;
    // }
    // if (!password) {
    //   toast.error("Please enter the password");
    //   return;
    // }
    // if (!country_id) {
    //   toast.error("Please select a country");
    //   return;
    // }
    // if (!state_id) {
    //   toast.error("Please select a state");
    //   return;
    // }
    // if (!region_id) {
    //   toast.error("Please select a region");
    //   return;
    // }
    // if (!captchaToken) {
    //   toast.error("Please complete the reCAPTCHA");
    //   return;
    // }

    if (!fullname) {
      toast.error("Sila masukkan nama penuh");
      return;
  }
  if (!email) {
      toast.error("Sila masukkan e-mel");
      return;
  }
  if (!phone_no) {
      toast.error("Sila masukkan nombor telefon");
      return;
  }
  if (!ic_number) {
      toast.error("Sila masukkan nombor IC");
      return;
  }
  if (!password) {
      toast.error("Sila masukkan kata laluan");
      return;
  }
  if (!country_id) {
      toast.error("Sila pilih negara");
      return;
  }
  if (!state_id) {
      toast.error("Sila pilih negeri");
      return;
  }
  if (!region_id) {
      toast.error("Sila pilih daerah");
      return;
  }
  if (!captchaToken) {
      toast.error("Sila lengkapkan reCAPTCHA");
      return;
  }
  
  const updatedPhoneNo = selectedCountryCode + phone_no;
    const payload = { role, fullname, email, phone_no: updatedPhoneNo, ic_number, password, country_id, state_id, region_id };
    dispatch(signUpAction(payload));
  };

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
  
  const handleCountryCodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryCode(event.target.value);
  };

  return (

    <div style={backgroundStyles}>
  
     
    <div className="flex justify-center items-center flex-col mt-14">
      <div className="relative">
        <div>
          <p className="absolute top-0 left-0 right-0 text-center mt-14 ml-4 text-lg w-[60%] text-white">
          Pendaftaran Akaun Pembekal
          </p>
        </div>

        
        <img src='Frame 1000004703.svg' alt='Frame 1000004703' className="block" />
        <img src='Fitz Sitting Floor Stretching.svg' alt='Fitz Sitting Floor Stretching' className="absolute top-0 right-0 mt-5 mr-4" />
      </div>

      <div className="w-full mt-6 text-left">
        {/* <form className="rounded max-w-lg mx-auto"> */}

        <form className="rounded  mx-auto sm:ml-0">
          {/* Form fields go here */}
          <div className="mb-4">
            
            <label className="block text-gray-700 text-sm mb-2" htmlFor="role">
            Jawatan
            </label>
            <input 
              type="text" 
              id="role1" 
              placeholder="Pembekal"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value="Pembekal"
              onChange={handleInputChange}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="fullname">
            Nama penuh
            </label>
            <input 
              type="text" 
              id="fullname" 
              placeholder="Nama penuh*"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={formData.fullname}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            E-Mel
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="E-Mel*"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="phone_no">
            Telefon Bimbit
            </label>
            <div className='relative lg:mt-2'>
                  <div className='flex items-center'>
                    <select
                      className='text-sm bg-[#F2F2F2] py-2.5 pr-3 pl-2.5 pt-[9px] text-[#808080] h-[2.532rem] rounded-tl-[0.438rem] rounded-bl-[0.438rem]'
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
              type="number" 
              id="phone_no" 
              placeholder="Telefon Bimbit*"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={formData.phone_no}
              onChange={handleInputChange}
            />
          </div>
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="ic_number">
            No KP / Pasport
            </label>
            <input 
              type="text" 
              id="ic_number" 
              placeholder="No KP / Pasport*"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={formData.ic_number}
              onChange={(e) => {
                const inputValue = e.target.value;
                // Check if the input value contains only digits and has a length less than or equal to 12
                if (/^\d{0,12}$/.test(inputValue)) {
                  handleInputChange(e)
                }
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
            Masukkan kata laluan baru
            </label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'}
                id="password" 
                placeholder="Masukkan kata laluan baru*"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                value={formData.password}
                onChange={handleInputChange}
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='12'
                viewBox='0 0 16 12'
                fill='none'
                className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'
                onClick={togglePasswordVisibility}
              >
                <path
                  d='M0 6C0.727273 2.72727 3.63636 0 8 0C12.3636 0 15.2727 2.72727 16 6C15.2727 9.27273 12.3636 12 8 12C3.63636 12 0.727273 9.27273 0 6ZM8 9.27273C9.8 9.27273 11.2727 7.8 11.2727 6C11.2727 4.2 9.8 2.72727 8 2.72727C6.2 2.72727 4.72727 4.2 4.72727 6C4.72727 7.8 6.2 9.27273 8 9.27273ZM8 7.92727C7.05455 7.92727 6.2 7.07273 6.2 6C6.2 4.92727 7.05455 4.07273 8 4.07273C8.94545 4.07273 9.8 4.92727 9.8 6C9.8 7.07273 8.94545 7.92727 8 7.92727Z'
                  fill='#909090'
                />
              </svg>
            </div>
          </div>
          {/* =======country state ===== */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="country">
            Negara
            </label>
            <select
              id="country"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={country}
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="state">
            Negeri
            </label>
            <select
              id="state"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={state}
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="region">
            Daerah
            </label>
            <select
              id="region"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={region}
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
          <ReCAPTCHA
            // sitekey="6Ldlz9UpAAAAABZrhud_LipJsM1lPZ4da_uTOX5g"
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            // sitekey = "6LcNgtYpAAAAAB6VFidrJpjGsb2QopR-GOSMbzev" //live
            // sitekey = "6LeIgeIpAAAAAPTEuXJ7wuZXkibCOk6dKTBAxRlS" //live
            onChange={handleCaptchaChange}
            className="mb-4"
          />
          <div className="flex justify-center mt-4 ">
          <button 
              type="button" 
              className="bg-blue-500 hover:bg-blue-700 text-white w-full mb-20 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSignUp}

              
            >
              Daftar
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
      
    </div>
    </div>  
  );
};

export default SignUpSection;


