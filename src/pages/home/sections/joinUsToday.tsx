//@ts-ignore
import React, { useState } from 'react';

const joinUsToday = () => {
    const [activeButton, setActiveButton] = useState('pelapor');

    const handlePelaporClick = () => {
        setActiveButton('pelapor');
    };

    const handlePenyembelihClick = () => {
        setActiveButton('penyembelih');
    };

    return (
        <div className="w-[94%] h-[492px] mx-4 md:mx-16 gap-[35px] mt-10">
            <h1 className="text-4xl font-bold leading-7 mb-8 text-center md:text-left">Sertai Kami Hari Ini!</h1>
            <div className="w-[100%] h-auto md:h-[429px] gap-[78px]">
                <button
                    onClick={handlePelaporClick}
                    className={`w-[100px] h-[40px] md:w-[70px] md:h-[28px] gap-[10px] rounded-3xl text-sm mb-7 mr-4 ${activeButton === 'pelapor' ? 'bg-[#9747FF] text-white' : 'bg-white text-[#9747FF] border border-[#9747FF]'}`}
                >
                    Pelapor
                </button>
                <button
                    onClick={handlePenyembelihClick}
                    className={`w-[100px] h-[40px] md:w-[100px] md:h-[28px] gap-[10px] rounded-3xl text-sm mb-7 mr-4 ${activeButton === 'penyembelih' ? 'bg-[#9747FF] text-white' : 'bg-white text-[#9747FF] border border-[#9747FF]'}`}
                >
                    Penyembelih
                </button>
                <div className="w-[100%] h-auto md:h-[429px] flex flex-col md:flex-row">
                    <div className="w-full md:w-[45%] mb-4 md:mb-0">
                        {/* <img src="pelapor.svg" alt="pelapor" className="w-full h-auto" /> */}


                        {activeButton === 'pelapor' ? (
        <img src="pelapor.svg" alt="pelapor" className="w-full h-auto" />
      ) : (
        <img src="Pelaksana.svg" alt="penyembelih" className="w-full h-auto" />
      )}

                    </div>
                    <div className="md:ml-16">
                        <h1 className="text-2xl font-bold">
                            {activeButton === 'pelapor' ? 'Pelaksana Laporan' : 'Pelaksana Sembelihan'}
                        </h1>
                        <hr className="w-64 border-t-2" />
                        <div className="w-full md:w-[476px] text-md font-thin">
                            {activeButton === 'pelapor' ? (
                                <div className="pl-4">
                                    <ul className="list-disc">
                                        <li>Berperanan sebagai penyedia laporan aktiviti infa’ di kawasan terpilih.</li>
                                        <li>Bertanggungjawab memuat naik laporan ringkas dan beberapa gambar aktiviti berkaitan.</li>
                                        <li>Infa’ untuk makluman peserta infa’ dqurban.com</li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="pl-4">
                                    <ul className="list-disc">
                                        <li>Berperanan sebagai penyembelih haiwan ternakan untuk ibadah qurban dan aqiqah di kawasan terpilih.</li>
                                        <li>Bertanggungjawab melaksanakan aktiviti sembelihan mengikut hukum syara’.</li>
                                        <li>Membantu memastikan operasi sembelihan haiwan dilaksanakan dengan jayanya.</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default joinUsToday;
