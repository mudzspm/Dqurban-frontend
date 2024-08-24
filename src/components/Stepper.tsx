function Stepper() {
  return (
    <ol className='flex items-center w-full mt-16 max-w-[900px] mx-auto'>
      <li className="flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-[#00ADB9] after:border-4 after:inline-block">
        <span className='shadow-[0px_4px_14px_0px_rgba(0,0,0,0.16)]  text-[1.5rem] font-bold flex items-center justify-center w-14 h-14 bg-[#00ADB9] rounded-full lg:h-12 lg:w-12 shrink-0'>
          1
        </span>
      </li>
      <li className="flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-[#00ADB9] after:border-4 after:inline-block">
        <span className='shadow-[0px_4px_14px_0px_rgba(0,0,0,0.16)] text-[1.5rem] font-bold flex items-center justify-center w-14 h-14 bg-[#00ADB9] rounded-full lg:h-12 lg:w-12 shrink-0'>
          2
        </span>
      </li>
      <li className="flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-[#00ADB9] after:border-4 after:inline-block">
        <span className='shadow-[0px_4px_14px_0px_rgba(0,0,0,0.16)] text-[1.5rem] font-bold flex items-center justify-center w-14 h-14 bg-[#00ADB9] rounded-full lg:h-12 lg:w-12 shrink-0'>
          3
        </span>
      </li>
      <li className="flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-[#00ADB9] after:border-4 after:inline-block">
        <span className='shadow-[0px_4px_14px_0px_rgba(0,0,0,0.16)] text-[1.5rem] font-bold flex items-center justify-center w-14 h-14 bg-[#00ADB9] rounded-full lg:h-12 lg:w-12 shrink-0'>
          4
        </span>
      </li>
      <li className='flex items-center text-white '>
        <span className='shadow-[0px_4px_14px_0px_rgba(0,0,0,0.16)] text-[1.5rem] font-bold flex items-center justify-center w-14 h-14 bg-[#00ADB9] rounded-full lg:h-12 lg:w-12 shrink-0'>
          5
        </span>
      </li>
    </ol>
  );
}

export default Stepper;
