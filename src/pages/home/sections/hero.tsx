import { Button } from '../../../components/ui/button';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='relative h-screen'>
      <img src='Frame 1000004472.svg' alt='Frame' className='absolute inset-0 w-full h-full object-cover' />
      {/* <img src='Rectangle 2784.svg' alt='Rectangle 2784' className='max-w-full' /> */}
      <div className='absolute inset-0 flex items-center text-white'>
        <div className='ml-[5%]'>
          <h1 className='font-bold lg:text-6xl md:text-4xl'>
          Peluang Berinfaq  <br /> Untuk Ganjaran Dunia  <br />  dan Akhirat
          </h1>
          <div className='mt-8 max-w-[38rem]'>
            <p className='text-black lg:text-1xl md:text-s'>
            Amalan berinfaq suatu ibadah yang sangat dituntut dalam Islam.<br />  Antaranya adalah qurban, aqiqah, waqaf, qardhul hasan dan sedekah.
             <br />   Kami di Digital Qurban Sdn. Bhd. menyediakan peluang tersebut untuk anda sertai. Sila klik link di bawah untuk maklumat lanjut. 
            </p>
          </div>
          <div className='mt-[2.7rem] flex gap-4'>
          <Link to="/signup">
      <Button className='md:text-xs text-[10px]'>Daftar Sekarang</Button>
    </Link>
    <Link to="/signin"> <Button className='bg-white text-black text-[10px]'>Log Masuk</Button></Link>
          </div>
        </div>
        {/* <div className='absolute bottom-0 right-0 flex flex-col items-center'>
          <div className='relative'>
            <img src='Ellipse 13.svg' alt='Ellipse 13' className='' />
            <img src='pikaso_texttoimage.svg' alt='pikaso_texttoimage' className='absolute object-none mt-[83px] ml-[-9rem]' />
            <img src='pikaso_texttoimage_a-friendly preview 1.svg' alt='preview 1' className='float-right' />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
