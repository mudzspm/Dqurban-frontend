import { useState } from 'react';

const Frequently = () => {
  const [openTab, setOpenTab] = useState(null);
//@ts-ignore
  const toggleTab = (index) => {
    setOpenTab(openTab === index ? null : index);
  };

  const faqs = [
    {
      question: "Mencari jawapan? Berikut adalah beberapa soalan yang sering ditanya atau hantar mesej kepada kami.",
      answer: "Ibadah Qurban ialah ibadah sembelihan haiwan ternakan seperti unta, lembu dan kambing yang dilakukan pada hari raya Aidil Adha iaitu; 10 Zulhijjah (selepas selesai solat hari raya) dan pada hari-hari Tasyrik berikutnya iaitu; 11, 12 ,13 Zulhijjah bertujuan untuk mendekatkan diri kepada Allah SWT."
    },
    {
      question: "Bolehkah buat satu bahagian lembu untuk satu keluarga?",
      answer: "Bahagian lembu qurban hanya untuk satu (1) nama peserta sahaja tetapi diharuskan bagi peserta itu untuk berniat (doa) sedekahkan pahala qurban itu kepada ahli keluarganya yang lain."
    },
    {
      question: "Bolehkah melaksanakan ibadah qurban untuk anak saya yang masih kecil?",
      answer: "Boleh, dengan tujuan mendidik anak melakukannya dan (dalam masa yang sama) ibubapa harus membimbing anak tersebut untuk berniat qurban."
    },
    {
      question: "Apakah hukum untuk melaksanakan ibadah qurban?",
      answer: "Hukum melaksanakannya adalah SUNAT MU’AKKADAH – iaitu sunat yang sangat dituntut melakukannya."
    },
    {
      question: "Bolehkah kita buat qurban untuk orang lain?",
      answer: "Boleh, tetapi wajib memberitahu kepada orang tersebut supaya ia berniat qurban. Contohnya: seorang anak melaksanakan ibadah qurban untuk ibubapanya yang berada di kampung. Maka ibu bapanya perlu berniat, agar ibadah qurbannya menjadi sempurna."
    },
    {
      question: "Adakah perlu membuat akad perwakilan?",
      answer: "Akad perwakilan perlu dibuat bagi orang yang mewakilkan pelaksanaan ibadah qurban kepada urusetia program qurban. Akad perwakilan itu juga memadai dengan niat oleh peserta qurban."
    },
    {
      question: "Orang yang menanggung bebanan hutang, adakah boleh laksanakan qurban?",
      answer: "Jika hutang jangka panjang (long-term financial) seperti ansuran rumah, ansuran kereta dan sebagainya adalah tidak termasuk dalam kategori hutang yang dimaksudkan. Hutang yang membebankan diri sehingga tidak mampu untuk membeli makanan atau barangan asas hidup, maka tidak perlu untuk dia melakukan ibadah qurban."
    },
    {
      question: "Adakah Qurban wajib dilakukan setiap tahun?",
      answer: "Qurban adalah sunnah muakkadah (sunat yang sangat dituntut) bagi mereka yang mampu, namun ia tidak diwajibkan."
    },
  ];

  return (
    <div className="w-full h-auto lg:mt-0 mt-96 md:mt-10">
      <div className="lg:w-[75%] w-[98%] lg:mx-40">
        <div className="w-full mx-4">
          <h1 className="font-medium text-3xl">Soalan Lazim</h1>
          <div className="w-[339px] text-sm mt-3 mb-6">
            <p>Rasa ingin tahu? Baca beberapa soalan lazim kami atau hubungi penyokong kami untuk bantuan.</p>
          </div>
        </div>

        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border py-2 rounded-md">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleTab(index)}>
                <div className="lg:text-sm text-sm lg:font-medium ml-2 text-[#53AFBE]">
                  {faq.question}
                </div>
                <img src="Vector 10.svg" alt="Vector" className="max-w-3 mr-2" />
              </div>
              {openTab === index && (
                <div className="mt-2 text-sm px-2">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frequently;
