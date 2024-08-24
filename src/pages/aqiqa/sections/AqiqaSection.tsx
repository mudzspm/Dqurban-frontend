import PortionCard from '@/components/PortionCard';
import SearchForm from '@/components/SearchForm';
import { Button } from '@/components/ui/button';
import ReactPaginate from 'react-paginate';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
 // @ts-ignore
import { getAnimalInventory } from '.../../../../../context/actions/animalInventioryActions'; // Import your action creator
import { RootState, AppDispatch } from '../../../store';
import { useParams } from 'react-router-dom';

function AqiqaSection() {
  const { countryId } = useParams();
  // const dispatch = useDispatch();
  const dispatch: AppDispatch = useDispatch();
  const { animalInventory } = useSelector((state: RootState) => state.animalInventoryReducer);
  const [currentPage, setCurrentPage] = useState(0); // Initialize currentPage to 0
  const [searchParams, setSearchParams] = useState({}); // State to store search parameters
  const pageSize = 10;
  const packageType = 'AQIQAH';

  useEffect(() => {
    // Fetch data based on currentPage, pageSize, and searchParams

    const params = {
      ...searchParams,
      package_type: packageType,
    };
    
    // @ts-ignore
    if (!searchParams?.country_id && countryId) {
      // @ts-ignore
      params.country = countryId;
    }

    dispatch(getAnimalInventory(currentPage + 1, pageSize, params));
    // dispatch(getAnimalInventory(currentPage + 1, pageSize, { ...searchParams, package_type: packageType }));
  }, [dispatch, currentPage, pageSize, packageType, searchParams]);

  const handleSearch = (searchParams :any) => {
    // Update search parameters state and reset current page to 0
    setSearchParams(searchParams);
    setCurrentPage(0);
  };

  const handlePageChange = (pageNumber :any) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(animalInventory.totalCount / pageSize);
  // const totalPages = animalInventory.totalCount;
  // const renderPagination = () => {
  //   return (
  //     <nav className="block w-full">
  //       <ul className="flex pl-0 rounded list-none flex-wrap">
  //         {[...Array(totalPages)].map((_, index) => (
  //           <li key={index}>
  //             <button
  //               className={`${
  //                 currentPage === index ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
  //               } block hover:text-white hover:bg-blue-500 border border-gray-300 px-3 py-2 mx-1 rounded`}
  //               onClick={() => handlePageChange(index)}
  //             >
  //               {index + 1}
  //             </button>
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>
  //   );
  // };

  return (
    <section className='max-w-[90rem] mx-auto py-16'>
      <SearchForm  onSearch={handleSearch} />

      <div className='mt-[60px]'>
        <div className='flex flex-col gap-7 md:px-20'>
         {/* Render title and cards for AQIQAH Individual */}
{Array.isArray(animalInventory.data) && animalInventory.data.length > 0  && (
  <>
    <h2 className='text-2xl font-normal md:pl-7 text-center'>Aqiqah Individual</h2>
    <div className='flex flex-wrap justify-center gap-1'>
      {animalInventory.data
        // .filter((animal: any) => animal.sub_pkg_type.toLowerCase() === "individual")
        .map((animal: any) => (
          <PortionCard key={animal.id} animal={animal} />
        ))
      }
    </div>
  </>
)}

{/* Render title and cards for AQIQAH Organization */}
{/* {Array.isArray(animalInventory.data) && animalInventory.data.length > 0 && animalInventory.data.some((animal: any) => animal.sub_pkg_type.toLowerCase() === "organization") && (
  <>
    <h2 className='text-2xl font-normal md:pl-7 text-center'>Aqiqah Organization</h2>
    <div className='flex flex-wrap justify-center gap-1'>
      {animalInventory.data
        .filter((animal: any) => animal.sub_pkg_type.toLowerCase() === "organization")
        .map((animal: any) => (
          <PortionCard key={animal.id} animal={animal} />
        ))
      }
    </div>
  </>
)} */}

          {/* {totalPages > 1 && renderPagination()} */}
          <ReactPaginate
              previousLabel={"Sebelum"}
              nextLabel={"Seterusnya"}
              breakLabel={"..."}
              pageCount={totalPages} // Corrected pageCount
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination flex  justify-center gap-3"}
              activeClassName={"active "}
            />
       
        </div>
      </div>
    <div className='flex justify-end items-center font-Montserrat text-[1.75rem] mt-4 mr-2'>
      <Button size='lg' variant='message'  >
      View Cart <span className='ml-2 mt-[2px]'>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
<path d="M20.3048 8.70711C20.6953 8.31658 20.6953 7.68342 20.3048 7.29289L13.9408 0.928932C13.5503 0.538408 12.9171 0.538408 12.5266 0.928932C12.1361 1.31946 12.1361 1.95262 12.5266 2.34315L18.1834 8L12.5266 13.6569C12.1361 14.0474 12.1361 14.6805 12.5266 15.0711C12.9171 15.4616 13.5503 15.4616 13.9408 15.0711L20.3048 8.70711ZM0.597656 9H19.5977V7H0.597656V9Z" fill="white"/>
</svg>
      </span>
      </Button>
    </div>
    </section>
  );
}

export default AqiqaSection;
