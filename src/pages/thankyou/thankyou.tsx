import { Link } from "react-router-dom";

const Thankyou = () => {
    return (
      <>
        
  
        <div className="flex h-screen items-center justify-center bg-gray-100 py-10">
  <div className="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 shadow-md">
    <div className="h-40 bg-[#2E6A7E] pt-10 sm:h-56">
      <img className="h-full w-full object-contain"  src="meat--.png" alt="" />
    </div>
    <div className="flex flex-col items-center bg-white px-4 py-10">
      <h2 className="mb-2 text-3xl font-bold text-[#2E6A7E] sm:text-4xl">Thank you!</h2>
      <p className="mb-8 font-medium text-gray-500">For supporting me with your donation</p>
      <Link to="/">
      <div className="flex items-center rounded-xl bg-[#2E6A7E] p-4">
        <img className="h-12 w-12 rounded-full border-4 border-white object-cover" src="meat--.png" />
        <div className="ml-4 w-56">
          <p className="font-medium text-white">Home Page</p>
        </div>
      </div>
      </Link>
    </div>
  </div>
</div>

      </>
    );
  };
  
  export default Thankyou;
  