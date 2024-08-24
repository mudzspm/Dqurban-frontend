import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//@ts-ignore
import { masterPackagesActions } from '../../../context/actions/masterPackagesActions';
//@ts-ignoreq
import { RootState, AppDispatch } from '../store.ts';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button.tsx';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { formatDate } from '../../../lib/utils.js';
import { SERVER_URL } from "../../../constant/ServerUrl";

const PriceCardList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { masterPackages, loading, error } = useSelector((state: RootState) => state.masterPackagesReducer);
  const [open, setOpen] = useState(false);
  const [popupData, setPopupData] = useState({
    pkg_info: '',
    pkg_info_link: '',
  });
  const [closingDate, setClosingDate] = useState<string | null>(null); // New state for closing date

  useEffect(() => {
    dispatch(masterPackagesActions());

    // Fetch the closing date from the API
    const fetchClosingDate = async () => {
      try {
        const response = await fetch('https://api.dqurban.com/api/packages/calendar-event');
        const data = await response.json();
        // Assuming the response contains an array and you need the first item
        if (data.data.length > 0) {
          setClosingDate(data.data[0].closing_date);
        }
      } catch (error) {
        console.error('Error fetching closing date:', error);
      }
    };

    fetchClosingDate();
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleButtonClick = (pkgInfo: string, pkgInfoLink: string) => {
    setPopupData({
      pkg_info: pkgInfo,
      pkg_info_link: pkgInfoLink,
    });
    setOpen(!open);
  };

  const PriceCard = ({
    pkg_type,
    name,
    pkg_price,
    closing_date,
    short_des,
    country_image,
    country_id,
    pkg_info,
    pkg_info_link,
    pkg_image,
    installment_text,
    text,
  }: any) => {
    const formattedDate = formatDate(closing_date || closingDate); // Use fetched closingDate

    const getLink = (pkgType: string) => {
      switch (pkgType) {
        case 'WAQF':
          return '/WAQF';
        case 'QURBAN':
          return '/qurban';
        case 'AQIQAH':
          return '/aqiqa';
        default:
          return '/';
      }
    };

    return (
      <div className='flex flex-col p-4 w-full sm:w-1/2 md:w-1/3' style={{ minWidth: '370px', minHeight: '450px' }}>
        <div className='relative rounded-[1.25rem] shadow-[0px_4px_16px_0px_#00000040] bg-[#E4E4E4] mb-10' style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', width: '100%', height: '181px', borderRadius: '1.25rem' }}>
            <img
              src={`${SERVER_URL}/${pkg_image}`}
              alt={pkg_type}
              className="max-w-full rounded-[1.25rem]"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.25rem' }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 173, 185, 0.5)',
                borderRadius: '1.25rem'
              }}
            ></div>
          </div>
          <div className='absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white flex items-center justify-center'>
            <h1 className='text-2xl font-bold text-[#000000]'> 
            { pkg_type == 'WAQF' && (
               
               <h1 className='text-2xl font-bold text-[#000000]'> SADAQAH</h1>

              )}
               { pkg_type == 'QURBAN' && (
               
               <h1 className='text-2xl font-bold text-[#000000]'> QURBAN</h1>

              )}

              { pkg_type == 'AQIQAH' && (
               
               <h1 className='text-2xl font-bold text-[#000000]'> AQIQAH</h1>

              )}


            </h1>
          </div>
          <div className='absolute -top-4 left-0 flex items-center pl-8 w-full mt-[9rem] text-white'>
            <div className='w-full flex items-center justify-between'>
              <p className='text-lg font-bold text-[#000000]'>{name}</p>
              <div className='flex'>
                <div className='rounded-[4.25rem] ml-2 w-[80px] h-[80px]'>
                  <img src={`${SERVER_URL}${country_image}`} alt={pkg_type} className="max-w-full rounded-[4.25rem]" style={{ width: '100%', height: '100%', borderRadius: '4.25rem' }} />
                </div>
              </div>
            </div>
          </div>
          <div className='p-8'>
            <p className='text-[#909090] xl:text-[1.25rem] lg:text-sm text-xs font-normal'>
              {short_des}
            </p>
            <hr className='max-w-[32rem] h-[1px] bg-[#909090] border-1 rounded xl:mt-[1.625rem] lg:mt-6 md:mt-4 mt-3' />
            <p className='mt-[0.813rem] text-sm'>Harga bermula dari</p>
            <div className='flex justify-between items-center'>
              <div className='items-center inline-flex gap-2.5'>
                <p className='text-[#00ADB9] xl:text-[1.75rem] lg:text-xl text-lg font-bold'>
                  RM {pkg_price}
                </p>
                <p className='text-[#000000] xl:text-[1.0rem] lg:text-lg text-base self-baseline'>
                  {text}
                </p>
              </div>
              <Link to={getLink(pkg_type) +"/"+ country_id}>
                <img src='Arrow-.svg' alt='Arrow' />
              </Link>
            </div>
            <div style={{ height: pkg_type === 'AQIQAH' || pkg_type === 'WAQF' ? '2rem' : 'auto' }}>
              {pkg_type !== 'AQIQAH' && pkg_type !== 'WAQF' && (
                <p className='text-[#000000] xl:text-[1.0rem] lg:text-lg text-base self-baseline'>
                  {installment_text}<br />
                  Tarikh akhir pembayaran: <b>{formattedDate}</b>
                </p>
              )}
            </div>
            <Button className='bg-[#00ADB9] hover:bg-[#084059] float-right' onClick={() => handleButtonClick(pkg_info, pkg_info_link)}>
              Baca Lagi
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
              <DialogBackdrop
                transition
                className="fixed inset-0 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
              />
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-[#00ADB9] text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                  >
                    <div className="bg-[#ffffff] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <label className="mr-2 font-bold">Penerangan pakej:</label>
                        <p>{popupData.pkg_info}</p>
                      </div>
                      <div className="mt-4 sm:flex sm:items-start">
                        <label className="mr-2 font-bold">Pautan maklumat pakej:</label>
                        <p><a href={popupData.pkg_info_link} target="_blank" rel="noopener noreferrer">{popupData.pkg_info_link}</a></p>
                      </div>
                    </div>
                    <div className="bg-[#00ADB9] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        data-autofocus
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-flex w-full font-bold justify-center rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Tutup
                      </button>
                    </div>
                  </DialogPanel>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap overflow-x-auto p-4 justify-center">
      {masterPackages && masterPackages.length > 0 ? (
        masterPackages.filter((data: any) => data.is_active).map((data: any) => (
          <PriceCard
            key={data.id}
            pkg_type={data.pkg_type}
            name={data.name}
            pkg_price={data.pkg_price}
            closing_date={closingDate} // Pass the fetched closing date here
            short_des={data.short_des}
            country_image={data.country.image}
            country_id={data.country.id}
            pkg_info_link={data.pkg_info_link}
            pkg_info={data.pkg_info}
            text={data.text}
            installment_text={data.installment_text}
            pkg_image={data.pkg_image}
          />
        ))
      ) : (
        <p>No packages available</p>
      )}
    </div>
  );
};

export default PriceCardList;
