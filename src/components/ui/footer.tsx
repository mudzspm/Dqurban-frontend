// import { Button } from './button';

// function Footer() {
//   return (
//     <div className='bg-[#0F405A] xl:py-6.063rem xl:px-[6rem] lg:py-[5.813rem] lg:px-[6rem] md:px-[6rem] px-10'>
//       <div className='flex xl:flex-row lg:flex-row md:flex-row justify-between flex-wrap flex-col gap-4 pb-4 items-center border-b-[1px] mb-4 w-full'>
//         <div>
//           <img src='logo.png' alt="Logo" />
//         </div>
//       </div>

//       <div className='flex flex-wrap justify-between'>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-40 lg:gap-30 gap-10'>
//           <div className='mb-6 md:mb-0'>
//             <p className='text-sm text-white'>
//               Digital Qurban Sdn. Bhd. 202401010831 (1556681-W)<br /></p><br></br>
//               <p className='text-sm text-white'>
//               No.10.2, 2nd Floor Jalan Rahmat, 50350, Kuala Lumpur, Wilayah Persekutuan Malaysia<br />
//               </p><br></br>
//               <p className='text-sm text-white'>
//               +6011-3584-0500
//               </p><br></br>
            
//           </div>
//           <div className='mb-6 md:mb-0'>
//             <h2 className='text-sm text-white font-bold'>Link</h2>
//             <ul className='flex flex-col text-[#A3A3A3] gap-2 font-normal text-sm'>
//               <li>Tentang Kami</li>
//               <li>Pakij</li>
//               <li>Terma dan Syarat</li>
//             </ul>
//           </div>
//           <div className='mb-6 md:mb-0'>
//             <div className='flex justify-end gap-2'>
//               <a href='https://www.facebook.com/dqurbandotcom'>
//                 <img src='fb.svg' alt='facebook' />
//               </a>
//               <a href='https://www.instagram.com/dqurbandotcom'>
//                 <img src='instagram.svg' alt='instagram' />
//               </a>
//               <a href='https://twitter.com/dqurbandotcom'>
//                 <img src='twitter.svg' alt='twitter' />
//               </a>
//               <a href='https://www.youtube.com/@dqurbandotcom'>
//                 <img src='yt1.svg' alt='twitter' />
//               </a>
//               <a href='https://www.tiktok.com/@dqurbandotcom'>
//                 <img src='tiktok.svg' alt='twitter' />
//               </a>
//             </div>
//             <div className='flex justify-end mt-4'>
//               <a href="https://dev-admin.dqurban.com/signup">
//                 <Button size='sm' variant='message'>Daftar Pembekal</Button>
//               </a>
//               <br></br>
//               <a href="https://dev-admin.dqurban.com/">
//                 <Button size='sm' variant='message'>Daftar Pelaksana</Button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <br />
//         <p className='text-left text-[#A3A3A3] font-normal text-sm'>
//           © Hak cipta terpelihara 2024 DigiQurban
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import { useState } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';

function Footer() {
  const [showWhatsApp] = useState(true); // Show WhatsApp button by default

  return (
    <div className='bg-[#0F405A] xl:py-6.063rem xl:px-[6rem] lg:py-[5.813rem] lg:px-[6rem] md:px-[6rem] px-10 relative'>
      {showWhatsApp && (
        <a href='https://wa.me/601135840500' target='_blank' rel='noopener noreferrer' className='fixed bottom-6 right-6 z-50'>
          <img src='whatsapp.svg' alt='WhatsApp' width='70' height='70' />
        </a>
      )}
      <div className='flex xl:flex-row lg:flex-row md:flex-row justify-between flex-wrap flex-col gap-4 pb-4 items-center border-b-[1px] mb-4 w-full'>
        <div>
          <img src='logo.png' alt="Logo" />
        </div>
      </div>

      <div className='flex flex-wrap justify-between'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-40 lg:gap-30 gap-10'>
          <div className='mb-6 md:mb-0'>
            <p className='text-sm text-white'>
              Digital Qurban Sdn. Bhd.  (1556681-W)<br /></p>
              <p className='text-sm text-white'>
              <br></br>
              No.10.2, 2nd Floor Jalan Rahmat, 50350, Kuala Lumpur, Wilayah Persekutuan Malaysia<br /></p>
              <p className='text-sm text-white'>
              <br></br>
              +6011-3584-0500
            </p>
            <br></br>
            <p className='text-sm text-white'>

            <b> Waktu Operasi (Isnin - Jumaat)</b><br></br>
                9:30 pagi - 4:00 petang <br></br>
                Kecuali Cuti Umum

            </p>


          </div>
          <div className='mb-6 md:mb-0'>
            <h2 className='text-sm text-white font-bold'>Pautan</h2>
            <ul className='flex flex-col text-[#A3A3A3] gap-2 font-normal text-sm'>
             <a href='/about'> <li>Tentang Kami</li></a>
             <a href='/qurban'><li>Pakej</li></a>
             <a href='/terms'><li>Terma dan Syarat</li></a>
             <a href='/Agreement'><li>Perincian Akad</li></a>
             <a href='/refundPolicy'><li> Polisi Bayaran Balik</li></a>
             <a href='/InstalmentPlanPolicy'><li>Polisi Pelan Ansuran </li></a>
             <a href='/PrivacyPolicy'><li>Polisi Privasi</li></a>
            </ul>
          </div>
          <div className='mb-6 md:mb-0'>
            <div className='flex justify-end gap-2 mr-3'>
              <a href='https://www.facebook.com/dqurbandotcom' target="_blank">
                <img src='fb.svg' alt='facebook' />
              </a>
              <a href='https://www.instagram.com/dqurbandotcom' target="_blank">
                <img src='instagram.svg' alt='instagram' />
              </a>
              <a href='https://twitter.com/dqurbandotcom' target="_blank">
                <img src='twitter.svg' alt='twitter' />
              </a>
              <a href='https://www.youtube.com/@dqurbandotcom' target="_blank">
                <img src='yt1.svg' alt='twitter' />
              </a>
              <a href='https://www.tiktok.com/@dqurbandotcom' target="_blank">
                <img src='tiktok.svg' alt='twitter' />
              </a>
            </div>
            <div className='flex justify-end mt-4'>
              {/* <a href="https://dev-admin.dqurban.com/signup" className='mr-2'> */}
              <Link
                  to='/Supplier'
                  className='mr-2'
                >
                <Button size='sm' variant='message'>Daftar Pembekal</Button>
                </Link>
              {/* </a> */}
              
              <br></br>
              {/* <a href="https://dev-admin.dqurban.com/"> */}
              <Link
                  to='/Executor'
                  rel="noopener noreferrer"
                >
                  <Button size='sm' variant='message' className='bg-[#9747FF] rounded'>Daftar Pelaksana</Button>
                </Link>


                
            </div>
            {/* <br></br> */}
            <div className='flex justify-end mt-4'>
  
  <a 
    href="https://dev-admin.dqurban.com/login/supplier" 
    target="_blank" 
    rel="noopener noreferrer"
     className='mr-2'
  >  
    <Button size='sm' variant='message'>Log Masuk Pembekal</Button>
  </a>  
  <a 
    href="https://dev-admin.dqurban.com/login/Executor" 
    target="_blank" 
    rel="noopener noreferrer"
   
  >  
    <Button size='sm' variant='message' className='bg-[#9747FF]'>Log Masuk Pelaksana</Button>
  </a>  
</div>
          </div>
        </div>
      </div>

      <div>
        <br />
        <p className='text-left text-[#A3A3A3] font-normal text-sm'>
        © 2024 Hak Cipta Terpelihara Digital Qurban Sdn Bhd
        </p>
      </div>
    </div>
  );
}

export default Footer;

