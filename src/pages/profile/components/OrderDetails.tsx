import { ChevronLeft } from "lucide-react";
import { Tabs } from "flowbite-react";
// import AnimalIcon from '../icons/animal.png';
import VerticleTimeLine from "./VerticalTimeLine";
import PaymentHistory from "./paymentHistory";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/auth.jsx";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../../constant/ServerUrl";
import { formatDate } from "../../../lib/utils.js";
// @ts-ignore
import { formatPrice } from "../../..//utils/utils.js";
import { Button } from "../../../components/ui/button.js";
import { toast } from "react-toastify";

type OrderDetailsProps = {
  setShowOrderDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderDetails = ({ setShowOrderDetails }: OrderDetailsProps) => {
  // Dummy data for the sake of this example

  const token = useContext(AuthContext);
  

  const orderdetailString = localStorage.getItem("orderdetail");
  const orderdetail = orderdetailString ? JSON.parse(orderdetailString) : null;
  interface FamilyMember {
    id: number;
    orderHistoryId: number;
    familyMemberId: number;
    portions: number;
    familyMember: {
      fullname: string;
      ic_number: string;
    };
  }
  interface Item {
    created_at: string;
    has_portions: boolean;
    id: number;
    name: string;
    portions: number;
    price: string;
    updated_at: string;
  }
  interface Package {
    id: number;
    pkg_type: string;
    short_des: string;
    name: string;
    country_id: number;
    closing_date: string;
    pkg_price: string;
    pkg_image: string;
    pkg_quota: number;
    pkg_info: string;
    pkg_info_link: string;
    pkg_duration: number;
    created_at: string;
    updated_at: string;
  }
  interface Animal {
    animal: Item;
    sub_pkg_type: string;
    sub_pkg_image: string;
    package: Package;
  }
  interface OrderStatusHistoryItem {
    order_status: string;
    created_at: string;
  }
  interface PrincipalMember {
    fullname: string;
    ic_number: string;
    id: number;
    portions: number;
  }

  interface InstallmentsTypes {
    id: number;
    order_id: number;
    amount: string;
    due_date: string;
    status: string;
    created_at: string;
    updated_at: string;
    admin_fee: string;
    total_payable: string;
  }

  interface OrderHistoryOrganizationItem {
    UserOrganization: {
      organization: {
        id: number;
        org_type: string;
        is_deleted: boolean;
        created_at: string;
        updated_at: string;
      };
      id: number;
      name: string;
    };
    portions: number;
  }

  interface OrderDetails {
    id: number;
    animal_id: number;
    payment_id: string;
    address: string;
    portions: number;
    total_portions: number;
    installment_option: boolean;
    price: string; // Assuming this is a string, change the type accordingly
    payment_status: string;
    order_status: string;
    created_at: string;
    updated_at: string;
    order_id: string;
    principal_portions: PrincipalMember[];
    familyMembersPortions: FamilyMember[];
    OrderStatusHistory: OrderStatusHistoryItem[];
    OrderHistoryOrganization: OrderHistoryOrganizationItem[];
    package: Animal;
    installments: InstallmentsTypes[];
  }

  const [orderDetails, setorderDetails] = useState<OrderDetails>({
    id: 0,
    animal_id: 0,
    payment_id: "",
    address: "",
    portions: 0,
    total_portions: 0,
    price: "",
    installment_option: false,
    payment_status: "",
    order_status: "",
    created_at: "",
    updated_at: "",
    order_id: "",
    principal_portions: [],
    familyMembersPortions: [],
    OrderStatusHistory: [],
    OrderHistoryOrganization: [],
    // @ts-ignore
    installments: [],
    package: {
      animal: {
        created_at: "",
        has_portions: false,
        id: 0,
        name: "",
        portions: 0,
        price: "",
        updated_at: "",
      },
      sub_pkg_image: "",
      sub_pkg_type: "",
      package: {
        id: 0,
        pkg_type: "",
        short_des: "",
        name: "",
        country_id: 0,
        closing_date: "",
        pkg_price: "",
        pkg_image: "",
        pkg_quota: 0,
        pkg_info: "",
        pkg_info_link: "",
        pkg_duration: 0,
        created_at: "",
        updated_at: "",
      },
    },
  });

  useEffect(() => {
    const performCheckout = async () => {
      try {
        // const response = await axios.get(`http://52.77.157.79:3000/api/animal-inventory/get-orders/${orderdetail.id}`, {
        const response = await axios.get(
          `${SERVER_URL}api/animal-inventory/get-orders/${orderdetail.id}`,
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          }
        );
        console.log(response);
        if (response.status == 200) {
          setorderDetails({
            created_at: response.data.data.created_at,
            updated_at: response.data.data.updated_at,
            address: response.data.data.address,
            price: response.data.data.price,
            portions: response.data.data.total_portions,
            id: response.data.data.id,
            animal_id: response.data.data.animal_id,
            payment_id: response.data.data.payment_id,
            total_portions: response.data.data.total_portions,
            payment_status: response.data.data.payment_status,
            order_status: response.data.data.order_status,
            order_id: response.data.data.order_id,
            installment_option: response.data.data.installment_option,
            familyMembersPortions: response.data.data.familyMembersPortions,
            OrderStatusHistory: response.data.data.OrderStatusHistory,
            installments: response.data.data.installments,
            package: {
              animal: {
                id: response.data.data.package.animal?.id,
                name: response.data.data.package.animal?.name,
                portions: response.data.data.package.animal?.portions,
                has_portions: response.data.data.package.animal?.has_portions,
                price: response.data.data.package.animal?.price,
                created_at: response.data.data.package.animal?.created_at,
                updated_at: response.data.data.package.animal?.updated_at,
              },
              sub_pkg_image: response.data.data.package?.sub_pkg_image,
              sub_pkg_type: response.data.data.package?.sub_pkg_type,
              package: {
                id: response.data.data.package?.package?.id,
                pkg_type: response.data.data.package?.package?.pkg_type,
                short_des: response.data.data.package?.package?.short_des,
                name: response.data.data.package?.package?.name,
                country_id: response.data.data.package?.package?.country_id,
                closing_date: response.data.data.package?.package?.closing_date,
                pkg_price: response.data.data.package?.package?.pkg_price,
                pkg_image: response.data.data.package?.package?.pkg_image,
                pkg_quota: response.data.data.package?.package?.pkg_quota,
                pkg_info: response.data.data.package?.package?.pkg_info,
                pkg_info_link:
                  response.data.data.package?.package?.pkg_info_link,
                pkg_duration: response.data.data.package?.package?.pkg_duration,
                created_at: response.data.data.package?.package?.created_at,
                updated_at: response.data.data.package?.package?.updated_at,
              },
            },
            principal_portions: response.data.data.principal_portions,
            OrderHistoryOrganization:
              response.data.data.OrderHistoryOrganization,
          });
        } else {
          console.error("URL Checkout tidak ditemui sebagai balasan");
          // Handle error
        }
      } catch (error) {
        console.error("Ralat:", error);
        // Handle error
      }
    };

    // Call performCheckout when the component mounts
    performCheckout();
  }, [orderdetail?.id, token]); // Dependency array ensures the effect runs when 'orderdetail.id' or 'token' changes
  debugger;
  console.log(orderDetails.installments);
  console.log(orderDetails.installments[0]?.status);
  console.log(orderDetails.payment_status);
  console.log(orderDetails?.package?.package?.pkg_type);

  console.log(orderDetails);

  const handleCancelOrder = async () => {
    try {
      const response = await axios.put(
        `${SERVER_URL}api/animal-inventory/cancel-order/${orderDetails.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      console.log(response);
      toast.success(response.data.data);
    } catch (error: any) {
      toast.error(error.data.data);
    }
  };

  return (
    <div className="bg-white lg:min-w-[850px] md:p-10 shadow-xl border border-solid rounded-sm  mb-2">
      <h1 className="text-2xl font-bold text-gray-700 mb-2">
        Jejak Pesanan Anda
      </h1>
      <p className="mb-4">Dapatkan maklumat terkini </p>

      <div
        className="flex gap-2 mt-8 cursor-pointer"
        onClick={() => setShowOrderDetails(false)}
      >
        <ChevronLeft color="#00ADB9" />
        <p className="text-[14px] text-[#00ADB9]">Kembali</p>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="bg-white mb-4 flex gap-4 w-[25%]">
          <img
            className="w-full rounded mb-4"
            src={`${SERVER_URL}${orderDetails.package.sub_pkg_image}`}
            alt=" "
          />
        </div>
        <div className="w-[75%]">
          <div className="flex justify-between w-full pl-4">
            <div>
              <p className="font-bold lg:text-xl mb-2">Pesanan</p>
              <p className="font-bold lg:text-xl mb-2">
                {orderDetails.order_id}
              </p>
            </div>
            {/* <div className="rounded-[26px] h-[35px] px-6 py-[8px]  text-white bg-[#53AFBE] text-xs items-center justify-end">
              selesai
            </div> */}
            <div>
            {orderDetails?.package?.package?.pkg_type?.toLowerCase() !==
            "waqf" && (
            <Button
              size="sm"
              variant="outline"
              className="float-right"
              style={{ cursor: "pointer" }}
              onClick={handleCancelOrder}
            >
              Batalkan Pesanan
            </Button>
          )}
          </div>
          </div>
          
          
          <div className="flex justify-between mt-5 w-full pl-4 ">
            <p className="lg:text-xl font-semibold">
              {orderDetails?.package?.package?.pkg_type?.toLowerCase() !=
                "waqf" && ` ${orderDetails.package?.animal?.name}`}
              {orderDetails?.package?.package?.pkg_type?.toLowerCase() ===
              "waqf"
                ? " Sadaqah"
                : " " + orderDetails?.package?.package?.pkg_type}
            </p>

            <p className="font-semibold mr-2">
              x {orderDetails.total_portions}{" "}
              {orderDetails?.package?.package?.pkg_type?.toLowerCase() ===
              "waqf"
                ? "Unit"
                : orderDetails.package?.animal?.portions === 1
                ? "Unit"
                : "bahagian"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-4">
        <div className="w-[30%]">
          <p className="text-[#525252] text-sm mb-2">Pesanan dimasukkan</p>
          <p className="text-[14px] font-medium text-[#000000]">
            {formatDate(orderDetails.created_at)}
          </p>
        </div>
        {/* <div className='w-[30%]'>
          <p className='text-gray-600 text-sm mb-2'>Perform by</p>
          <p className='text-[14px]'>{orderDetails.updated_at}</p>
        </div> */}
        <div className="w-[30%]">
          <p className="text-gray-600 text-sm mb-2">Jenis Pakej</p>
          <p className="text-[14px]">{orderDetails.package?.package.name}</p>
        </div>
        <div className="w-[40%]">
          <p className="text-gray-600 text-sm mb-2">Lokasi Qurban</p>
          <p className="text-[14px]">{orderDetails.address}</p>
         
        </div>
      </div>

      <div className="flex mt-8 items-center">
        <div className="w-[30%]">
          <p className="text-[#525252] text-sm mb-2">Harga</p>
          <p className="text-[14px] font-medium text-[#000000]">
            {formatPrice(orderDetails.price)}
          </p>
        </div>
        <div className="w-[30%]">
          <p className="text-gray-600 text-sm mb-2">Status bayaran</p>
          <p className="text-[10px] lg:text-[14px]">
            {orderDetails.order_status}
          </p>
        </div>
        <div className="w-[40%]">
          <p className="text-gray-600 text-sm mb-4">Kaedah pembayaran</p>
          <p className="text-[10px] lg:text-[14px]">
            {orderDetails.payment_status}
          </p>
        </div>
      </div>

      {(orderDetails.installments?.some(
        (installment) => installment.status.toLowerCase() === "paid"
      ) ||
        orderDetails.payment_status === "PAYMENT_SUCCESS") &&
        orderDetails?.package?.package?.pkg_type?.toLowerCase() !== "waqf" && (
          <>
            <div className="flex justify-between">
              <div className="mt-4">
                {orderDetails.installment_option === false ? (
                  <Link
                    to="/SalesInvoice"
                    className="text-white bg-[#9747FF] text-[14px] cursor-pointer text-base font-medium rounded-md px-4 py-2"
                  >
                    Invois
                  </Link>
                ) : (
                  <Link
                    to="/InstallmentSalesInvoice"
                    className="text-white bg-[#9747FF] text-[14px] cursor-pointer text-base font-medium rounded-md px-4 py-2"
                  >
                    Invois
                  </Link>
                )}
              </div>

              <div className="mt-4">
                <Link
                  to="/participationdetails"
                  className="text-white bg-[#9747FF] text-[14px] cursor-pointer text-base font-medium rounded-md px-4 py-2"
                >
                  Butiran Penyertaan
                </Link>
              </div>

              <div className="mt-4">
                <Link
                  to="/Certificate"
                  className="text-white bg-[#9747FF] text-[14px] cursor-pointer text-base font-medium rounded-md px-4 py-2"
                >
                  E-Sijil
                </Link>
              </div>
            </div>
          </>
        )}

      {(orderDetails.installments?.some(
        (installment) => installment.status.toLowerCase() === "paid"
      ) ||
        orderDetails.payment_status === "PAYMENT_SUCCESS") &&
        orderDetails?.package?.package?.pkg_type?.toLowerCase() === "waqf" && (
          <>
           <div className="flex justify-between">
              <div className="mt-4">
                {orderDetails.installment_option === false ? (
                  <Link
                    to="/sadaqahinvoiceFully"
                    className="text-white bg-[#9747FF] text-[14px] cursor-pointer text-base font-medium rounded-md px-4 py-2"
                  >
                    Invois
                  </Link>
                ) : (
                  <Link
                    to="/sadaqahInvoiceInstallment"
                    className="text-white bg-[#9747FF] text-[14px] cursor-pointer text-base font-medium rounded-md px-4 py-2"
                  >
                    Invois
                  </Link>
                )}
              </div>

              <div className="mt-4">
                <Link
                  to="/Certificate"
                  className="text-white bg-[#9747FF] text-[14px] cursor-pointer text-base font-medium rounded-md px-4 py-2"
                >
                  E-Sijil
                </Link>
              </div>
            </div>
          </>
        )}

      <Tabs style="underline" className="mt-10 ">
        <Tabs.Item
          active
          title=" Garis Masa Pesanan"
          className="text-[#000000]"
        >
          <div className="mb-6 mt-8">
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Garis Masa Pesanan
            </h3>
            <VerticleTimeLine
              orderStatusHistory={orderDetails.OrderStatusHistory}
            />
          </div>
        </Tabs.Item>
        {orderDetails?.package?.package?.pkg_type?.toLowerCase() !== "waqf" && (
          <Tabs.Item title="Peserta">
            <div className="overflow-y-auto">
              {orderDetails?.principal_portions?.length > 0 && (
                <div>
                  <h1 className="font-bold mb-4">Peserta Utama</h1>
                  <table className="table-auto w-full">
                    <thead className="bg-[#EFEFEF] rounded-[5px]">
                      <tr>
                        <th className="px-4 py-2 text-left text-gray-600 rounded-[5px]">
                          No.
                        </th>
                        <th className="px-4 py-2 text-left text-gray-600">
                          Nama
                        </th>
                        <th className="px-4 py-2 text-left text-gray-600 ">
                          No. KP / Pasport
                        </th>
                        <th className="px-4 py-2 text-left text-gray-600 rounded-[5px]">
                          Kuantiti
                        </th>
                        <th className="px-4 py-2 text-left text-gray-600 rounded-[5px]">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails.principal_portions.map(
                        (participant, index) => (
                          <tr key={index} className="bg-white border-b">
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">
                              {participant?.fullname}
                            </td>
                            <td className="px-4 py-2">
                              {participant?.ic_number}
                            </td>
                            <td className="px-4 py-2">
                              {
                                // @ts-ignore
                                participant?.principle_portions
                              }{" "}
                              Bahagian
                            </td>
                            <div className="mt-2">
                <Link
                  to="/Certificate"
                  className="text-white bg-[#9747FF] text-[14px] cursor-pointer text-base font-medium rounded-md px-4 py-2"
                >
                  E-Sijil
                </Link>
              </div>
                          </tr>
                        )
                      )}
                      
                    </tbody>
                    
                  </table>
                </div>
              )}

              {orderDetails.OrderHistoryOrganization &&
                orderDetails.OrderHistoryOrganization.length > 0 && (
                  <>
                    <h1 className="font-bold mb-4">Peserta Organisasi</h1>
                    <table className="table-auto w-full">
                      <thead className="bg-[#EFEFEF] rounded-[5px]">
                        <tr>
                          <th className="px-4 py-2 text-left text-gray-600 rounded-[5px]">
                            No.
                          </th>
                          <th className="px-4 py-2 text-left text-gray-600">
                            Nama
                          </th>
                          <th className="px-4 py-2 text-left text-gray-600">
                            nama organisasi
                          </th>
                          <th className="px-4 py-2 text-left text-gray-600 rounded-[5px]">
                            Kuantiti
                          </th>
                          <th className="px-4 py-2 text-left text-gray-600 rounded-[5px]">
                          Action
                        </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderDetails.OrderHistoryOrganization.map(
                          (participant, index) => (
                            <tr key={index} className="bg-white border-b">
                              <td className="px-4 py-2">{index + 1}</td>
                              <td className="px-4 py-2">
                                {participant.UserOrganization.name}
                              </td>
                              <td className="px-4 py-2">
                                {
                                  participant.UserOrganization.organization
                                    .org_type
                                }
                              </td>
                              <td className="px-4 py-2">
                                {participant.portions} Bahagian
                              </td>
                              <div className="mt-2">
                <Link
                  to={`/Certificate/organization/${participant.UserOrganization.id}`}
                  className="text-white bg-[#9747FF] text-[14px] cursor-pointer text-base font-medium rounded-md px-4 py-2"
                >
                  E-Sijil
                </Link>
              </div>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </>
                )}
              {orderDetails.familyMembersPortions &&
                orderDetails.familyMembersPortions.length > 0 && (
                  <>
                    <h1 className="font-bold mb-4">Peserta Keluarga</h1>
                    <table className="table-auto w-full">
                      <thead className="bg-[#EFEFEF]  rounded-[5px]">
                        <tr>
                          <th className="px-4 py-2 text-left text-gray-600 rounded-[5px]">
                            No.
                          </th>
                          <th className="px-4 py-2 text-left text-gray-600">
                            Nama
                          </th>
                          <th className="px-4 py-2 text-left text-gray-600 ">
                            No. KP / Pasport
                          </th>
                          <th className="px-4 py-2 text-left text-gray-600 rounded-[5px]">
                            Kuantiti
                          </th>
                          <th className="px-4 py-2 text-left text-gray-600 rounded-[5px]">
                          Action
                        </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderDetails.familyMembersPortions.map(
                          (participant, index) => (
                            <tr key={index} className="bg-white border-b">
                              <td className="px-4 py-2">{index + 1}</td>
                              <td className="px-4 py-2">
                                {participant?.familyMember?.fullname}
                              </td>
                              <td className="px-4 py-2">
                                {participant?.familyMember?.ic_number}
                              </td>
                              <td className="px-4 py-2">
                                {participant?.portions} Bahagian
                              </td>
                              <div className="mt-2">
                <Link
                  to={`/Certificate/family/${participant?.familyMemberId}`}
                  className="text-white bg-[#9747FF] text-[14px] cursor-pointer text-base font-medium rounded-md px-4 py-2"
                >
                  E-Sijil
                </Link>
              </div>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </>
                )}
            </div>
          </Tabs.Item>
        )}

        {
          // @ts-ignore
          orderDetails?.installments?.length > 0 && (
            <Tabs.Item
              active
              title="Transaksi Ansuran"
              className="text-[#000000]"
            >
              <div className="mb-6 mt-8">
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Transaksi Ansuran
                </h3>
                <PaymentHistory
                  // @ts-ignore
                  orderDetails={orderDetails}
                />
              </div>
            </Tabs.Item>
          )
        }
      </Tabs>
    </div>
  );
};

export default OrderDetails;
