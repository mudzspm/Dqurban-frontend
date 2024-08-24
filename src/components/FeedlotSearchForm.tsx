import { useState } from 'react';
import search from './icons/search.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import { getCountries } from '../context/actions/countryActions';
// @ts-ignore
import { getStates } from '../context/actions/stateActions';
// @ts-ignore
import { getRegions,clearRegions } from '../context/actions/regionActions';
// @ts-ignore
import { getAnimalTypes } from '../context/actions/animalTypesActions';
import { ToastContainer } from 'react-toastify';
import { RootState, AppDispatch } from '../store.ts';


function FeedlotSearchForm({ onSearch }: { onSearch: any }) {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [region, setRegion] = useState('');
  // const [animal_type , setanimalType] = useState('');
  interface Country {
    id: number;
    name: string;

  }
  
  const [countryList, setCountryList] = useState<Country[]>([]);
  interface State {
    id: number;
    name: string;
  }
  
  interface Region {
    id: number;
    name: string;
  }

  
  const [stateList, setStateList] = useState<State[]>([]);
  const [regionList, setRegionList] = useState<Region[]>([]);
  

  const dispatch: AppDispatch = useDispatch();
  // const dispatch = useDispatch();
  // const { animalTypes} = useSelector((state: RootState) => state.animalTypesReducer);
  const { countries} = useSelector((state: RootState) => state.countryReducer);
  const { states } = useSelector((state: RootState) => state.stateReducer);
  const { regions } = useSelector((state: RootState) => state.regionReducer);

  const handleCountryChange = (e : any) => {
    setCountry(e.target.value);
    setState(''); // Reset selected state when country changes
    setRegion(''); // Reset selected region when country changes
    setStateList([]);
    setRegionList([]);
    dispatch(clearRegions());
    dispatch(getStates(e.target.value));
  };

  const handleStateChange = (e :any) => {
    setState(e.target.value);
    setRegion(''); // Reset selected region when country changes
    setRegionList([]);
    dispatch(getRegions(e.target.value));
  };
  const handleRegionChange = (e : any) => {
    setRegion(e.target.value);
  };

  const handleSearch = () => {
    // if(country ==='' && state==='' && region ==='')
    //   {
    //     toast.error('Please select at least one option.');
    //     return;
    //   }
    // Check if country, state, or region is empty
    // if (country != '') {      
    //   if (state === '') {
    //     toast.error('Please select a state.');
    //     return;
    //   }
    //   if (region === '') {
    //     toast.error('Please select a region.');
    //     return;
    //   }
    // }
  
    // Check if animalType is empty
    interface SearchParams {
      country?: string;
      state?: string;
      region?: string;
  }
  
  const searchParams: SearchParams = {};
    if (country !== '') {
      searchParams.country = country;
    }
  
    if (state !== '') {
      searchParams.state = state;
    }
  
    if (region !== '') {
      searchParams.region = region;
    }
  
    console.log(searchParams)
  
    onSearch(searchParams);
  };
  
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getAnimalTypes());
  }, [dispatch]);

 

  useEffect(() => {
    // Update state variables when Redux state changes
    setCountryList(countries);
    setStateList(states);
    setRegionList(regions);
  }, [countries, states, regions]);
  

  return (
    <div className='border-b-[1px] flex justify-center pb-6'>
      <form  className='max-w-[55rem] w-[90%] border-[3px] rounded-l-md rounded-bl-md flex  border-[#E3E1E1]'>
        <div className='flex flex-col gap-1 w-full py-[15px] pl-5 pr-1 border-r-[1px]'>
          <label
            className='text-[#C5C0C0] text-xs font-semibold'
            htmlFor='countries'
          >
            Negara
          </label>
          <select
            className='border-none w-full focus:ring-transparent p-0'
            id='countries'
            value={country}
            onChange={handleCountryChange}
            required
          >
            <option value="">pilih negara</option>
            {countryList.length > 0 && countryList.map(country => (
  <option key={country.id} value={country.id}>{country.name}</option>
))}

          </select>
        </div>

        <div className='flex flex-col gap-1 w-full py-[15px] pl-5 pr-1 border-r-[1px]'>
          <label
            className='text-[#C5C0C0] text-xs font-semibold'
            htmlFor='states'
          >
            Negeri
          </label>
          <select
            className='border-none w-full focus:ring-transparent p-0'
            id='states'
            value={state}
            onChange={handleStateChange}
            required
          >
            <option value="">pilih Negeri</option>
            {stateList.length > 0 && stateList.map(state => (
  <option key={state.id} value={state.id}>{state.name}</option>
))}
          </select>
        </div>

        <div className='flex flex-col gap-1 w-full py-[15px] pl-5 pr-1 border-r-[1px]'>
          <label
            className='text-[#C5C0C0] text-xs font-semibold'
            htmlFor='countries'
          >
            Wilayah
          </label>
          <select
            className='border-none w-full focus:ring-transparent p-0'
            id='states'
            value={region}
            onChange={handleRegionChange}
            required
          >
            <option value="">pilih wilayah</option>
            {regionList.length > 0 && regionList.map(region => (
  <option key={region.id} value={region.id}>{region.name}</option>
))}
          </select>
        </div>

     
       
   </form>
        <button onClick={handleSearch}  className='bg-[#00ADB9] text-white px-4 py-2 rounded-r-md rounded-br-md cursor-pointer'>
  <img src={search} alt="Search" />
</button>
<ToastContainer />
    </div>
  );
}

export default FeedlotSearchForm;