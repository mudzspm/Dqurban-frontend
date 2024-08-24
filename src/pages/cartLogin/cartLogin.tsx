import PriceCard from './section/priceCard';
import SummeryCard from './section/summeryCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';


const CartLogin = () => {
  const { items } = useSelector((state: RootState) => state.cartReducer);

  return (
    <>
    <div>
      <div className='bg-[#F7F8FA] '>
        <div
          className='max-w-full h-[10.75rem] bg-red-600'
          style={{
            backgroundImage:
              'linear-gradient(0deg, #98CCD4 0%, #E3F4F6 85.52%, #FFF 100%)',
          }}
        />
        


{items.length > 0 ?

        <div className='md:flex justify-evenly sm:block'>
          <PriceCard  items={items} />

          <SummeryCard items={items.filter((item :any) => item.selected)} />
        </div>
:<div className='flex flex-col justify-center items-center py-[50px]'>

    <img  src='empty-cart.png'/>
    <p className='font-bold text-[22px] my-3'>Troli anda kosong</p>
    <Link to="/" className='bg-[#01ACBC] rounded-md text-white py-3 px-5'>Kembali ke rumah</Link>
  </div>
  }
      </div>
      </div>
    </>
  );
};

export default CartLogin;
