const joinUs = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-16 lg:ml-14">
      <div className="w-full lg:w-[42%] h-[500px] flex items-center justify-center">
        <img src='Group 149.svg' alt='Group 149' className='h-auto mr-3' />
      </div>
      <div className="flex flex-col justify-center mt-8 lg:mt-0 lg:ml-20 px-4 md:px-8 lg:px-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-[#0F405A] mr-0 lg:ml-[-2px]">Kenapa Anda Perlu Sertai Kami?</h1>
          {/* <p className="text-gray-600 mx-auto max-w-full md:max-w-[80%] lg:max-w-[452px] lg:mr-64 md:mr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
        </div>
        <div className="border rounded-lg shadow-md text-center grid grid-cols-2 md:grid-cols-4 gap-4 max-w-full lg:max-w-[566px]">
          <div className=" p-2 border-r-[1px] border-gray-300">
            <div className="text-2xl font-bold text-[#00ADB9]">20+</div>
            <p className="text-gray-600 mt-2">Memudahkan anda melaksanakan ibadah qurban melalui bayaran secara ansuran bermula dari serendah RM35 sebulan.</p>
          </div>
          <div className="p-2 border-r-[1px] border-gray-300">
            <div className="text-2xl font-bold text-[#00ADB9]">20+</div>
            <p className="text-gray-600 mt-2">Menyediakan peluang pekerjaan kepada asnaf yang terlibat dalam menyediakan bekalan haiwan ternakan.</p>
          </div>
          <div className="p-2 border-r-[1px] border-gray-300">
            <div className="text-2xl font-bold text-[#00ADB9]">20+</div>
            <p className="text-gray-600 mt-2">Menyalurkan pengagihan sedeqah daging qurban kepada golongan memerlukan.</p>
          </div>
          <div className="rounded-lg p-2">
            <div className="text-2xl font-bold text-[#00ADB9]">20+</div>
            <p className="text-gray-600 mt-2">Membantu anda terlibat dalam amalan waqf bermula dari serendah RM20 sebulan.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default joinUs;
