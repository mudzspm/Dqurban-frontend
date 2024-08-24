import { Button } from './ui/button';
import { SERVER_URL } from "../constant/ServerUrl";
import { useDispatch } from 'react-redux';
// import { addToCart } from '../context/actions/cartActions'; 
// @ts-ignore
import { addToCart as AddToCartAction } from '../context/actions/cartActions';
const addToCart: any = AddToCartAction;
// @ts-ignore 
function PortionCard({ animal } ) {
  // debugger;
  console.log(animal);
  const dispatch = useDispatch();

  const handleIncrement = (animalid :any) => () => {
    console.log(animalid);
    const quantityElem = document.getElementById(`quantity-${animalid}`);
    if (quantityElem) {
      const currentQuantity = parseInt(quantityElem.innerText);
      if (currentQuantity < animal.available_stock) {
        quantityElem.innerText = (currentQuantity + 1).toString();
      }
    }
  };

  const handleDecrement = (animalid :any) => () => {
    console.log(animalid);
    const quantityElem = document.getElementById(`quantity-${animalid}`);
    if (quantityElem) {
      const currentQuantity = parseInt(quantityElem.innerText);
      if (currentQuantity > 1) {
        quantityElem.innerText = (currentQuantity - 1).toString();
      }
    }
  };

  const handleAddToCart = (animal :any) => {
    // Dispatch the addToCart action with the animal data
    const quantityElem = document.getElementById(`quantity-${animal.id}`);
    let quantity=0;
    if (quantityElem) {
     quantity = parseInt(quantityElem.innerText);
    }
    
    dispatch(addToCart({ ...animal, quantity }));
  };

  return    (                                                                                           
    <div className='flex flex-col gap-[15px] w-[15.95rem] py-5 px-[18px] border-[1px] border-[#A7E0EA] rounded-[10px] hover:shadow-[0px_10px_21px_0px_rgba(0,0,0,0.25)] transition-all'>
      <div className='flex gap-[15px]'>
        <img className='w-[74px] h-[70px] gap-0 rounded-tl-8 opacity-0"' src={SERVER_URL + animal?.sub_pkg_image} alt='cow' />
        <div className='flex flex-col gap-1 min-h-[105px]'>
          <p className='text-1xl font-semibold text-[#000]'>
            {/* {animal.name }   */}
            { animal.package?.pkg_type}
            </p>
          <p className='flex gap-[6px]'>
            <img
              src='location.svg'
              className='block'
              width={13}
              height={13}
              alt='location'
            />
            {/* <span className='block text-xs text-[#969696]'>{animal?.supplier?.region?.name  +" , "+animal?.supplier?.state?.name +" , "+animal?.supplier?.country?.name }</span> */}
            <span className='block text-xs text-[#969696]'>{animal.package?.country?.name }</span>
          </p>
          <p className='text-1xl font-semibold text-[#000]'>
            {animal.name }  
            {/* { animal.package?.pkg_type} */}
            </p>
        </div>
      </div>
      <strong className='text-xs font-larger text-[#000]'>
      {/* {animal.portions ==1? "Minimum one whole goat for one participant." :"(Portion) Minimum one portion for one person."}   */}
      {animal?.description}  
      </strong>
      <p className='text-xs'>
        {/* <strong className='text-base text-[#000]'>RM {animal?.actual_price}</strong> per  {animal?.package?.animal?.has_portions ==true? "Portion" : "whole"} */}
        <strong className='text-base text-[#000]'>RM {animal?.actual_price}</strong>   {animal?.per_portion_label }
      </p>
      <p className="text-[#A3A3A3] font-montserrat text-xs font-normal leading-[14.63px]">
      {animal?.stock_label}: {animal?.available_stock} 
</p>

      <div className='flex p-2 rounded-[5px] border-[1px] items-center justify-between hover:border-[#53AFBE] hover:text-[#084059]'>
        <div className='flex items-center gap-2'>
          <Button
            className='w-[1.563rem] h-[1.563rem] p-2 text-[#53AFBE] border-[#53AFBE] items-center hover:bg-transparent hover:text-[#53AFBE] border-[1px]'
            variant='outline'
            onClick={handleDecrement(animal?.id)}
          >
            <span className='mb-[2px]'>

            -
            </span>
          </Button>
          <p className='font-semibold text-[#1E1E1E]' id={`quantity-${animal?.id}`}>1</p>
          <Button
            className=' w-6 h-6 p-1 font-semibold text-[#53AFBE] border-[#53AFBE] hover:bg-transparent items-center  hover:text-[#53AFBE] border-[1px] shadow-[0px_0px_2px_rgba(83, 175, 190, 0.53)]'
            variant='outline'
            onClick={handleIncrement(animal?.id)}
          >
            <span className='mb-[2px]'>
            +

            </span>
          </Button>
        </div>
        <p className='font-semibold text-2xl text-[#53AFBE] '>RM {animal?.actual_price}</p>
        
      </div>

      <Button size='sm' variant='outline' className='xl:text-xl lg:text-base text-xs cursor-pointer' onClick={() => handleAddToCart(animal)}>
        {/* Add to cart */}
        Tambah ke Troli
      </Button>
    </div>
  );
}

export default PortionCard;
