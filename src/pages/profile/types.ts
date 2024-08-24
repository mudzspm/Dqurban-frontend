debugger;
interface Country {
    id: number;
    name: string;
    image: string;
  }
  
  interface State {
    id: number;
    name: string;
    country_id: number;
    enabled: boolean;
  }
  
  interface Region {
    id: number;
    name: string;
    state_id: number;
    enabled: boolean;
  }
export type userProfile = {
    userData?: {
        name: string,
        email: string,
        icNumber: string,
        address: string;
        phone: string,
        account_no: string,
        bank_name: string,
        image: string,
        uploadimage:string,
        country: Country,
        state: State,
        region: Region
    },
    favoriteParticipants?: Array<{
        name: string,
        icNumber: string
    }>
}
