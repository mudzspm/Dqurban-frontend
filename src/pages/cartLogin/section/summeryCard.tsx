import { useContext } from "react";
import { AuthContext } from "../../../context/auth.tsx";
import { Link,useNavigate  } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const SummeryCard = ({ items }: { items: any }) => {
  const  token = useContext(AuthContext);
  const navigate = useNavigate();
  const aqiqahItems = items.filter((item :any) => item?.package?.pkg_type?.toLowerCase().includes('aqiqah'));
const qurbanItems = items.filter((item :any) => item?.package?.pkg_type?.toLowerCase().includes('qurban'));
const waqfItems = items.filter((item: any) => item?.package?.pkg_type?.toLowerCase()?.includes("waqf"));
debugger;
  const handleProceed = () => {
    console.log(items)
    if (!items || items.length === 0) {
      toast.error('Sila pilih sekurang-kurangnya satu item.');
    } else {
      navigate('/Checkout');
    }
  };
  const totalItemsprice = items.reduce((total :any, item :any) => total + item.price, 0);
  return (
    <>
      <div className="px-[1.875rem]  lg:w-[26.688rem] h-[32.438rem] shadow-md bg-[#FFFFFF] mt-[4.125rem] rounded-[0.625rem]">
        <div className="border-b mt-[2.938rem] ">
          <p className="text-[#000000DE] text-2xl font-normal mb-3.5">
          Ringkasan
          </p>
        </div>

        {qurbanItems.length > 0 &&
          qurbanItems.map((item :any) => (
            <div className="border-b mt-[1.313rem]">
              <p className="text-base text-[#000] font-semibold">Qurban</p>

              <div className="flex justify-between mt-1.5">
                <p className="text-sm text-[#000000DE] font-normal">
                  Qurban {item?.name} /{" "}
                  {item?.per_portion_label}
                  {/* {item?.package?.animal?.portions == 1 ? "Whole" : "Portions"} */}
                </p>
                <p className="text-sm text-[#000000DE] font-normal">
                  RM {item?.actual_price} 
                </p>
                <p className="text-sm text-[#000000DE] font-normal">
                  x {item?.quantity}
                </p>
                <p className="text-sm text-[#000000DE] font-normal">
                  RM {item?.price}
                </p>
              </div>
            </div>
          ))}
        {aqiqahItems.length > 0 &&
          aqiqahItems.map((item :any) => (
            <div className="border-b mt-[1.313rem]">
              <p className="text-base text-[#000] font-semibold">Aqiqah</p>

              <div className="flex justify-between mt-1.5">
                <p className="text-sm text-[#000000DE] font-normal">
                  Aqiqah {item?.package?.animal?.name} /{" "}
                  {item?.per_portion_label}
                  {/* {item?.package?.animal?.portions == 1 ? "Whole" : "Portions"} */}
                </p>
                <p className="text-sm text-[#000000DE] font-normal">
                  RM {item?.actual_price}
                </p>
                <p className="text-sm text-[#000000DE] font-normal">
                  x {item?.quantity}
                </p>
                <p className="text-sm text-[#000000DE] font-normal">
                  RM {item?.price}
                </p>
              </div>
            </div>
          ))}
           {waqfItems.length > 0 &&
          waqfItems.map((item :any) => (
            <div className="border-b mt-[1.313rem]">
              <p className="text-base text-[#000] font-semibold">Sadaqah</p>

              <div className="flex justify-between mt-1.5">
                <p className="text-sm text-[#000000DE] font-normal">
                Sadaqah 
                  {/* {item?.package?.animal?.name} /{" "}
                  {item?.package?.animal?.portions == 1 ? "Whole" : "Portions"} */}
                </p>
                <p className="text-sm text-[#000000DE] font-normal">
                  RM {item?.price_per_unit}
                </p>
                <p className="text-sm text-[#000000DE] font-normal">
                  x {item?.quantity}
                </p>
                <p className="text-sm text-[#000000DE] font-normal">
                  RM {item?.price}
                </p>
              </div>
            </div>
          ))}

        <div className="flex justify-between mt-5">
          <p className="text-lg text-[#000000DE] font-normal">Jumlah</p>

          <p className="gap-2 flex items-center">
            <span className="text-base font-normal text-[#000000DE]">RM</span>
            <span className="text-xl font-normal text-[#000000DE]">
              {totalItemsprice}
            </span>
          </p>
        </div>
        <div className="mt-[3.25rem] text-center">
          {token === null ? (
            <Link to="/signin"    
            //  variant="progress"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)",
              }}
              className="block  text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none "
            >
              Log Masuk/Daftar Untuk Meneruskan
            </Link>
          ) : (
            <Link to='' onClick={handleProceed}
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)",
              }}
              className="block  text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none "
            >
              Hantar
            </Link>
          )}
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default SummeryCard;
