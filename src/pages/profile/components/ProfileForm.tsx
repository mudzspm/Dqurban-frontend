// import { TextInput } from "flowbite-react";
// import { userProfile } from "../types";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// // @ts-ignore
// import { updateProfile } from "../../../context/actions/userActions";
// import { AuthContext } from "../../../context/auth.tsx";
// import { useContext } from "react";
// import { toast } from "react-toastify";

// type profileFormProps = {
//   profileData: userProfile;
//   setProfile: (arg: any) => void;
// };

// const ProfileForm = ({ profileData, setProfile }: profileFormProps) => {
//   const dispatch = useDispatch();
//   const  token  = useContext(AuthContext);
//   const [userDataEdit, setUserDataEdit] = useState(false);
//   const [favoriteParticipantEdit, setFavoriteParticipantEdit] = useState(false);

//   console.log(profileData);

//   const handleProfileUpdate = () => {

//     if (!profileData.userData?.address) {
//         toast.error("Sila masukkan alamat.");
//         return;
//       }
//     const updatedProfileData = {
//       fullname: profileData.userData?.name,
//       ic_number: profileData.userData?.icNumber,
//       address: profileData.userData?.address,
//       // @ts-ignore
//       familyMembers: profileData.favoriteParticipants.map((participant) => ({
//         // @ts-ignore
//         id: participant.id?.toString(),
//         fullname: participant.name,
//         ic_number: participant.icNumber,
//       })),
//     };
//     // Dispatch action to update profile
//      dispatch(updateProfile(updatedProfileData, token));

//     toast.success("Profil berjaya dikemas kini.");
//     // Disable edit mode after submission
//     setUserDataEdit(false);
//   };

//   const handleParticipantProfileUpdate = () => {

//     if (!profileData.userData?.address) {
//         toast.error("Sila masukkan alamat.");
//         return;
//       }
//     // Transform profileData into the desired format
//     const updatedProfileData = {
//       fullname: profileData.userData?.name,
//       ic_number: profileData.userData?.icNumber,
//       address: profileData.userData?.address,
//       // @ts-ignore
//       familyMembers: profileData.favoriteParticipants.map((participant) => ({
//         // @ts-ignore
//         id: participant.id?.toString(),
//         fullname: participant.name,
//         ic_number: participant.icNumber,
//       })),
//     };

//     function checkFields(objects :any) {
//       let isEmpty = false;
//   debugger
//       for (let obj of objects) {
//           if (!obj.name || !obj.icNumber) {
//               isEmpty = true;
//               break;
//           }
//       }

//       return isEmpty;
//   }

//  const isEmpty = checkFields(profileData.favoriteParticipants);
//     if (isEmpty) {
//         toast.error("Ralat: Beberapa medan kosong.");
//     } else {
//       dispatch(updateProfile(updatedProfileData, token));

//       toast.success("Peserta berjaya dikemas kini.");
//     }
//     // Dispatch action to update profile

//     // Disable edit mode after submission
//     setFavoriteParticipantEdit(false);
//   };

//   const handleAddParticipant = () => {
//     setProfile((prevProfile :any) => ({
//       ...prevProfile,
//       favoriteParticipants: [...prevProfile.favoriteParticipants, { name: '', icNumber: '' }],
//     }));
//     // setNumParticipants((prevNum) => prevNum + 1);
//   };

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault()

//       if (userDataEdit) {
//         handleProfileUpdate();
//       } else {
//         setUserDataEdit(true);
//       }
//     }}>
//     <div className="bg-white min-w-[850px] p-10 shadow-xl border border-solid rounded-sm  mb-2">
//       <div className="bg-gradient-to-r from-[#00ADB9] to-[#5ed1da] h-[190px] flex justify-center flex-col gap-2 rounded-[12px] pl-4">
//         <p className="text-[#fff] font-bold text-[36px]">Profil</p>
//         <p className="text-[#fff] text-[14px]">
//         Urus profil dan peserta kegemaran anda
//         </p>
//       </div>

//       <div className="mt-8">
//         <p className="text-[20px] font-semibold">Profil</p>
//         <div className="flex justify-between mt-4">
//           <p className="text-[14px]">Urus Profil Anda</p>

//           <button
//             className="bg-blue-500 text-white py-1 px-2 rounded-md mr-4"
//           >
//             {userDataEdit ? "Hantar" : "Edit"}
//           </button>
//         </div>
//         <hr className="mt-2" />
//       </div>

//       <div className="mt-4">
//         <div className="mb-4">
//           <label className="text-[12px] font-semibold">Nama</label>
//           <TextInput
//             value={profileData.userData?.name}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               setProfile({
//                 userData: { ...profileData.userData, name: e.target.value },
//                 favoriteParticipants: profileData.favoriteParticipants,
//               });
//             }}
//             disabled={!userDataEdit}
//             required
//           />
//         </div>
//         <div className="flex mb-4">
//           <div className="w-[60%] mr-[3%]">
//             <label className="text-[12px] font-semibold">E-mel</label>
//             <TextInput
//               value={profileData.userData?.email}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                 setProfile({
//                   userData: { ...profileData.userData, email: e.target.value },
//                   favoriteParticipants: profileData.favoriteParticipants,
//                 });
//               }}
//               disabled={!userDataEdit}
//             />
//           </div>
//           <div className="w-[37%]">
//             <label className="text-[12px] font-semibold">nombor ic</label>
//             <TextInput
//               value={profileData.userData?.icNumber}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                 setProfile({
//                   userData: {
//                     ...profileData.userData,
//                     icNumber: e.target.value,
//                   },
//                   favoriteParticipants: profileData.favoriteParticipants,
//                 });
//               }}
//               disabled={!userDataEdit}
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="font-semibold text-[12px]">Alamat</label>
//           <div className="mb-2">
//             <TextInput
//               aria-label="line 1"
//               value={profileData.userData?.address}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                 setProfile({
//                   userData: {
//                     ...profileData.userData,
//                     address: e.target.value,
//                   },
//                   favoriteParticipants: profileData.favoriteParticipants,
//                 });
//               }}
//               disabled={!userDataEdit}
//             />
//           </div>
//         </div>
//         <div className="flex">
//           <div className="w-[30%] mr-[3%]">
//             <label className="text-[12px] font-semibold">Nombor telefon</label>
//             <TextInput
//               value={profileData.userData?.phone}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                 setProfile({
//                   userData: { ...profileData.userData, phone: e.target.value },
//                   favoriteParticipants: profileData.favoriteParticipants,
//                 });
//               }}
//               disabled={!userDataEdit}
//             />
//           </div>
//         </div>
//         <div className="mt-8">
//           <p className="text-[20px] font-semibold">Peserta Kegemaran</p>
//           <div className="flex justify-between mt-4">
//             <p className="text-[14px]">Urus profil anda</p>
//             <div className="flex items-baseline">
//             <button
//             onClick={handleAddParticipant}
//             className="bg-blue-500 text-white py-1 px-2 rounded-md mr-4"
//           >
//             Tamba Peserta
//           </button>

//           <button
//             onClick={handleAddParticipant}
//             className="bg-blue-500 text-white py-1.5 px-2 rounded-md mr-4"
//           >
//             <p
//               className={`${
//                 favoriteParticipantEdit && "text-[#ffffff]"
//               } text-[14px] cursor-pointer`}
//               onClick={() => {
//                 if (favoriteParticipantEdit) {
//                     handleParticipantProfileUpdate();
//                 } else {
//                     setFavoriteParticipantEdit(true);
//                 }
//               }}

//             >
//               {favoriteParticipantEdit ? "Hantar" : "Edit"}

//             </p>
//             </button>
//             </div>
//           </div>
//           <hr className="mt-2" />
//         </div>
//         <div className="mt-4">

//           {profileData?.favoriteParticipants && profileData?.favoriteParticipants?.length > 0 &&
//             profileData?.favoriteParticipants?.map((participant, index) => {
//               return (
//                 <div className="flex mb-4" key={index}>
//                   <div className="w-[60%] mr-[3%]">
//                     <label className="text-[12px] font-semibold">Nama</label>
//                     <TextInput
//                       value={participant?.name}
//                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                         const profile = { ...profileData };
//                         // @ts-ignore
//                         profile.favoriteParticipants[index] = {
//                           name: e.target.value,
//                           icNumber:
//                           // @ts-ignore
//                             profile.favoriteParticipants[index].icNumber,
//                         };
//                         setProfile(profile);
//                       }}
//                       disabled={!favoriteParticipantEdit}
//                       required
//                     />
//                   </div>
//                   <div className="w-[37%]">
//                     <label className="text-[12px] font-semibold">
//                     Nombor IC
//                     </label>
//                     <TextInput
//                       value={participant.icNumber}
//                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                         let newValue = e.target.value;
//                         // Only allow numeric input and limit to 12 characters
//                         newValue = newValue.replace(/\D/g, '').slice(0, 12);
//                         const profile = { ...profileData };
//                         // @ts-ignore
//                         profile.favoriteParticipants[index] = {
//                           // @ts-ignore
//                           name: profile.favoriteParticipants[index].name,
//                           icNumber: newValue,
//                         };
//                         setProfile(profile);
//                       }}
//                       disabled={!favoriteParticipantEdit}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//     </form>
//   );
// };

// export default ProfileForm;
import { TextInput } from "flowbite-react";
import { userProfile } from "../types";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { updateProfile } from "../../../context/actions/userActions";
import { AuthContext } from "../../../context/auth.tsx";
import { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { SERVER_URL } from "../../../constant/ServerUrl.ts";
import { Button } from "../../../components/ui/button";
//@ts-ignore
import { getCountries } from "../../../context/actions/countryActions";
//@ts-ignore
import { getStates } from "../../../context/actions/stateActions";
//@ts-ignore
import {
  getRegions,
  clearRegions,
  //@ts-ignore
} from "../../../context/actions/regionActions";
import { RootState } from "../../../store";

type profileFormProps = {
  //@ts-ignore
  profileData: userProfile;
  setProfile: (arg: any) => void;
};

const ProfileForm = ({
  profileData,
  setProfile,
  //@ts-ignore
  fetchUser,
}: profileFormProps) => {
  const dispatch = useDispatch();
  const token = useContext(AuthContext);
  const [userDataEdit, setUserDataEdit] = useState(false);
  const [favoriteParticipantEdit, setFavoriteParticipantEdit] = useState(false);
  // const [country, setCountry] = useState('');
  // const [state, setState] = useState('');
  // const [region, setRegion] = useState('');

  // const [countryList, setCountryList] = useState<Country[]>([]);
  // // const [countryList, setCountryList] = useState([]);
  // interface State {
  //   id: number;
  //   name: string;
  // }

  // interface Region {
  //   id: number;
  //   name: string;
  // }

  // const [stateList, setStateList] = useState<State[]>([]);
  // const [regionList, setRegionList] = useState<Region[]>([]);
  // console.log(profileData);

  const handleProfileUpdate = () => {
    if (!profileData.userData?.address) {
      toast.error("Sila masukkan alamat.");
      return;
    }
    const updatedProfileData = {
      fullname: profileData.userData?.name,
      ic_number: profileData.userData?.icNumber,
      address: profileData.userData?.address,
      country_id: profileData.userData.country.id,
      state_id: profileData.userData.state.id,
      region_id: profileData.userData.region.id,
      bank_name: profileData.userData.bank_name,
      account_no: profileData.userData.account_no,
      image: profileData.userData.uploadimage,
      // @ts-ignore
      familyMembers: profileData.favoriteParticipants.map((participant) => ({
        // @ts-ignore
        id: participant.id?.toString(),
        fullname: participant.name,
        ic_number: participant.icNumber,
      })),
    };
    debugger;
    // Dispatch action to update profile
    dispatch(updateProfile(updatedProfileData, token));

    setTimeout(() => {
      fetchUser();
    }, 2000); 
    toast.success("Profil berjaya dikemas kini.");
    // Disable edit mode after submission
    setUserDataEdit(false);
  };

  const handleParticipantProfileUpdate = () => {
    if (!profileData.userData?.address) {
      toast.error("Sila masukkan alamat.");
      return;
    }
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : {};
    if (user) {
      user.fullname = profileData.userData?.name;
      localStorage.setItem("user", JSON.stringify(user));
    }
    // Transform profileData into the desired format
    const updatedProfileData = {
      fullname: profileData.userData?.name,
      ic_number: profileData.userData?.icNumber,
      address: profileData.userData?.address,
      country_id: profileData.userData.country.id,
      state_id: profileData.userData.state.id,
      region_id: profileData.userData.region.id,
      bank_name: profileData.userData.bank_name,
      account_no: profileData.userData.account_no,
      image: profileData.userData.uploadimage,
      // @ts-ignore
      familyMembers: profileData.favoriteParticipants.map((participant) => ({
        // @ts-ignore
        id: participant.id?.toString(),
        fullname: participant.name,
        ic_number: participant.icNumber,
      })),
    };

    function checkFields(objects: any) {
      let isEmpty = false;
      // debugger
      for (let obj of objects) {
        if (!obj.name || !obj.icNumber) {
          isEmpty = true;
          break;
        }
      }

      return isEmpty;
    }

    const isEmpty = checkFields(profileData.favoriteParticipants);
    if (isEmpty) {
      toast.error("Ralat: Sesetengah medan kosong.");
    } else {
      dispatch(updateProfile(updatedProfileData, token));

      toast.success("Peserta berjaya dikemas kini.");
      setTimeout(() => {
        fetchUser();
      }, 2000); 
    }
    // Dispatch action to update profile

    // Disable edit mode after submission
    setFavoriteParticipantEdit(false);
  };

  const handleAddParticipant = () => {
    setFavoriteParticipantEdit(true);
    setProfile((prevProfile: any) => ({
      ...prevProfile,
      favoriteParticipants: [
        ...prevProfile.favoriteParticipants,
        { name: "", icNumber: "" },
      ],
    }));
    // setNumParticipants((prevNum) => prevNum + 1);
  };

  const handleDelete = async (memberId: any, index: any) => {
    debugger;
    if (memberId === undefined) {
      // @ts-ignore
      const updatedParticipants = [...profileData.favoriteParticipants];
      updatedParticipants.splice(index, 1);
      setProfile({ ...profileData, favoriteParticipants: updatedParticipants });
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token.token}`, // Ensure this token is dynamically retrieved and secure
        },
      };

      // In case you need to send specific data to indicate a deletion or update
      const data = {
        memberId,
      };

      try {
        const response = await axios.put(
          `${SERVER_URL}api/users/delete/deleteFamilyMember`,
          data,
          config
        );
        if (response.status === 200) {
          // If the delete was successful, remove the participant from the local state
          const updatedParticipants = [...profileData.favoriteParticipants];
          updatedParticipants.splice(index, 1);
          setProfile({
            ...profileData,
            favoriteParticipants: updatedParticipants,
          });
        }
      } catch (error) {
        console.error(" Gagal memadamkan peserta:", error);
        // Optionally handle the error by displaying a message to the user
      }
    }
  };

  // const countryCodes = [
  //   // { code: '62', label: 'Indonesia (+62)' },
  //   // { code: '60', label: 'Malaysia (+60)' },
  //   // { code: '63', label: 'Philippines (+63)' },
  //   // { code: '234', label: 'Nigeria (+234)' },

  //   { code: '62', label: '(+62)' },
  //   { code: '60', label: '(+60)' },
  //   { code: '63', label: '(+63)' },
  //   { code: '234', label: '(+234)' },
  // ];

  // ============== country start =============================================

  // const [country, setCountry] = useState('');
  // const [state, setState] = useState('');
  // const [region, setRegion] = useState('');

  interface Country {
    id: number;
    name: string;
  }

  interface State {
    id: number;
    name: string;
  }

  interface Region {
    id: number;
    name: string;
  }

  const [countryList, setCountryList] = useState<Country[]>([]);
  const [stateList, setStateList] = useState<State[]>([]);
  const [regionList, setRegionList] = useState<Region[]>([]);

  // const dispatch: AppDispatch = useDispatch();
  const { countries } = useSelector((state: RootState) => state.countryReducer);
  const { states } = useSelector((state: RootState) => state.stateReducer);
  const { regions } = useSelector((state: RootState) => state.regionReducer);

  const handleCountryChange = (e: any) => {
    debugger;
    setProfile((prevProfile: userProfile) => ({
      ...prevProfile,
      userData: {
        ...prevProfile.userData,
        country: {
          //@ts-ignore
          ...prevProfile.userData.country,
          id: e.target.value, // Only update the country_id
        },
        state: { id: 0, name: "", country_id: 0, enabled: false }, // Reset the state
        region: { id: 0, name: "", state_id: 0, enabled: false }, // Reset the region
      },
    }));
    // setCountry(e.target.value);
    // setState('');
    // setRegion('');
    setStateList([]);
    setRegionList([]);
    dispatch(clearRegions());
    dispatch(getStates(e.target.value));
  };

  const handleStateChange = (e: any) => {
    // formik.setFieldValue('state_id', e.target.value);
    setProfile((prevProfile: userProfile) => ({
      ...prevProfile,
      userData: {
        ...prevProfile.userData,
        state: {
          ...prevProfile.userData?.state,
          id: e.target.value, // Only update the country_id
        },

        region: { id: 0, name: "", state_id: 0, enabled: false }, // Reset the region
      },
    }));
    // setState(e.target.value);
    // setRegion('');
    setRegionList([]);
    dispatch(getRegions(e.target.value));
  };

  const handleRegionChange = (e: any) => {
    // formik.setFieldValue('region_id', e.target.value);
    setProfile((prevProfile: userProfile) => ({
      ...prevProfile,
      userData: {
        ...prevProfile.userData,
        region: {
          ...prevProfile.userData?.region,
          id: e.target.value, // Only update the country_id
        },
      },
    }));
    // setRegion(e.target.value);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getStates(profileData.userData?.country?.id));
    dispatch(getRegions(profileData.userData?.state?.id));
  }, [dispatch]);

  useEffect(() => {
    setCountryList(countries);
    setStateList(states);
    setRegionList(regions);
  }, [countries, states, regions]);

  // =============== upload start ==============

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // When the button is clicked, trigger the file input click
    //@ts-ignore
    fileInputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    debugger;
    if (file) {
      setProfile({
        userData: {
          ...profileData.userData,
          uploadimage: file,
          image: file,
        },
        favoriteParticipants: profileData.favoriteParticipants,
      });
      console.log("Selected file:", file);
    }
  };

  // List of banks
  const banks = [
    { name: "Maybank", code: "27" },
    { name: "CIMB Bank", code: "35" },
    { name: "RHB Bank", code: "18" },
    { name: "Bank Islam", code: "45" },
    { name: "Bank Muamalat", code: "41" },
    { name: "Bank Rakyat", code: "02" },
    { name: "Bank Simpanan Nasional", code: "10" },
    { name: "Citibank", code: "17" },
    { name: "Hong Leong Bank", code: "24" },
    { name: "HSBC Bank", code: "22" },
    { name: "OCBC Bank", code: "29" },
    { name: "Public Bank", code: "33" },
    { name: "Affin Bank", code: "32" },
    { name: "AmBank", code: "08" },
    { name: "Agro Bank", code: "49" },
    { name: "Alliance Bank", code: "12" },
    { name: "Al-Rajhi Bank", code: "53" },
    { name: "Bank of China", code: "42" },
    { name: "Bank of America", code: "07" },
    { name: "Bank of Tokyo-Mitsubishi UFJ", code: "52" },
    { name: "BNP Paribas", code: "60" },
    { name: "Deutsche Bank", code: "19" },
    { name: "Industrial & Commercial Bank of China", code: "59" },
    { name: "JP Morgan Chase Bank", code: "48" },
    { name: "Kuwait Finance House", code: "47" },
    { name: "Mizuho Bank", code: "73" },
    { name: "Standard Chartered Bank", code: "14" },
    { name: "Sumitomo Mitsui Banking Corporation", code: "51" },
    { name: "The Royal Bank of Scotland", code: "46" },
    { name: "United Overseas Bank", code: "26" },
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        // if (userDataEdit) {
        //   handleProfileUpdate();
        // } else {
        //   setUserDataEdit(true);
        // }
      }}
    >
      <div className="bg-white lg:min-w-[850px] md:min-w-full sm:min-w-[430px]: p-10 shadow-xl border border-solid rounded-sm  mb-2">
        <div className="bg-gradient-to-r from-[#00ADB9] to-[#5ed1da] h-[190px] flex justify-center flex-col gap-2 rounded-[12px] pl-4">
          <p className="text-[#fff] font-bold text-[36px]">Profil</p>
          <p className="text-[#fff] text-[14px]">
            Kemas kini profil dan peserta
          </p>
        </div>

        <div className="mt-8">
          <p className="text-[20px] font-semibold">Profil</p>
          <div className="lg:flex lg:justify-between mt-4">
            <p className="text-[14px]">Urus Profil Anda</p>

            <button
              className={`${
                userDataEdit && "text-[#C1272D]"
              } text-[14px] cursor-pointer mt-3`}
              type="submit"
              onClick={() => {
                if (userDataEdit) {
                  handleProfileUpdate();
                } else {
                  setUserDataEdit(true);
                }
              }}
            >
              {userDataEdit ? "Hantar" : "Kemaskini"}
            </button>
          </div>
          <hr className="mt-2" />
        </div>
        {/* ================= Upload start ==================== */}

        <div className="items-center rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Muat naik gambar anda</h1>

          <h4 className=" text-black">Gambar Selfie</h4>
          <div className="flex items-center">
            <div className="relative mr-8">
              <img
                src={`${SERVER_URL}/${profileData?.userData?.image}`}
                alt="Profil"
                // className="mt-4 py-10 px-6 bg-[#00ADB9] text-white rounded-full"
                className="mt-4 bg-[#00ADB9] text-white rounded-full object-cover w-32 h-32"
              />
            </div>

            <span>Atau</span>
            <div>
              <button
                onClick={handleButtonClick}
                className="mt-4 ml-6 py-2 px-6 bg-[#00ADB9] text-white font-semibold rounded-full hover:bg-blue-600 flex items-center"
              >
                 Muat Naik <span className="ml-2 text-xl">+</span>
              </button>
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                disabled={!userDataEdit}
              />
            </div>
          </div>
        </div>

        {/* ===================== Upload end =========== */}

        <div className="mt-4">
          <div className="mb-4">
            <label className="text-[12px] font-semibold">Nama</label>
            <TextInput
              value={profileData.userData?.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setProfile({
                  userData: { ...profileData.userData, name: e.target.value },
                  favoriteParticipants: profileData.favoriteParticipants,
                });
              }}
              disabled={!userDataEdit}
              required
            />
          </div>
          <div className="flex mb-4">
            <div className="lg:w-[60%] mr-[3%]">
              <label className="text-[12px] font-semibold">E-mel</label>
              <TextInput
                value={profileData.userData?.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProfile({
                    userData: {
                      ...profileData.userData,
                      email: e.target.value,
                    },
                    favoriteParticipants: profileData.favoriteParticipants,
                  });
                }}
                disabled
              />
            </div>
            <div className="w-[60%]">
              <label className="text-[12px] font-semibold">
                No. KP / Pasport
              </label>
              <TextInput
                value={profileData.userData?.icNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const inputValue = e.target.value;
                  if (/^\d{0,12}$/.test(inputValue)) {
                    setProfile({
                      userData: {
                        ...profileData.userData,
                        icNumber: e.target.value,
                      },
                      favoriteParticipants: profileData.favoriteParticipants,
                    });
                  }
                }}
                disabled
              />
            </div>
          </div>
          {/* =================== country start =============== */}

          <div className="flex">
            <div className="w-[49%]">
              <label
                className="block text-gray-700 text-xs mb-2"
                htmlFor="country"
              >
                Negara
              </label>
              <select
                id="country"
                className="text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none"
                value={profileData.userData?.country?.id}
                onChange={handleCountryChange}
                disabled={!userDataEdit}
              >
                <option value="">Sila Pilih</option>
                {countryList.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[49%] ml-2">
              <label
                className="block text-gray-700 text-xs mb-2"
                htmlFor="state"
              >
                Negeri
              </label>
              <select
                id="state"
                className="text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none"
                value={profileData.userData?.state?.id}
                onChange={handleStateChange}
                disabled={!userDataEdit}
              >
                <option value="">Sila Pilih</option>
                {stateList.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="">
            <label
              className="block text-gray-700 text-xs mb-2"
              htmlFor="region"
            >
              Daerah
            </label>
            <select
              id="region"
              className="text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none"
              value={profileData.userData?.region?.id}
              onChange={handleRegionChange}
              disabled={!userDataEdit}
            >
              <option value="">Sila Pilih</option>
              {regionList.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="font-semibold text-[12px]">Alamat</label>
            <div className="mb-2">
              <TextInput
                aria-label="line 1"
                value={profileData.userData?.address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProfile({
                    userData: {
                      ...profileData.userData,
                      address: e.target.value,
                    },
                    favoriteParticipants: profileData.favoriteParticipants,
                  });
                }}
                disabled={!userDataEdit}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-[33%] mr-[2%]">
              <label className="text-[12px] font-semibold">
                Nombor telefon
              </label>
              <TextInput
                value={profileData.userData?.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProfile({
                    userData: {
                      ...profileData.userData,
                      phone: e.target.value,
                    },
                    favoriteParticipants: profileData.favoriteParticipants,
                  });
                }}
                disabled={!userDataEdit}
              />
            </div>

            <div className="w-[33%] mr-[2%]">
              <label className="text-[12px] font-semibold">Nama Bank</label>
              <select
                value={profileData.userData?.bank_name}
                onChange={(e) => {
                  setProfile({
                    userData: {
                      ...profileData.userData,
                      bank_name: e.target.value,
                    },
                    favoriteParticipants: profileData.favoriteParticipants,
                  });
                }}
                disabled={!userDataEdit}
                className="text-sm disabled:opacity-50 disabled:pointer-events-none bg-[#F2F2F2] py-2.5 pr-2 pl-2.5 w-[95%] md:w-full h-[2.932rem] rounded-[0.438rem] border-none"
              >
                <option value="" disabled>
                Pilih bank
                </option>
                {banks.map((bank) => (
                  <option key={bank.code} value={bank.name}>
                    {bank.name}
                  </option>
                ))}
              </select>
              {/* <TextInput
                  value={profileData.userData?.bank_name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProfile({
                      userData: { ...profileData.userData, bank_name: e.target.value },
                      favoriteParticipants: profileData.favoriteParticipants,
                    });
                  }}
                  disabled={!userDataEdit}
                /> */}
            </div>

            <div className="w-[33%] ">
              <label className="text-[12px] font-semibold">
                Nombor Bank Akaun
              </label>
              <TextInput
                value={profileData.userData?.account_no}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProfile({
                    userData: {
                      ...profileData.userData,
                      account_no: e.target.value,
                    },
                    favoriteParticipants: profileData.favoriteParticipants,
                  });
                }}
                disabled={!userDataEdit}
              />
            </div>
          </div>
          {/* ========= country =========== */}

          {/* <div className="flex mb-4">
        <div className="w-[33%] mr-[2%] mb-4">
        <label className="text-[12px] font-semibold mb-1 block">Country</label>
        <select
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F2F2F2] text-sm text-[#808080]'
          style={{ fontSize: '0.875rem' }}
          value={profileData.userData?.country}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setProfile({
              userData: { ...profileData.userData, country: e.target.value },
              favoriteParticipants: profileData.favoriteParticipants,
            });
          }}
          disabled={!userDataEdit}
        >
          {countryCodes.map((country) => (
            <option key={country.code} value={country.code}>
              {country.label}
            </option>
          ))}
        </select>
      </div>

      <div className="w-[33%] mr-[2%] mb-4">
        <label className="text-[12px] font-semibold mb-1 block">Region</label>
        <select
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F2F2F2] text-sm text-[#808080]'
          style={{ fontSize: '0.875rem' }}
          value={profileData.userData?.region}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setProfile({
              userData: { ...profileData.userData, region: e.target.value },
              favoriteParticipants: profileData.favoriteParticipants,
            });
          }}
          disabled={!userDataEdit}
        >
          {regions.map((region) => (
            <option key={region.id} value={region.id}>
              {region.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-[33%] mb-4">
        <label className="text-[12px] font-semibold mb-1 block">State</label>
        <select
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F2F2F2] text-sm text-[#808080]'
          style={{ fontSize: '0.875rem' }}
          value={profileData.userData?.state}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setProfile({
              userData: { ...profileData.userData, state: e.target.value },
              favoriteParticipants: profileData.favoriteParticipants,
            });
          }}
          disabled={!userDataEdit}
        >
          {states.map((state) => (
            <option key={state.id} value={state.id}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
        </div> */}

          <div className="mt-8">
            <p className="text-[20px] font-semibold">Peserta </p>
            <div className="flex justify-between mt-4">
              <p className="text-[14px]">Urus profil anda</p>
              <div className="flex ">
                <button
                  onClick={handleAddParticipant}
                  className="bg-[#09B1CB] text-white py-1 px-1 lg:px-2 rounded-md mr-2 lg:mr-4"
                >
                  Tambah Peserta
                </button>
                <p
                  className={`${
                    favoriteParticipantEdit && "text-[#C1272D]"
                  } text-[14px] cursor-pointer`}
                  onClick={() => {
                    if (favoriteParticipantEdit) {
                      handleParticipantProfileUpdate();
                    } else {
                      setFavoriteParticipantEdit(true);
                    }
                  }}
                >
                  {" "}
                  <button
                    className="bg-[#09B1CB] text-white py-1 px-2 rounded-md mr-4"
                    type="submit"
                  >
                    {favoriteParticipantEdit ? "Hantar" : "Kemaskini"}
                  </button>
                </p>
              </div>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="mt-4">
            {profileData?.favoriteParticipants &&
              profileData?.favoriteParticipants?.length > 0 &&
              profileData?.favoriteParticipants?.map((participant, index) => {
                return (
                  <div className="flex mb-4" key={index}>
                    <div className="w-[50%] lg:w-[60%] mr-[3%]">
                      <label className="text-[12px] font-semibold">Nama</label>
                      <TextInput
                        value={participant?.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const profile = { ...profileData };
                          // @ts-ignore
                          profile.favoriteParticipants[index] = {
                            // @ts-ignore
                            id: participant.id,
                            name: e.target.value,
                            icNumber:
                              // @ts-ignore
                              profile.favoriteParticipants[index].icNumber,
                          };
                          setProfile(profile);
                        }}
                        disabled={!favoriteParticipantEdit}
                        required
                      />
                    </div>
                    <div className="w-[50%]">
                      <label className="text-[12px] font-semibold">
                        No. KP / Pasport
                      </label>
                      <TextInput
                        value={participant.icNumber}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          let newValue = e.target.value;
                          // Only allow numeric input and limit to 12 characters
                          newValue = newValue.replace(/\D/g, "").slice(0, 12);
                          const profile = { ...profileData };
                          // @ts-ignore
                          profile.favoriteParticipants[index] = {
                            // @ts-ignore
                            name: profile.favoriteParticipants[index].name,
                            // @ts-ignore
                            id: participant.id,
                            icNumber: newValue,
                          };
                          setProfile(profile);
                        }}
                        disabled={!favoriteParticipantEdit}
                      />
                    </div>

                    <Button
                      className="mt-8 ml-2 w-[1.563rem] h-[1.563rem] p-2 text-[#09B1CB] border-[#09B1CB] items-center hover:bg-transparent hover:text-[#09B1CB] border-[1px]"
                      variant="outline"
                      // @ts-ignore
                      onClick={() => handleDelete(participant.id, index)}
                    >
                      <span className="mb-[2px]">-</span>
                    </Button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
