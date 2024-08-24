import Stepper from './Stepper';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const userJourneyContent = [
  {
    id: 1,
    title: 'Daftar akaun',
    subtitle: 'Daftar atau log masuk ke dalam akaun anda',
    image: 'step-image-1.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Pilih pakej',
    subtitle: 'Pilih pakej yang bersesuaian',
    image: 'step-image-2.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Akad dan bayar',
    subtitle: 'Baca akad dan teruskan dengan pembayaran',
    image: 'step-image-3.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Jejak status ',
    subtitle: 'Jejak status qurban dan aqiqah anda',
    image: 'step-image-4.png',
    link: '#',
  },
  {
    id: 5,
    title: 'Selesai!',
    subtitle: 'Qurban dan Aqiqah selesai diagihkan!',
    image: 'step-image-5.png',
    link: '#',
  },
];

function UserJourney() {
  return (
    <div className='rounded-[23px] p-14 shadow-[0px_4px_34px_0px_rgba(0,0,0,0.28)] 
    flex flex-col items-center mb-[13.75rem] 
     xl:mx-4 lg:mx-4 '>
      <h2 className='xl:text-5xl lg:text-[2rem] text-2xl text-[#084059] text-center font-black xl:px-0 lg:px-0 md:px-0 px-12'>
      Mula sekarang hanya dengan 5 langkah mudah
      </h2>
      <Stepper />
      <div className='flex gap-6 xl:my-14 lg:my-10 my-[9.625rem] xl:flex-row lg:flex-row justify-center flex-col '>
        {userJourneyContent.map(({ id, title, subtitle, image, link }) => {
          return (
            <div
              key={id}
              className=' max-w-[200px] bg-[#EBEBEB] rounded-[17px] inline-flex flex-col
             
              gap-[10px] shadow-[0px_2px_17px_0px_rgba(8,64,89,0.38)] overflow-hidden '
            >
              <span className='inline-block'>
                <img src={image} alt='step-1' className='scale-110 bg-cover' />
              </span>
              <span className='px-2 flex flex-col gap-3 text-center pb-11'>
                <p className='text-[#00ADB9] xl:text-base text-sm underline font-semibold'>
                  <Link to={link}>{title}</Link>
                </p>
                <p className='xl:text-sm text-[0.625rem]'>{subtitle}</p>
              </span>
            </div>
          );
        })}
      </div>
      <a href='/signup'>
      <Button size='lg' variant='message' >
        <span className='flex justify-center items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
<path d="M0.5 0V16L12.5 8L0.5 0Z" fill="white"/>
</svg>


Daftar sekarang
        </span>
      </Button>
      </a>
    </div>
  );
}

export default UserJourney;
