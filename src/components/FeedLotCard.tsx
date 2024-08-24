import { useState  } from 'react';
import Gallery from './ImageGallery';
import { SERVER_URL } from "../constant/ServerUrl";
 


interface FeedLotCardProps {
  dataProp: any; // Adjust the type according to the actual type of dataProp
}

const FeedLotCard: React.FC<FeedLotCardProps> = ({ dataProp }) => {
  console.log("dataProp");
  console.log(dataProp);
  const [showGallery, setShowGallery] = useState(false);
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  const imageUrl = `${SERVER_URL}/${dataProp.image}`;
   
  return (
    <>
      <div
        className='h-[95%] m-auto mb-[40px] relative flex flex-col gap-[15px] max-w-[21.5rem] px-5 py-6 border-[1px] border-[#A7E0EA] rounded-[10px] shadow-[0px_0px_6px_0px_#00ADB9] hover:shadow-[0px_0px_21px_0px_#00ADB9] transition-all cursor-pointer'
      >
        {/* <img src='feedlot-image.png' alt='cow' /> */}

        <img
              src={imageUrl}
              // alt={placeholderImage}
              // className="max-w-full rounded-[1.25rem]"
              style={{ width: '220px', height: '120px', objectFit: 'cover' }}
            />
        <div className='flex flex-col gap-1'>
          <h2 className='xl:text-2xl lg:text-xl text-base font-semibold'> {dataProp.fullname}</h2>
         
          {/* <h2 className='xl:text-2xl lg:text-xl text-base font-semibold'>{dataProp.ic_number}</h2> */}
          {/* <div className='flex items-center gap-2'>

          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
<path d="M5.49828 7.09844C6.4703 7.09844 7.25828 6.38209 7.25828 5.49844C7.25828 4.61478 6.4703 3.89844 5.49828 3.89844C4.52626 3.89844 3.73828 4.61478 3.73828 5.49844C3.73828 6.38209 4.52626 7.09844 5.49828 7.09844Z" fill="#A3A3A3"/>
<path d="M3.85 0.5L2.8435 1.5H1.1C0.495 1.5 0 1.95 0 2.5V8.5C0 9.05 0.495 9.5 1.1 9.5H9.9C10.505 9.5 11 9.05 11 8.5V2.5C11 1.95 10.505 1.5 9.9 1.5H8.1565L7.15 0.5H3.85ZM5.5 8C3.982 8 2.75 6.88 2.75 5.5C2.75 4.12 3.982 3 5.5 3C7.018 3 8.25 4.12 8.25 5.5C8.25 6.88 7.018 8 5.5 8Z" fill="#A3A3A3"/>
</svg>
            <p className='text-xs font-light text-[#969696]'>
            View Gallery
            </p>
          </div> */}
        </div>

        <p className='sm:text-1xl sm:text-sm text-base font-semibold'>Capacity: {dataProp.capacity}</p>
          {/* <p className='xl:text-1xl sm:text-xl text-base font-semibold'>Country: {dataProp.country}</p>
           */}

<p className='sm:text-1xl sm:text-sm text-base font-semibold'>
        Country: {dataProp.country.name}
      </p>
      <p className='xl:text-1xl sm:text-sm text-base font-semibold'>
        State: {dataProp.state.name}
      </p>
      <p className='xl:text-1xl sm:text-sm text-base font-semibold'>
        Region: {dataProp.region.name}
      </p>
           
           
        <div className='flex flex-col gap-[10px] mt-4'>

          {
            //@ts-ignore
            dataProp?.averages?.map((e :any)=>{
              return(
                <div className='grid xl:grid-cols-[20%50%30%] lg:grid-cols-[20%50%30%] md:grid-cols-[20%50%30%] sm:grid-cols-[20%50%30%] grid-cols-[30%70%] gap-[5px]'>
           
            <div className='flex flex-col'>
              {/* <p className='xl:text-xl text-base font-medium'>{e?.animal_type}</p> */}
              
              {/* <p className='xl:text-[10px] lg:text-[10px] text-[8px] text-[#969696] leading-normal'>
                Average weight {e?.average_weight} KG
              </p> */}
            </div>
            <div className=' xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-3 items-center text-center'>

            
            </div>
          </div>
              )
            })
          }

        {/* <div className='grid xl:grid-cols-[20%50%30%] lg:grid-cols-[20%50%30%] md:grid-cols-[20%50%30%] sm:grid-cols-[20%50%30%] grid-cols-[30%70%] gap-[5px]'>
            <img
              src='cow-image.svg'
              className='border-2 rounded-full border-black w-9 h-9'
              alt=''
            />
            <div className='flex flex-col'>
              <p className='xl:text-xl text-base font-medium'>Cattle</p>
              <p className='xl:text-[10px] lg:text-[10px] text-[8px] text-[#969696] leading-normal'>
                Average weight 100 KG
              </p>
            </div>
            <div className=' xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-3 items-center text-center'>

            <p className=' bg-[#00ADB9] text-white rounded-full py-[5px] px-[9px] text-xs  xl:max-w-[86px] lg:max-w-[86px] md:max-w-[86px] max-w-[80%]  text-center xl:mx-0 lg:mx-0 md:mx-0 mx-auto'>
              Available
            </p>
            </div>
          </div>

          <div className='grid xl:grid-cols-[20%50%30%] lg:grid-cols-[20%50%30%] md:grid-cols-[20%50%30%] sm:grid-cols-[20%50%30%] grid-cols-[30%70%] gap-[5px]'>
            <img
              src='beffalo.svg'
              className='border-2 rounded-full border-black w-9 h-9'
              alt=''
            />
            <div className='flex flex-col'>
              <p className='xl:text-xl text-base font-medium'>Buffalo</p>
              <p className='xl:text-[10px] lg:text-[10px] text-[8px] text-[#969696] leading-normal'>
                Average weight 100 KG
              </p>
            </div>
            <div className=' xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-3 items-center text-center'>
              
            <p className=' bg-[#C1272D] text-white rounded-full py-[5px] px-[9px] text-xs  xl:max-w-[86px] lg:max-w-[86px] md:max-w-[86px] max-w-[80%]  text-center xl:mx-0 lg:mx-0 md:mx-0 mx-auto'>
              Limited
            </p>
            </div>
          </div>

          <div className='grid xl:grid-cols-[20%50%30%] lg:grid-cols-[20%50%30%] md:grid-cols-[20%50%30%] sm:grid-cols-[20%50%30%] grid-cols-[30%70%] gap-[5px]'>
            <img
              src='goat.svg'
              className='border-2 rounded-full border-black w-9 h-9'
              alt=''
            />
            <div className='flex flex-col'>
              <p className='xl:text-xl text-base font-medium'>Goat</p>
              <p className='xl:text-[10px] lg:text-[10px] text-[8px] text-[#969696] leading-normal'>
                Average weight 100 KG
              </p>
            </div>
        
            <div className=' xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-3 items-center text-center'>
            <p className=' bg-[#B3B3B3] text-white rounded-full py-[5px] px-[9px] text-xs  xl:max-w-[86px] lg:max-w-[86px] md:max-w-[86px] max-w-[80%]  text-center xl:mx-0 lg:mx-0 md:mx-0 mx-auto'>
              Sold Out
            </p>
            </div>
          </div> */}

        </div>
      </div>
      <div
        onMouseLeave={() => setShowGallery(false)}
        className='absolute -bottom-[1000px]'
      >
        {showGallery && <Gallery images={images} />}
      </div>
    </>
  );
}

export default FeedLotCard;