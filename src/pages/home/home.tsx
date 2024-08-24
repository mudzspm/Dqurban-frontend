// import Hero from '@/pages/home/sections/hero1';
import PriceCard from './sections/priceCard';
// import PriceCardaly from './sections/priceCardmaly';
// import Support from '@/pages/home/sections/support';
// import QurbanServiceBanner from '@/pages/home/sections/qurbanService';
// import Services from '@/pages/home/sections/services';
// import Timer from './sections/timer';
// import UserJourney from '@/components/UserJourney';
// import PriceCardmaly from './sections/priceCardmaly';
// import Trust from './sections/trust';
import Hero from './sections/hero';
import Choose
 from './sections/choose';
import JoinUs from './sections/joinUs';
import JoinUsToday from './sections/joinUsToday';
import WatchVideo from './sections/watchVideo';
import FullFill from './sections/fullFill';
import AllSet from './sections/allSet';
import Frequently from './sections/Frequently ';

const Home = () => {
  return (
    <>
      <Hero />
      <JoinUs/>
      <Choose/>
      <div className='flex overflow-auto justify-center items-center flex-col xl:gap-8 mt-[7.313rem] xl:flex-row lg:gap-6 lg:flex-row p-4'>
        <PriceCard />
        {/* <PriceCardmaly /> */}
      </div>
      <JoinUsToday/>
      <WatchVideo/>
      <FullFill/>
      <AllSet/>
      <Frequently/>

      {/* <div className='relative mt-[13.375rem] h-[18.125rem] bg-[#00ADB9] py-[2rem]'>
        <img
          src='qurban-.png'
          alt='Aqiqah'
          className='absolute mix-blend-overlay bg-no-repeat bg-cover object-cover h-full w-full top-0 '
        />
      </div> */}

      {/* <Support />  */}

      {/* <section className='max-w-[75.5rem] mx-auto my-[7.8rem] flex flex-col gap-[180px]'>
        <Timer 
        // countDownDays={4}
         />
        <UserJourney  />
      </section>

      <QurbanServiceBanner /> */}
       

      {/* <div className='xl:mt-[22.125rem] lg:mt-56 mt-36 xl:mb-[20rem] lg:mb-[8rem] mb-[12rem]'>
        <h2 className='font-bold text-center xl:text-[4rem] lg:text-5xl text-xl text-[#084059]'>
        Dengan Kerjasama
        </h2>
        <div className='bg-[#EDECEC] flex justify-center flex-wrap  xl:p-[6.813rem]  p-[3rem] gap-[2.625rem] mt-[3rem]'>
          <img src='Rectangle 81.svg' alt='IIUM'  className='xl:max-w-full lg:w-[200px] w-[100px]'/>
          <img src='Rectangle 86.svg' alt='UPM'  className='xl:max-w-full lg:w-[200px] w-[100px]'/>
          <img src='Rectangle 87.svg' alt='PPZ'  className='xl:max-w-full lg:w-[200px] w-[100px]'/>
          <img src='Rectangle 88.svg' alt='HAJI'  className='xl:max-w-full lg:w-[200px] w-[100px]'/>
          <img src='Rectangle 89.svg' alt='PPZ'  className='xl:max-w-full lg:w-[200px] w-[100px]'/>
        </div>
      </div> */}
      {/* <div className='mt-[18.625rem]'><QuestionForm /></div> */}
    </>
  );
};
export default Home;
