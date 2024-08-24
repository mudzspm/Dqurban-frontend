import ContactForm from '@/components/contactForm';



const Contactus = () => {
  return (
    <>
      <div
        className='relative  h-[505px]'
        style={{
          backgroundImage:
            'linear-gradient(100deg, rgba(8, 64, 89, 0.82) 54.31%, #53AFBE 146.44%)',
        }}
      >
        <img
          src='header.png'
          alt='Aqiqah'
          className='absolute mix-blend-overlay bg-no-repeat bg-cover object-cover h-full w-full top-0 '
        />

        <div className='absolute left-[14px] top-[100px] lg:left-[387px] lg:top-[206px] sm:left-60 sm:ml-3'>
          <h2 className='text-[#FFFFFF] xl:text-[5rem] lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold '>
          Hubungi Kami
          </h2>
          <div className='mt-[2.93rem] text-[#FFF] text-4xl'>
            {/* <p>Bagikan daging kepada saudara kita</p>
            <p>memerlukan di 41 negara</p> */}
          </div>
        </div>
      </div>

      <div className='grid gap-6 grid-cols-2 lg:grid-cols-4 py-[8rem] lg:pl-[23.938rem] ml-[13px]'>
        <div>
          <div className='w-16 h-16 bg-[#F3F3F3] p-4 rounded-[0.406rem]'>
            <img src='headphone.svg' alt='HeadPhone' />
          </div>
          <h3 className='font-semibold text-sm text-[#000000] mt-[0.716rem]'>
          Sokongan E-mel
          </h3>
          <p className='text-[#3D565F] text-[0.819rem] mt-[0.768rem]'>
          E-mel{' '}
            <span className='text-[#EB414B]'> sales@dqurban.com </span>{' '}
            <br />
           
          </p>
        </div>

        <div>
          <div className='w-16 h-16 bg-[#F3F3F3] p-4 rounded-[0.406rem] '>
            <img src='phone.svg' alt='TelePhone' />
          </div>
          <h3 className='font-semibold text-sm text-[#000000] mt-[0.716rem] '>
             Hubungi Kami
          </h3>
          <p className='text-[#3D565F] text-[0.819rem] mt-[0.768rem]'>
          Hubungi kami untuk bercakap dengan ahli pasukan <br /> kami. <br />
          +6011-3584-0500 <br />
             
          </p>
        </div>

       

        <div>
          <div className='w-16 h-16 bg-[#F3F3F3] p-4 rounded-[0.406rem]'>
            <img src='net.svg' alt='Network' />
          </div>
          <h3 className='font-semibold text-sm text-[#000000] mt-[0.716rem]'>
          Lokasi
          </h3>
          <p className='text-[#3D565F] text-[0.819rem] mt-[0.768rem]'>
          No.10.2, 2nd Floor Jalan Rahmat, 50350,  <br /> Kuala Lumpur, Wilayah Persekutuan Malaysia <br />
             
          </p>
        </div>
      </div>

       
       

        {/* ---------------------form------------------------- */}

  
<ContactForm/>

       

      {/* <div className='lg:pl-[23.938rem] lg:pr-[15rem] mt-[3.553rem]'>
        <h2 className='text-5xl text-[#000] Font-bold ml-1'>
        Soalan  <span className='text-[#09B1CB]'> lazim</span>
        </h2>
        <p className='text-lg text-[#3D565F] mt-[1.563rem] ml-1'>
        Rasa ingin tahu? Baca beberapa Soalan Lazim kami <br />
        atau hubungi penyokong kami untuk mendapatkan bantuan
        </p>
      </div>

      <div className='mt-[4.797rem] lg:pl-[23.938rem] lg:pr-[15rem] lg:grid grid-cols-2 gap-2 ml-1 mr-1'>
        <div>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
              Apakah pengertian qurban?
              </AccordionTrigger>
              <AccordionContent>
              Ibadah Qurban ialah ibadah sembelihan haiwan ternakan seperti unta, lembu dan
kambing yang dilakukan pada hari raya Aidil Adha iaitu; 10 Zulhijjah (selepas
selesai solat hari raya) dan pada hari-hari Tasyrik berikutnya iaitu; 11, 12 ,13
Zulhijjah bertujuan untuk mendekatkan diri kepada Allah SWT.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
              Apakah syarat untuk melaksanakan ibadah qurban?
              </AccordionTrigger>
              <AccordionContent>
            <ul> Beragama Islam</ul> 
            <ul>Baligh</ul>
           <ul>Berakal</ul>
           <ul>Berkemampuan</ul>
            <ul>Merdeka (bukan golongan hamba)</ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>
              Apakah hukum untuk melaksanakan ibadah qurban?
              </AccordionTrigger>
              <AccordionContent>
              Hukum melaksanakannya adalah SUNAT MU’AKKADAH – iaitu sunat yang
sangat dituntut melakukannya.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>
              Apakah jenis-jenis qurban wajib?
              </AccordionTrigger>
              <AccordionContent>
              <ul> Qurban atas dasar Wasiat yang ditinggalkan oleh si mati</ul> 
              <ul>  Qurban Nazar yang disandarkan pada sesuatu hajat.</ul> 
              <ul>  Qurban Ta’yin, iaitu qurban yang diniatkan ke atas binatang tertentu.</ul> 
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5'>
              <AccordionTrigger>
              Bolehkah melaksanakan ibadah qurban ke atas orang meninggal dunia?
              </AccordionTrigger>
              <AccordionContent>
              Tidak digalakkan melakukan ibadah qurban ke atas orang yang telah
meninggal dunia, kecuali berdasarkan wasiat yang pernah dibuat oleh simati.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-6'>
              <AccordionTrigger>
              Bolehkah melaksanakan ibadah qurban untuk anak saya yang masih kecil?

              </AccordionTrigger>
              <AccordionContent>
              Boleh, dengan tujuan mendidik anak melakukannya dan (dalam masa yang
sama) ibubapa harus membimbing anak tersebut untuk berniat qurban.
              </AccordionContent>
            </AccordionItem>


            <AccordionItem value='item-7'>
              <AccordionTrigger>
              Bolehkah buat satu bahagian lembu untuk satu keluarga?
              </AccordionTrigger>
              <AccordionContent>
              Satu (1) bahagian lembu qurban hanya untuk satu (1) nama peserta sahaja.
Tetapi diharuskan bagi peserta itu untuk berniat (doa) sedekahkan pahala
qurban itu kepada ahli keluarganya yang lain
              </AccordionContent>
            </AccordionItem>


            <AccordionItem value='item-8'>
              <AccordionTrigger>
              Haiwan qurban jantan atau betina?
              </AccordionTrigger>
              <AccordionContent>
              Kedua-duanya. Jantina haiwan bukanlah menjadi syarat samada qurban itu sah
atau tidak.
              </AccordionContent>
            </AccordionItem>


            <AccordionItem value='item-9'>
              <AccordionTrigger>
              Berapa berat (saiz) haiwan qurban?
              </AccordionTrigger>
              <AccordionContent>
              Madani akan memastikan lembu yang akan diqurbankan mesti mempunyai
berat 250 kilo dan ke atas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-10'>
              <AccordionTrigger>
              Berapa had umur haiwan sembelihan qurban?
              </AccordionTrigger>
              <AccordionContent>
              Cukup umur - Unta: 5 tahun, lembu, kerbau dan kambing: 2 tahun, biri-biri:
setahun atau dah bersalin gigi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-11'>
              <AccordionTrigger>
              Saiz haiwan qurban mengikuti piawaian & syarat haiwan yang boleh diqurbankan
iaitu:
              </AccordionTrigger>
              <AccordionContent>
              Tak cacat & tak berpenyakit. Sebaik-baik haiwan qurban itu yang paling
banyak dagingnya, tapi berat & besar bukan asbab menjadikan qurban itu
tidak sah.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-12'>
              <AccordionTrigger>
              Bolehkah minta gambar qurban?
              </AccordionTrigger>
              <AccordionContent>
              Kami tidak menyediakan perkhidmatan gambar sembelihan qurban secara
individu atas faktor kuantiti haiwan qurban yang banyak dan tempoh
pelaksanaan qurban yang terhad. Jika tuan/puan ingin melihat gambar aktiviti
program sembelihan boleh layari https://www.tiktok.com/@sacrifice. Kami
akan cuba untuk mengemaskini gambar program-program sembelihan qurban
dari semasa ke semasa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-12'>
              <AccordionTrigger>
              Apakah kelebihan berqurban dengan e-qurban.com?
              </AccordionTrigger>
              <AccordionContent>
              Peserta akan memperolehi lima (5) kebaikan dari satu ibadat qurban iaitu
qurban, memberi peluang pekerjaan kepada asnaf, sedeqah daging qurban ke
pelbagai tempat di dalam negara dan luar negara, lebihan dari harga belian
lembu dan sumbangan qurban akan disumbangkan kepada Dana Waqf
Yayasan Madani. Agihan dari dana waqf tersebut akan dibahagikan kepada
70 peratus kepada pembangunan syiar Islam dan 30 peratus untuk aktiviti
dakwah di seluruh dunia.
              </AccordionContent>
            </AccordionItem>


          </Accordion>
        </div>

        <div className='mb-[15rem]'>
  <Accordion type='single' collapsible className='w-full'>
    <AccordionItem value='item-1'>
      <AccordionTrigger>
      Bolehkah kita buat qurban untuk orang lain?
      </AccordionTrigger>
      <AccordionContent>
      Boleh, tetapi wajib memberitahu kepada orang tersebut supaya ia berniat
qurban. Contohnya: seorang anak melaksanakan ibadah qurban untuk ibu
bapanya yang berada di kampung. Maka ibu bapanya perlu berniat, agar
ibadah qurbannya menjadi sempurna.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value='item-2'>
      <AccordionTrigger>
      Adakah perlu membuat akad perwakilan?
      </AccordionTrigger>
      <AccordionContent>
      Akad perwakilan perlu dibuat bagi orang yang mewakilkan pelaksanaan
ibadah qurban kepada urusetia program qurban. Akad perwakilan itu juga
memadai dengan niat oleh peserta qurban.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value='item-3'>
      <AccordionTrigger>
      Orang yang menanggung bebanan hutang, adakah boleh laksanakan qurban? 
      </AccordionTrigger>
      <AccordionContent>
      Jika hutang jangka panjang (long-term financial) seperti ansuran rumah,
ansuran kereta dan sebagainya adalah tidak termasuk dalam kategori hutang
yang dimaksudkan. Hutang yang membebankan diri sehingga tidak mampu
untuk membeli makanan atau barangan asas hidup, maka tidak perlu untuk
dia melakukan ibadah qurban.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value='item-4'>
      <AccordionTrigger>
      Bolehkah daging qurban diagihkan kepada orang bukan Islam?
      </AccordionTrigger>
      <AccordionContent>
      Tidak digalakkan, kerana daging tersebut disandarkan kepada sembelihan
ibadah.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value='item-5'>
      <AccordionTrigger>
      Apakah amalan sunat untuk orang yang melaksanakan qurban?
      </AccordionTrigger>
      <AccordionContent>
      Sunat tidak memotong kuku, menggugurkan bulu-bulu dan disunatkan juga
untuk berdoa bermula dari 1 Zulhijjah sehingga qurban dilaksanakan.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value='item-6'>
      <AccordionTrigger>
      Bolehkah gunakan duit bantuan atau sedekah untuk melaksanakan qurban?

      </AccordionTrigger>
      <AccordionContent>
      Boleh, bergantung kepada kemampuannya.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value='item-7'>
      <AccordionTrigger>
      Perlukah buat qurban lagi? Tahun lepas saya sudah buat?
      </AccordionTrigger>
      <AccordionContent>
      Perlu, kerana umat islam disunatkan melaksanakan ibadah qurban pada setiap
tahun.
      </AccordionContent>
    </AccordionItem>


    <AccordionItem value='item-8'>
      <AccordionTrigger>
      Apakah ibadah qurban yang terbaik?

      </AccordionTrigger>
      <AccordionContent>
      Ibadah Qurban yang dilaksanakan di tempat (qariah) sendiri, menyembelih
haiwan qurban sendiri, melihat sembelihan qurban (berwakil), mengagihkan
daging qurban sendiri. Sebaik-baik haiwan qurban adalah yang paling banyak
dagingnya. Haiwan qurban yang terbaik ialah unta, diikuti lembu dan kambing.
      </AccordionContent>
    </AccordionItem>


    <AccordionItem value='item-9'>
      <AccordionTrigger>
      Saya/anak saya belum diaqiqahkan, adakah boleh didahului dengan ibadah
qurban?
      </AccordionTrigger>
      <AccordionContent>
      Boleh. Jika sekiranya telah hampir waktu berqurban, adalah lebih baik
dilaksanakan ibadah qurban dahulu kerana waktu sembelihan ibadah qurban
hanya boleh dilakukan pada 10-13 Zulhijjah sahaja pada setiap tahun.
Manakala aqiqah boleh dilaksanakan bila-bila masa sepanjang tahun. Jika
berkemampuan boleh dilaksanakan kedua-duanya sekali.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value='item-10'>
      <AccordionTrigger>
      Di manakah tempat pelaksanaan e-qurban.com?
      </AccordionTrigger>
      <AccordionContent>
      E-qurban.com akan melaksanakan ibadah qurban di Semenanjung Malaysia
dan beberapa negara luar yang terpilih. 
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value='item-11'>
      <AccordionTrigger>
      Bilakah saya boleh mendapatkan sijil qurban?
      </AccordionTrigger>
      <AccordionContent>
      Sijil Pengesahan Qurban akan diposkan atau diemail (e-Cert) kepada para
pelanggan dalam masa satu hingga ke dua bulan selepas selesai pelaksanaan
ibadah qurban. 
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value='item-12'>
      <AccordionTrigger>
      Adakah memadai akad melalui borang/telefon sahaja?

      </AccordionTrigger>
      <AccordionContent>
      Ya, memadai. Transaksi yang berlaku ada ijab dan qabul, iaitu persetujuan
antara pembeli dan penjual samada secara lafaz ataupun melalui tulisan.
Terdapat bacaan akad pada borang online e-qurban.com bagi memenuhi
syarat-syarat sah qurban iaitu niat qurban dan mewakilkan pelaksanaan
qurban jika di luar kawasan. 
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div> */}

      {/* </div> */}
    </>
  );
};

export default Contactus;
