// import { Button } from './ui/button';
// import { SERVER_URL } from "../constant/ServerUrl";
// import { useDispatch } from 'react-redux';
// // import { addToCart } from '../context/actions/cartActions'; 
// // @ts-ignore
// import { addToCart as AddToCartAction } from '../context/actions/cartActions';
// const addToCart: any = AddToCartAction;
// // @ts-ignore
// function WaqfPortionCard({ waqf } ) {
//   // debugger;
//   console.log(waqf);
//   const dispatch = useDispatch();

//   const handleIncrement = (animalid :any) => () => {
//     debugger;
//     console.log(animalid);
//     const quantityElem = document.getElementById(`quantity-${animalid}`);
//     if (quantityElem) {
//       const currentQuantity = parseInt(quantityElem.innerText);
//         quantityElem.innerText = (currentQuantity + 1).toString();
//     }
//   };

//   const handleDecrement = (animalid :any) => () => {
//     debugger;
//     console.log(animalid);
//     const quantityElem = document.getElementById(`quantity-${animalid}`);
//     if (quantityElem) {
//       const currentQuantity = parseInt(quantityElem.innerText);
//       if (currentQuantity > 1) {
//         quantityElem.innerText = (currentQuantity - 1).toString();
//       }
//     }
//   };

//   const handleAddToCart = (waqf :any) => {
//     debugger;
//     // Dispatch the addToCart action with the animal data
//     const quantityElem = document.getElementById(`quantity-${waqf.id}`);
//     let quantity=0;
//     if (quantityElem) {
//      quantity = parseInt(quantityElem.innerText);
//     }
    
//     dispatch(addToCart({ ...waqf, quantity }));
//   };

//   return    (                                                                                           
//     <div className='flex flex-col gap-[15px] w-[15.95rem] py-5 px-[18px] border-[1px] border-[#A7E0EA] rounded-[10px] hover:shadow-[0px_10px_21px_0px_rgba(0,0,0,0.25)] transition-all'>
//       <div className='flex gap-[15px]'>
//         <img className='w-[74px] h-[70px] gap-0 rounded-tl-8 opacity-0"' src={SERVER_URL + waqf.sub_pkg_image} alt='cow' />
//         <div className='flex flex-col gap-1'>
//           <p className='text-1xl font-semibold text-[#000]'>{waqf?.package?.name}  {waqf?.package?.pkg_type}</p>
//           <p className='flex gap-[6px]'>
//             <img
//               src='location.svg'
//               className='block'
//               width={13}
//               height={13}
//               alt='location'
//             />
//             {/* <span className='block text-xs text-[#969696]'>{waqf.supplier.region.name  +" , "+waqf.supplier.state.name +" , "+waqf.supplier.country.name }</span> */}
//             <span className='block text-xs text-[#969696]'>{waqf.package?.country?.name }</span>
//           </p>
//         </div>
//       </div>
//       <p className='text-xs font-light text-[#969696]'>
//       {/* {animal.portions ==1? "Minimum one whole goat for one participant." :"(Portion) Minimum one portion for one person."}   */}
//       {waqf.description}  
//       </p>
//       <p className='text-xs'>
//         <strong className='text-base text-[#000]'>RM {waqf?.price_per_unit}</strong> 
//         {/* per  {waqf.package.animal.has_portions ==true? "Portion" : "whole"} */}
//       </p>
//       {/* <p className="text-[#A3A3A3] font-montserrat text-xs font-normal leading-[14.63px]">
//   Stock: {waqf.available_stock} left
// </p> */}







//       <div className='flex p-2 rounded-[5px] border-[1px] items-center justify-between hover:border-[#53AFBE] hover:text-[#084059]'>
//         <div className='flex items-center gap-2'>
//           <Button
//             className='w-[1.563rem] h-[1.563rem] p-2 text-[#53AFBE] border-[#53AFBE] items-center hover:bg-transparent hover:text-[#53AFBE] border-[1px]'
//             variant='outline'
//             onClick={handleDecrement(waqf.id)}
//           >
//             <span className='mb-[2px]'>

//             -
//             </span>
//           </Button>
//           <p className='font-semibold text-[#1E1E1E]' id={`quantity-${waqf?.id}`}>01</p>
//           <Button
//             className=' w-6 h-6 p-1 font-semibold text-[#53AFBE] border-[#53AFBE] hover:bg-transparent items-center  hover:text-[#53AFBE] border-[1px] shadow-[0px_0px_2px_rgba(83, 175, 190, 0.53)]'
//             variant='outline'
//             onClick={handleIncrement(waqf?.id)}
//           >
//             <span className='mb-[2px]'>
//             +

//             </span>
//           </Button>
//         </div>
//         <p className='font-semibold text-2xl text-[#53AFBE] '>RM {waqf?.price_per_unit}</p>
        
//       </div>

//       <Button size='sm' variant='outline' className='xl:text-xl lg:text-base text-xs cursor-pointer' onClick={() => handleAddToCart(waqf)}>
//         Add to cart
//       </Button>
//     </div>
//   );
// }

// export default WaqfPortionCard;




import { useState } from 'react';
import { Button } from './ui/button';
import { SERVER_URL } from "../constant/ServerUrl";
import { useDispatch } from 'react-redux';
import { Dialog } from '@headlessui/react';
//@ts-ignore
import { addToCart as AddToCartAction } from '../context/actions/cartActions';
// @ts-ignore
import {formatPrice} from "../utils/utils.js";

const addToCart: any = AddToCartAction;

function WaqfPortionCard({ waqf }: any) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleIncrement = (animalid: any) => () => {
    const quantityElem = document.getElementById(`quantity-${animalid}`);
    if (quantityElem) {
      const currentQuantity = parseInt(quantityElem.innerText);
      quantityElem.innerText = (currentQuantity + 1).toString();
    }
  };

  const handleDecrement = (animalid: any) => () => {
    const quantityElem = document.getElementById(`quantity-${animalid}`);
    if (quantityElem) {
      const currentQuantity = parseInt(quantityElem.innerText);
      if (currentQuantity > 1) {
        quantityElem.innerText = (currentQuantity - 1).toString();
      }
    }
  };

  const handleAddToCart = (waqf: any) => {
    const quantityElem = document.getElementById(`quantity-${waqf.id}`);
    let quantity = 0;
    if (quantityElem) {
      quantity = parseInt(quantityElem.innerText);
    }
    dispatch(addToCart({ ...waqf, quantity }));
  };

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className='flex flex-col gap-[15px] w-[15.95rem] py-5 px-[18px] border-[1px] border-[#A7E0EA] rounded-[10px] hover:shadow-[0px_10px_21px_0px_rgba(0,0,0,0.25)] transition-all'>
      <div className='flex gap-[15px]'>
        <img className='w-[74px] h-[70px] gap-0 rounded-tl-8 ' src={SERVER_URL + waqf.sub_pkg_image} alt='cow' />
        <div className='flex flex-col gap-1'>
          <p className='text-1xl font-semibold text-[#000]'> 
            {/* {waqf?.package?.pkg_type } */}
            SADAQAH
            </p>
          <p className='flex gap-[6px]'>
            <img src='location.svg' className='block' width={13} height={13} alt='location' />
            <span className='block text-xs text-[#969696]'>{waqf.package?.country?.name}</span>
          </p>
          <p className='text-1xl font-semibold text-[#000]'>{waqf?.project_name} </p>

        </div>
      </div>
      <p className='text-xs font-larger text-base text-[#000]'><strong>{waqf.description}</strong></p>
      <p className='text-xs text-base text-[#000]'><strong>Kutipan Semsa : {formatPrice(waqf.totalContributed)}</strong></p>
      <p className='text-xs'>
        <strong className='text-base text-[#000]'>Nilai projek :  {formatPrice(waqf?.project_value)}</strong>
      </p>

      <Button    size="sm"
  variant="outline"
  className="xl:text-xl lg:text-base text-xs cursor-pointer text-[rgba(9,177,203,1)] border border-[rgba(9,177,203,1)] hover:border-[rgba(9,177,203,1)] hover:text-white hover:bg-[rgba(9,177,203,1)]"
 
 
  onClick={openDialog}>
        Baca Lagi
      </Button>

      {/* Dialog Component */}
      <Dialog open={isOpen} onClose={closeDialog} className="fixed w-screen inset-0 flex items-center justify-center p-4 ">
        <div className="bg-slate-100 rounded-lg shadow-lg w-1/4 max-w-80 pt-10">
          <h2 className=" mb-4 px-6"><strong>Projek:</strong> {waqf?.name}</h2>
          <p className="mb-4 px-6"><strong>Tarikh Bermula:</strong> {new Date(waqf?.project_start_date).toLocaleDateString()}</p>
          <p className="mb-4 px-6"><strong>Tarikh Berakhir:</strong>  {new Date(waqf?.project_closing_date).toLocaleDateString()}</p>
          <p className="mb-4 px-6"><strong>Maklumat Perinci:</strong>{waqf?.long_description}</p>

           {/* Adding pkg_info_link */}
           {waqf?.package?.pkg_info_link && (
            <div className="mb-4">
              <a href={waqf?.sub_pkg_link} target="_blank" rel="noopener noreferrer" className="text-[#00ADB9] hover:underline px-6">
              <strong>Pautan Maklumat Pakej</strong>
              </a>
            </div>
          )}
          {/* Assuming `images` is an array of image URLs */}
          {waqf?.images && waqf.images.length > 0 && (
            <div className="flex flex-wrap mb-4 px-6">
              {waqf.images.map((image: string, index: number) => (
                 <div key={index} className="w-1/2 p-2">
                <img key={index} src={SERVER_URL + image} alt={`Project image ${index + 1}`} className="w-20 h-auto mb-2" />
            </div>

              ))}
            </div>
          )}
         <div className="bg-[#00ADB9] py-6 sm:flex sm:flex-row-reverse sm:px-6 rounded-bl-lg rounded-br-lg">
          <Button onClick={closeDialog} className="bg-white text-black px-4 py-2 rounded">Tutup</Button>
          </div>
        </div>
      </Dialog>

      <div className='flex p-2 rounded-[5px] border-[1px] items-center justify-between hover:border-[#53AFBE] hover:text-[#084059]'>
        <div className='flex items-center gap-2'>
          <Button
            className='w-[1.563rem] h-[1.563rem] p-2 text-[#53AFBE] border-[#53AFBE] items-center hover:bg-transparent hover:text-[#53AFBE] border-[1px]'
            variant='outline'
            onClick={handleDecrement(waqf.id)}
          >
            <span className='mb-[2px]'>-</span>
          </Button>
          <p className='font-semibold text-[#1E1E1E]' id={`quantity-${waqf?.id}`}>1</p>
          <Button
            className='w-[1.563rem] h-[1.563rem] p-2 text-[#53AFBE]]'
            variant='outline'
            onClick={handleIncrement(waqf?.id)}
          >
            <span className='mb-[2px]'>+</span>
          </Button>
        </div>
        <p className='font-semibold text-2xl text-[#53AFBE]'>{formatPrice(waqf?.price_per_unit)}</p>
      </div>
      <Button size='sm' variant='outline' className='xl:text-xl lg:text-base text-xs cursor-pointer' onClick={() => handleAddToCart(waqf)}>
      Tambah ke Troli
      </Button>
    </div>
  );
}

export default WaqfPortionCard;
