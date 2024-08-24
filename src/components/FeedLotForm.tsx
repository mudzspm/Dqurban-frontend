function FeedLotForm() {
  return (
    <div className='border-b-[1px] pb-6'>
      <form className='max-w-[44rem] border-[3px] rounded-2xl flex'>
        <div className='flex flex-col gap-1 w-full py-[15px] pl-5 pr-1 border-r-[1px]'>
          <label
            className='text-[#C5C0C0] text-xs font-semibold'
            htmlFor='countries'
          >
            State
          </label>
          <select
            className='border-none w-full focus:ring-transparent p-0'
            id='countries'
            required
          >
            {/* <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option> */}
          </select>
        </div>

        <div className='flex flex-col gap-1 w-full py-[15px] pl-5 pr-1 border-r-[1px]'>
          <label
            className='text-[#C5C0C0] text-xs font-semibold'
            htmlFor='countries'
          >
            Region
          </label>
          <select
            className='border-none w-full focus:ring-transparent p-0'
            id='countries'
            required
          >
            {/* <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option> */}
          </select>
        </div>
      </form>
    </div>
  );
}

export default FeedLotForm;