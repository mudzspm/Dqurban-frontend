const AboutUs = () => {
  return (
    <>
      <div className='relative h-[405px]'
        style={{
          backgroundImage: 'linear-gradient(100deg, rgba(8, 64, 89, 0.82) 54.31%, #53AFBE 146.44%)',
        }}
      >
        <img
          src='header.png'
          alt='Aqiqah'
          className='absolute mix-blend-overlay bg-no-repeat bg-cover object-cover h-full w-full top-0'
        />
        <div className="absolute inset-0 flex justify-center items-center text-center px-4">
          <h2 className='text-[#FFFFFF] xl:text-[5rem] lg:text-6xl lg:ml-[2rem] md:text-5xl md:ml-[-8rem] sm:text-4xl text-2xl font-bold'>
          Tentang Kami
          </h2>
          <div className="mt-[1.938rem] text-[#FFF] text-4xl font-normal">
          </div>
        </div>
      </div>

      

    <div className="bg-white w-[70%] border mx-auto my-4 shadow-xl">

      <div className="md:flex p-4">
  {/* Image Div */}
  <div className="md:w-[40%] flex items-center justify-center md:p-0 mt-2">
    <img src="Picture1.png" alt="Tentang Kami"
    style={{ width: '300px', height: '400px' }}
     className="object-cover" />
  </div>

  {/* Text Div */}
  <div className="md:w-[60%] flex flex-col justify-center md:p-12">
    <p className="text-sm">
      Digital Qurban Sdn. Bhd. (Dqurban) adalah sebuah syarikat yang diperbadankan di Malaysia dengan misi untuk menjadikan ibadah yang berkaitan kewangan sosial menjadi lebih mudah. Sebuah syarikat teknologi mudah alih yang menawarkan perkhidmatan ibadah qurban, aqiqah dan sedekah melalui kaedah pembayaran secara digital. Aplikasi moden dan mudah membolehkan anda menempah bahagian dalam ibadah qurban, aqiqah dan sedekah dengan mendaftar secara dalam talian, mengetahui di mana binatang qurban dan aqiqah anda dilaksanakan, sedekah anda diagihkan.
    </p>
    <br/>
    <p className="text-sm">
      Mempastikan ketelusan, pembayaran ansuran secara fleksibel, berjadual dan penyelesaian e-dagang patuh syariah. Pada masa yang sama, membantu industri ternakan melalui proses penyelesaian pengurusan fidlot yang inovatif, penyediaan tempat fidlot dan penternak dengan akses mudah kepada platform digital, nasihat pakar dan komuniti yang menyokong. Kami berhasrat untuk meningkatkan kecekapan, kemampanan dan keuntungan dalam pengurusan ternakan ruminan di Malaysia dan seluruh dunia.
    </p>
  </div>
  </div>

  {/* ================ pic1 =========== */}


  <div className="md:flex p-4">
  {/* Image Div */}
  <div className="md:w-[40%] flex items-center justify-center md:p-0 mt-2">
    <img src="Picture2.jpg" alt="Tentang Kami"
    style={{ width: '300px', height: '400px' }} 
     className="object-cover" />
  </div>

  {/* Text Div */}
  <div className="md:w-[60%] flex flex-col justify-center md:p-12">
    <p className="text-sm">
    Di samping itu, Dquran berperanan menyelaraskan industri ternakan ruminan melalui platform e-dagang yang komprehensif. Aplikasi dqurban membantu penternak tempatan dan antarabangsa memasarkan ternakan mereka bagi memenuhi permintaan dari ibadah qurban dan aqiqah. Industri ternakan ruminan di Malaysia dianggarkan menyumbang nilai hampir RM500 juta setahun bagi memenuhi keperluan ibadah qurban tahunan. Dengan tumpuan pada inovasi dan teknologi, kepuasan pelanggan dan kemampanan, kami berusaha untuk menjadi rakan kongsi yang dipercayai dalam komuniti pertanian.
    </p>
    <br/>
    <h1 className="font-bold">Visi</h1>
    <p className="text-sm">
    Visi Dqurban menjadi platform dalam talian untuk ibadah qurban, aqiqah dan sedekah terkemuka di dunia Islam.
    </p>
    <h1 className="font-bold">Misi</h1>
    <p className="text-sm">
    Misi Dqurban adalah mempercepatkan peralihan dunia kepada teknologi digital dan pembayaran secara atas talian dalam aktiviti kewangan sosial Islam.
    </p>
  </div>
  </div>

  {/* ==================== pic2 ============= */}

  <div className="md:flex p-4">
  {/* Image Div */}
  <div className="md:w-[40%] flex items-center justify-center md:p-0 mt-2">
    <img src="Picture3.jpg" alt="Tentang Kami" 
    style={{ width: '300px', height: '400px' }} 
    className=" object-cover" />
  </div>

  {/* Text Div */}
  <div className="md:w-[60%] flex flex-col justify-center md:p-12">
  <h1 className="font-bold">Nilai Teras</h1>
  <ol className="p-[revert] list-disc pl-5">
    <li className="text-sm">
    <strong>Inovasi:</strong> Membangun dan menyepadukan teknologi termaju secara berterusan untuk meningkatkan pengurusan ternakan dan penyampaian perkhidmatan Qurban & Aqiqah.
    </li>
    <li className="text-sm">
    <strong>Kepuasan Pelanggan:</strong> Utamakan keperluan pelanggan kami, menawarkan penyelesaian ansuran yang disesuaikan (fleksibel) dan sokongan yang luar biasa.
    </li>
    <li className="text-sm">
    <strong>Kelestarian:</strong> Mempromosikan amalan dan produk yang menyumbang kepada kesihatan alam sekitar dan kebajikan ternakan.
    </li>
    <li className="text-sm">
    <strong>Integriti:</strong> Menjalankan perniagaan dengan kejujuran, ketelusan dan akauntabiliti.
    </li>
    <li className="text-sm">
    <strong>Komuniti:</strong> Memupuk rangkaian kerjasama pakar dan pengamal industri untuk berkongsi pengetahuan dan amalan terbaik.
    </li>
  </ol>


    <br/>
    <p className="text-sm">
    Mempromosikan sistem e-dagang yang mesra pengguna dengan penerangan produk yang terperinci dan telus serta pengendalian ternakan daripada penandaan kepada penyembelihan. Gerbang pembayaran selamat dan pilihan pembayaran yang fleksibel serta pengurusan inventori untuk fidlot dan kemas kini stok masa nyata untuk pengguna akhir.
    </p>
  </div>
  </div>

  {/* ==================== Pic3 ============= */}

  <div className="md:flex p-4">
  {/* Image Div */}
  {/* <div className="md:w-[40%] flex items-center justify-center md:p-0 mt-2">
    <img src="Picture4.jpg" alt="Tentang Kami" className="w-full md:w-auto md:h-[80%] object-cover" />
  </div> */}

<div className="md:w-[40%] flex items-center justify-center md:p-0 mt-2">
  <img 
    src="Picture4.jpg" 
    alt="Tentang Kami" 
    style={{ width: '300px', height: '400px' }} 
    className="object-cover mb-28" 
  />
</div>


  {/* Text Div */}
  <div className="md:w-[60%] flex flex-col justify-center md:p-12">
  <h1 className="font-bold">Maklumat Hubungan</h1>
  <ol className="p-[revert] list-disc pl-5">
    <li className="text-sm">
    Perkhidmatan Pelanggan dan Pertanyaan Jualan: sales@dqurban.com
    </li>
    <li className="text-sm">
    Address: No.10.2, 2nd Floor Jalan Rahmat, 50350, Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur
    </li>
    <li className="text-sm">
    Telefon: +6011-3584-0500
    </li>
  </ol>
<br/>
  <h1 className="font-bold">Media Sosial</h1>
  <ol className="p-[revert] list-disc pl-5">
    <li className="text-sm">
    Facebook: facebook.com/dqurbandotcom
    </li>
    <li className="text-sm">
    X: X.com/@dqurbandotcom
    </li>
    <li className="text-sm">
    Instagram: instagram.com/dqurbandotcom
    </li>
    <li className="text-sm">
    TikTok: tiktok.com/@dqurbandotcom
    </li>
    <li className="text-sm">
    Youtube: youtube.com/@dqurbandotcom
    </li>
  </ol>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


    
  </div>
  </div>


</div>





    

    
    </>
  );
};

export default AboutUs;
