const Services = () => {
  return (
    <>
      <p className='text-center text-[#000000s] xl:text-[2rem] text-xl '>
      Kenapa Anda Perlu Sertai Kami?
      </p>
      <div className='xl:flex lg:flex md:flex md:flex-wrap gap-[2.875rem] p-6 text-[1.25rem] justify-center xl:flex-row lg:flex-row grid grid-cols-2 mt-[4.625rem]'>
        <div>
          <div className='xl:border-r-2  '>
            <img src='map.svg' alt='Map' className='max-w-full m-auto xl:p-5' />
          </div>

          <div>
            <p className='text-center text-sm'>
              Wide coverage around <br /> the country
            </p>
          </div>
        </div>
        <div>
          <div className='xl:border-r-2'>
            <img
              src='degree.svg'
              alt='Degree'
              className='max-w-full m-auto xl:p-5'
            />
          </div>

          <div>
            <p className='text-center text-sm'>
              Easy status track for your <br /> qurban and aqiqah
            </p>
          </div>
        </div>
        <div>
          <div className='xl:border-r-2'>
            <img
              src='cow.svg'
              alt='Animal'
              className='max-w-full m-auto xl:p-5'
            />
          </div>

          <div>
            <p className='text-center text-sm'>
              Good quality meat and <br /> efficient distribution
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src='work.svg'
              alt='Certification'
              className='max-w-full m-auto xl:p-5'
            />
          </div>

          <div>
            <p className='text-center text-sm'>
              Online certification <br /> provided
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
