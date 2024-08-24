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
import { ToastContainer ,toast} from 'react-toastify';

import ReCAPTCHA from 'react-google-recaptcha';

const ExecutorSection = () => {

//   const backgroundStyles: React.CSSProperties = {
//     backgroundImage: `url('Desktop.svg')`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     /* Additional background properties */
//     minHeight: '100vh', // Example: Set minimum height to full viewport height
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// };


  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [region, setRegion] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // const token  = useContext(AuthContext).token;

  const [formData, setFormData] = useState({
    role: '',
    fullname: '',
    email: '',
    phone_no: '',
    ic_number: '',
    password: ''
  });
  // const dispatch = useDispatch();

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
  debugger;
  if (error) {
    toast.error(error);
  } else if (signUpData !=null) {
    toast.success("Pelaksana telah berjaya mendaftar");
  }
}, [error, signUpData,dispatch]);



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

  const handleRoleChange = (e: any) => {
    setFormData({ ...formData, role: e.target.value });
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
    debugger;
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
    var country_id=country;
    var state_id=state;
    var region_id=region;

    if (!fullname) {
      toast.error("Sila masukkan nama penuh");
      return;
    }
    if (!email) {
      toast.error("Sila masukkan emel");
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
    // if(fullname == '' || email == '' || phone_no =='' || ic_number =='' || country_id =='' || state_id =='' || region_id=='')
    // {
    //   toast.error("Please Enter The Full Name");
    //   return true;
    // }
    dispatch(signUpAction(payload));
  }

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

    // < style={backgroundStyles}>
    <div className="flex justify-center items-center flex-col mt-14">
      <div className="relative">
        <div>
        <p className="absolute top-0 left-0 right-0 text-center mt-14 ml-4 text-lg w-[60%] text-white">
          Pendaftaran Akaun Pelaksana.
          </p>
        </div>
        <img src='Frame 1000004703.svg' alt='Frame 1000004703' className="block" />
        <img src='Fitz Sitting Floor Stretching.svg' alt='Fitz Sitting Floor Stretching' className="absolute top-0 right-0 mt-5 mr-4" />
      </div>
      <div className="w-full mt-6">
        <form className="rounded max-w-lg mx-auto">
        <div className="mb-4">
               <label className="block text-gray-700 text-sm mb-2" htmlFor="role">
               Jawatan
              </label>
              <select 
              id="role" 
              value={formData.role}
              onChange={handleRoleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              
              <option value="">Pilih peranan</option>
              <option value="REPORTER">Pelapor</option>
              <option value="SLAUGHTER">Penyembelih</option>
            </select>
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
                className='mt-[2px] absolute right-4 top-3 cursor-pointer'
                onClick={togglePasswordVisibility}
              >
                <path
                  d='M8 0.90918C4.36364 0.90918 1.25818 3.171 0 6.36372C1.25818 9.55645 4.36364 11.8183 8 11.8183C11.6364 11.8183 14.7418 9.55645 16 6.36372C14.7418 3.171 11.6364 0.90918 8 0.90918ZM8 10.0001C5.99273 10.0001 4.36364 8.371 4.36364 6.36372C4.36364 4.35645 5.99273 2.72736 8 2.72736C10.0073 2.72736 11.6364 4.35645 11.6364 6.36372C11.6364 8.371 10.0073 10.0001 8 10.0001ZM8 4.18191C6.79273 4.18191 5.81818 5.15645 5.81818 6.36372C5.81818 7.571 6.79273 8.54554 8 8.54554C9.20727 8.54554 10.1818 7.571 10.1818 6.36372C10.1818 5.15645 9.20727 4.18191 8 4.18191Z'
                  fill='#4D4D4D'
                />
              </svg>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="country">
              {/* Country* */}

              Negara*
            </label>
            <select 
              id="country"
              value={country}
              onChange={handleCountryChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Pilih Negara</option>
              {countryList.map((country) => (
                <option key={country.id} value={country.id}>{country.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="state">
              {/* State* */}
              Negeri*
            </label>
            <select 
              id="state" 
              value={state}
              onChange={handleStateChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {/* <option value="">Select State</option> */}

              <option value="">"Pilih Negeri"</option>
              {stateList.map((state) => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="region">
              {/* Region* */}

              Daerah*
            </label>
            <select 
              id="region" 
              value={region}
              onChange={handleRegionChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {/* <option value="">Select Region</option> */}

              <option value="">"Pilih Daerah"</option>
              {regionList.map((region) => (
                <option key={region.id} value={region.id}>{region.name}</option>
              ))}
            </select>
          </div>
          <input 
            type="hidden" 
            // id="role" 
            value="SUPPLIER" 
          />

<ReCAPTCHA
            // sitekey="6Ldlz9UpAAAAABZrhud_LipJsM1lPZ4da_uTOX5g"
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            // sitekey = "6LcNgtYpAAAAAB6VFidrJpjGsb2QopR-GOSMbzev" //live
            // sitekey = "6LeIgeIpAAAAAPTEuXJ7wuZXkibCOk6dKTBAxRlS" //live
            onChange={handleCaptchaChange}
            className="mb-4"
          />
          <div className="flex items-center justify-between">
            <button 
              type="button" 
              className="bg-blue-500 hover:bg-blue-700 text-white w-full mb-20 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSignUp}

              
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
    // </div>
  );
};

export default ExecutorSection;
