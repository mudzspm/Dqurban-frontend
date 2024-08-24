// import { Button } from "@/components/ui/button";
import HelpLineItem from "./HelpLineItem";
// import ReCAPTCHA from 'react-google-recaptcha';
// import { toast } from 'react-toastify';
// import  { useState } from 'react';

const HelpLine = () => {

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phoneNumber: '',
  //   company: '',
  //   subject: '',
  //   message: '',
  // });

  // const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  // const handleChange = (e:any) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e:any) => {
  //   e.preventDefault();

  //   if (!isCaptchaVerified) {
  //     toast.error('Sila lengkapkan pengesahan ReCAPTCHA');
  //     return;
  //   }

  //   // Validate form fields

  //   // Send data to admin's email

  //   // Reset form fields
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phoneNumber: '',
  //     company: '',
  //     subject: '',
  //     message: '',
  //   });

  //   toast.success('Terima kasih kerana menghubungi kami', {
  //     autoClose: 3000, // 3 seconds
  //   });
  // };

  
  // const handleCaptchaChange = (value:any) => {
  //   console.log("Captcha value:", value);
  //   setIsCaptchaVerified(true);
  // };





    return (
        <div className='bg-white lg:w-[850px] sm:w-[430px] p-10 shadow-xl border border-solid rounded-sm  mb-2'>

            <div className="bg-gradient-to-r from-[#00ADB9] to-[#5ed1da] h-[190px] flex justify-center flex-col gap-2 rounded-[12px] pl-4">
                <p className='text-[#fff] font-bold text-[36px]'>Soalan Lazim (F.A.Q)</p>
                <p className='text-[#fff] text-[14px]'>Mencari jawapan? Berikut adalah beberapa soalan yang sering ditanya atau hantar mesej kepada kami.</p>
            </div>
            <div className="lg:flex gap-4 mt-4 items-start">
                <HelpLineItem title="Apakah pengertian qurban?">
                Ibadah Qurban ialah ibadah sembelihan haiwan ternakan seperti unta, lembu dan
kambing yang dilakukan pada hari raya Aidil Adha iaitu; 10 Zulhijjah (selepas
selesai solat hari raya) dan pada hari-hari Tasyrik berikutnya iaitu; 11, 12 ,13
Zulhijjah bertujuan untuk mendekatkan diri kepada Allah SWT.
                </HelpLineItem>
                <HelpLineItem title="Bolehkah buat satu bahagian lembu untuk satu keluarga?">
                Satu (1) bahagian lembu qurban hanya untuk satu (1) nama peserta sahaja.
Tetapi diharuskan bagi peserta itu untuk berniat (doa) sedekahkan pahala
qurban itu kepada ahli keluarganya yang lain.
                </HelpLineItem>
            </div>
            <div className="lg:flex gap-4 mt-4 items-start">
                <HelpLineItem title="Apakah syarat untuk melaksanakan ibadah qurban?  ">
                <ul>Beragama Islam</ul>
                <ul>Baligh</ul> 
<ul>Berakal</ul> 
<ul>Berkemampuan</ul> 
<ul>Merdeka (bukan golongan hamba)      </ul>     </HelpLineItem>
                <HelpLineItem title="Bolehkah melaksanakan ibadah qurban untuk anak saya yang masih kecil?">
                Boleh, dengan tujuan mendidik anak melakukannya dan (dalam masa yang
sama) ibubapa harus membimbing anak tersebut untuk berniat qurban.  </HelpLineItem>
            </div>
            <div className="lg:flex gap-4 mt-4 items-start">
                <HelpLineItem title=" Apakah hukum untuk melaksanakan ibadah qurban?">
                Hukum melaksanakannya adalah SUNAT MU’AKKADAH – iaitu sunat yang
sangat dituntut melakukannya. 
                </HelpLineItem>
                <HelpLineItem title="Bolehkah kita buat qurban untuk orang lain?">
                Boleh, tetapi wajib memberitahu kepada orang tersebut supaya ia berniat
qurban. Contohnya: seorang anak melaksanakan ibadah qurban untuk ibu
bapanya yang berada di kampung. Maka ibu bapanya perlu berniat, agar
ibadah qurbannya menjadi sempurna.   </HelpLineItem>
            </div>
            <div className="lg:flex gap-4 mt-4 items-start">
                <HelpLineItem title="Adakah perlu membuat akad perwakilan?">
                Akad perwakilan perlu dibuat bagi orang yang mewakilkan pelaksanaan
ibadah qurban kepada urusetia program qurban. Akad perwakilan itu juga
memadai dengan niat oleh peserta qurban.
                </HelpLineItem>
                <HelpLineItem title="Orang yang menanggung bebanan hutang, adakah boleh laksanakan qurban?">
                Jika hutang jangka panjang (long-term financial) seperti ansuran rumah,
ansuran kereta dan sebagainya adalah tidak termasuk dalam kategori hutang
yang dimaksudkan. Hutang yang membebankan diri sehingga tidak mampu
untuk membeli makanan atau barangan asas hidup, maka tidak perlu untuk
dia melakukan ibadah qurban.              </HelpLineItem>
            </div>

            <div className="grid gap-[1.291rem] mt-[5rem]">

<div >
{/* <h2 className="text-[2.457rem] text-[#09B1CB] font-bold">
Hubungi
</h2> */}
 
<div className="grid grid-cols-2 justify-center items-center max-w-full">
<div className="flex gap-6 mt-[3.264rem]">
    <div className="">
    {/* <img src="notebook.svg" alt="NoteBook" className="max-w-full" /> */}
    </div>
    

</div>
<div className="flex gap-6 mt-[2.569rem]" >
    <div className="">
    {/* <img src="profile.svg" alt="NoteBook" className="max-w-full" /> */}
    </div>
 

</div>
</div>
</div>

</div>
        </div>

        
    )
}

export default HelpLine;