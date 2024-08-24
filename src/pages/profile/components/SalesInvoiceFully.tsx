// import React from 'react';
import { useState ,useContext,useEffect} from 'react';
import axios from 'axios';
import { AuthContext } from "../../../context/auth.jsx";
import { SERVER_URL } from "../../../constant/ServerUrl";
// @ts-ignore
import html2pdf from 'html2pdf.js';
import { formatDate } from '../../../lib/utils.js';
// @ts-ignore
import {formatPrice} from "../../../utils/utils.js";

const SalesInvoiceFully = () => {

  // Function to generate the PDF document


  const token  = useContext(AuthContext);


const orderdetailString = localStorage.getItem('orderdetail');
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
  admin_fee:number;
}

interface Animal {
  actual_price:string,
    animal: Item;
  sub_pkg_type:string;
  sub_pkg_image: string;
  package:SubPackage;
}
interface SubPackage {
  id: number;
  pkg_type: string;
  short_des: string;
  name: string | null;
  country_id: number;
  pkg_price: string;
  pkg_image: string;
  pkg_quota: number;
  pkg_info: string;
  pkg_info_link: string;
  pkg_duration: number;
  text: string | null;
  installment_text: string | null;
  created_at: string;
  updated_at: string;
  is_active: boolean;
}

interface OrderStatusHistoryItem {
  order_status: string;
  created_at: string;
}
interface PrincipalMember {
  fullname: string;
  ic_number: string;
  id: number;
  principle_portions: number;
}
interface installments {
  due_date: string;
  total_payable:string;
  status:string;
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

interface Customer {
  fullname: string;
  ic_number: string;
  id: number;
}

interface OrderDetails {
  id: number;
  animal_id: number;
  payment_id: string;
  address: string;
  portions: number;
  total_portions: number;
  invoice_number: string;
  price: string; // Assuming this is a string, change the type accordingly
  payment_status: string;
  order_status: string;
  created_at: string;
  updated_at: string;
  order_id:string;
  installment_option:boolean,

  principal_portions:PrincipalMember[];
  installments:installments[];
  familyMembersPortions: FamilyMember[];
  OrderStatusHistory: OrderStatusHistoryItem[];
  OrderHistoryOrganization: OrderHistoryOrganizationItem[];
  package: Animal;
  customer: Customer;
}
const [adminFee, setAdminFee] = useState(0.00);
const [orderDetails, setorderDetails] = useState<OrderDetails>({
  id: 0,
  animal_id: 0,
  payment_id: "",
  address: "",
  portions: 0,
  installment_option:false,
  total_portions: 0,
  price: "",
  payment_status: "",
  order_status: "",
  created_at: "",
  updated_at: "",
  order_id:"",
  invoice_number:"",
  installments:[],
  principal_portions:[],
  familyMembersPortions: [],
  OrderHistoryOrganization: [],
  OrderStatusHistory:[],
  package: {
    animal: {
      created_at: "",
      has_portions: false,
      id: 0,
      name: "",
      portions: 0,
      price: "",
      updated_at: "",
      admin_fee:0,
    },
    actual_price:"",
    sub_pkg_image: "",
    sub_pkg_type:"",
    package: {
      id:0,
      pkg_type: "",
      short_des: "",
      name: "" ,
      country_id: 0,
      pkg_price: "",
      pkg_image: "",
      pkg_quota: 0,
      pkg_info: "",
      pkg_info_link: "",
      pkg_duration: 0,
      text: "",
      installment_text: "",
      created_at: "",
      updated_at: "",
      is_active: false,
    }
  },
  customer: {
    fullname: "",
    ic_number: "",
    id: 0,
  }
});


  useEffect(() => {
    const performCheckout = async () => {
      try {
        // const response = await axios.get(`http://52.77.157.79:3000/api/animal-inventory/get-orders/${orderdetail.id}`, {
          const response = await axios.get(`${SERVER_URL}api/animal-inventory/get-orders/${orderdetail.id}`, {
          headers: {
            Authorization: `Bearer ${token.token}`
          }
        });
        console.log(response);
        if (response.status==200) {
          debugger;
          setorderDetails({
            created_at: response.data.data.created_at,
            updated_at: response.data.data.updated_at,
            address: response.data.data.address,
            price:response.data.data.price,
            portions: response.data.data.total_portions,
            id: response.data.data.id,
            animal_id: response.data.data.animal_id,
            payment_id: response.data.data.payment_id,
            total_portions: response.data.data.total_portions,
            payment_status: response.data.data.payment_status,
            order_status: response.data.data.order_status,
            order_id:response.data.data.order_id,
            installment_option:response.data.data.installment_option,
            invoice_number:response.data.data.invoice_number,
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
                admin_fee:response.data.data.package.animal.admin_fee
              },
              sub_pkg_image: response.data.data.package?.sub_pkg_image,
              sub_pkg_type:response.data.data.package?.sub_pkg_type,
              actual_price:response.data.data.package?.actual_price,
              package: {
                id: response.data.data.package.id,
                pkg_type: response.data.data.package.package.pkg_type,
                short_des: response.data.data.package.package.short_des,
                name: response.data.data.package.package.name,
                country_id: response.data.data.package.package.country_id,
                pkg_price: response.data.data.package.package.pkg_price,
                pkg_image: response.data.data.package.package.pkg_image,
                pkg_quota: response.data.data.package.package.pkg_quota,
                pkg_info: response.data.data.package.package.pkg_info,
                pkg_info_link: response.data.data.package.package.pkg_info_link,
                pkg_duration: response.data.data.package.package.pkg_duration,
                text: response.data.data.package.package.text,
                installment_text: response.data.data.package.package.installment_text,
                created_at: response.data.data.package.package.created_at,
                updated_at: response.data.data.package.package.updated_at,
                is_active: response.data.data.package.package.is_active
              }
            },
            principal_portions: response.data.data.principal_portions ,
            OrderHistoryOrganization: response.data.data.OrderHistoryOrganization,
            customer: response.data.data.customer
          })
          const adminfee=response?.data?.data?.package?.animal?.admin_fee / response?.data?.data?.package?.animal?.portions;
          setAdminFee(adminfee);
        } else {
          console.error('URL Checkout tidak ditemui sebagai balasan');
          // Handle error
        }
      } catch (error) {

        // Handle error
      }
    };

    // Call performCheckout when the component mounts
    performCheckout();

  }, [orderdetail?.id, token]); // Dependency array ensures the effect runs when 'orderdetail.id' or 'token' changes
  
  // let indexList = 1;
  const convertToPDF = () => {
    const element = document.getElementById('invoice-container');

    // html2pdf().from(element).save();
    html2pdf().from(element).set({ filename: 'invoice.pdf' }).save();
  };


console.log(orderDetails);
console.log(adminFee);
// console.log(state);
  return (


     <>

     <button
  onClick={convertToPDF}
  className="absolute top-20 lg:top-60 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
Jana PDF Invois
</button>
    <div id="invoice-container" className="invoice-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>


    <br></br><div className="company-info" style={{ display: 'flex', justifyContent: 'space-between'  }}>
    <img src="logo.svg" alt="Digital Qurban" className="logo" style={{ width: '40%', height: 'auto' , textAlign:'left',marginLeft:'-23px' }} />
    <div style={{ textAlign: 'right', }}>
        <p>DIGITAL QURBAN SDN. BHD. (1356156-W)</p>
        <p>No 10.2, 2nd Floor Jalan Rimbun, 50350, </p>
        <p>Kuala Lumpur,Wilayah Persekutuan, Malaysia</p>
        <p>E-mel: sales@dqurban.com | Telefon: +6011-3584-0500</p>
    </div>
</div>
<br></br><br></br>



        <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '36px' , textDecoration: 'underline' }}>INVOIS JUALAN
        </h1>


        <div className="invoice-header" style={{ marginBottom: '20px' }}>

          <div style={{ textAlign: 'right' }}>
            <p><strong>NO. INVOIS:</strong> {orderDetails.invoice_number}</p>
          </div>
          <p><strong>BILL KEPADA</strong>
          {/* {orderDetails.invoice_number} */}
          </p>

          <p><strong></strong> {orderDetails.customer.fullname}</p>
          <p><strong></strong> {orderDetails.address}</p>
        </div>
        <br></br><br></br>
        {/* table 1 */}
        {/* { Invois: 1, Perkara: 'Abu Bin Ali', Jenis_Ruminan: '1', Jumlah_Ruminan: 'C-TJ008' }, */}
        <div className="invoice-items overflow-x-auto lg:overflow-visible">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Tarikh Invois</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Tarikh Akhir</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jenis Bayaran </th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Bulan Bayaran</th>

              </tr>
            </thead>
            <tbody>
                <tr >
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{formatDate(orderDetails.created_at)}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{
  orderDetails.installment_option === false
    ? "-"
    : orderDetails.installments.length === 0
      ? "-"
      // @ts-ignore
      : formatDate(new Date(Math.max(...orderDetails.installments.map(installment => new Date(installment.due_date)))))
}
 </td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{
                  orderDetails.installment_option === false
                  ? "Sekali Sahaja"
                  : orderDetails.installments.length === 0
                    ? "Sekali Sahaja"
                    : `Ansuran - ${orderDetails.installments.length} bulan`}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>-</td>

                </tr>

            </tbody>
            <tfoot>
              <tr>
                {/* <td colspan="4" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>Total:</td> */}
                {/* <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}><strong>RM {details.total.toFixed(2)}</strong></td> */}
              </tr>
            </tfoot>
          </table>
        </div>

        <br></br><br></br><br></br>

        <div className="invoice-items">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#00ADB7', textAlign: 'left' }}>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>ID Pesanan</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Perkara</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jenis Ruminan</th>
                {/* <th style={{ padding: '8px', border: '1px solid #ddd' }}>Code</th> */}
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Bahagian</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Harga (RM)</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Kos Pengurusan</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Jumlah</th>
              </tr>
            </thead>
            <tbody>

{/* {orderDetails?.principal_portions?.map((item) => {
  const currentIndex = indexList; // Store the current index
  indexList++; // Increment the index for the next iteration
  return ( */}
    <tr >
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{orderdetail.order_id}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{orderDetails.package.package.pkg_type}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{orderdetail.package.animal.name}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{orderDetails.portions}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{(parseInt(orderDetails.price) - (adminFee * orderDetails.portions)).toFixed(2)}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{(adminFee * orderDetails.portions).toFixed(2)}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{(parseFloat(orderDetails.price)).toFixed(2)}</td>
      {/* <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{parseFloat(orderDetails.package?.actual_price) * item.principle_portions}</td> */}
    </tr>
  {/* );
})} */}

{/* {orderDetails.familyMembersPortions.map((item) => {
  const currentIndex = indexList; // Store the current index
  indexList++; // Increment the index for the next iteration
  return (
    <tr key={`family_${currentIndex}`}>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{currentIndex}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.familyMember.fullname}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.portions}</td> */}
      {/* <td style={{ padding: '8px', border: '1px solid #ddd' }}>{orderDetails.package.animal.id}</td> */}
      {/* <td style={{ padding: '8px', border: '1px solid #ddd' }}>{((parseInt(orderDetails.package?.actual_price) * item.portions) - (adminFee * item.portions)).toFixed(2)}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{(adminFee * item.portions).toFixed(2)}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{parseFloat(orderDetails.package?.actual_price) * item.portions}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{parseFloat(orderDetails.package?.actual_price) * item.portions}</td>
    </tr>
  );
})} */}

{/* {orderDetails.OrderHistoryOrganization.map((item) => {
  const currentIndex = indexList; // Store the current index
  indexList++; // Increment the index for the next iteration
  return (
    <tr key={`organization_${currentIndex}`}>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{currentIndex}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.UserOrganization.name}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.portions}</td> */}
      {/* <td style={{ padding: '8px', border: '1px solid #ddd' }}>{orderDetails.package.animal.id}</td> */}
      {/* <td style={{ padding: '8px', border: '1px solid #ddd' }}>{((parseInt(orderDetails.package?.actual_price) * item.portions) - (adminFee * item.portions)).toFixed(2)}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{(adminFee * item.portions).toFixed(2)}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{parseFloat(orderDetails.package?.actual_price) * item.portions}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{parseFloat(orderDetails.package?.actual_price) * item.portions}</td>
    </tr>
  );
})} */}

            </tbody>



            {/* <tfoot>
              <tr>
                <td colSpan={6} style={{ backgroundColor: '#00ADB7', padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>Total:</td>
                <td style={{ backgroundColor: '#00ADB7', padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}><strong>RM {orderDetails.price}</strong></td>
              </tr>
            </tfoot>
            <tfoot>
              <tr>
                <td colSpan={6} style={{ backgroundColor: '#00ADB7', padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>Total Admin Fee:</td>
                <td style={{ backgroundColor: '#00ADB7', padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}><strong>RM { (orderDetails.total_portions *adminFee).toFixed(2)}</strong></td>
              </tr>
            </tfoot> */}

          </table>




          <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}>
      <p style={{ marginRight: '10px', marginTop: "15px",width: '73%',textAlign: 'right' }}>Jumlah keseluruhan (RM) :</p>
      <p style={{ color: '#1a202c',marginTop: "15px",marginLeft: '60px',width: '26%' }}>{formatPrice(orderDetails.price)}</p>
    </div>
    {
  orderDetails.installment_option && (
    <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}>
      <p style={{ marginRight: '10px', fontWeight: 'bold',marginTop: "12px",width: '73%',textAlign: 'right' }}>Jumlah sudah dibayar (RM) :</p>
      <p style={{ color: '#1a202c',marginTop: "12px",marginLeft: '60px',width: '26%'}}>{formatPrice(orderdetail?.installments[0]?.total_payable)}</p>
    </div>
     )
}
    <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}>
      <p style={{ marginRight: '10px', fontWeight: 'bold',marginTop: "12px",width: '73%',textAlign: 'right' }}>Jumlah perlu dibayar (RM) :</p>
      <p style={{ color: '#1a202c',marginTop: "12px",marginLeft: '60px',width: '26%'}}>{formatPrice(orderDetails.price)}</p>
    </div>



          <br></br><br></br>
          <p>Terima kasih kerana menyertai ibadah qurban bersama syarikat kami.</p>

          <div style={{marginTop: '20px'}}>
          <strong>TERMA DAN SYARAT</strong>
          <p>Bayaran penuh perlu dibayar selepas menerima invois ini. Tarikh akhir pembayaran ialah 30
          hari sebelum 10hb Zulhijjah setiap musim qurban.</p>
          </div>

          <p style={{marginTop: '20px', color: 'gray'}}>Penghasilan oleh Komputer.</p>

          <br></br><br></br>
          <p style={{   textAlign: 'center' }}>Hubungi: sales@dqurban.com | Telefon: +6011-3584-0500</p>
        </div>
      </div>
      </>
  );
};

export default SalesInvoiceFully;
