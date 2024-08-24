// import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <div
        className='max-w-full h-[10.75rem] bg-red-600'
        style={{
          backgroundImage:
            'linear-gradient(0deg, #98CCD4 0%, #E3F4F6 85.52%, #FFF 100%)',
        }}
      ></div>
      <div className=' flex justify-center max-w-full mt-[4.125rem] p-5'>
        <div className='flex items-center border-b border-[#E6E6E] w-[1217px] gap-2 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            className='mb-[0.563rem]'
          >
            <g clip-path='url(#clip0_1509_23851)'>
              <path
                d='M7.50033 18.3337C7.96056 18.3337 8.33366 17.9606 8.33366 17.5003C8.33366 17.0401 7.96056 16.667 7.50033 16.667C7.04009 16.667 6.66699 17.0401 6.66699 17.5003C6.66699 17.9606 7.04009 18.3337 7.50033 18.3337Z'
                stroke='black'
                stroke-opacity='0.87'
                stroke-width='1.66667'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M16.6663 18.3337C17.1266 18.3337 17.4997 17.9606 17.4997 17.5003C17.4997 17.0401 17.1266 16.667 16.6663 16.667C16.2061 16.667 15.833 17.0401 15.833 17.5003C15.833 17.9606 16.2061 18.3337 16.6663 18.3337Z'
                stroke='black'
                stroke-opacity='0.87'
                stroke-width='1.66667'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M0.833008 0.833008H4.16634L6.39967 11.9913C6.47588 12.375 6.6846 12.7196 6.9893 12.9649C7.29399 13.2102 7.67526 13.3405 8.06634 13.333H16.1663C16.5574 13.3405 16.9387 13.2102 17.2434 12.9649C17.5481 12.7196 17.7568 12.375 17.833 11.9913L19.1663 4.99967H4.99967'
                stroke='black'
                stroke-opacity='0.87'
                stroke-width='1.66667'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_1509_23851'>
                <rect width='20' height='20' fill='white' />
              </clipPath>
            </defs>
          </svg>
          <p className='mb-[0.563rem] text-xl text-[#000000] font-semibold'>
            {' '}
            Troli
          </p>
        </div>
      </div>

      <div className='text-center items-center justify-center flex flex-col mt-[3.665rem] p-4'>
        <img src='empty-cart 1.png' alt='EmptyCart ' />
        <h1 className='font-bold xl:text-[3.699rem] lg:text-2xl md:text-2xl sm:text-2xl text-xl text-[#333]'>
        Troli anda kosong
        </h1>
        <Link to='/' className='mt-[2.719rem] bg-[#01ACBC] text-[#FFFFFF] h-12 rounded py-4 px-8  inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' >
        Pulang ke Laman Utama
        </Link>
      </div>
    </>
  );
};

export default Cart;
