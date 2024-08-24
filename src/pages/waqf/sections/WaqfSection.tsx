import WaqfPortionCard from '@/components/WaqfPortionCard ';
import ReactPaginate from 'react-paginate';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
 // @ts-ignore
import { getWaqf } from '.../../../../../context/actions/waqfActions.js'; // Import your action creator
import { RootState, AppDispatch } from '../../../store';
import { useParams } from 'react-router-dom';

function WaqfSection() {
  const { countryId } = useParams();
  // const dispatch = useDispatch();
  const dispatch: AppDispatch = useDispatch();
  const { waqf } = useSelector((state: RootState) => state.waqfReducer);
  const [currentPage, setCurrentPage] = useState(0); // Initialize currentPage to 0
  const pageSize = 10;
  const packageType = 'WAQF';
console.log(waqf);
  useEffect(() => {
    // Fetch data based on currentPage, pageSize, and searchParams
    dispatch(getWaqf(currentPage + 1, pageSize, { package_type: packageType,country_id :countryId }));
  }, [dispatch, currentPage, pageSize, packageType]);

  

  const handlePageChange = (pageNumber :any) => {
    setCurrentPage(pageNumber);
  };
debugger;
  const totalPages = Math.ceil(waqf.totalCount / pageSize);
  

  return (
    <section className='max-w-[90rem] mx-auto py-16'>

      <div className='mt-[60px]'>
        <div className='flex flex-col gap-7 md:px-20'>
         {/* Render title and cards for AQIQAH Individual */}
{Array.isArray(waqf.data) && waqf.data.length > 0  && (
  <>
    <h2 className='text-2xl font-normal md:pl-7 text-center'>SADAQAH</h2>
    <div className='flex flex-wrap justify-center gap-1'>
      {waqf.data
        // .filter((animal: any) => animal.sub_pkg_type.toLowerCase() === "individual")
        .map((waqf: any) => (
          <WaqfPortionCard key={waqf.id} waqf={waqf} />
        ))
      }
    </div>
  </>
)}
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
    </section>
  );
}

export default WaqfSection;
