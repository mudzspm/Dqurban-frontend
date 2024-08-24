

const WatchVideo = () => {
  return (
    <>
      <div className="relative mt-[39rem] md:mt-36 w-full">
        <img src="Rectangle 2790.svg" alt="Rectangle 2790" className="w-full" />
        
        {/* Text and button section */}
        <div className="absolute inset-0 flex flex-col items-start justify-center pl-10 md:ml-16 ml-4 font-thin">
          <p className="bg-[#00ADB9] text-white p-4 md:w-[43%] w-full mt-[-40rem] ml-[-22px] md:mt-0 md:mr-8 lg:mr-10 xl:mr-12">
           
          <h1 className="text-3xl font-bold mb-4 text-[#ffffff] mr-0 lg:ml-[-2px]">Ikuti Perkembangan Kami Di Sini</h1>
           
         
         
          <li>Kami memuat naik pelbagai aktiviti kami secara digital.</li>   
           
          <li>Anda boleh mengetahui status semasa penyertaan anda dengan klik butang di bawah…</li>​ </p>

          <button className="flex items-center font-medium rounded-sm md:ml-20 lg:ml-[17rem] xl:ml-[18rem] ml-36 px-3 lg:py-2 py-2 md:py-1 mt-[-42px] bg-white text-[#00ADB9] md:mt-[-39px] xl:mt-[-35px]">
            <img src="Vector-icon-vedio.svg" alt="Vector-icon-vedio" className="mr-2" />
            Tonton Video
          </button>
        </div>
        
        {/* Video player section */}
        <div className="absolute inset-0 flex items-center justify-center md:ml-56 ml-4 md:mt-4 lg:mt-6 xl:mt-8">
          <div className="border-2 border-[#00ADB9] rounded-lg p-1 lg:ml-80 ml-0 md:ml-40 w-full max-w-[31rem] h-[21rem]">
            <video className="lg:w-full w-full h-full object-cover md:w-[375px]" controls>
              <source src="cow farm.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchVideo;
