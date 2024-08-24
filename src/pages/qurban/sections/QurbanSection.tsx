import PortionCard from "@/components/PortionCard";
import SearchForm from "@/components/SearchForm";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { getAnimalInventory } from '.../../../../../context/actions/animalInventioryActions'; // Import your action creator
import { RootState, AppDispatch } from "../../../store";
// @ts-ignore
import { getAnimalInventory } from ".../../../../../context/actions/animalInventioryActions"; // Import your action creator
import { useParams } from 'react-router-dom';

function QurbanSection() {
  
  const { countryId } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { animalInventory } = useSelector(
    (state: RootState) => state.animalInventoryReducer
  );
  // debugger;
  console.log(animalInventory);
  // const { animalTypes = [] } = useSelector((state:RootState) => state.animalInventoryReducer);
  const [currentPage, setCurrentPage] = useState(0); // Initialize currentPage to 0
  const [searchParams, setSearchParams] = useState({}); // State to store search parameters

  const pageSize = 10;
  const packageType = "QURBAN";
  console.log(animalInventory);
  // Console.log(animalTypes);
  useEffect(() => {
    // Fetch data based on currentPage, pageSize, and searchParams
    const params = {
      ...searchParams,
      package_type: packageType,
    };
    debugger;
    // @ts-ignore
    if (!searchParams?.country_id && countryId) {
      // @ts-ignore
      params.country = countryId;
    }

    // dispatch(
    //   getAnimalInventory(currentPage + 1, pageSize, {
    //     ...searchParams,
    //     package_type: packageType,
    //   })
    // );
    dispatch(getAnimalInventory(currentPage + 1, pageSize, params));
  }, [dispatch, currentPage, pageSize, packageType, searchParams]);

  const handleSearch = (searchParams: any) => {
    // Update search parameters state and reset current page to 0
    setSearchParams(searchParams);
    setCurrentPage(0);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  // const totalPages = animalInventory.totalCount;
  const totalPages = Math.ceil(animalInventory.totalCount / pageSize);
  // const totalPages = Math.ceil(animalInventory?.data?.length / pageSize);

  return (
    <section className="max-w-[90rem] mx-auto py-16">
      <SearchForm onSearch={handleSearch} />

      <div className="mt-[60px]">
        <div className="flex flex-col gap-7 md:px-20">
        {Array.isArray(animalInventory.data) && animalInventory.data.length > 0  && (
  <h2 className='text-2xl font-normal md:pl-7 text-center'>Qurban </h2>
)}
          <div className="flex flex-wrap justify-center gap-1">
            {Array.isArray(animalInventory.data) &&
            animalInventory.data.length > 0 ? (
              animalInventory.data
                .map((animal: any) => (
                  <PortionCard key={animal.id} animal={animal
                    
                  } />
                ))
            ) : (
              <p>Tiada data tersedia.</p>
            )}
          </div>

          {/* {Array.isArray(animalInventory.data) && animalInventory.data.length > 0 && animalInventory.data.some((animal: any) => animal.sub_pkg_type.toLowerCase() === "organization") && (
  <h2 className='text-2xl font-normal md:pl-7 text-center'>Qurban Organization</h2>
)}
          <div className="flex flex-wrap justify-center gap-1">
            {Array.isArray(animalInventory.data) &&
            animalInventory.data.length > 0 ? (
              animalInventory.data
                .filter(
                  (animal: any) =>
                    animal.sub_pkg_type.toLowerCase() === "organization"
                )
                .map((animal: any) => (
                  <PortionCard key={animal.id} animal={animal} />
                ))
            ) : (
              <p>Tiada data tersedia.</p>
            )} */}
          </div>

          <ReactPaginate
            // previousLabel={"Previous"}
            // nextLabel={"Next"}
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
      
    </section>
  );
}

export default QurbanSection;
