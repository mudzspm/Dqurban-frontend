import { Button } from 'flowbite-react';
import  { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      toast.error('Sila lengkapkan pengesahan ReCAPTCHA');
      return;
    }

    // Validate form fields

    // Send data to admin's email

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      company: '',
      subject: '',
      message: '',
    });

    toast.success('Terima kasih kerana menghubungi kami', {
      autoClose: 3000, // 3 seconds
    });
  };

  const handleCaptchaChange = (value:any) => {
    console.log("Captcha value:", value);
    setIsCaptchaVerified(true);
  };

  return (
    <div className='grid gap-[1rem] grid-cols-1 lg:pl-[23.938rem] lg:pr-[14rem] mt-[-2.859rem]'>
      <div>
        <h2 className='text-[2.457rem] text-[#09B1CB] font-bold ml-[4px]'>
        Hubungi
        </h2>
      </div>

      <div className='mt-[0.224rem] w-[98%] ml-[4px]'>
        <form onSubmit={handleSubmit} className='max-w-[800px]'>
          <div className='grid md:grid-cols-1 md:gap-6'>
            <div className='relative mt-2'>
              <input
                type='text'
                className='text-[0.819rem] text-[#8EA4AC] disabled:opacity-50 disabled:pointer-events-none w-full h-[2.932rem] rounded-[0.438rem] border-[#CDE2E7]'
                placeholder='Nama'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='relative mt-2'>
              <input
                type='email'
                className='text-[0.819rem] text-[#8EA4AC] disabled:opacity-50 disabled:pointer-events-none w-full h-[2.932rem] rounded-[0.438rem] border-[#CDE2E7]'
                placeholder='E-mel'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='grid md:grid-cols-2 md:gap-6 mt-[1.228rem]'>
            <div className='relative mt-2'>
              <input
                type='text'
                className='text-[0.819rem] text-[#8EA4AC] disabled:opacity-50 disabled:pointer-events-none w-full h-[2.932rem] rounded-[0.438rem] border-[#CDE2E7]'
                placeholder='No. Telefon Bimbit'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className='relative mt-2'>
              <input
                type='text'
                className='text-[0.819rem] text-[#8EA4AC] disabled:opacity-50 disabled:pointer-events-none w-full h-[2.932rem] rounded-[0.438rem] border-[#CDE2E7]'
                placeholder='Syarikat'
                name='company'
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='mt-[1.228rem]'>
            <input
              type='text'
              className='text-[0.819rem] text-[#8EA4AC] disabled:opacity-50 disabled:pointer-events-none w-full h-[2.932rem] rounded-[0.438rem] border-[#CDE2E7]'
              placeholder='Subjek'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            id='message'
            className='mt-[1.228rem] block p-2.5 w-full text-[0.819rem] text-[#8EA4AC] rounded-lg border border-[#CDE2E7]'
            placeholder='Mesej'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <br></br><br></br>
          <ReCAPTCHA
            // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //Test Key
            // sitekey = "6LeIgeIpAAAAAPTEuXJ7wuZXkibCOk6dKTBAxRlS" //live 2
            sitekey = "6LcNgtYpAAAAAB6VFidrJpjGsb2QopR-GOSMbzev" //live
            onChange={handleCaptchaChange}
          />
          
          <div className='mt-[1.228rem]'>
          <Button
        type='submit'
        size='xl'
         
        style={{
            backgroundImage: 'linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)',
            opacity: !isCaptchaVerified ? 0.5 : 1,
            cursor: !isCaptchaVerified ? 'not-allowed' : 'pointer'
        }}
        disabled={!isCaptchaVerified}
    >
        Hantar
    </Button>
    <br></br>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
