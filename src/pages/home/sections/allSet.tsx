import { Link } from 'react-router-dom';

const AllSet = () => {
  return (
    <>
      <div className="relative w-full h-auto lg:mt-24 lg:mb-24 md:mb-0 mb-[45rem] mt-0">
        <img
          src="Group 146.svg"
          alt="Group 146"
          className="w-full lg:h-[800px] md:h-[618px] sticky"
        />
        <div className="absolute top-0 right-0 left-100 p-1 lg:mr-48 md:ml-0 ml-[183px]">
        <div className="md:w-[100%] w-[87%] h-auto text-right">
            <p className="font-bold text-[#00ADB9] md:text-3xl twxt-2xl">
            Jika cukup syarat di atas, 
            </p>
            
           
            <p className="font-bold text-[#00ADB9] md:text-3xl twxt-2xl">sila mendaftar dengan kami dengan<br/> klik butang di bawah:​</p>
            
            {/* <a href="https://dev-admin.dqurban.com/login/Executor" target='blank'> <button className="bg-[#00ADB9] text-white rounded-lg md:px-20 px-16 py-2 mt-4 ml-[-24px]">
          Daftarlah sekarang
          </button></a> */}
           <Link to="/Executor">
      <button className="bg-[#00ADB9] text-white rounded-lg md:px-20 px-16 py-2 mt-4 ml-[-24px]">
        Daftarlah sekarang
      </button>
    </Link>
        </div>
        </div>
        <div className="relative z-[-1]">
          <img
            src="Frame 1000004544.svg"
            alt="Frame 1000004544"
            className="mt-[-55px] lg:w-full"
          />
          <div className="absolute top-0 left-0 w-full flex flex-col items-center">
            <h1 className="text-white mt-36 text-3xl mb-16">Amalan Infaq anda memberi manfaat kepada:​</h1>
            <div className="flex flex-wrap justify-center mt-4 md:mt-[-3.75rem] lg:mt-4 ">
            <div className="w-[7rem] md:w-[5rem] lg:w-[7rem] h-40 m-8 flex flex-col items-center">
  <img
    src="Fakir Miskin.jpg"
    alt="Fakir Miskin"
    className="w-full h-full object-cover rounded-full"
  />
  <p className="mt-2 text-sm text-center w-40 text-white">
    Fakir Miskin
  </p>
</div>

<div className="w-[7rem] md:w-[5rem] lg:w-[7rem] h-40 m-8 flex flex-col items-center">
  <img
    src="Penternak Haiwan.jpg"
    alt="Penternak Haiwan"
    className="w-full h-full object-cover rounded-full"
  />
  <p className="mt-2 text-sm text-center w-40 text-white">
    Penternak Haiwan
  </p>
</div>

<div className="w-[7rem] md:w-[5rem] lg:w-[7rem] h-40 m-8 flex flex-col items-center">
  <img
    src="Institusi Pendidikan.jpg"
    alt="Institusi Pendidikan"
    className="w-full h-full object-cover rounded-full"
  />
  <p className="mt-2 text-sm text-center w-40 text-white">
    Institusi Pendidikan
  </p>
</div>

<div className="w-[7rem] md:w-[5rem] lg:w-[7rem] h-40 m-8 flex flex-col items-center">
  <img
    src="Perekonomian Umat Islam.jpg"
    alt="Perekonomian Umat Islam"
    className="w-full h-full object-cover rounded-full"
  />
  <p className="mt-2 text-sm text-center w-40 text-white">
    Perekonomian UmatIslam
  </p>
</div>

<div className="w-[7rem] md:w-[5rem] lg:w-[7rem] h-40 m-8 flex flex-col items-center">
  <img
    src="Pembangunan Kewangan.jpg"
    alt="Pembangunan Kewangan"
    className="w-full h-full object-cover rounded-full"
  />
  <p className="mt-2 text-sm text-center w-40 text-white">
    Pembangunan Kewangan
  </p>
</div>

              {/* <div className="w-[7rem] md:w-[5rem] lg:w-[7rem] h-40 m-8 flex flex-col items-center ">
                <img
                  src="Fakir Miskin.jpg"
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
                <p className="mt-2 text-sm text-center w-40 text-white">
                Fakir Miskin
                </p>
              </div>
              <div className="w-[7rem] md:w-[5rem] lg:w-[7rem] h-40 m-8 flex flex-col items-center">
                <img
                  src="Penternak Haiwan.jpg"
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
                <p className="mt-2 text-sm text-center w-40 text-white">
                Penternak Haiwan
                </p>
              </div>
              <div className="w-[7rem] md:w-[5rem] lg:w-[7rem] h-40 m-8 flex flex-col items-center">
                <img
                  src="Institusi Pendidikan.jpg"
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
                <p className="mt-2 text-sm text-center w-40 text-white">
                Institusi Pendidikan
                </p>
              </div>
              <div className="w-[7rem] md:w-[5rem] lg:w-[7rem] h-40 m-8 flex flex-col items-center">
                <img
                  src=" Perekonomian Umat Islam.jpg"
                  alt="Image 4"
                  className="w-full h-full object-cover"
                />
                <p className="mt-2 text-sm text-center w-40 text-white">
                Perekonomian UmatIslam
                </p>
              </div>
              
              <div className="w-[7rem] md:w-[5rem] lg:w-[7rem] h-40 m-8 flex flex-col items-center">
              
                <img
                  src="Pembangunan Kewangan.jpg"
                  alt="Image 5"
                  className="w-full h-full object-cover"
                />
                
                <p className="mt-2 text-sm text-center w-40 text-white">
                Pembangunan Kewangan 
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSet;
