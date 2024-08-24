// @ts-ignore
import FeedLotForm from '@/components/FeedLotForm';
import FeedLotCard from '@/components/FeedLotCard';
// @ts-ignore
import { getFeedlotList } from '.../../../../../context/actions/feedlodAction'; // Import your action creator
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { AppDispatch, RootState } from '@/store';
import FeedlotSearchForm from '@/components/FeedlotSearchForm';

function FeedLots() {
  const dispatch: AppDispatch = useDispatch();
  const { feedlotList } = useSelector((state: RootState) => state.feedlotReducer);
console.log(feedlotList);
  const [currentPage, setCurrentPage] = useState(0); // Initialize currentPage to 0
  const [searchParams, setSearchParams] = useState({}); // State to store search parameters
  const pageSize = 10;
 
console.log(feedlotList);

  useEffect(() => {
    // Fetch data based on currentPage, pageSize, and searchParams
    dispatch(getFeedlotList(currentPage + 1, pageSize, { ...searchParams }));
  }, [dispatch, currentPage, pageSize, searchParams]);

  const handleSearch = (searchParams :any) => {
    // Update search parameters state and reset current page to 0
    setSearchParams(searchParams);
    setCurrentPage(0);
  };



  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  // const totalPages = feedlotList.totalCount;
  const totalPages = Math.ceil(feedlotList?.totalCount / pageSize);
  // const totalPages = Math.ceil(feedlotList?.data?.length / pageSize);

  return (
    <div className='px-4 md:px-[140px] pb-[50px] md:pb-[227px]'>
      <div className='flex flex-col border-b-[1px] items-start px-4 md:px-[147px]'>
        <h2 className='text-2xl md:text-4xl font-bold mb-5'>
          Pilih lokasi FeedLot
        </h2>
        <div className='w-full'>
          <FeedlotSearchForm onSearch={handleSearch} />
        </div>
      </div>
      <div className='pt-[30px] md:pt-[84px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {feedlotList?.data?.map((e: any) => {
          return (
            <FeedLotCard dataProp={e} key={e.id} />
          );
        })}
      </div>

      {totalPages > 1 ? (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination flex justify-center gap-2 sm:gap-3"}
          activeClassName={"active"}
        />
      ) : null}
    </div>
  );
}

export default FeedLots;





// {/* <section className='max-w-[90rem] mx-auto py-16 '>
//   <div className='xl:px-20 lg:px-10 md:px-8 px-0'>

// <FeedLotForm />
//   </div>

//       <div className='mt-[60px]'>
//         <div className='flex flex-col gap-7 xl:px-20 lg:px-10 md:px-8 px-0 xl:mx-0 lg:mx-0 md:mx-2 mx-1'>
//         <h2 className='text-4xl font-bold mb-5'>
//           Select the location of FeedLot
//         </h2>
//           <div className='grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2  xl:gap-8 lg:gap-6 md:gap-3 gap-1 '>
//           <FeedLotCard />
//           <FeedLotCard />
//           <FeedLotCard />
//           <FeedLotCard />
//           <FeedLotCard />
            
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// }

// export default FeedLots;