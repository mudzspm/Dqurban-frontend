// export default ProfileForm;
import { TextInput, Select } from "flowbite-react";
// import { userProfile } from "../types.ts";
import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// @ts-ignore
// import { updateProfile } from "../../../context/actions/userActions.js";
import { AuthContext } from "../../../context/auth.tsx";
import { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { SERVER_URL } from "../../../constant/ServerUrl.ts";
// import { Button } from "../../../components/ui/button.tsx";

interface Organization {
  id: number;
  org_type: string;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
}



interface UserData {
  id: number;
  org_id: number;
  created_at: string;
  description: string;
  ic_number:string;
  name: string;
  updated_at: string;
  is_deleted: boolean;
  user_id: number;
  organization: Organization;
  UserOrganizationMembers: any[]; // Assuming this is an array of some type
}


const ProfileForm = () => {
  // const [userDataEdit, setUserDataEdit] = useState(false);
  // const [favoriteParticipantEdit, setFavoriteParticipantEdit] = useState(false);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [userId, setUserId] = useState<string>('');
  const [name, setName] = useState<string>("");
  const [selectedOrganization, setSelectedOrganization] = useState<string>("");
  // const [remarks, setRemarks] = useState<string>("");
  const [icnumber, seticnumber] = useState<string>("");
  const [userData, setUserData] = useState<UserData[]>([]);
  const [error, setError] = useState("");
  const [userAdded, setUserAdded] = useState(false);
  const token = useContext(AuthContext).token;

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}api/organization`);
        const filteredOrganizations = response.data.data.filter(
          (org: Organization) => !org.is_deleted
        );
        setOrganizations(filteredOrganizations);
        console.log(organizations);
      } catch (error:any) {
        toast.error("Error fetching organizations:", error);
      }
    };

    fetchOrganizations();
  }, []);

  useEffect(() => {
   

    fetchData();
  },[]);
  const fetchData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `${SERVER_URL}api/organization/user`,
        config
      );
      setUserData(response.data.data);
    } catch (error :any) {
      toast.error("Error fetching user data:", error);
      setError("Failed to fetch user data. Please try again later.");
    }
  };
  const handleOrganizationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log(event.target.value);
    setSelectedOrganization(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setName(event.target.value);
  };
  // const handleRemarksChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setRemarks(event.target.value);
  // };
  const handleicnumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= 14) {
      seticnumber(inputValue);
    }
  };

  const handleAddOrganizationUser = async () => {
    if (!name) {
      toast.error("Please enter name.");
      return;
    }
    if (!selectedOrganization) {
      toast.error("Please select organization type.");
      return;
    }
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const data = {
        org_id: selectedOrganization,
        name: name,
        // description: remarks,
        ic_number:icnumber
      };

      let response;
    if (userId) {
      // If userId exists, it means we are updating an existing user
      response = await axios.put(
        `${SERVER_URL}api/organization/user/${userId}`,
        data,
        config
      );
    } else {
      // If userId doesn't exist, it means we are adding a new user
      response = await axios.post(
        `${SERVER_URL}api/organization/user`,
        data,
        config
      );
    }
      toast.success("Organization user saved:", response.data);    
      setUserAdded(!userAdded);  
      setName('');
      setSelectedOrganization('');
      // setRemarks('');
      setUserId('');
      seticnumber('');
      fetchData();
      // Clear input fields or do any additional actions upon successful addition
    } catch (error :any) {
      toast.error("Error adding organization user:", error);
    }
  };

  const handleDeleteUser = async (userId :any) => {
    try {
      const token = 'your_bearer_token_here'; // Replace 'your_bearer_token_here' with your actual bearer token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`${SERVER_URL}api/organization/user/${userId}`, config);
      setUserAdded(!userAdded); // Toggle userAdded to trigger refetching of user data
      toast.success("Organization user deleted successfully.");
      fetchData();
    } catch (error: any) {
      console.error('Error deleting organization user:', error);
      toast.error("Error deleting organization user:", error);
    }
  };

  const handleEditUser = (userId :any) => {
    const userToEdit = userData.find(user => user.id === userId);
    if (userToEdit) {
      setName(userToEdit.name);
      // @ts-ignore
      setSelectedOrganization(userToEdit.org_id);
      // setRemarks(userToEdit.description);
      // @ts-ignore
      setUserId(userToEdit.id);
      seticnumber(userToEdit.ic_number);
    } else {
      console.error('User not found for editing.');
      toast.error('User not found for editing.');
    }
  };
  
  return (
    <div className="bg-white lg:min-w-[850px] p-10 shadow-xl border border-solid rounded-sm  mb-2">
      <div className="bg-gradient-to-r from-[#00ADB9] to-[#5ed1da] h-[190px] flex justify-center flex-col gap-2 rounded-[12px] pl-4">
        <p className="text-[#fff] font-bold text-[36px]">Organisasi</p>
        <p className="text-[#fff] text-[14px]">
        Kemas kini organisasi
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mt-8">
          <p className="text-[20px] font-semibold">Organisasi</p>
          <div className="flex justify-between mt-4">
            <p className="text-[14px]">Urus Organisasi Anda</p>

            <button
              className={`${"text-[#C1272D]"} text-[14px] cursor-pointer`}
              type="submit"
              onClick={handleAddOrganizationUser}
            >
              Hantar
            </button>
          </div>
          <hr className="mt-2" />
        </div>

        <div className="mt-4">
          <div className="flex">
            <div className="w-[50%] mr-[3%] mb-4">
              <label className="text-[12px] font-semibold">Nama</label>
              
              <TextInput value={name}
              // @ts-ignore
               onChange={handleNameChange} required />
            </div>
            <div className="w-[50%] mr-[3%]">
              <label className="text-[12px] font-semibold">
              Jenis Organisasi
              </label>
              <Select
                value={selectedOrganization}
                onChange={handleOrganizationChange}
              >
                <option value="">Select Organization</option>
                {organizations.map((org: Organization) => (
                  <option key={org.id} value={org.id}>
                    {org.org_type}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          {/* <div className="flex mb-4">
            <div className="w-[50%] mr-[3%]">
              <label className="text-[12px] font-semibold">Kenyataan</label>
              <TextInput value={remarks} onChange={handleRemarksChange} />
            </div>
          </div> */}
          <div className="flex mb-4">
            <div className="w-[50%] mr-[3%]">
              <label className="text-[12px] font-semibold">No. KP / Pasport</label>
              <TextInput value={icnumber} 
              // @ts-ignore
              onChange={handleicnumberChange} />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[20px] font-semibold">Senarai Organisasi Kegemaran</p>
            <div className="flex justify-between mt-4">
              {/* <p className="text-[14px]">Urus profil anda</p> */}
              <div className="flex items-baseline"></div>
            </div>
            <hr className="mt-2" />
          </div>
        </div>
      </form>

      <div className="mt-4 overflow-x-auto lg:overflow-visible">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Nama</th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kenyataan</th> */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. KP / Pasport</th>
                {/* <th>Organization ID</th> */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">nama organisasi</th>
                {/* <th>Created At</th>
                <th>Updated At</th> */}
                {/* <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">tindakan</th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userData.map((user, index) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.ic_number}</td>
                  {/* <td className="px-6 py-4 whitespace-nowrap">{user.description}</td> */}
                  {/* <td>{user.org_id}</td> */}                 
                  <td className="px-6 py-4 whitespace-nowrap">{user.organization.org_type}</td>
                  {/* <td>{user.created_at}</td>
                  <td>{user.updated_at}</td> */}
                  <td className="text-center">
                    <button className="cursor-pointer text-indigo-600 hover:text-indigo-900" onClick={() => handleEditUser(user.id)}                    >
                    Kemaskini
                    </button>
                    <br></br>
                    <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900">padam</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
