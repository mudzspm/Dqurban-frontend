import { useEffect, useState  } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import { Checkbox } from "flowbite-react";
import "react-toastify/dist/ReactToastify.css";
// import Bufflow from "../icons/Rectangle 2765.png";
// @ts-ignore
import {formatPrice} from "../../../utils/utils.js";
import { UsersAPI } from "@/api/user";
import { useSelector } from "react-redux";
import axios from "axios";
import { AuthContext } from "../../../context/auth.tsx";
import { useContext } from "react";

// import Vector4 from "../../../../public/Vector4.png";
import { ToastContainer, toast } from "react-toastify";
// @ts-ignore
// import { removeFromCart } from "../../../context/actions/cartActions.js";
import { SERVER_URL } from "@/constant/ServerUrl.ts";
import { RootState, AppDispatch } from '../../../store.ts';
import { useDispatch } from 'react-redux';
 // @ts-ignore
import {addEmptyParticipants ,addParticipants} from '../../../context/actions/participantActions';
import {
  removeFromCart
   // @ts-ignore
} from "../../../context/actions/cartActions";
import moment from 'moment';


// import {  useNavigate } from 'react-router-dom';
const CheckOut = () => {
  const token = useContext(AuthContext);
  const { items } = useSelector((state: RootState) => state.cartReducer);
  // @ts-ignore
  const selecteditem = items.filter((item) => item.selected);
  // const { participantsSelected } = useSelector((state: RootState) => state.participantReducer);
  const [ participantsSelected,setParticipantsSelected] = useState([]);
  console.log("testing");
  console.log(participantsSelected);
  console.log(selecteditem[0]);

  // const [paymentMethod, setPaymentMethod] = useState("");
  const [organizations, setOrganizations] = useState([]);
  // const [name, setName] = useState('');
  // const [selectedOrganization, setSelectedOrganization] = useState('');
  // const [remarks, setRemarks] = useState('');
  const [orguserData, setUserData] = useState([]);
  const [orgParticipants, setOrgParticipants] = useState([]);
  const [familyParticipants, setFamilyParticipants] = useState([]);
  const [showDetails, setShowDetails] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [paymentOption, setPaymentOption] = useState("bayaranPenuh");
  const [installmentOption, setInstallmentOption] = useState(false);
  const [installmentMonthData, setInstallmentMonth] = useState([]);
  const [installmentData, setInstallmentData] = useState([]);
  // const [closingDate, setClosingDate] = useState('');
  const [installmentAllowed, setInstallmentAllowed] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

console.log(orguserData);
console.log("participantsSelected");
console.log(participantsSelected);

  const handleDropdownChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    if (selectedOption === "orgParticipant") {
      handleAddOrgParticipant();
    } else if (selectedOption === "familyParticipant") {
      handleAddFamilyParticipant();
    }
  };


  const handleOptionChange = (event:any) => {
    const value = event.target.value;
    setPaymentOption(value);
    if (value === "bayaranPenuh") {
      setInstallmentOption(false);
    } else if (value === "ansuran") {
      setInstallmentOption(true);
    }
  };
  useEffect(() => {
    const pkgType = selecteditem[0]?.package?.pkg_type?.toLowerCase();

    if (pkgType === 'qurban') {
      const monthsDiff = moment(selecteditem[0]?.calendar_event?.closing_date).diff(moment(), 'months', true);

      if (!selecteditem[0]?.animal?.has_installments || monthsDiff < 2) { // Assuming a condition on monthsDiff as example
        setInstallmentAllowed(false);
      } else {
        setInstallmentAllowed(true);
      }
    } else if(pkgType === 'aqiqah') {
      if (!selecteditem[0]?.animal?.has_installments ) { // Assuming a condition on monthsDiff as example
        setInstallmentAllowed(false);
      } else {
        setInstallmentAllowed(true);
      }// Enable installment for other package types or handle differently
    }
    else{
      setInstallmentAllowed(true);
    }
  }, []); 

  useEffect(() => {
    if (installmentOption) {
      const config = {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      };
      const pkgType = selecteditem[0]?.package?.pkg_type?.toLowerCase();

      if (pkgType === 'qurban') {
     const idToUse =  selecteditem[0]?.id;
    axios.get(`${SERVER_URL}api/animal-inventory/get-installment-months?package_detail_id=${idToUse}`, config)
        .then(response => {
          setInstallmentMonth(response.data.data);
        })
        .catch(error => {
          toast.error(error.response.data.error);
          setPaymentOption("bayaranPenuh");
          setInstallmentOption(false);
        });
      } else if (pkgType === 'aqiqah') {
        const allowedMonths = selecteditem[0]?.animal?.allowed_months;
        if (allowedMonths) {
          setInstallmentMonth(allowedMonths.split(',').map(Number));
        }
      } else if (pkgType === 'waqf') {
          // @ts-ignore
        setInstallmentMonth([2,3,4,5,6,7,8,9,10,11,12]);
      }
    }
  }, [installmentOption]);

  const handleSelectChange = (event :any) => {
    const selectedMonth = event.target.value; 
    setSelectedMonth(selectedMonth);
    if (installmentOption) {
      const config = {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      };
    //   const idToUse = selecteditem[0].package?.pkg_type?.toLowerCase() === "waqf"
    // ? selecteditem[0].id
    // : selecteditem[0].package?.id;
      axios.post(`${SERVER_URL}api/animal-inventory/create-installments`, { package_id: selecteditem[0].id, quantity   : selecteditem[0].quantity ,months: parseInt(selectedMonth) },config)

        .then(response => {
          setInstallmentData(response.data.data.data);
          // @ts-ignore
          // const closingDateEntry = response.data.data.data.find(entry => entry.closingDate);
          // setClosingDate(closingDateEntry ? new Date(closingDateEntry.closingDate).toLocaleDateString() : 'N/A');
        })
        .catch(error => {
          // console.error('There was an error fetching the installment data!', error);
          toast.error(error.response.data.error);
        });
    }
  };

  const dispatch: AppDispatch = useDispatch();
  // const navigate = useNavigate();
 
  useEffect(() => {
    selecteditem[0]?.package?.pkg_type?.toLowerCase() === "waqf" ? setShowDetails(false) : setShowDetails(true);
  },[]);

  useEffect(() => {
    // Perform any action you need after participantsSelected state changes
    console.log('participantsSelected updated:', participantsSelected);
  }, [participantsSelected]);

  const handleAddOrgParticipant = () => {
     // @ts-ignore
    setOrgParticipants(prevParticipants => [
      ...prevParticipants,
      {
        name: '',
        portions: 0,
        orgType: '',
        description: '',
        checked:false
      }
    ]);
  };

  const handleOrgNameChange = (index:any, value:any) => {
    setOrgParticipants(prevParticipants => {
      const updatedParticipants = [...prevParticipants];
       // @ts-ignore
      updatedParticipants[index].name = value;
      return updatedParticipants;
    });
  };
  
  // const handleOrgRemarksChange = (index:any, value:any) => {
  //   setOrgParticipants(prevParticipants => {
  //     const updatedParticipants = [...prevParticipants];
  //      // @ts-ignore
  //     updatedParticipants[index].description = value;
  //     return updatedParticipants;
  //   });
  // };

  const handleOrgNewCheckboxChange = (index:any) => {
    setOrgParticipants(prevParticipants => {
      const updatedParticipants = [...prevParticipants];
       // @ts-ignore
      updatedParticipants[index].checked = !updatedParticipants[index].checked;
      return updatedParticipants;
    });
  };
  
  const handleOrgNewQuantityChange = (index:any, value:any) => {
    setOrgParticipants(prevParticipants => {
      const updatedParticipants = [...prevParticipants];
       // @ts-ignore
      updatedParticipants[index].portions = parseInt(value, 10);
      return updatedParticipants;
    });
  };
  const handleOrgTypeChange = (e:any, index:any) => {
    const { value } = e.target;
    const [orgId, orgType] = value.split('-');
    setOrgParticipants(prevParticipants => {
      const updatedParticipants = [...prevParticipants];
       // @ts-ignore
      updatedParticipants[index].orgType = orgType;
      // Assuming orgId needs to be saved separately
       // @ts-ignore
      updatedParticipants[index].org_id = parseInt(orgId); 
      return updatedParticipants;
    });
  };

  const handleAddFamilyParticipant = () => {
     // @ts-ignore
    setFamilyParticipants(prevParticipants => [
      ...prevParticipants,
      {
        name: '',
        portions: 0,
        icNumber: '',
        checked:false
      }
    ]);
  };
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}api/organization`);
        const filteredOrganizations = response.data.data.filter(
          (org: any) => !org.is_deleted
        );
        console.log(filteredOrganizations);
        setOrganizations(filteredOrganizations);
      } catch (error:any) {
        toast.error("Ralat semasa mengambil organisasi:", error);
      }
    };

    fetchOrganizations();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        };
        const response = await axios.get(
          `${SERVER_URL}api/organization/user`,
          config
        );
        console.log(response.data.data);
        setUserData(response.data.data);
      } catch (error) {
        toast.error("Ralat semasa mengambil data pengguna:");
      }
    };

    fetchData();
  }, []);

  const [user, setUser] = useState({
    userData: { name: "", email: "", address: "", phone: "", icNumber: "" },
    favoriteParticipants: [{ id: 0, portions: 0, icNumber: "", name: "name", checked: false}],
  });

  const [participants, setParticipants] = useState([
    {
      id: user?.favoriteParticipants[0]?.id,
      portions: 0,
      icNumber: user?.favoriteParticipants[0]?.icNumber,
    },
  ]);

  const fetchUser = async () => {
    const response = await UsersAPI.getUser();
    if (response.data.data) {
      const data = response.data.data;
      setUser({
        userData: {
          name: data.fullname,
          email: data.email,
          icNumber: data.ic_number,
          address: data.address,
          phone: data.phone_no,
        },
        favoriteParticipants:
          data.FamilyMembers?.length > 0
            ? data.FamilyMembers?.map((mem: any) => ({
                id: mem.id,
                name: mem.fullname,
                icNumber: mem.ic_number,
              }))
            : [],
      });

      const updatedParticipants = [...participants];
      updatedParticipants[0]["id"] = data.FamilyMembers[0]?.id;
      setParticipants(updatedParticipants);
    }
  };

 // Initialize state with default values
 const [principalParticipant, setPrincipalParticipant] = useState({
  name: '',
  icNumber: '',
  checked: false,
  type:'principal',
  portions: 0 ,// Default quantity, adjust as needed
});
 // State for favorite participants

  useEffect(() => {
    fetchUser();   
    // handleChange(0, "id", user.favoriteParticipants[0].id);
  }, []);

  useEffect(() => {
    setPrincipalParticipant(prev => ({
        ...prev,
        name: user.userData.name,
        icNumber: user.userData.icNumber
    }));
}, [user])
// Event handler for checkbox changes
const handleCheckboxChange = (e:any) => {
    setPrincipalParticipant(prevState => ({
        ...prevState,
        checked: e.target.checked
    }));
};

// Event handler for quantity changes
const handleQuantityChange = (e:any) => {
    setPrincipalParticipant(prevState => ({
        ...prevState,
        portions: parseInt(e.target.value, 10) // Ensure the quantity is an integer
    }));
};

// Event handler for checkbox changes
const handleExistingCheckboxChange = (index: number) => {
  setUser(prevState => ({
    ...prevState,
    favoriteParticipants: prevState.favoriteParticipants.map((participant, i) => 
      i === index ? { ...participant, checked: !participant.checked } : participant
    )
  }));
};

// Event handler for quantity changes
const handleExistingQuantityChange = (index: number, value: string) => {
  setUser(prevState => ({
    ...prevState,
    favoriteParticipants: prevState.favoriteParticipants.map((participant, i) => 
      i === index ? { ...participant, portions: parseInt(value, 10) } : participant
    )
  }));
};

const handleNewParticipantCheckboxChange = (index:any) => {
  setFamilyParticipants(prevParticipants => {
    const updatedParticipants = [...prevParticipants];
     // @ts-ignore
    updatedParticipants[index].checked = !updatedParticipants[index].checked;
    return updatedParticipants;
  });
};

const handleNewParticipantQuantityChange = (index:any, value:any) => {
  setFamilyParticipants(prevParticipants => {
    const updatedParticipants = [...prevParticipants];
     // @ts-ignore
    updatedParticipants[index].portions = parseInt(value, 10);
    return updatedParticipants;
  });
};

const handleNewParticipantNameChange = (index:any, value:any) => {
  setFamilyParticipants(prevParticipants => {
    const updatedParticipants = [...prevParticipants];
     // @ts-ignore
    updatedParticipants[index].name = value;
    return updatedParticipants;
  });
};

const handleNewParticipantICNumberChange = (index:any, value:any) => {
  if (/^\d{0,12}$/.test(value)) {
  setFamilyParticipants(prevParticipants => {
    const updatedParticipants = [...prevParticipants];
     // @ts-ignore
    updatedParticipants[index].icNumber = value;
    return updatedParticipants;
  });
}
};

const handleOrgCheckboxChange = (index:any) => {
  setUserData(prevOrgUserData => {
    const updatedOrgUserData = [...prevOrgUserData];
     // @ts-ignore
    updatedOrgUserData[index].checked = !updatedOrgUserData[index].checked;
    return updatedOrgUserData;
  });
};

const handleOrgQuantityChange = (index:any, value:any) => {
  setUserData(prevOrgUserData => {
    const updatedOrgUserData = [...prevOrgUserData];
     // @ts-ignore
    updatedOrgUserData[index].portions = parseInt(value, 10);
    return updatedOrgUserData;
  });
};


const handleReviewAndCheckout = () => {
 
  dispatch(addEmptyParticipants());
  // Combine checked participants from all sources
  const checkedParticipants = [
     // @ts-ignore
    ...orguserData.filter(participant => participant.checked === true),
     // @ts-ignore
    ...orgParticipants.filter(participant => participant.checked === true),
     // @ts-ignore
    ...familyParticipants.filter(participant => participant.checked === true),
    ...user.favoriteParticipants.filter(participant => participant.checked === true),
    ...(principalParticipant.checked ? [principalParticipant] : []) // Check if principal participant is checked
  ];
  const totalCheckedPortions = checkedParticipants.reduce((total, participant) => total + participant.portions, 0);
  console.log("checkout and review");
  console.log(checkedParticipants);
  if (selecteditem[0].quantity !== totalCheckedPortions) {
    toast.error("Kuantiti tidak sepadan dengan jumlah bahagian peserta yang diperiksa.");
    return;
  }
  const hasInvalidData = checkedParticipants.some(participant => {
    if (
       // @ts-ignore
      (participant.name =='' || participant.orgType =='' ) || // For orgUserData and orgParticipants
      (participant.name =='' || participant.icNumber=='' ) // For familyParticipants and user.favoriteParticipants
    ) {
      toast.error("Data peserta tidak sah dikesan.");
      return true; // Indicate an error and halt further processing
    }
  });
  
  if (hasInvalidData) {
    return; // Halt further processing if any participant has invalid data
  }
  // Dispatch action to add checked participants to Redux store
  dispatch(addParticipants(checkedParticipants, {
    price: selecteditem[0].price,
    portions: selecteditem[0].quantity,
    country_id: selecteditem[0]?.supplier?.country?.id,
    package_id: selecteditem[0].id,
    total_portions: selecteditem[0].quantity
  }));
  setParticipantsSelected(
     // @ts-ignore
     checkedParticipants);
  
  setShowDetails(false);
  
  // navigate('/checkout2');
};

const handleAcceptCheckboxChange = (e:any) => {
  setIsChecked(e.target.checked);
};

 // Inner async function to handle the API call
 const performCheckout = async () => {
  setIsButtonDisabled(true);
  if(installmentOption== true && selectedMonth ==1)
  {
    toast.error("please select installment month");
    setIsButtonDisabled(false);
    return true;
  }
  if(selecteditem[0]?.package?.pkg_type?.toLowerCase() != ("waqf"))
  {
    if (!isChecked) {
      const qurbanMessage = `Sebelum meneruskan pembelian, pastikan anda telah memilih syarat-syarat haiwan Qurban untuk pengorbanan.`;
      const aqiqahMessage = `Sebelum meneruskan pembelian, pastikan anda telah memilih syarat-syarat haiwan Aqiqah untuk pengorbanan.`;
      
      const message = selecteditem[0]?.package?.pkg_type?.toLowerCase().includes("qurban") ? qurbanMessage : aqiqahMessage;
      
      toast.error(message);
      setIsButtonDisabled(false);
      return;
    }
  }
  const principalPortions = participantsSelected
.filter(participant =>
   // @ts-ignore
    participant.type === "principal")
.map(participant => 
   // @ts-ignore
   participant.portions);
console.log(installmentOption)

const isWaqf = selecteditem[0]?.package?.pkg_type?.toLowerCase().includes("waqf");
let data = {};

if(isWaqf)
{
  data = {
    // price: selecteditem[0]?.price,
    // @ts-ignore
    price :installmentOption ? installmentData[0].totalPayable : selecteditem[0]?.price,
    package_id:  selecteditem[0]?.id,
    total_portions: selecteditem[0]?.quantity,
    installment_option:installmentOption,
    months : selectedMonth,
    waqf_order: true,    
  };
}
else{

   data = {
    // price: selecteditem[0]?.price,
    // @ts-ignore
    price :installmentOption ? installmentData[0].totalPayable : selecteditem[0]?.price,
    portions: principalPortions.length > 0 ? principalPortions[0] : 0,
    // animal_id: selecteditem[0]?.id,
    // [isWaqf ? 'package_id' : 'animal_id']: selecteditem[0]?.id,
    package_id:  selecteditem[0]?.id,
    total_portions: selecteditem[0]?.quantity,
    months : selectedMonth,
    installment_option:installmentOption,
    waqf_order: false,
    familyMembers: [], // Fill this array with family members data
    organizationMembers: [], // Fill this array with organization members data
  };
}
   // Ensure months is an integer

  // {selecteditem[0]?.sub_pkg_type === "ORGANIZATION" ? (
  //   //   // Prepare organization members data
  //   // // Example:
  //    // @ts-ignore
  //   data.organizationMembers = participantsSelected.filter(member => 
  //      // @ts-ignore
  //      member.type !== "principal").map(member => ({
  //      // @ts-ignore
  //     id: member.id,
  //      // @ts-ignore
  //     org_id: member.org_id,
  //      // @ts-ignore
  //     name: member.name,
  //      // @ts-ignore
  //     description: member.description,
  //      // @ts-ignore
  //     portions: member.portions,
  //   }))
  //   ):(
  //   // Prepare family members data
  //   // Example: 
  //    // @ts-ignore
  //   data.familyMembers = participantsSelected.filter(member =>
  //      // @ts-ignore
  //       member.type !== "principal").map(member => ({
  //      // @ts-ignore
  //     id: member.id,
  //      // @ts-ignore
  //     portions: member.portions,
  //      // @ts-ignore
  //     fullname: member.name,
  //      // @ts-ignore
  //     ic_number: member.icNumber,
  //   }))
  //   )}
  participantsSelected.forEach(member => {
    // @ts-ignore
    if (member.type !== "principal") {
      const commonData = {
        // @ts-ignore
        id: member.id,
        // @ts-ignore
        portions: member.portions,
       
      };
// @ts-ignore
      if (member.org_id) {
        // @ts-ignore
        data.organizationMembers.push({
          ...commonData,
          // @ts-ignore
          org_id: member.org_id,
          // @ts-ignore
          description: member.description,
           // @ts-ignore
        name: member.name,
        });
      } else {
        // @ts-ignore
        data.familyMembers.push({
          // @ts-ignore
          ...commonData,
          // @ts-ignore
          ic_number: member.icNumber,
           // @ts-ignore
           fullname: member.name,
        });
      }
    }
  });
  console.log(data);
  try {
    // const response = await axios.post('http://52.77.157.79:3000/api/animal-inventory/place-order', data, {
      const response = await axios.post(`${SERVER_URL}api/animal-inventory/place-order`, data, {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    });
    console.log(response.data);
    if (response.data && response.data.data.checkout_url) {
      // Redirect to the checkout URL
      // const selectedIndex = items.findIndex((item :any) => item.selected==true);
      // dispatch(removeFromCart(items[selectedIndex].id));
      dispatch(removeFromCart(selecteditem[0].id));
      window.location.href = response.data.data.checkout_url;
    } else {
      // console.error('URL Checkout tidak ditemui sebagai balasan');
      toast.error(response.data.data);
      setIsButtonDisabled(false);
      // Handle error
    }
  } catch (error :any) {
    setIsButtonDisabled(false);
    console.error('Error:', error);
    console.error(error.response.data.error);
    toast.error(error.response.data.error)
    // Handle error
  }
};

console.log(principalParticipant);
console.log(user);
console.log(familyParticipants);
console.log(orguserData);
console.log(orgParticipants);
console.log(selecteditem[0]);

  return (
    <>
    {showDetails ? (
    <div>
      <div className="bg-[rgb(247,248,250)] ">
        <br></br>
        <br></br>
        <p className="xl:text-xl lg:text-xl text-xl font-bold   text-center max-w-[1140px] mx-auto">
          Bayar
        </p>
        <br></br> <br></br>
        <p className="xl:text-xl lg:text-l text-l    text-center max-w-[1140px] mx-auto">
          Jika anda belum menambah mana-mana peserta kemudian klik pada butang
          dan tambah untuk meneruskan pembayaran
          <br></br>
          <br></br>
          <a href="profile">
            <button className="bg-[#09B1CB] text-white py-1 px-2 rounded-md mr-4 ">
              Tambah Peserta
             
            </button>
          </a>
        </p>
        <div
          className="max-w-full h-[10.75rem] bg-red-600"
          style={{
            backgroundImage:
              "linear-gradient(0deg, #98CCD4 0%, #E3F4F6 85.52%, #FFF 100%)",
          }}
        />
        <div className="flex flex-wrap justify-evenly mb-5">
          {/* Left side content */}
          <div className="mt-[4.125rem] lg:w-[50%] ">
            {" "}
            {/* Adjust width as needed */}
            <h1 className="text-2xl font-bold mb-4">Butiran Peserta</h1>
            <p className="mb-6 text-sm text-gray-300">
              Pengesahan tempahan akan dihantar melalui e-mel dan kemas kini
              tersedia untuk dijejaki melalui halaman akaun.
            </p>
            {/* {selecteditem[0]?.sub_pkg_type !== "ORGANIZATION" ? ( */}
            <div className="px-[1.875rem] pb-5  shadow-md bg-[#FFFFFF] mt-[4.125rem] rounded-[0.625rem]">
          
              <h2 className="text-lg mb-2">Peserta 1 - Utama </h2>
              <label className="inline-flex items-center">
    <Checkbox className="mr-5"   checked={principalParticipant.checked}
                onChange={handleCheckboxChange}/> {/* Checkbox */}
             Sila klik kotak semak untuk menambah peserta
</label>
              <div className="mb-4 flex justify-between">
                <div className="w-1/2 mr-2">
                  <label className="block mb-2">nama peserta</label>

                  <input
                    type="text"
                    required
                    // value={user.userData.name}
                    value={principalParticipant.name}
                    className="w-full border border-gray-300 rounded-md p-2 bg-gray-200"
                    disabled
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label className="block mb-2">Kuantiti</label>
                  <input
                    type="number"
                    required
                    className="w-full border border-gray-300 rounded-md p-2"
                    onWheel={(e) => (e.target as HTMLInputElement).blur()}
                    value={principalParticipant.portions}
                    onChange={handleQuantityChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor={`icNumber`} className="block mb-2">
                No. KP / Pasport
                </label>
                <input
                  type="text"
                  required
                  // value={user.userData.icNumber}
                  value={principalParticipant.icNumber}
                  className="w-full border border-gray-300 rounded-md p-2 bg-gray-200"
                  disabled
                />
                </div>
            
            </div>
             {/* ) : null} */}

            {/* {selecteditem[0]?.sub_pkg_type === "ORGANIZATION"
              ? */}
              {orguserData.map((user, index) => (
              <div className="px-[1.875rem] pb-5 shadow-md bg-[#FFFFFF] mt-[4.125rem] rounded-[0.625rem]">
                
              <div className="mb-4 items-center">
                <h2 className="text-lg mb-2">Peserta Organisasi Semasa</h2> 
                  <div key={index}>
                    <div className="mb-4  h-[45px] items-center">
                      <h2 className="text-lg mb-2">Peserta {index + 2}</h2>
                      <label className="inline-flex items-center">
                    <Checkbox className="mr-2 float-left"  checked={
                       // @ts-ignore
                       user.checked}
         onChange={() => handleOrgCheckboxChange(index)}/>
         Sila klik kotak semak untuk menambah peserta
</label>
  

                    </div>
                    <div className="mb-4 flex justify-between">
                    <div className="w-1/2 mr-2">
                      <label htmlFor={`remarks${index}`} className="block mb-2">
                      nama organisasi
                      </label>
                      <input
                        type="text"
                        id={`remarks${index}`}
                        value={
                           // @ts-ignore
                           user.organization.org_type}                       
                        className="w-full border border-gray-300 rounded-md p-2 bg-gray-200"
                            disabled
                      />
                    </div>  
                   
                    {/* <div className="w-1/2 ml-2">
                    <label htmlFor={`remarks${index}`} className="block mb-2">
                    Kenyataan
                      </label>
                      <input
                        type="text"
                        id={`remarks${index}`}
                        value={
                           // @ts-ignore
                           user.description}                       
                        className="w-full border border-gray-300 rounded-md p-2 bg-gray-200"
                            disabled
                      />
                    </div> */}

                    </div>
                    <div className="mb-4 flex justify-between">
                      
                    <div className="w-1/2 mr-2">
                        <label className="block mb-2">nama peserta</label>
                        <input
                          type="text"
                          required
                          value={
                             // @ts-ignore
                             user.name}
                          className="w-full border border-gray-300 rounded-md p-2 bg-gray-200"
                          disabled
                        />                        
                      </div>
                      <div className="w-1/2 ml-2">
                        <label className="block mb-2">Kuantiti</label>
                        <input
                          type="number"
                          required   
                          value={
                             // @ts-ignore
                             user.portions}                     
                          onChange={(e) => handleOrgQuantityChange(index, e.target.value)}
                          onWheel={(e) => (e.target as HTMLInputElement).blur()}
                          className="w-full border border-gray-300 rounded-md p-2"
                        />
                      </div>
                    </div>
                  
                    {/* Other fields like organization type and id */}
                  </div>
                  </div>
                  </div>                  
                ))}
                 {/* : */}
                  {user.favoriteParticipants.map((participant, index) => (
                <div className="px-[1.875rem] pb-5 shadow-md bg-[#FFFFFF] mt-[4.125rem] rounded-[0.625rem]">
                <div className="mb-4 items-center">
                  <h2 className="text-lg mb-2">Peserta Keluarga Semasa</h2>
                    <div key={index}> {/* Key prop should be added here */}
                      <h2 className="text-lg mb-2">Peserta {index + 2}</h2> 
                      <label className="inline-flex items-center">
                      <Checkbox className="mr-2 float-left"  checked={participant.checked}
                     onChange={() =>handleExistingCheckboxChange(index)}/>
                      Sila klik kotak semak untuk menambah peserta
</label>
                      <div className="mb-4 flex justify-between w-full">
                        <input hidden value={participant.id} />
                        <div className="w-1/2 mr-2">
                          <label className="block mb-2">nama peserta</label>
                          <input
                            type="text"
                            required
                            value={participant.name}
                            className="w-full border border-gray-300 rounded-md p-2 bg-gray-200"
                            disabled
                          />
                        </div>
                        <div className="w-1/2 ml-2">
                          <label className="block mb-2">Kuantiti</label>
                          <input
                            type="number"
                            required
                            value={participant.portions}
                            className="w-full border border-gray-300 rounded-md p-2"
                            onWheel={(e) => (e.target as HTMLInputElement).blur()}
                            onChange={(e) => handleExistingQuantityChange(index, e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor={`icNumber`} className="block mb-2">No. KP / Pasport</label>
                        <input
                          type="text"
                          required
                          value={participant.icNumber}
                          className="w-full border border-gray-300 rounded-md p-2 bg-gray-200"
                          disabled
                        />
                      </div>
                    </div>
                </div>
              </div>
                  ))}
{/* } */}

{/* <button
        onClick={handleAddOrgParticipant}
        className="bg-[#09B1CB] text-white font-bold py-2 px-4 rounded float-right mt-2 mr-3"
      >
        {"Tambah Peserta Organisasi" }
      </button> */}

     

 {/* {selecteditem[0]?.sub_pkg_type === "ORGANIZATION" ? ( */}
            {orgParticipants.map((participant, index) => (
        <div className="px-[1.875rem] pb-5 shadow-md bg-[#FFFFFF] mt-[4.125rem] rounded-[0.625rem]">
          <div className="mb-4 items-center">
            <h2 className="text-lg mb-2">Peserta Organisasi Baharu</h2>
              <div key={index}>
                <div className="mb-4 h-[45px] items-center">
                  <h2 className="text-lg mb-2">Peserta {index + 1}</h2>
                  <label className="inline-flex items-center">
                  <Checkbox className="mr-2 float-left"  checked={
                     // @ts-ignore
                     participant.checked}
        onChange={() => handleOrgNewCheckboxChange(index)}/>
         Sila klik kotak semak untuk menambah peserta
</label>
                </div>

                <div className="mb-4 flex justify-between">
                    <div className="w-1/2 mr-2">
                      <label htmlFor={`remarks${index}`} className="block mb-2">
                      nama organisasi 
                      </label>
                      <select
                  id={`orgType${index}`}
                  // value={
                  //    // @ts-ignore
                  //    participant.orgType}
                  // @ts-ignore
                     value={`${participant.org_id}-${participant.orgType}`} 
                  onChange={(e) => handleOrgTypeChange(e, index)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="">Pilih nama organisasi</option>
                  {organizations.map((org) => (
                    <option key={
                       // @ts-ignore
                       org.id} value={`${
                         // @ts-ignore
                         org.id}-${
                           // @ts-ignore
                           org.org_type}`}>
                      {
                       // @ts-ignore
                       org.org_type}
                    </option>
                  ))}
                </select>
                    </div>  

                   
                    {/* <div className="w-1/2 ml-2">
                    <label htmlFor={`remarks${index}`} className="block mb-2">
                    Kenyataan
                      </label>
                      <input
                        type="text"                       
                        value={
                           // @ts-ignore
                           participant.description}                       
                        className="w-full border border-gray-300 rounded-md p-2 "
                        onChange={(e) => handleOrgRemarksChange(index, e.target.value)}
                                                        required
                      />
                    </div> */}
                    </div>
                <div className="mb-4 flex justify-between">
                 
                <div className="w-1/2 mr-2">
                    <label className="block mb-2">nama peserta</label>
                    <input
                      type="text"
                      required
                      value={
                         // @ts-ignore
                         participant.name}
                      className="w-full border border-gray-300 rounded-md p-2 " 
                      onChange={(e) => handleOrgNameChange(index, e.target.value)}                    
                    />                        
                  </div>
                  <div className="w-1/2 ">
                    <label className="block mb-2">Kuantiti</label>
                    <input
                      type="number"
                      required
                      value={
                         // @ts-ignore
                         participant.portions}
                      className="w-full border border-gray-300 rounded-md p-2"
                      onWheel={(e) => (e.target as HTMLInputElement).blur()}
                      onChange={(e) => handleOrgNewQuantityChange(index, e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Render other organization input fields similarly */}
              </div>
          </div>
        </div>
            ))}
      {/* ) : ( */}

       {/* <button
        onClick={handleAddFamilyParticipant}
        className="bg-[#09B1CB] text-white font-bold py-2 px-4 rounded float-right mt-2 mr-3"
      >
        {"Tambah Ahli Keluarga"}
      </button> */}
            {familyParticipants.map((participant, index) => (
        <div className="px-[1.875rem] pb-5 shadow-md bg-[#FFFFFF] mt-[4.125rem] rounded-[0.625rem]">
          <div className="mb-4 items-center">
            <h2 className="text-lg mb-2">Peserta Keluarga Baru</h2>
              <div key={index}>
                <h2 className="text-lg mb-2">Peserta {index + 1}</h2>
                <label className="inline-flex items-center">
                <Checkbox className="mr-2 float-left"  checked={
                   // @ts-ignore
                   participant.checked}
      onChange={() => handleNewParticipantCheckboxChange(index)}/>
       Sila klik kotak semak untuk menambah peserta
</label>
                <div className="mb-4 flex justify-between w-full">
                  <div className="w-1/2 mr-2">
                    <label className="block mb-2">nama peserta</label>
                    <input
                      type="text"
                      required
                      value={
                         // @ts-ignore
                         participant.name}
          onChange={(e) => handleNewParticipantNameChange(index, e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2 "
                      
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label className="block mb-2">Kuantiti</label>
                    <input
                      type="number"
                      required
                      value={
                         // @ts-ignore
                         participant.portions}
                      onChange={(e) => handleNewParticipantQuantityChange(index, e.target.value)}
                      onWheel={(e) => (e.target as HTMLInputElement).blur()}
                      className="w-full border border-gray-300 rounded-md p-2"                      
                    />
                  </div>
                </div>
                <div className="mb-4">
                        <label htmlFor={`icNumber`} className="block mb-2">No. KP / Pasport</label>
                        <input
                          type="text"
                          required
                          value={
                             // @ts-ignore
                             participant.icNumber}
                          onChange={(e) => handleNewParticipantICNumberChange(index, e.target.value)}
                          className="w-full border border-gray-300 rounded-md p-2 "
                          
                        />
                      </div>
                {/* Render other family input fields similarly */}
              </div>
          </div>
        </div>
            ))}
      {/* )} */}
      <button
        onClick={handleButtonClick}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded float-right mt-2 mr-3"
      >
        +
      </button>

      <select value={selectedOption} onChange={handleDropdownChange} className="bg-[#09B1CB] text-white font-bold py-2 px-4 rounded float-right mt-2 mr-3">
        <option value="" disabled>Pilih satu pilihan</option>
        <option value="orgParticipant">Tambah Peserta Organisasi</option>
        <option value="familyParticipant">Tambah Ahli Keluarga</option>
      </select>

      
     

             </div>


          {/* ================ End Participant =========== */}

          {/* Right side content */}
          <div className="lg:px-[1.875rem] px-4 pb-5 w-[28.688rem]shadow-md bg-[#FFFFFF] mt-[4.125rem] rounded-[0.625rem] w-screen lg:w-[35%]" >
            {" "}
            {/* Adjust width as needed */}
            <div className="mt-5">
              <div className="text-center">
                <div className="flex justify-between w-full mb-4">
                  <img src={SERVER_URL + selecteditem[0]?.sub_pkg_image} alt="Buffalo" className="mr-4 block"  width={100} height={100} />
                  <div>
                    <p className="font-bold">
                       {selecteditem[0]?.name}/{" "}
                      {selecteditem[0]?.package?.pkg_type?.toLowerCase() ==="waqf" ? "Sadaqah" : selecteditem[0]?.package?.pkg_type?.toLowerCase()}
                    </p>
                    <p className="text-gray-500 mb-2">
                      {selecteditem[0]?.package?.country?.name}
                      {/* {selecteditem[0]?.supplier?.country?.name} */}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <p className="mb-2">Jumlah</p>
                  <div className="flex w-full justify-between">
                    {/* <button
                        onClick={handleDecrement}
                        className="bg-white text-[#53AFBE] border-2 border-solid border-[#53AFBE] px-3 py-1 rounded-l"
                        type="button"
                        disabled={quantity === 1}
                      >
                        -
                      </button> */}
                    <div className="bg-white-200  py-1 text-xl">
                      {selecteditem[0]?.quantity} {selecteditem[0]?.package?.pkg_type?.toLowerCase() === "waqf" ? "Unit" :  selecteditem[0]?.package?.animal?.portion === 1 ? "Unit" : "bahagian"}
                    </div>
                    <span className="">
                         <span className="font-bold text-black">{selecteditem[0]?.package?.pkg_type.toLowerCase() ==="waqf" ? formatPrice(selecteditem[0]?.price_per_unit) : formatPrice(selecteditem[0]?.actual_price)}</span>
                      </span>
                    {/* <button
                        onClick={handleIncrement}
                        className="bg-white text-[#53AFBE] border-2 border-solid border-[#53AFBE] px-3 py-1 rounded-r"
                        type="button"
                      >
                        +
                      </button> */}
                    <span className="">
                    <span className="font-bold text-black">{formatPrice(selecteditem[0]?.price)}</span>
                    </span>
                  </div>
                </div>
                <div>
                  
                {principalParticipant.checked  && (
  <>
    <h1 className="font-bold mb-4">Peserta Utama</h1>
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-lg">
    <thead className="bg-[#09B1CB] border-b border-gray-200">
        <tr>
        <th className="px-4 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">nama peserta</th>
        <th className="px-4 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">No. KP/Pasport</th>
        <th className="px-4 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">Kuantiti</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
        <td className="px-4 py-4 whitespace-nowrap">{principalParticipant.name}</td>
          <td className="px-4 py-4 whitespace-nowrap">{principalParticipant.icNumber}</td>
          <td className="px-4 py-4 whitespace-nowrap">{principalParticipant.portions}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </>
)}


    
  {/* {selecteditem[0]?.sub_pkg_type === "ORGANIZATION" ? ( */}
    <>
     {(orguserData.filter((participant) => 
      // @ts-ignore
      participant.checked === true).length > 0 || orgParticipants.filter((participant) =>
         // @ts-ignore
       participant.checked === true).length > 0)  && (
      <>
    <h6 className="font-bold my-5">Peserta Sedia Ada Dan Baru</h6>
      <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-lg">
    <thead className="bg-[#09B1CB] border-b border-gray-200">
        <tr>
        <th className="px-1 py-3 text-xs font-medium text-white-500 uppercase tracking-wider">nama peserta</th>
        <th className="px-1 py-3 text-xs font-medium text-white-500 uppercase tracking-wider">nama organisasi</th>
        {/* <th className="px-1 py-3 text-xs font-medium text-white-500 uppercase tracking-wider">Kenyataan</th> */}
        <th className="px-1 py-3 text-xs font-medium text-white-500 uppercase tracking-wider">Kuantiti</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
     
    
      {orguserData
    .filter((participant) => 
       // @ts-ignore
    participant.checked === true)
    .map((participant, index) => (
      <tr key={index}>
        <td className="px-1 py-4 whitespace-nowrap">{
         // @ts-ignore
         participant.name}</td>
        <td className="px-1 py-4 whitespace-nowrap">{
         // @ts-ignore
         participant.organization.org_type}</td>
        <td className="px-1 py-4 whitespace-nowrap">{
         // @ts-ignore
         participant.description}</td>
        <td className="px-1 py-4 whitespace-nowrap">{
         // @ts-ignore
         participant.portions}</td>
      </tr>
    ))}
     {orgParticipants
    .filter((participant) =>
       // @ts-ignore
     participant.checked === true)
    .map((participant, index) => (
      <tr key={index}>
        <td className="px-1 py-4 whitespace-nowrap">{
         // @ts-ignore
         participant.name}</td>
        <td className="px-1 py-4 whitespace-nowrap">{
         // @ts-ignore
         participant.orgType}</td>
        {/* <td className="px-1 py-4 whitespace-nowrap">{
         // @ts-ignore
         participant.description}</td> */}
        <td className="px-1 py-4 whitespace-nowrap">{
         // @ts-ignore
         participant.portions}</td>
      </tr>
    ))}
      </tbody>
    </table>
    </div>
    </>
    )}
    </>
  {/* ) : ( */}
    <>
{(user.favoriteParticipants.filter((participant) => participant.checked === true).length > 0 || familyParticipants.filter((participant) => 
 // @ts-ignore
 participant.checked === true).length > 0) && (
  <>
    <h6 className="font-bold m-5">Peserta Sedia Ada Dan Baru</h6>
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-lg">
    <thead className="bg-[#09B1CB] border-b border-gray-200">
        <tr>
        <th className="px-3 py-3 text-xs font-medium text-white-500 uppercase tracking-wider">nama peserta</th>
        <th className="px-3 py-3 text-xs font-medium text-white-500 uppercase tracking-wider">No. KP/Pasport</th>
        <th className="px-3 py-3 text-xs font-medium text-white-500 uppercase tracking-wider">Kuantiti</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
      {familyParticipants
       // @ts-ignore
      .filter((participant) => participant.checked === true)
      .map((participant) => (
        <tr>
        <td className="px-2 py-4 whitespace-nowrap">{
         // @ts-ignore
         participant.name}</td>
        <td className="px-2 py-4 whitespace-nowrap">{
         // @ts-ignore
         participant.icNumber}</td>
        <td className="px-2 py-4 whitespace-nowrap">{
         // @ts-ignore
         participant.portions}</td>
      </tr>
      ))}

{user.favoriteParticipants.filter((participant) => participant.checked === true)
      .map((participant) => (
        <tr>
        <td className="px-2 py-4 whitespace-nowrap">{participant.name}</td>
        <td className="px-2 py-4 whitespace-nowrap">{participant.icNumber}</td>
        <td className="px-2 py-4 whitespace-nowrap">{participant.portions}</td>
      </tr>
      ))}
      </tbody>
    </table>
    </div>
    </>
    )}
    </>
  {/* )} */}
</div>
<button  className="bg-[#09B1CB]  text-white font-bold py-2 px-4 rounded mt-10"  onClick={handleReviewAndCheckout}>
Semakan Dan Pembayaran
</button>


              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  ) : (
<div>
      <div className="bg-[#F7F8FA] ">
        <br></br>
        <br></br>

        <p className="xl:text-xl lg:text-xl text-xl font-bold   text-center max-w-[1140px] mx-auto">
          Bayar
          </p>
          <br></br> <br></br>
          <p className="xl:text-xl lg:text-l text-l    text-center max-w-[1140px] mx-auto">
          Jika anda belum menambah mana-mana peserta kemudian klik pada butang
          dan tambah untuk meneruskan pembayaran
          <br></br>
          <br></br>
          <a href='profile'>
            <button className="bg-[#09B1CB] text-white py-1 px-2 rounded-md mr-4 ">
            Tambah Peserta
          </button></a> 
        </p>
        <div
          className="max-w-full h-[10.75rem] bg-red-600"
          style={{
            backgroundImage:
              "linear-gradient(0deg, #98CCD4 0%, #E3F4F6 85.52%, #FFF 100%)",
          }}
        />
        <form>
          <div className="flex flex-wrap justify-evenly mb-5">
            {/* Left side content */}
            <div className="mt-[4.125rem] w-full lg:w-auto">
              {" "}
              {/* Adjust width as needed */}
              <h1 className="text-2xl font-bold mb-4">Butiran Peserta</h1>
              
              {participantsSelected && participantsSelected.some(participant => 
              // @ts-ignore
              participant.type === "principal") && (

        <>
              <h1 className="font-bold mb-4">Peserta Utama</h1>
              <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-lg">
  <thead className="bg-[#09B1CB] border-b border-gray-200">
      <tr>
      <th className="px-4 py-3  text-xs font-medium text-white-500 uppercase tracking-wider">nama peserta</th>
      <th className="px-4 py-3  text-xs font-medium text-white-500 uppercase tracking-wider">Kuantiti</th>
      <th className="px-4 py-3 text-xs font-medium text-white-500 uppercase tracking-wider">Nombor Ic</th>
        {/* Add more table headers as needed */}
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 text-center">
      
    {participantsSelected && participantsSelected.length > 0 && participantsSelected.filter(participant =>
     // @ts-ignore
      participant.type === "principal")
        .map((participant, index) => (
          <tr key={index}>
            <td className="px-4 py-4 whitespace-nowrap">{
             // @ts-ignore
             participant.name}</td>
            <td className="px-4 py-4 whitespace-nowrap">{
             // @ts-ignore
             participant.portions}</td>
            <td className="px-4 py-4 whitespace-nowrap">{
             // @ts-ignore
             participant.icNumber}</td>
            {/* Render additional participant details in table cells */}
          </tr>
        ))}
    </tbody>
  </table>
  </div>
  </>
)}

{participantsSelected && participantsSelected.length > 0 && participantsSelected.filter(participant => 
  // @ts-ignore
participant.type !== "principal").length > 0 && (
      

 
  <h6 className="font-bold m-5">Peserta Sedia Ada Dan Baru</h6>
)}
  {/*  {selecteditem[0]?.sub_pkg_type === "ORGANIZATION" ? (  */}
  {participantsSelected && participantsSelected.length > 0 && participantsSelected.filter(participant =>
    // @ts-ignore
  participant.type !== "principal" && participant.hasOwnProperty('org_id')).length > 0 && (
      
                <div className="overflow-x-auto">
 <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-lg">
  <thead className="bg-[#09B1CB] border-b border-gray-200">
      <tr>
      <th className="px-4 py-3 text-xs font-medium text-white-500  uppercase tracking-wider">nama peserta</th>
      <th className="px-4 py-3 text-xs font-medium text-white-500  uppercase tracking-wider">Kuantiti</th>
      {/* <th className="px-4 py-3 text-xs font-medium text-white-500  uppercase tracking-wider">Kenyataan</th> */}
      <th className="px-4 py-3 text-xs font-medium text-white-500 uppercase tracking-wider">nama organisasi</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 text-center">
    {participantsSelected && participantsSelected.length > 0 && participantsSelected
     // @ts-ignore
        .filter(participant => participant.type !== "principal" && participant.hasOwnProperty('org_id')) // Filter out rows where type is not "principal"
        .map((participant, index) => (
        <tr key={index}>
          <td className="px-4 py-4 whitespace-nowrap">{
           // @ts-ignore
           participant.name}</td>
          <td className="px-4 py-4 whitespace-nowrap">{
           // @ts-ignore
           participant.portions}</td>
          <td className="px-4 py-4 whitespace-nowrap">{
           // @ts-ignore
           participant.orgType || (participant.organization ? participant.organization.org_type : '')}</td>
          {/* <td className="px-4 py-4 whitespace-nowrap">{
           // @ts-ignore
           participant.description || participant.remarks}</td> */}
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  )}
{/* ) : ( */}
{participantsSelected && participantsSelected.length > 0 && participantsSelected.filter(participant =>
    // @ts-ignore
  participant.type !== "principal" && participant.hasOwnProperty('icNumber')).length > 0 && (
  <div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-lg">
   <thead className="bg-[#09B1CB] border-b border-gray-200">
      <tr>
      <th className="px-4 py-3  text-xs font-medium text-white-500 uppercase tracking-wider">nama peserta</th>
      <th className="px-4 py-3  text-xs font-medium text-white-500 uppercase tracking-wider">Kuantiti</th>
      <th className="px-4 py-3  text-xs font-medium text-white-500 uppercase tracking-wider">Nombor Ic</th>
        {/* Add more table headers as needed */}
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 text-center">
    {participantsSelected && participantsSelected.length > 0 && participantsSelected
     // @ts-ignore
        .filter(participant => participant.type !== "principal" && participant.hasOwnProperty('icNumber')) // Filter out rows where type is not "principal"
        .map((participant, index) => (
        <tr key={index}>
          <td className="px-4 py-4 whitespace-nowrap">{ 
           // @ts-ignore
           participant.name
           }</td>
          <td className="px-4 py-4 whitespace-nowrap">{
           // @ts-ignore
           participant.portions
           }</td>
          <td className="px-4 py-4 whitespace-nowrap">{
           // @ts-ignore
           participant.icNumber
           }</td>
          {/* Render additional participant details in table cells */}
        </tr>
      ))}
    </tbody>
  </table>
  </div>
 )}
{/* )} */}



    <div className="bg-gray-100 p-4 rounded-lg shadow max-w-sm mx-auto mt-10">
  <h2 className="text-lg font-semibold text-gray-800 mb-4">Bayaran Pelan:</h2>
  <div className="flex items-center mb-2">
    <input
      type="radio"
      id="bayaranPenuh"
      name="paymentOption"
      value="bayaranPenuh"
      checked={paymentOption === "bayaranPenuh"}
      onChange={handleOptionChange}     
      className="text-blue-600 form-radio focus:ring-blue-500 h-4 w-4"
    />
    <label  className="ml-2 text-gray-700">Bayaran Penuh</label>
    <label className="ml-20 text-gray-700">RM {selecteditem[0]?.price}</label>
  </div>
  <div className="flex items-center">
    <input
      type="radio"
      id="ansuran"
      name="paymentOption"
      value="ansuran"
      checked={paymentOption === "ansuran"}
      disabled={!installmentAllowed}
      onChange={handleOptionChange}
      className="text-blue-600 form-radio focus:ring-blue-500 h-4 w-4"
    />
    <label className="ml-2 text-gray-700 ">Ansuran </label>
    {installmentAllowed == false && (
      <label className="ml-[8rem] text-gray-700">PEMASANGAN TIDAK DIBENARKAN</label>    ) }
    {installmentOption && selectedMonth && (
      <label className="ml-[8rem] text-gray-700">RM {
        // @ts-ignore
        installmentData[0]?.totalPayable.toFixed(2)}</label>
    )}
   

  </div>
  </div>

  {installmentOption && installmentMonthData?.length > 0 && (
  <div className="w-full px-4 py-2">
    <label htmlFor="installmentSelect" className="block text-sm font-medium text-gray-700"> Pilih Bulan Ansuran</label>
    <select
     onChange={handleSelectChange}
      id="installmentSelect"
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
       <option value=""> Pilih Bulan Ansuran</option> 
      {installmentMonthData?.map((month, index) => (
        <option key={index} value={month}>
          {month} {month === 1 ? 'Bulan' : 'Bulan'}
        </option>
      ))}
    </select>
  </div>
)}


        {/* {installmentOption && closingDate && (
          <div className="d-flex">
            <strong>Package Closing Date: </strong> {closingDate}
            </div>
        )}
      </label> */}

  {installmentOption && installmentData.length > 0 && (
    <>
        <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-lg mt-3">
          <thead className="bg-[#09B1CB] border-b border-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">Ansuran</th>
              <th className="py-2 px-4 border-b">Tarikh</th>
              {/* <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">adminFee</th> */}
              <th className="py-2 px-4 border-b">Bayaran</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-center">
            {installmentData.map((installment, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center">{
                // @ts-ignore
                installment.installment_number}</td>
                <td className="py-2 px-4 border-b text-center">
                  {new Date(
                       // @ts-ignore
                    installment.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
  </td>
                {/* <td className="py-2 px-4 border-b text-center">RM {
                // @ts-ignore
                installment.installmentAmount}</td>
                <td className="py-2 px-4 border-b text-center">RM {
                // @ts-ignore
                installment.adminFee}</td> */}
                <td className="py-2 px-4 border-b text-center">RM {
                // @ts-ignore
                Math.round(installment.totalPayable).toFixed(2)}</td>

                {/* <td className="py-2 px-4 border-b text-center">{installment.closingDate ? new Date(installment.closingDate).toLocaleDateString() : 'N/A'}</td> */}
                
              </tr>
            ))}
          </tbody>
        </table>
</>
      )}
             </div>
            
            {/* ================ End Participant =========== */}

            {/* Right side content */}
            <div className="px-[1.875rem] pb-5  w-[26.688rem]  shadow-md bg-[#FFFFFF] mt-[4.125rem] rounded-[0.625rem]">
              {" "}
              {/* Adjust width as needed */}
              <div className="mt-5">
                <div className="">
                  <div className="flex justify-between w-full mb-4">
                  <img src={SERVER_URL + selecteditem[0]?.sub_pkg_image} alt="Buffalo" className="mr-4 block"  width={100} height={100} />
                    <div>
                    <p className="font-bold">
                       {selecteditem[0]?.name}/{" "}
                       {selecteditem[0]?.package?.pkg_type?.toLowerCase() ==="waqf" ? "Sadaqah" : selecteditem[0]?.package?.pkg_type?.toLowerCase()}
                    </p>
                    <p className="text-gray-500 mb-2">
                      {selecteditem[0]?.package?.country?.name}
                      {/* {selecteditem[0]?.supplier?.country?.name} */}
                    </p>
                      
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="mb-2">Jumlah</p>
                    <div className="flex w-full justify-between">
                      {/* <button
                        onClick={handleDecrement}
                        className="bg-white text-[#53AFBE] border-2 border-solid border-[#53AFBE] px-3 py-1 rounded-l"
                        type="button"
                        disabled={quantity === 1}
                      >
                        -
                      </button> */}
                      <div className="bg-white-200  py-1 text-xl">
                        {selecteditem[0]?.quantity} {selecteditem[0]?.package?.pkg_type?.toLowerCase() === "waqf" ? "Unit" :  selecteditem[0]?.package?.animal?.portion === 1 ? "Unit" : "bahagian"}
                      </div>
                      <span className="">
                         <span className="font-bold text-black">{selecteditem[0]?.package?.pkg_type?.toLowerCase() ==="waqf" ? formatPrice(selecteditem[0]?.price_per_unit) : formatPrice(selecteditem[0]?.actual_price)}</span>
                      </span>
                      {/* <button
                        onClick={handleIncrement}
                        className="bg-white text-[#53AFBE] border-2 border-solid border-[#53AFBE] px-3 py-1 rounded-r"
                        type="button"
                      >
                        +
                      </button> */}
                      <span className="">
                         <span className="font-bold text-black">{formatPrice(selecteditem[0]?.price)}</span>
                      </span>
                    </div>
                  </div>

                  <div>
    {!installmentOption && (
                    <>      <label className=" font-bold text-black">Caj FPX</label>
      <label className="float-right text-gray-700"><span className="font-bold text-black">{formatPrice(1)}</span></label>    
        </>
    )}
                  </div>

                  <div>
    {!installmentOption && (
                    <>      <label className=" font-bold text-black">Bayaran Penuh</label>
      <label className="float-right text-gray-700"><span className="font-bold text-black">{formatPrice(selecteditem[0]?.price +1)}</span></label>    
        </>
    )}
                  </div>
                  {/* <div>
                  {installmentOption && (
                    <>      <label className=" font-bold text-black">Inital Instalment payment</label>
      <label className="float-right text-gray-700">RM <span className="font-bold text-black">{
      // @ts-ignore
      installmentData[0]?.installmentAmount}</span></label>    
        </>
    )}
    </div>
    <div>
    {installmentOption && (
                    <>      <label className=" font-bold text-black">Admin fee</label>
      <label className="float-right text-gray-700">RM <span className="font-bold text-black">{
      // @ts-ignore
      installmentData[0]?.adminFee}</span></label>    
        </>
    )}
     </div> */}
     <div>
    {installmentOption && (
                    <>      <label className=" font-bold text-black">Jumlah Bayaran</label>
      <label className="float-right font-bold text-black">RM <span className="font-bold text-black">{
      // @ts-ignore
      installmentData[0]?.totalPayable.toFixed(2)}</span></label>    
        </>
    )}
                  </div>

                  <div>
    {installmentOption && (
                    <>      <label className=" font-bold text-black">Caj FPX</label>
      <label className="float-right text-gray-700"><span className="font-bold text-black">{formatPrice(1)}</span></label>    
        </>
    )}
                  </div>

                  <div>
    {installmentOption && (
                    <>      <label className=" font-bold text-black">Bayaran Penuh</label>
      <label className="float-right text-gray-700"><span className="font-bold text-black">{formatPrice(
      // @ts-ignore
      installmentData[0]?.totalPayable +1)}</span></label>    
        </>
    )}
                  </div>


                </div>
              </div>
              {selecteditem[0]?.package?.pkg_type?.toLowerCase() !== "waqf" && (
              <div className="bg-gray-100 w-full">
                <h1 className="text-xl">Lafaz Akad</h1>
                <div className=" py-4 flex items-center">
                  {/* Input (checkbox) centered */}
                  <div className="ml-auto">
                    <input
                      className="text-gray-600 mr-2"
                      type="checkbox"
                      id="favoriteParticipant5"
                      name="favoriteParticipant"
                      checked={isChecked}
                      onChange={handleAcceptCheckboxChange}
                    />
                  </div>
                  {/* Label on the left */}
                  {  selecteditem[0]?.package?.pkg_type?.toLowerCase().includes("qurban") ? (
                 
                  <label>Bismillah Ar-Rahman Ar-Rahim. Dengan ini saya membeli haiwan Qurban dengan sifat-sifat yang cukup syarat bagi ibadah Qurban pada tahun ini dan saya wakilkan kepada Digital Qurban Sdn Bhd untuk melaksanakan pengagihan daging Qurban bagi pihak saya.</label>
                  ):(
                 <label className="text-gray-600">
                    Bismillah Ar-Rahman Ar-Rahim. Dengan ini saya membeli haiwan
                    Qurban dengan sifat-sifat yang cukup syarat Aqiqah pada
                    tahun ini daripada DigitalQurban dan saya wakilkan kepada
                    DigitalQurban untuk melaksanakan sembelihan Aqiqah bagi
                    pihak saya.
                  </label>
                   )}
                </div>
              </div>
              )}
              {/* <div className="flex justify-between w-[48%]">
              <h1 className="bold">Payment Option</h1>
              <p className="text-gray-500">Select payment option</p>
            </div>
     */}
              <div className="w-full">
               

                {/* <div>
                  <div className="w-full mr-2">
                    <div className="flex justify-between">
                      <label htmlFor="participantName" className="block mb-2">
                      Kaedah Pembayaran
                      </label>
                      <div>Pilih pilihan pembayaran</div>
                    </div>

                    <div className="my-2">
                      <div className="w-full border text-[#C6C6C8] my-1 border-gray-300 rounded-md p-2 flex justify-between items-center">
                        <div className="flex">
                          <img src={Vector} className="mr-2 w-6 h-6" />
                          <p>FPX (Perbankan atas talian)</p>
                        </div>
                        <input
                          type="radio"
                          checked={paymentMethod === "fpx"}
                          onChange={() => setPaymentMethod("fpx")}
                          id="vehicle1"
                          className="rounded-[50%] w-5 h-5 border-[#C6C6C8]"
                        />
                      </div>
                      {paymentMethod == "fpx" ? (
                        <div className="w-full mr-2">
                          <select className="w-full border border-gray-300 rounded-md p-2">
                            <option value="John">Pilih Bank</option>
                          </select>
                        </div>
                      ) : null}
                    </div>

                    <div className="my-2">
                      <div className="w-full border text-[#C6C6C8] my-1 border-gray-300 rounded-md p-2 flex justify-between items-center">
                        <div className="flex">
                          <img src={Vector4} className="mr-2 w-6 h-6" />
                          <p>Ansuran (FPX)</p>
                        </div>
                        <input
                          type="radio"
                          checked={paymentMethod === "installment"}
                          onChange={() => setPaymentMethod("installment")}
                          className="rounded-[50%] w-5 h-5 border-[#C6C6C8]"
                        />
                      </div>
                      {paymentMethod == "installment" ? (
                        <div className="w-full mr-2">
                          <select className="w-full border border-gray-300 rounded-md p-2">
                            <option value="John">Pilih Rancangan</option>
                          </select>
                        </div>
                      ) : null}
                    </div>

                    <div className="my-2">
                      <div className="w-full border text-[#C6C6C8] my-1 border-gray-300 rounded-md p-2 flex justify-between items-center">
                        <div className="flex">
                          <img src={Vector2} className="mr-2 w-6 h-6" />
                          <p>E-Dompet</p>
                        </div>
                        <input
                          type="radio"
                          checked={paymentMethod === "wallet"}
                          onChange={() => setPaymentMethod("wallet")}
                          className="rounded-[50%] w-5 h-5 border-[#C6C6C8]"
                        />
                      </div>
                      {paymentMethod == "wallet" ? (
                        <div className="w-full mr-2">
                          <select className="w-full border border-gray-300 rounded-md p-2">
                            <option value="John">Pilih Platform</option>
                          </select>
                        </div>
                      ) : null}
                    </div>

                    <div className="my-2">
                      <div className="w-full border text-[#C6C6C8] my-1 border-gray-300 rounded-md p-2 flex justify-between items-center">
                        <div className="flex">
                          <img src={Vector3} className="mr-2 w-6 h-6" />
                          <p>Kredit debit</p>
                        </div>
                        <input
                          type="radio"
                          checked={paymentMethod === "credit"}
                          onChange={() => setPaymentMethod("credit")}
                          className="rounded-[50%] w-5 h-5 border-[#C6C6C8]"
                        />
                      </div>
                      {paymentMethod == "credit" ? (
                        <div className="w-full mr-2">
                          <input
                            className="w-full border border-gray-300 rounded-md p-2"
                            type="number"
                          />
                          <div className="w-full border border-gray-300 rounded-md p-2 flex justify-between">
                            <input
                              className="w-[68%] border border-gray-300 rounded-md p-2"
                              type="date"
                            />
                            <input
                              className="w-[30%] border border-gray-300 rounded-md p-2"
                              type="number"
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <Link to="" onClick={performCheckout} */}
              <div className="flex justify-between">
              <button type="button" className="bg-[#09B1CB] float-right block mt-2 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none " 
                  onClick={() => setShowDetails(true)} >Sebelum</button>
             
              <button
                type="button"
                className="bg-[#09B1CB] block mt-2 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none "
                // @ts-ignore
                variant="progress"
                onClick={performCheckout}
                disabled={isButtonDisabled}
              >
                Bayar 
              </button>
              
                 </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}
  </>
  );
};

export default CheckOut;
